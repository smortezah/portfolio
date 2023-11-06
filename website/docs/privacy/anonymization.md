---
description: Learn about data anonymization and implementing it
tags: [data anonymization, data privacy, encryption, perturbation, data science]
---

# Anonymization

## Introduction

**Data anonymization** is the process of protecting private or sensitive information by removing or encrypting identifiers that connect an individual to stored data. This includes personally identifiable information (PII), protected health information (PHI), and other data that can be used by third parties to identify a person. Data anonymization aims to preserve data subjects' privacy and confidentiality, while maintaining the integrity and usability of the data.

Data anonymization is important because it can help to:

1. Protect personal information and prevent privacy violations.
2. Reduce discrimination.
3. Protect against identity theft.
4. Prevent fraud.
5. Allow financial analysts to identify trends and patterns.
6. Maintain data integrity and prevent security breaches.
7. Ensure compliance with data protection regulations.
8. Protect trade secrets and intellectual property.
9. Create synthetic datasets for testing algorithms or research purposes.

By anonymizing data, organizations can comply with stringent data privacy laws that require the protection of personally identifiable information (PII) such as contact information, health records, or financial details. It can help companies keep PII private by masking sensitive attributes, even as they derive business value from it for customer support, analytic insights, test data, supplier outsourcing purposes, and more.

There are several types of data anonymization techniques that are commonly used. These include **randomization**, **generalization**, **masking**, **perturbation**, and **encryption**. Each technique has its own strengths and weaknesses, depending on the type of data being anonymized and the intended use case. The upcoming section will cover these techniques and provide examples of their implementation in Python.

## Types of Data Anonymization Techniques

There are several types of data anonymization techniques that are commonly used. The followings are some examples.

### Randomization

Randomization involves replacing sensitive data with random values. For example, a person's name might be replaced with a randomly generated string of characters. Here is an example of how to perform data anonymization in Python using the randomization technique:

```python title="Python"
import pandas as pd
import numpy as np

# Create a synthetic dataset
df = pd.DataFrame(
    {
        "Name": ["Alice", "Bob", "Charlie", "David", "Eve"],
        "Age": [25, 35, 45, 55, 65],
        "Salary": [50000, 60000, 70000, 80000, 90000],
        "Phone Number": [
            "555-1234",
            "555-2345",
            "555-3456",
            "555-4567",
            "555-5678",
        ],
    }
)


# Define a function to randomize column values
def randomize_values(col_values):
    col_values_list = list(col_values)  # convert string to list
    np.random.shuffle(col_values_list)
    return "".join(col_values_list)  # convert list back to string


# Apply the function to the desired column(s)
column_to_randomize = "Name"
df[column_to_randomize] = df[column_to_randomize].apply(randomize_values)

# Print the anonymized dataset
print(df)
```

```
      Name  Age  Salary Phone Number
0    Ailec   25   50000     555-1234
1      obB   35   60000     555-2345
2  aClireh   45   70000     555-3456
3    iadvD   55   80000     555-4567
4      veE   65   90000     555-5678
```

In this example, we create a synthetic dataset with columns for name, age, salary, and phone number. We then define a function to randomize the values in the name column using the `numpy` library’s `shuffle` method. Finally, we apply the function to the name column and print the anonymized dataset.

### Generalization

Generalization involves replacing specific values with more general ones to reduce the risk of identification. For example, a person's age might be generalized into age groups such as 20-30, 30-40, and so on. Here is an example:

```python title="Python"
import pandas as pd

# Create a synthetic dataset
df = pd.DataFrame(
    {
        "Name": ["Alice", "Bob", "Charlie", "David", "Eve"],
        "Age": [25, 35, 45, 55, 65],
        "Salary": [50000, 60000, 70000, 80000, 90000],
        "Phone Number": [
            "555-1234",
            "555-2345",
            "555-3456",
            "555-4567",
            "555-5678",
        ],
    }
)


# Define a function to generalize column values
def generalize_values(col_values):
    return col_values.apply(
        lambda x: str(int(x / 10) * 10) + "-" + str(int(x / 10) * 10 + 9)
    )


# Apply the function to the desired column(s)
column_to_generalize = "Age"
df[column_to_generalize] = generalize_values(df[column_to_generalize])

# Print the anonymized dataset
print(df)
```

```
      Name    Age  Salary Phone Number
0    Alice  20-29   50000     555-1234
1      Bob  30-39   60000     555-2345
2  Charlie  40-49   70000     555-3456
3    David  50-59   80000     555-4567
4      Eve  60-69   90000     555-5678
```

In this example, we create a synthetic dataset with columns for name, age, salary, and phone number. We then define a function to generalize the values in the age column by grouping them into age ranges such as 20-29, 30-39, and so on. Finally, we apply the function to the age column and print the anonymized dataset.

### Masking

Masking involves hiding parts of the original data to protect sensitive attributes. For example, a person's phone number might be masked by replacing the last four digits with asterisks. Here is an example:

```python title="Python"
import pandas as pd

# Create a synthetic dataset
df = pd.DataFrame(
    {
        "Name": ["Alice", "Bob", "Charlie", "David", "Eve"],
        "Age": [25, 35, 45, 55, 65],
        "Salary": [50000, 60000, 70000, 80000, 90000],
        "Phone Number": [
            "555-1234",
            "555-2345",
            "555-3456",
            "555-4567",
            "555-5678",
        ],
    }
)


# Define a function to mask column values
def mask_values(col_values):
    return col_values.apply(lambda x: x[:-4] + "****")


# Apply the function to the desired column(s)
column_to_mask = "Phone Number"
df[column_to_mask] = mask_values(df[column_to_mask])

# Print the anonymized dataset
print(df)
```

