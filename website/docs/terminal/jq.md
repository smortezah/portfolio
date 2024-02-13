---
description: JSON Manipulation with jq
tags: [jq, Terminal, CLI] #TODO
---

# jq

In this tutorial, we'll dive into the world of JSON manipulation using the powerful tool called "jq". This guide will equip you with the skills to elegantly slice, dice, and transform your JSON data. So, grab your favorite cup of ☕️, fire up your Python interpreter, and let's embark on this journey through the JSON jungle!

## Introduction

### What is jq?

**jq** is like a Swiss Army knife for JSON data. It's a lightweight, command-line utility that lets you slice, dice, and transform JSON with elegance and precision. Whether you're dealing with API responses, log files, or configuration files, jq is your trusty companion.

### Why should you care?

Imagine you have a massive JSON file, and you need to extract specific fields, filter out noise, or reshape the data. Doing this manually would be like untangling a spaghetti mess blindfolded. jq swoops in, untangles the mess, and hands you neatly organized data on a silver platter.

### Installation and setup

Before we dive into the juicy bits, let's get jq up and running. Fear not; it's as easy as brewing a cup of tea (or coffee, if that's your jam).

- **Install jq:**
  - On macOS: `brew install jq`
  - On Linux: `sudo apt-get install jq`
  - On Windows: Download the binary from the [official website](https://jqlang.github.io/jq/download/).
- **Verify installation:**
  - Open your terminal and type `jq --version`. If it responds with a version number, you're golden!

Now that we've got our tool sharpened, let's explore its basic features.

:::note
Throughout this tutorial, we save each JSON object in a file named "file.json".
:::

## Basic Queries

### Selecting fields

Let's say you have a JSON object representing a person:

```json title="JSON"
{
  "name": "Alice",
  "age": 30,
  "city": "Wonderland"
}
```

To extract just the name, you'd do:

```bash title="Shell"
echo '{"name": "Alice", "age": 30, "city": "Wonderland"}' | jq '.name'
```

```
"Alice"
```

### Filtering data

Suppose you have an array of books:

```json title="file.json"
[
  {
    "title": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams",
    "genre": "Science Fiction"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Romance"
  }
]
```

To filter out only the science fiction books:

```bash title="Shell"
cat file.json | jq '.[] | select(.genre == "Science Fiction")'
```

```
{
  "title": "The Hitchhiker's Guide to the Galaxy",
  "author": "Douglas Adams",
  "genre": "Science Fiction"
}
```

### Renaming keys

Sometimes, JSON keys need a makeover. Let's rename "city" to "wonderland_city":

```json title="file.json"
{
  "name": "Alice",
  "age": 30,
  "city": "Wonderland"
}
```

```bash title="Shell"
cat file.json | jq '. | {name, age, wonderland_city: .city}'
```

```
{
  "name": "Alice",
  "age": 30,
  "wonderland_city": "Wonderland"
}
```

### Extracting arrays

When dealing with arrays, jq shines. Suppose you have a list of fruits, to get the second fruit:

```bash title="Shell"
echo '["apple", "banana", "cherry"]' | jq '.[1]'
```

```
"banana"
```

## Advanced Techniques

### Conditional logic

jq isn't just about selecting fields; it's also a wizard at conditional transformations. Imagine you have a JSON array of transactions:

```json title="file.json"
[
  {
    "id": 1,
    "amount": 100,
    "category": "Groceries"
  },
  {
    "id": 2,
    "amount": 50,
    "category": "Entertainment"
  },
  {
    "id": 3,
    "amount": 200,
    "category": "Travel"
  },
  {
    "id": 4,
    "amount": 20,
    "category": "Groceries"
  }
]
```

You want to calculate the total expense for each category. jq to the rescue:

```bash title="Shell"
cat file.json | jq 'group_by(.category) | map({category: .[0].category, total_amount: map(.amount) | add})'
```

```
[
  {
    "category": "Entertainment",
    "total_amount": 50
  },
  {
    "category": "Groceries",
    "total_amount": 120
  },
  {
    "category": "Travel",
    "total_amount": 200
  }
]
```

### Combining filters

Sometimes you need to filter based on multiple conditions. Let's say you have a JSON object representing employees:

```json title="file.json"
{
  "Alice": {
    "role": "Data Scientist",
    "experience": 3
  },
  "Bob": {
    "role": "Machine Learning Engineer",
    "experience": 5
  },
  "Charlie": {
    "role": "Researcher",
    "experience": 2
  }
}
```

To select employees with more than 4 years of experience:

```bash title="Shell"
cat file.json | jq 'to_entries | map(select(.value.experience > 4)) | from_entries'
```

```
{
  "Bob": {
    "role": "Machine Learning Engineer",
    "experience": 5
  }
}
```

### Aggregating data

Need to compute averages, sums, or other aggregates? jq has your back. Suppose you have a JSON array of sales:

```json title="file.json"
[
  {
    "product": "Widget A",
    "revenue": 100
  },
  {
    "product": "Widget B",
    "revenue": 150
  },
  {
    "product": "Widget A",
    "revenue": 120
  }
]
```

To calculate the total revenue per product:

```bash title="Shell"
cat file.json | jq 'group_by(.product) | map({product: .[0].product, total_revenue: map(.revenue) | add})'
```

```
[
  {
    "product": "Widget A",
    "total_revenue": 220
  },
  {
    "product": "Widget B",
    "total_revenue": 150
  }
]
```

### Custom functions

jq allows you to define custom functions for reusable transformations. Let's say you want to capitalize a string:

```bash title="Shell"
echo '"hello, world"' | jq 'def capitalize: . | ascii_upcase; capitalize'
```

```
"HELLO, WORLD"
```

## Practical Examples

### Parsing API responses

Imagine you're working with an API that returns a complex JSON structure. Let's say it's an endpoint that provides information about movies. You make a request, and the response looks like this:

```json title="file.json"
{
  "status": "success",
  "data": {
    "movies": [
      {
        "title": "Inception",
        "year": 2010,
        "director": "Christopher Nolan",
        "genres": ["Action", "Sci-Fi", "Thriller"]
      },
      {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "genres": ["Drama"]
      },
      {
        "title": "Pulp Fiction",
        "year": 1994,
        "director": "Quentin Tarantino",
        "genres": ["Crime", "Drama"]
      }
    ]
  }
}
```

You want to extract the titles of all the movies. With jq, it's a breeze:

```bash title="Shell"
cat file.json | jq '.data.movies[].title'
```

```
"Inception"
"The Shawshank Redemption"
"Pulp Fiction"
```

### Cleaning messy data

Data isn't always pristine. Sometimes you receive JSON files with inconsistent keys or missing values. Let's say you're dealing with a dataset of customer orders:

```json title="file.json"
[
  {
    "order_id": 123,
    "customer": "Alice",
    "total_amount": 100
  },
  {
    "order_id": 124,
    "customer_name": "Bob",
    "amount": 150
  },
  {
    "order_id": 125,
    "customer": "Charlie"
  }
]
```

To create a consistent structure where every order has a "customer" key:

```bash title="Shell"
cat file.json | jq 'map(if .customer_name then {customer: .customer_name} + del(.customer_name) else . end)'
```

```
[
  {
    "order_id": 123,
    "customer": "Alice",
    "total_amount": 100
  },
  {
    "customer": "Bob",
    "order_id": 124,
    "amount": 150
  },
  {
    "order_id": 125,
    "customer": "Charlie"
  }
]
```

### Creating custom reports

Suppose you're analyzing website traffic logs. Each log entry is a JSON object with information about the user, timestamp, and page visited:

```json title="file.json"
[
  {
    "user_id": 101,
    "timestamp": "2024-02-10T14:30:00Z",
    "page": "/home"
  },
  {
    "user_id": 102,
    "timestamp": "2024-02-10T15:00:00Z",
    "page": "/products"
  },
  {
    "user_id": 103,
    "timestamp": "2024-02-10T15:15:00Z",
    "page": "/products"
  },
  {
    "user_id": 101,
    "timestamp": "2024-02-10T15:30:00Z",
    "page": "/about"
  }
]
```

To create a report showing the total visits per page:

```bash title="Shell"
cat file.json | jq 'group_by(.page) | map({page: .[0].page, total_visits: length})'
```

```
[
  {
    "page": "/about",
    "total_visits": 1
  },
  {
    "page": "/home",
    "total_visits": 1
  },
  {
    "page": "/products",
    "total_visits": 2
  }
]
```

## Tips and Tricks

### Pipe operators

The pipe (`|`) is your secret sauce in jq. It allows you to chain operations seamlessly. Think of it as passing your JSON data through a series of filters, like a conveyor belt in a chocolate factory (minus the Oompa Loompas).

```bash title="Shell"
echo '[1, 2, 3, 4, 5]' | jq '.[] | . * 2'
```

```
2
4
6
8
10
```

### Compact printing

By default, jq produces pretty printed output. But sometimes you want your JSON to look compact. Fear not! Use the `-c` flag to get the compact output:

```bash title="Shell"
echo '{"name": "Alice", "age": 30, "city": "Wonderland"}' | jq -c
```

```
{"name":"Alice","age":30,"city":"Wonderland"}
```

### Error handling

When dealing with complex JSON structures, errors can sneak in like mischievous gremlins. jq provides a robust error-handling mechanism. For example, if you're extracting a non-existent key:

```bash title="Shell"
echo '{"name": "Alice", "age": 30}' | jq '.city'
```

```
null
```

No tantrums, no crashes—just a polite `null`.

### Performance optimization

If you're processing large JSON files, efficiency matters. jq is lightning-fast, but you can squeeze out even more speed by using the `-c` flag to produce compact output. Less fluff, more zoom!

```bash
$ cat big_data.json | jq -c '.[] | select(.category == "Science Fiction")'
```

Stay tuned for the grand finale in the next section! 🎉🚀

## Putting It All Together

### Real-world use cases

Now that you've mastered the art of jq, let's explore some practical scenarios where it can save the day:

- **Monitoring Server Logs**: Imagine you're responsible for maintaining a fleet of servers. Their logs are a treasure trove of information, but they're as messy as a teenager's room after a party. With jq, you can extract relevant details, filter out noise, and create concise summaries. Whether it's tracking failed login attempts or monitoring resource usage, jq is your trusty sidekick.

- **API Data Wrangling**: APIs are the lifeblood of modern applications. They spew out JSON like a confetti cannon at a celebration. But fear not! Armed with jq, you can transform raw API responses into elegant data structures. Whether you're building dashboards, analyzing trends, or feeding ML models, jq ensures your data is pristine and ready for action.

- **Data Pipelines**: In the world of data engineering, pipelines flow like rivers. jq fits snugly into your toolkit. Use it to preprocess data before loading it into databases, data lakes, or warehouses. Whether you're extracting fields, reshaping structures, or aggregating metrics, jq keeps your data flowing smoothly.

### Best practices

- **Keep It Simple**: jq is powerful, but don't overcomplicate things. Start with basic queries, understand the syntax, and gradually explore advanced features. Simplicity wins over complexity.

- **Test Incrementally**: When crafting complex jq expressions, build them incrementally. Test each step to ensure it behaves as expected. Think of it as assembling a LEGO castle—one brick at a time.

- **Read the Manual**: jq has a comprehensive manual (yes, wizards have manuals too). Type `man jq` in your terminal, and behold the wisdom. It's like Dumbledore's Pensieve, minus the memories.

### Resources for further exploration

1. [Official jq Documentation](https://stedolan.github.io/jq/manual/)
2. [jq Tutorial by Stephen Brennan](https://programminghistorian.org/en/lessons/json-and-jq)
3. [jq Playground](https://jqplay.org/)

Remember, JSON is your canvas, and jq is your brush. Go forth, manipulate, and conquer!
