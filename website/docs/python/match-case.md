---
description: Pattern Matching with “match case” in Python
tags: [pattern matching, match case, python, coding tips, data science]
---

# Pattern matching

I'm thrilled to share with you the power of pattern matching in Python. In this blog post, we'll dive into the world of match case statements, explore their syntax, and uncover practical use cases. By the end of this journey, you'll be able to wield pattern matching with finesse, elegantly solving problems and creating robust Python code.

Let's get started! 🚀

## Introduction

In this section, we'll embark on a journey into the realm of pattern matching. We're about to unravel the magic behind this elegant feature.

### What Is Pattern Matching?

At its core, pattern matching is like a skilled detective who examines evidence and deduces the truth. In Python, it's a way to match patterns within data structures and execute specific code blocks based on those patterns.

### Why Should You Care?

Great question! Imagine you're analyzing a dataset with various types of animals. You want to categorize them based on their characteristics: mammals, reptiles, or birds. Instead of writing a series of if-elif-else statements, pattern matching allows you to express this elegantly. It's like having a Swiss Army knife for your code!

### How Does It Differ from Traditional Conditionals?

Traditional conditionals serve their purpose, but pattern matching takes it up a notch. Here's how:

- **Readability:** Pattern matching makes your code cleaner and more readable. It's like replacing a tangled yarn ball with neatly organized skeins.
- **Expressiveness:** With match case, you can express complex conditions succinctly. It's like writing poetry instead of a technical manual.
- **Safety:** Pattern matching reduces the chances of bugs. It's like having a safety net when you're tightrope-walking across your codebase.

## Syntax and Basics of match case

Dear readers, welcome to Syntaxville! 🎩🔍 Here, we'll unravel the secrets of `match case` like detectives deciphering cryptic clues. So grab your magnifying glass (or just your favorite text editor) and let's dive in!

### The `match` Statement

Picture this: You're at a grand masquerade ball, and each guest wears a unique mask. The `match` statement is your invitation to the dance floor. It allows you to compare a value against a set of patterns and execute the corresponding code block. Elegant, isn't it?

```python title="Python"
def categorize_animal(animal: str):
    match animal:
        case "mammal":
            print("Warm-blooded and viviparous")
        case "reptile":
            print("Cold-blooded and scaly")
        case "bird":
            print("Feathered and egg-laying")
        case _:
            print("Unknown category")


categorize_animal("reptile")
```

```
Cold-blooded and scaly
```

In this snippet, we're categorizing animals based on their characteristics. If the animal matches any of the specified cases, the corresponding message dances its way to the console. And that _? It's our wildcard, catching any unanticipated guests.

### Patterns and Guards

Patterns define how we recognize our masked guests. You can use literals, variables, or even nested patterns. And guess what? Guards allow you to add conditions to your patterns.

```python title="Python"
def describe_temperature(temp: int):
    match temp:
        case t if t < 0:
            print("Brrr, it's freezing!")
        case t if 0 <= t < 20:
            print("Chilly, but manageable.")
        case t if t >= 20:
            print("Ah, the warmth of Pythonic sunbeams.")


describe_temperature(21)
```

```
Ah, the warmth of Pythonic sunbeams.
```

### Wildcard and Variable Bindings

Our wildcard `_` is the mysterious masked stranger who fits any role. It's perfect for catching unexpected input. But sometimes, we want to unmask and remember a specific value. Enter variable bindings!

```python title="Python"
def extract_first_and_last(items: list):
    match items:
        case [first, *middle, last]:
            print(f"First: {first}, Last: {last}")
        case _:
            print("Empty or too mysterious to unpack")


extract_first_and_last([2, 5, 3, 9])
```

```
First: 2, Last: 9
```

And there you have it! The basic steps of `match case`.

## Simple Examples: Matching on Constants

Let's dive into the shallow end of our Pythonic pool and explore simple examples of pattern matching. 🏊‍♂️

### Matching Integers, Strings, and Other Literals

Imagine you're hosting a tea party, and your guests arrive with different preferences. Some like their tea hot, others prefer it iced, and a few even want it with a twist of lemon. Let's use `match case` to cater to their tastes:

```python title="Python"
def serve_tea(tea_type: str):
    match tea_type:
        case "black":
            print("Steaming hot black tea, anyone?")
        case "green":
            print("Refreshing green tea, just the way you like it.")
        case "herbal":
            print("Herbal infusion for a calm afternoon.")
        case _:
            print("Unknown tea type. Surprise me!")


serve_tea("espresso")
```

```
Unknown tea type. Surprise me!
```

