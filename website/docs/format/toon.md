---
title: TOON
description: Token-efficient format for LLMs
tags: [Format, TOON, JSON, CSV, YAML, LLM, Serialization]
---

# TOON (Token-Oriented Object Notation)

TOON is a compact, human-readable serialization format designed for Large Language Model (LLM) contexts. It targets 30–60% token reduction versus JSON for uniform tabular data, while staying deterministic, easy to read, and compatible with JSON’s data model.

- Specification: https://github.com/toon-format/spec/blob/main/SPEC.md
- Reference implementation: https://github.com/toon-format/toon
- Use cases: LLM prompts, RAG pipelines, agent protocols, configuration, AI data interchange

## Why TOON?

- Token efficiency directly reduces cost and expands context capacity in LLM apps
- Deterministic encoding and explicit array lengths improve validation and safety
- Human-readable, indentation-based structure with minimal quoting
- Works naturally with tabular data while preserving JSON compatibility

## Data Model

TOON models the same types as JSON:

- Primitives: string, number, boolean, null
- Objects: mapping from string keys to values
- Arrays: ordered sequences of values

Numbers are normalized by encoders to non-exponential decimal form (e.g., `1e6 -> 1000000`; `-0 -> 0`). Decoders accept decimal and exponent forms but preserve round-trip fidelity.

## Core Syntax at a Glance

### Objects

```toon title="TOON"
id: 123
name: Ada
active: true
```

```toon title="TOON"
user:
  id: 123
  name: Ada
```

Rules:

- `key: value` for primitives with a single space after colon
- `key:` alone opens a nested object; nested fields are indented by one level

### Arrays

Primitive arrays are inline with explicit lengths:

```toon title="TOON"
tags[3]: admin,ops,dev
scores[4]: 95,87,92,88
```

Arrays of uniform objects can use a compact tabular form:

```toon title="TOON"
products[3]{sku,name,price}:
  A001,Widget,9.99
  B002,Gadget,14.50
  C003,Tool,7.25
```

Mixed/non-uniform arrays use list items with hyphens:

```toon title="TOON"
items[3]:
  - 42
  - text value
  - id: 1
    name: nested object
```

### Delimiters

Active delimiter can be comma (default), tab, or pipe; it is declared in the header and applies to inline arrays and tabular rows within that scope.

```toon title="TOON"
items[2\t]{sku\tname\tprice}:
  A1\tWidget, Inc.\t9.99
  B2\tGadget Co.\t14.5
```

```toon title="TOON"
tags[3|]: reading|gaming,fun|coding
```

### Quoting Rules (Encoder)

Quote string values when they are empty, have leading/trailing whitespace, look numeric, equal `true/false/null`, contain colon/quote/backslash/brackets/braces/control characters, contain the relevant delimiter (active inside array scope, document delimiter otherwise), or equal/start with `-`.

Keys may be unquoted only if they match `^[A-Za-z_][\w.]*$`; otherwise they must be quoted (including in array headers):

```toon title="TOON"
"my-key"[3]: 1,2,3
"x-items"[2]{id,name}:
  1,Ada
  2,Bob
```

## Strictness, Indentation, and Validation

- UTF-8 with LF line endings
- Consistent spaces for indentation (default 2); tabs are not allowed for indentation
- Strict mode (default) enforces:
  - Array lengths and tabular row widths match declarations
  - Valid escapes only in quoted strings: `\\`, `\"`, `\n`, `\r`, `\t`
  - Missing colons, indentation errors, delimiter mismatches
  - No blank lines inside arrays/tabular rows

These checks help detect truncation, malformed tokens, or injected rows.

## Root Forms

- Root array: if the first non-empty top-level line is a valid header (must end with `:`)
- Root primitive: exactly one non-empty line that is neither header nor key-value
- Otherwise: root object

## Interoperability

### JSON

TOON encodes JSON-compatible structures deterministically and round-trips safely. Example conversion:

```json title="JSON"
{
  "users": [
    { "id": 1, "name": "Alice", "active": true },
    { "id": 2, "name": "Bob", "active": false }
  ],
  "count": 2
}
```

```toon title="TOON"
users[2]{id,name,active}:
  1,Alice,true
  2,Bob,false
count: 2
```

### CSV

TOON’s tabular mode generalizes CSV with:

- Explicit array length and field names in the header
- Support for nested structures
- Type-aware primitives and configurable delimiters

### YAML

Shares indentation and `- ` list markers but differs in determinism, explicit array headers/lengths, and the absence of comments in TOON.

## Examples and Edge Cases

```toon title="TOON"
pairs[2]:
  - [2]: 1,2
  - [2]: 3,4
```

```toon title="TOON"
links[2]{id,url}:
  1,"http://a:b"
  2,"https://example.com?q=a:b"
```

```toon title="TOON"
root:
  level1:
    level2:
      level3:
        items[2]{id,val}:
          1,a
          2,b
```

```toon title="TOON"
message: Hello 世界 👋
tags[3]: 🎉,🎊,🎈
```

## When to Use TOON

Use TOON when token efficiency and readability matter:

- LLM prompts and agent communication
- RAG pipelines and intermediate representations
- Compact, validated tabular structures
- Human-reviewed configuration in AI contexts

Prefer JSON when maximal ecosystem compatibility is required and token costs are not a concern.

## Further Reading

- Python implementation: https://github.com/toon-format/toon-python