```
      Name  Age  Salary Phone Number
0    Alice   25   50000     555-****
1      Bob   35   60000     555-****
2  Charlie   45   70000     555-****
3    David   55   80000     555-****
4      Eve   65   90000     555-****
```

In this example, we create a synthetic dataset with columns for name, age, salary, and phone number. We then define a function to mask the values in the phone number column by replacing the last four digits with asterisks. Finally, we apply the function to the phone number column and print the anonymized dataset.

### Perturbation

Perturbation involves adding noise to the original data to protect against inference attacks. For example, a person's age might be perturbed by adding or subtracting a random value between 0 and 5. Here is an example:

```python title="Python"
import pandas as pd
import numpy as np

# Create a synthetic dataset
df = pd.DataFrame(
    {
        "Name": ["Alice", "Bob", "Charlie", "David", "Eve"],
        "Age": [25, 35, 45, 55, 65],
        "Salary": [50000, 60000, 70000, 80000, 90000],
        "Phone Number": [
            "555-1234",
            "555-2345",
            "555-3456",
            "555-4567",
            "555-5678",
        ],
    }
)


# Define a function to perturb column values
def perturb_values(col_values):
    return col_values.apply(lambda x: x + np.random.randint(0, 5))


# Apply the function to the desired column(s)
column_to_perturb = "Age"
df[column_to_perturb] = perturb_values(df[column_to_perturb])

# Print the anonymized dataset
print(df)
```

```
      Name  Age  Salary Phone Number
0    Alice   25   50000     555-1234
1      Bob   35   60000     555-2345
2  Charlie   46   70000     555-3456
3    David   58   80000     555-4567
4      Eve   67   90000     555-5678
```

In this example, we create a synthetic dataset with columns for name, age, salary, and phone number. We then define a function to perturb the values in the age column by adding a random value between 0 and 5. Finally, we apply the function to the age column and print the anonymized dataset.

### Encryption

Encryption involves transforming the original data into an unreadable format using a secret key. Here is an example of how to perform data anonymization in Python using encryption:

```python title="Python"
import pandas as pd
from cryptography.fernet import Fernet

# Create a synthetic dataset
df = pd.DataFrame(
    {
        "Name": ["Alice", "Bob", "Charlie", "David", "Eve"],
        "Age": [25, 35, 45, 55, 65],
        "Salary": [50000, 60000, 70000, 80000, 90000],
        "Phone Number": [
            "555-1234",
            "555-2345",
            "555-3456",
            "555-4567",
            "555-5678",
        ],
    }
)


# Define a function to encrypt column values
def encrypt_values(col_values):
    encrypted_col = []
    for value in col_values.values:
        key = Fernet.generate_key()
        fernet = Fernet(key)
        encrypted_value = fernet.encrypt(str(value).encode())
        encrypted_col.append(encrypted_value.decode())
    return encrypted_col


# Apply the function to the desired column
column_to_encrypt = ["Name"]
df[column_to_encrypt] = df[column_to_encrypt].apply(encrypt_values)

# Print the anonymized dataset
print(df)
```

```
                                                Name  Age  Salary Phone Number
0  gAAAAABlPtvAPJ2unH6ofQ4gIzyxmuODlSyxk70o7bH1bX...   25   50000     555-1234
1  gAAAAABlPtvAZA4xYTcsp6H0PBrfZJUw1-gX1jd24keyp6...   35   60000     555-2345
2  gAAAAABlPtvAD377dSN7-lwu8VFCTHhWyKe-rzyZvSyWNH...   45   70000     555-3456
3  gAAAAABlPtvA_9rEOvFsHtdc1J_Hj9Rjmdeu9umdnUAJ6d...   55   80000     555-4567
4  gAAAAABlPtvASkzkeIhovEAB8X96MDjpEEjdFdCmZrn-82...   65   90000     555-5678
```

In this example, we create a synthetic dataset with columns for name, age, salary, and phone number. We then define a function to encrypt the values in the name column using the `cryptography` library’s `Fernet` class. Finally, we apply the function to the name column and print the anonymized dataset.

## Real-world applications

Data anonymization has several real-world applications, including but not limited to:

- **Healthcare:** Anonymized data can be used for medical research and analysis without compromising patient privacy. Researchers can use anonymized data to identify trends and patterns in diseases, develop new treatments, and improve patient outcomes.
- **Finance:** Anonymized data can be used for fraud detection and prevention, risk management, and compliance with financial regulations. Financial institutions can use anonymized data to identify suspicious transactions, monitor customer behavior, and prevent money laundering.
- **Marketing:** Anonymized data can be used for targeted advertising and customer segmentation. Companies can use anonymized data to understand customer preferences, predict buying behavior, and improve marketing campaigns.
- **Transportation:** Anonymized data can be used for traffic analysis, route optimization, and urban planning. Transportation companies can use anonymized data to identify traffic patterns, optimize routes, and reduce congestion.
- **Education:** Anonymized data can be used for research and analysis in education. Researchers can use anonymized data to identify trends in student performance, develop new teaching methods, and improve educational outcomes.

By now, you should have a deeper understanding of anonymization, and you should be equipped with practical knowledge to implement these techniques in your own data science endeavors.