In this cozy snippet, we're matching on string literals. If someone requests "black," "green," or "herbal" tea, we serve it up. Otherwise, we keep our teapot ready for delightful surprises.

And what about integers? Let's channel our inner mathematician:

```python title="Python"
def classify_number(number: int):
    match number:
        case n if n < 0:
            print(f"{n} is negative. Brrr!")
        case 0:
            print("Zero-a serene void.")
        case n if n > 0:
            print(f"{n} is positive. Sunshine in numerical form.")


classify_number(100)
```

```
100 is positive. Sunshine in numerical form.
```

Here, we're categorizing integers based on their sign. Negative numbers get a chilly reception, zero enjoys its solitude, and positive numbers bask in the Pythonic sunbeams.

### Handling Default Cases

Our wildcard `_` is the ultimate party crasher. When no specific match occurs, it gracefully steps in. It's like the friend who dances to any tune:

```python title="Python"
def describe_season(season: str):
    match season:
        case "spring":
            print("Blossoms and chirping birds.")
        case "summer":
            print("Sunscreen, ice cream, and beach vibes.")
        case "autumn":
            print("Golden leaves, pumpkin spice, and cozy sweaters.")
        case "winter":
            print("Snowflakes, hot cocoa, and frosty mornings.")
        case _:
            print("Unknown season. Maybe it's 'Sprinter' or 'Autummer'!")


describe_season("leaves")
```

```
Unknown season. Maybe it's 'Sprinter' or 'Autummer'!
```

So, my fellow revelers, embrace the simplicity of matching on constants. Whether it's tea preferences, numerical musings, or seasonal whims, match case has your back.

## Structural Pattern Matching

Here, we'll go through sequences and unravel nested patterns and dictionaries.

### Unpacking Sequences: Lists, Tuples, and Strings

Imagine a treasure chest filled with jewels--each gem wrapped in layers of velvet. Our task? Unwrap them gracefully. In Python, sequences like lists, tuples, and strings are our velvet layers. Let's reveal their hidden treasures:

```python title="Python"
def unpack_sequence(sequence: list):
    match sequence:
        case [first, second, *rest]:
            print(f"First: {first}, Second: {second}, Rest: {rest}")
        case _:
            print("Empty or too mysterious to unpack")


unpack_sequence([1, 2, 3, 4, 5])
```

```
First: 1, Second: 2, Rest: [3, 4, 5]
```

In this snippet, we're unboxing a list. The `*rest` captures all remaining elements.

### Nested Patterns: The Russian Dolls of Code

Picture a set of Russian nesting dolls--each doll containing another. Nested patterns work similarly. They let us peek inside structures within structures. Behold:

```python title="Python"
def extract_nested_data(data: dict):
    match data:
        case {"user": {"name": name, "age": age}, "location": location}:
            print(f"User: {name}, Age: {age}, Location: {location}")
        case _:
            print("Data too cryptic to decipher")


extract_nested_data(
    {"user": {"name": "Alice", "age": 30}, "location": "Wonderland"}
)
```

```
User: Alice, Age: 30, Location: Wonderland
```

Here, we're unmasking a dictionary within a dictionary. If it fits the pattern, we reveal the user's name, age, and location. Otherwise, we keep our detective hats on.

### Extracting Values from Dictionaries

Dictionaries are like enchanted scrolls--you whisper a key, and they reveal their secrets. Let's chant the incantation:

```python title="Python"
def reveal_spell(spellbook: dict):
    match spellbook:
        case {"fireball": damage, "heal": healing}:
            print(
                f"Fireball inflicts {damage} damage. "
                f"Healing restores {healing}."
            )
        case _:
            print("Spellbook written in an ancient dialect")


reveal_spell({"fireball": 50, "heal": 30})
```

```
Fireball inflicts 50 damage. Healing restores 30.
```

In this snippet, we're extracting values based on keys. Fireball damage? Check. Healing potency? Check. And that `_`? Our fallback spell--works even when the runes are indecipherable.

## Advanced Techniques

Bravo, dear readers! You've mastered the basic steps of `match case`. In this section, we'll explore advanced techniques that will make your Pythonic journey truly mesmerizing. Let's raise the curtain!

### Using Custom Classes and Objects

Picture a grand ballroom where each dancer wears a unique mask. Some are elegant swans, others mischievous jesters. Custom classes and objects are our masked guests:

