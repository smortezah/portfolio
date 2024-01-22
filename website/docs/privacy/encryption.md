---
description: A Beginner’s Guide to Python Encryption
tags: [Cryptography, Encryption, Decryption, Hashing, Data Science]
---

# Encryption

## Introduction

Encryption is the process of converting plain text into a coded message to protect its confidentiality. It is a fundamental concept in computer security and is used to secure sensitive data such as passwords, credit card numbers, and other personal information. Encryption is achieved by using an algorithm to transform the original message into an unreadable format, which can only be deciphered by someone who has the key to unlock it.

In this article, we will explore the basics of encryption and how to use the cryptography library to implement it in Python. We will cover both symmetric and asymmetric encryption, as well as hashing. We will also provide practical guidance and code examples to help readers understand how to use the cryptography library for encryption in Python.

## Symmetric Encryption

Symmetric encryption is a type of encryption where the same key is used for both encryption and decryption. This means that the sender and receiver must have access to the same key in order to communicate securely. Symmetric encryption is faster and more efficient than asymmetric encryption, but it is less secure because the key must be shared between the sender and receiver.

The cryptography library provides several symmetric encryption algorithms, including Fernet, which is a high-level symmetric encryption recipe that uses the AES algorithm in CBC mode with a 128-bit key for encryption and PKCS7 padding. The Fernet module of the cryptography package has built-in functions for generating keys, encrypting plaintext into ciphertext, and decrypting ciphertext into plaintext using the `encrypt` and `decrypt` methods respectively.

## Asymmetric Encryption

Asymmetric encryption is a type of encryption where two different keys are used for encryption and decryption. The public key is used for encryption, while the private key is used for decryption. This means that anyone can encrypt data using the public key, but only the owner of the private key can decrypt it. Asymmetric encryption is more secure than symmetric encryption because the private key is never shared.

The cryptography library provides several asymmetric encryption algorithms, including RSA, which is a widely used public-key encryption algorithm. The RSA module of the cryptography package has built-in functions for generating keys, encrypting plaintext into ciphertext, and decrypting ciphertext into plaintext using the `generate_private_key`, `public_key`, `encrypt`, and `decrypt` methods respectively.

## Hashing

Hashing is a process of converting data of any size into a fixed-size string of characters. The resulting string is unique to the input data and cannot be used to recreate the original data. Hashing is commonly used to verify the integrity of data by comparing the hash of the original data with the hash of the received data. If the hashes match, the data has not been tampered with.

The cryptography library provides several hashing algorithms, including SHA-256, which is a widely used hashing algorithm that produces a 256-bit hash value. The SHA-256 module of the cryptography package has built-in functions for generating hash values using the `sha256` method.

In the next section, we will explore the cryptography library in more detail and learn how to use it to implement encryption in Python.

## The Cryptography Library

The cryptography library is a Python package that provides cryptographic recipes and primitives to Python developers. It includes both high-level recipes and low-level interfaces to common cryptographic algorithms such as symmetric ciphers, message digests, and key derivation functions. This library is designed to be your "cryptographic standard library".

The cryptography library provides several symmetric encryption algorithms, including **Fernet**, which is a high-level symmetric encryption recipe. The Fernet module has built-in functions for generating keys, encrypting plaintext into ciphertext, and decrypting ciphertext into plaintext using the `encrypt` and `decrypt` methods respectively.

The cryptography library also provides several asymmetric encryption algorithms, including **RSA**, which is a widely used public-key encryption algorithm. The RSA module has built-in functions for generating keys, encrypting plaintext into ciphertext, and decrypting ciphertext into plaintext using the `generate_private_key`, `public_key`, `encrypt`, and `decrypt` methods respectively.

To install the library, you can use `pip`:

```bash title="Shell"
pip install cryptography
```

## Generating Keys

Before we can encrypt or decrypt data using the cryptography library, we need to generate keys. The cryptography library provides built-in functions for generating symmetric and asymmetric keys.

To generate a symmetric key, we can use the `Fernet.generate_key()` method, which generates a random 256-bit key that can be used for encryption and decryption.

To generate an asymmetric key pair, we can use the `rsa.generate_private_key()` method, which generates a private key and a corresponding public key. The private key is used for decryption, while the public key is used for encryption. The `rsa` module of the cryptography package has built-in functions for generating keys, encrypting plaintext into ciphertext, and decrypting ciphertext into plaintext.

## Encrypting Data

Now that we have generated keys, we can use the cryptography library to encrypt data using symmetric and asymmetric encryption.

### Symmetric Encryption

To encrypt data using symmetric encryption, we can use the `Fernet` module of the cryptography package, that provides built-in functions for generating keys, encrypting plaintext into ciphertext, and decrypting ciphertext into plaintext using the `encrypt` and `decrypt` methods respectively.

Here is an example of how to use the `Fernet` module to encrypt data:

```python title="Python" 
from cryptography.fernet import Fernet

# Generate a key
key = Fernet.generate_key()

# Create a Fernet object with the key
f = Fernet(key)

# Encrypt the plaintext
plaintext = b"Hello, world!"
ciphertext = f.encrypt(plaintext)
print(ciphertext)
```

This will output the encrypted ciphertext, which can be decrypted using the same key.

```
b'gAAAAABlrkPnVn3AB93dok4s07sdTW_XUV_w_ZFOC3dDyNw89aHMOi4GfT8sCf0TZmhYUj1v76pHEeEeMpCnLpYgKeAao1bb2A=='
```

