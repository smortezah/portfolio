---
description: Argument parsing with `argparse` in Python
tags: [argparse, python, command-line, data science, tutorial, coding tips]
---

# `argparse` library

## 1. Introduction

### What is `argparse`?

`argparse` is a Python standard library module that provides a convenient way to parse command-line arguments. It allows you to define the arguments your script expects, handle their values, and generate user-friendly help messages. With `argparse`, you can create robust and user-friendly command-line interfaces for your Python programs.

### Why use `argparse` over `sys.argv`?

Before `argparse`, developers often relied on `sys.argv` (the list of command-line arguments passed to the script) to handle command-line input. However, `sys.argv` has limitations:

1. **Manual Argument Parsing:** With `sys.argv`, you need to manually parse and validate the arguments, which can be error-prone and tedious.
2. **Lack of Flexibility:** `sys.argv` doesn't handle complex argument structures (e.g., optional arguments, flags, subcommands) well.
3. **No Built-in Help Messages:** You have to write custom help messages and usage instructions.

`argparse` addresses these issues by providing a higher-level API for argument parsing. It offers features like automatic type conversion, default values, and built-in help generation.

In the next sections, we'll explore how to create argument parsers, define different types of arguments, and utilize advanced techniques to build powerful command-line interfaces using `argparse`. Let's get started!

## 2. Creating Your First Argument Parser

### Setting up `argparse`

To get started, you'll need to import the `argparse` module in your Python script:

```python title="Python"
import argparse
```

### Defining Positional Arguments

Positional arguments are required arguments that follow a specific order. You can define them using the `add_argument` method:

```python title="Python"
parser = argparse.ArgumentParser(
    prog="awesome", description="My Awesome CLI Tool"
)
parser.add_argument("input_file", help="Path to the input file")
parser.add_argument("output_file", help="Path to the output file")

args = parser.parse_args(["input.txt", "output.md"])
print("$ python my_script.py input.txt output.md\n")
print("input_file: ", args.input_file)
print("output_file:", args.output_file)
```

```
$ python my_script.py input.txt output.md

input_file:  input.txt
output_file: output.md
```

In this example, the user must provide both an input file and an output file when running your script.

### Adding Optional Arguments

Optional arguments are arguments that the user can provide, but they are not required. You can define them using the `--` prefix:

```python title="Python"
parser = argparse.ArgumentParser(
    prog="awesome",
    description="My Awesome CLI Tool.",
    epilog="Example: $ python awesome.py --verbose --format=csv",
)
parser.add_argument(
    "--verbose", action="store_true", help="Enable verbose mode"
)
parser.add_argument(
    "--format", choices=["json", "csv"], default="json", help="Output format"
)

parser.print_help()
```

```
usage: awesome [-h] [--verbose] [--format {json,csv}]

My Awesome CLI Tool.

options:
  -h, --help           show this help message and exit
  --verbose            Enable verbose mode
  --format {json,csv}  Output format

Example: $ python awesome.py --verbose --format=csv
```

Here, the user can enable verbose mode with `--verbose` and choose the output format with `--format=json` or `--format csv`.

### Handling Default Values

You can set default values for optional arguments using the `default` parameter:

```python title="Python"
parser.add_argument(
    "--threshold", type=float, default=0.5, help="Threshold value"
)
```

In this case, if the user doesn't provide a threshold value, it defaults to 0.5.

Remember to call `parser.parse_args()` to parse the command-line arguments:

```python title="Python"
args = parser.parse_args([])
print(args.threshold)
```

```
0.5
```

That's a quick overview of creating your first argument parser using `argparse`. In the next section, we'll explore more advanced techniques, including subparsers and custom argument types. Stay tuned!

## 3. Advanced Argument Parsing Techniques

### Subparsers

When your script has multiple subcommands (e.g., `git commit`, `git push`), you can use subparsers to organize your arguments. Here's how to set up subparsers:

```python title="Python"
# Create the main parser
parser = argparse.ArgumentParser(
    prog="awesome", description="My Awesome CLI Tool"
)

# Create subparsers
subparsers = parser.add_subparsers(title="Subcommands", dest="subcommand")

# Create a subparser for the "train" command
train_parser = subparsers.add_parser(
    "train",
    help="Train a machine learning model",
    epilog="Example: "
    "$ python awesome.py train --data=data.csv --model=model.pkl"
)
train_parser.add_argument("--data", help="Path to training data")
train_parser.add_argument("--model", help="Path to save the trained model")

# Create a subparser for the "predict" command
predict_parser = subparsers.add_parser(
    "predict",
    help="Make predictions using a trained model",
    epilog="Example: "
    "$ python awesome.py predict --input=data.csv --output=pred.csv"
)
predict_parser.add_argument("--input", help="Path to input data")
predict_parser.add_argument("--output", help="Path to save predictions")

print(":::: Main parser help ::::::::::::::::::")
parser.print_help()

print("\n\n:::: Train parser help ::::::::::::::::::")
train_parser.print_help()

print("\n\n:::: Predict parser help ::::::::::::::::::")
predict_parser.print_help()
```

```
:::: Main parser help ::::::::::::::::::
usage: awesome [-h] {train,predict} ...

My Awesome CLI Tool

options:
  -h, --help       show this help message and exit

Subcommands:
  {train,predict}
    train          Train a machine learning model
    predict        Make predictions using a trained model


:::: Train parser help ::::::::::::::::::
usage: awesome train [-h] [--data DATA] [--model MODEL]

options:
  -h, --help     show this help message and exit
  --data DATA    Path to training data
  --model MODEL  Path to save the trained model

Example: $ python awesome.py train --data=data.csv --model=model.pkl


:::: Predict parser help ::::::::::::::::::
usage: awesome predict [-h] [--input INPUT] [--output OUTPUT]

options:
  -h, --help       show this help message and exit
  --input INPUT    Path to input data
  --output OUTPUT  Path to save predictions

Example: $ python awesome.py predict --input=data.csv --output=pred.csv
```

In this example, users can run your script with either `train` or `predict` subcommands. Each subcommand has its own set of arguments.

### Custom Argument Types

Sometimes, you need to validate input based on custom criteria. You can create custom argument types by defining a function that converts a string argument to the desired type:

```python title="Python"
def valid_positive_int(value):
    try:
        int_value = int(value)
        if int_value <= 0:
            print(f"Error: {value} is not a positive integer")
        return int_value
    except ValueError:
        print(f"Error: {value} is not a valid integer")


parser = argparse.ArgumentParser(prog="awesome")
parser.add_argument("--epochs", type=valid_positive_int, default=10)

print("$ python awesome.py --epochs=-2\n")
args = parser.parse_args(["--epochs=-2"])
```

```
$ python awesome.py --epochs=-2

Error: -2 is not a positive integer
```

Here, the `valid_positive_int` function ensures that the provided value is a positive integer.

### Argument Groups for Organization

To keep your argument definitions organized, you can group related arguments together:

```python title="Python"
parser = argparse.ArgumentParser(
    prog="awesome",
    epilog="Example: $ python awesome.py --hidden_units=64 --epochs=20",
)

group = parser.add_argument_group("Model Configuration")
group.add_argument(
    "--hidden_units", type=int, default=128, help="Number of hidden units"
)
group.add_argument(
    "--learning_rate", type=float, default=0.001, help="Learning rate"
)

group = parser.add_argument_group("Training Configuration")
group.add_argument("--batch_size", type=int, default=32, help="Batch size")
group.add_argument("--epochs", type=int, default=10, help="Number of epochs")

parser.print_help()
```

```
usage: awesome [-h] [--hidden_units HIDDEN_UNITS]
               [--learning_rate LEARNING_RATE] [--batch_size BATCH_SIZE]
               [--epochs EPOCHS]

options:
  -h, --help            show this help message and exit

Model Configuration:
  --hidden_units HIDDEN_UNITS
                        Number of hidden units
  --learning_rate LEARNING_RATE
                        Learning rate

Training Configuration:
  --batch_size BATCH_SIZE
                        Batch size
  --epochs EPOCHS       Number of epochs

Example: $ python awesome.py --hidden_units=64 --epochs=20
```

This way, you can easily manage and document related arguments.