```python title="Python"
from dataclasses import dataclass


@dataclass
class Dancer:
    name: str
    style: str


def introduce_dancer(dancer: Dancer):
    match dancer:
        case Dancer("Odette", "ballet"):
            print(f"{dancer.name} glides gracefully in {dancer.style} attire.")
        case Dancer("Puck", "comedy"):
            print(f"{dancer.name} twirls, jigs, and keeps us laughing.")
        case _:
            print(f"{dancer.name} joins the dance-an enigma in {dancer.style}.")


introduce_dancer(Dancer("Odette", "ballet"))
```

```
Odette glides gracefully in ballet attire.
```

Here, our `Dancer` class wears different masks--ballet or comedy. If the dancer matches a known style, we introduce them accordingly. Otherwise, they remain intriguing.

### Combining Patterns with Logical Operators

Imagine a waltz where dancers swirl in intricate patterns. Logical operators allow us to choreograph complex moves. Let's blend patterns like a master conductor:

```python title="Python"
def analyze_weather(temperature: int, precipitation: float):
    match (temperature, precipitation):
        case (t, p) if t > 30 and p < 0.2:
            print("Sunny and warm-perfect picnic weather!")
        case (t, p) if t < 10 or p > 0.5:
            print("Bundle up! It's chilly or rainy.")
        case _:
            print("Weather forecast: Unpredictable dance of elements.")


analyze_weather(25, 0.3)
```

```
Weather forecast: Unpredictable dance of elements.
```

In this snippet, we're combining temperature and precipitation patterns. If it's warm and dry, we plan a picnic. If it's cold or rainy, we reach for our umbrellas. And that `_`? Our fallback forecast—always mysterious.

### Handling Complex Scenarios

Complex scenarios demand finesse. Let's tackle one:

```python title="Python"
def process_order(order: dict):
    match order:
        case {
            "items": ["coffee", "croissant"], "total": amount
        } if amount < 20:
            print("Small order-grab a seat by the window.")
        case {
            "items": ["breakfast", *extras], "total": amount
        } if len(extras) >= 2:
            print("Hearty breakfast with extras-fuel for the day!")
        case _:
            print("Order complexity: Off the charts!")


process_order({"items": ["breakfast", "juice", "pancakes"], "total": 25})
```

```
Hearty breakfast with extras-fuel for the day!
```

Here, we're handling café orders. If it's a simple coffee-croissant combo, we find a cozy spot. If it's a loaded breakfast with extras, we prepare for a feast. And that `_`? Our catch-all barista--ready for surprises.

## Best Practices and Tips

### Readability and Maintainability

In the waltz of pattern matching, readability and maintainability are your partners. Here's how to keep them in step:

- **Clear Patterns:** Craft patterns that resonate with clarity. Avoid overly complex expressions — think of them as tangled shoelaces on the dance floor. Keep it simple, and your fellow coders will follow your lead.
- **Comments and Documentation:** Add comments and docstrings. Explain the purpose of each pattern, especially if it's a unique move. Future coders (including your future self) will appreciate the guidance.
- **Consistent Style:** Imagine a ballroom where some dancers waltz, others breakdance, and a few moonwalk. Consistency matters! Stick to a consistent style — whether it's indentation, naming conventions, or spacing. Your code will flow harmoniously.

### Performance Considerations

As you pirouette through patterns, keep an eye on performance. Here's your backstage checklist:

- **Pattern Order Matters:** Patterns are like choreography steps. Arrange them wisely. Put the most specific ones first. Python evaluates patterns sequentially, so avoid unnecessary twirls before the grand finale.
- **Avoid Excessive Nesting:** Nested patterns are like intricate lifts. Use them judiciously. Deeply nested structures can slow down your dance. Opt for elegance over complexity.
- **Benchmark and Optimize:** Profile your code. Use tools like `timeit` or `cProfile`. Optimize where needed—trim excess frills without losing grace.

### Debugging and Troubleshooting

Even the most seasoned dancers trip occasionally. When your pattern matching routine falters, here's your emergency kit:

- **Print Debug Statements:** Like leaving breadcrumbs on the dance floor, sprinkle `print` statements. Inspect values, check if patterns match, and unravel mysteries.
- **Test with Edge Cases:** Imagine dancing blindfolded. Test your patterns with edge cases — empty lists, unexpected inputs, or wild variations. Ensure your routine adapts gracefully.

And there you have it! As you glide through patterns, remember: readability, performance, and troubleshooting are your partners in this enchanting journey.

### The Grand Finale

As the orchestra swells, remember: pattern matching is your partner. Whether you're waltzing with custom classes, blending patterns, or navigating complexity, let your code flow like a captivating dance.

And with that, our Pythonic journey concludes. 🎶 Keep practicing and keep innovating.

Until next time! Encore!