### Asymmetric Encryption

To encrypt data using asymmetric encryption, we can use the `RSA` module of the cryptography package.

Here is an example of how to use the `RSA` module to encrypt data:

```python title="Python"
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes

# Generate a private key
private_key = rsa.generate_private_key(
    public_exponent=65537, key_size=2048
)

# Get the public key
public_key = private_key.public_key()

# Encrypt the plaintext
plaintext = b"Hello, world!"
ciphertext = public_key.encrypt(
    plaintext,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)
print(ciphertext)
```

This code generates a private key using the RSA algorithm with a public exponent of 65537 and a key size of 2048 bits. It then generates the corresponding public key and uses it to encrypt the plaintext "Hello, world!" using the OAEP padding scheme with SHA-256 as the message digest algorithm. The resulting ciphertext is printed to the console.

```
b't\x83\xf4*\xf5x:\x85\xb2\x93\xb9\xa2z\xb8\x08S\xe7\xa0~\xb34\xe6\xd4\xcc\x0f\'\xdf\xb8\xc5\xa3\x88\n@j\xabg\xe9\x13B\x95X(\xe7\xa9/zM\xccnU:\x05)\xc0\x13\x03\x9c}\x92\x060\xd7\xad\x07F:\x08\xc8\x91\xea\x13dMj8\x01\x0f5\x03\x7f<\xd7NO2\x03$y\x98\x87\x98\xa8\xe4\xdck\xe0\x07\xfe\xee"\xac\x06\xbd\re\x88\x8b\xbb\x98\xfc\xd2\xc6L$\x18\xf7\x1ds\xa4P\x88L\xa4@\xb8Tw/\xd5B \xfc86\xa9\xdc<\xf6F\xf1\xbf\xb8!\x05\x84uu~%|\x7f\x82\xc5\xaa\xe2\xd05T\xfa+(\xfd\xc1\xc9\xbd\x1b\xe2s\xdf\n\xe7Y\x06\xd0\x9f\xe4\xfe\x8aCSoDg\xd6l\xb9\xcf\xff\\h6\xf3\xe9\x9b\x98Ii\x19\xbf\xa0X\x06\x8cc\xa2\xa9B\xf2\x82\x89\xff\x19x\x08BX\xb1\x93.\xf7\xfa\x00\xde\xce%\xb3\xa1\xd3V\x04\x87P\xe9\xa0\xff\xfe\x02\xcd\xcc\xbau\xd5R\xae$\'\x1fr{\x9f\x88\xcf\x03\x17\xe8)'
```

## Decrypting Data

Now that we have encrypted data using symmetric and asymmetric encryption, we can use the cryptography library to decrypt it.

### Symmetric Decryption

To decrypt data using symmetric encryption, we can use the `Fernet` module of the cryptography package.

Here is an example of how to use the `Fernet` module to decrypt data:

```python title="Python"
from cryptography.fernet import Fernet

# Generate a key
key = Fernet.generate_key()

# Create a Fernet object with the key
f = Fernet(key)

# Encrypt the plaintext
plaintext = b"Hello, world!"
ciphertext = f.encrypt(plaintext)

# Decrypt the ciphertext
decrypted_plaintext = f.decrypt(ciphertext)
print(decrypted_plaintext)
```

This will output the decrypted plaintext, which should match the original plaintext.

```
b'Hello, world!'
```

### Asymmetric Decryption

To decrypt data using asymmetric encryption, we can use the `RSA` module of the cryptography package.

Here is an example of how to use the `RSA` module to decrypt data:

```python title="Python"
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes

# Generate a private key
private_key = rsa.generate_private_key(
    public_exponent=65537, key_size=2048
)

# Get the public key
public_key = private_key.public_key()

# Encrypt the plaintext
plaintext = b"Hello, world!"
ciphertext = public_key.encrypt(
    plaintext,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)

# Decrypt the ciphertext
decrypted_plaintext = private_key.decrypt(
    ciphertext,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)
print(decrypted_plaintext)
```

This will output the decrypted plaintext, which should match the original plaintext.

```
b'Hello, world!'
```

In the next section, we will explore best practices for encryption.

## Best Practices for Encryption

Encryption is a powerful tool for securing sensitive data, but it is not foolproof. Here are some best practices to follow when using encryption:

1. **Use strong encryption algorithms:** Always use strong encryption algorithms that are difficult to crack. The cryptography library provides several strong encryption algorithms, including AES and RSA.
2. **Use long keys:** Longer keys are more secure than shorter keys. Use keys that are at least 128 bits long for symmetric encryption and 2048 bits long for asymmetric encryption.
3. **Protect your keys:** Keys are the most important part of encryption. Protect your keys by storing them securely and limiting access to them.
4. **Use secure key exchange protocols:** When exchanging keys, use secure protocols such as Diffie-Hellman key exchange to prevent eavesdropping.
5. **Use secure hash functions:** Hash functions are used to verify the integrity of data. Use secure hash functions such as SHA-256 to ensure that the hash cannot be easily reversed.
6. **Use random initialization vectors:** Initialization vectors are used to ensure that the same plaintext does not encrypt to the same ciphertext. Use random initialization vectors to prevent attacks.
7. **Use authenticated encryption:** Authenticated encryption ensures that the ciphertext has not been tampered with. Use authenticated encryption modes such as AES-GCM to ensure the integrity of your data.

By following these best practices, you can ensure that your encrypted data is secure and protected from attackers.