### Handling Mutually Exclusive Arguments

If certain arguments are mutually exclusive (e.g., `--train` and `--predict` cannot be used together), you can enforce this constraint:

```python title="Python"
parser = argparse.ArgumentParser(prog="awesome")
exclusive_group = parser.add_mutually_exclusive_group()
exclusive_group.add_argument(
    "--train", action="store_true", help="Train the model"
)
exclusive_group.add_argument(
    "--predict", action="store_true", help="Make predictions"
)

try:
    # $ python awesome.py --train --predict
    parser.parse_args(["--train", "--predict"])
except SystemExit:
    pass
```

```
usage: awesome [-h] [--train | --predict]
awesome: error: argument --predict: not allowed with argument --train
```

By using these advanced techniques, you'll create robust and user-friendly command-line interfaces that enhance the usability of your Python scripts. In the next section, we'll explore best practices and tips for maximizing the effectiveness of `argparse`. Stay tuned!

## 4. Best Practices and Tips

Having gone through the fundamentals and delved into some advanced strategies, it's time to focus on best practices and tips to fully leverage `argparse` in your Python scripts.

### Descriptive Help Messages

When defining arguments, provide clear and concise help messages. These messages serve as documentation for users who run your script. A well-written help message can make your CLI tool more user-friendly:

```python title="Python"
parser = argparse.ArgumentParser(prog="awesome")
parser.add_argument("--input", help="Path to input data (required)")
parser.add_argument("--output", help="Path to save results (optional)")

parser.print_help()
```

```
usage: awesome [-h] [--input INPUT] [--output OUTPUT]

options:
  -h, --help       show this help message and exit
  --input INPUT    Path to input data (required)
  --output OUTPUT  Path to save results (optional)
```

### Validating Input with Choices

Use the `choices` parameter to restrict input values to a predefined set. For example:

```python title="Python"
parser = argparse.ArgumentParser(prog="awesome")
parser.add_argument(
    "--format", choices=["json", "csv"], default="json", help="Output format"
)

try:
    # $ python awesome.py --format=tsv
    parser.parse_args(["--format=tsv"])
except SystemExit:
    pass
```

```
usage: awesome [-h] [--format {json,csv}]
awesome: error: argument --format: invalid choice: 'tsv' (choose from 'json', 'csv')
```

This ensures that users can only choose between "json" and "csv" for the output format.

### Using `metavar` for User-Friendly Argument Names

The `metavar` parameter allows you to specify a custom name for an argument in the help message. Use it to make your arguments more intuitive:

```python title="Python"
parser = argparse.ArgumentParser(prog="awesome")
parser.add_argument("--input", metavar="data_file", help="Path to input data")

parser.print_help()
```

```
usage: awesome [-h] [--input data_file]

options:
  -h, --help         show this help message and exit
  --input data_file  Path to input data
```

Now the help message will display "data_file" instead of "INPUT" as the argument name.

### Handling File Input/Output

When dealing with file paths, consider using the `argparse.FileType` type. It automatically opens the file for reading or writing:

```python title="Python"
parser = argparse.ArgumentParser(prog="awesome")
parser.add_argument("--input", type=argparse.FileType("r"), help="Input file")
parser.add_argument(
    "--output", type=argparse.FileType("w"), help="Output file"
)

parser.print_help()

args = parser.parse_args(["--output=output.txt"])
args.output.write("Hello, World!\n")
```

```
usage: awesome [-h] [--input INPUT] [--output OUTPUT]

options:
  -h, --help       show this help message and exit
  --input INPUT    Input file
  --output OUTPUT  Output file
```

### Documenting Your CLI Tool

Include a brief description of your CLI tool in the `description` parameter when creating the main parser:

```python title="Python"
parser = argparse.ArgumentParser(
    prog="awesome", description="My Awesome CLI Tool: Perform magic with data!"
)

parser.print_help()
```

```
usage: awesome [-h]

My Awesome CLI Tool: Perform magic with data!

options:
  -h, --help  show this help message and exit
```

By following these best practices, you'll create robust and user-friendly command-line interfaces using `argparse`. Remember to thoroughly test your CLI tool and provide helpful error messages for users.

Happy coding!
