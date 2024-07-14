---
description: Efficient membership testing for sets
tags: [Bloom filter, Data Structure, Algorithm, Mojo]
---

# Bloom Filters

## Introduction

### What is a Bloom Filter?

A **Bloom filter** is a space-efficient probabilistic data structure used to test whether an element is a member of a set. Unlike traditional data structures (such as hash tables or arrays), Bloom filters don't store the actual elements themselves. Instead, they use a compact array of bits to represent the presence or absence of elements.

### How Does It Work?

1. **Bit Array**: A Bloom filter consists of a fixed-size bit array (often called the "filter"). Initially, all bits are set to 0.

2. **Hash Functions**: We use multiple hash functions (typically independent and uniformly distributed) to map elements to positions in the bit array. For each element, we compute several hash values.

3. **Setting Bits**: When inserting an element into the filter, we set the corresponding bits in the array to 1 based on the hash values. This marks the element's presence.

4. **Checking Membership**: To check if an element exists in the filter, we hash it using the same hash functions. If all corresponding bits are set to 1, we consider the element as "possibly present." However, there's a chance of false positives (more on that later).

### Why Use Bloom Filters?

- **Space Efficiency**: Bloom filters require minimal memory compared to other data structures.

- **Fast Lookups**: Checking membership is extremely fast (constant time complexity).

- **Approximate Membership**: While it can tell us if an element is possibly present, it cannot guarantee its actual existence.

In the next section, we'll explore how to choose the right parameters for a Bloom filter.

## Choosing the Right Parameters

When working with a Bloom filter, there are three essential parameters to consider:

1. **Filter Size (`m`)**: The size of the bit array (often denoted as `m`) determines how many bits we allocate for the filter. A larger value of `m` reduces the probability of false positives but increases memory consumption. Conversely, a smaller `m` conserves memory but raises the risk of false positives.

2. **Number of Hash Functions (`k`)**: The parameter `k` represents the number of independent hash functions used to map elements to positions in the bit array. Each element is hashed by all `k` functions, resulting in multiple positions. A higher value of `k` decreases the false positive rate, but it also requires more computational effort during insertion and lookup.

3. **Number of Elements to Be Stored (`n`)**: The total number of elements you plan to add to the Bloom filter affects both `m` and `k`. As `n` increases, you'll need a larger bit array (`m`) and more hash functions (`k`) to maintain a desired false positive rate.

### Trade-offs

- **Memory vs. False Positives**: Increasing `m` reduces false positives but consumes more memory. Finding the right balance depends on your specific use case.

- **Computation vs. False Positives**: Higher `k` improves accuracy but increases computational overhead. Consider the trade-off between performance and precision.

### Practical Tips

- **Tune Parameters**: Experiment with different values of `m` and `k` based on your dataset size and desired false positive rate.

- **Bloom Filter Calculator**: Tools like the [Bloom Filter Calculator](https://hur.st/bloomfilter/) can help you explore the interactions between parameters.

In the next section, we'll roll up our sleeves and implement a Bloom filter in Mojo!

## Implementing a Bloom Filter in Mojo

In this post, we’ll be using Mojo, a powerful language for efficient and expressive programming. You can install it by following the instructions provided in the [official Mojo documentation](https://docs.modular.com/mojo/manual/get-started).

After installation, you can run Mojo code (`bloom.mojo`) using the `mojo run bloom.mojo` command in your terminal.

### Step 1: Initialize the Bloom Filter

First, let's create a `BloomFilter` struct with the necessary properties:

```mojo title="Mojo"
import math
from tensor import Tensor

struct BloomFilter:
    var items_count: Int
    var fp_prob: Float32
    var size: Int
    var hash_count: Int
    var bit_array: Tensor[DType.bool]

    fn __init__(inout self, items_count: Int, fp_prob: Float32) -> NoneType:
        """Initialize Bloom filter.

        Args:
            items_count: Number of items expected to be stored in bloom filter.
            fp_prob: False Positive probability in decimal.
        """
        self.items_count = items_count
        self.fp_prob = fp_prob
        self.size = int(-items_count * math.log(fp_prob) / math.log(2.0) ** 2)
        self.hash_count = int((self.size / items_count) * math.log(2.0))
        self.bit_array = Tensor[DType.bool](self.size)
```

### Step 2: Insert Elements

To insert an item into the filter, we'll compute its hash values and set the corresponding bits in the array:

```mojo title="Mojo (struct BloomFilter)"
fn insert(inout self, item: String) -> NoneType:
    """Insert an item to the filter."""
    for i in range(self.hash_count):
        var digest = int((hash(item) + i) % self.size)
        self.bit_array[digest] = True
```

### Step 3: Check for Existence

When checking if an item exists in the filter, we hash it and verify the corresponding bits:

```mojo title="Mojo (struct BloomFilter)"
fn has(self, item: String) -> Bool:
    """Check for existence of an item in filter."""
    for i in range(self.hash_count):
        var digest = int((hash(item) + i) % self.size)
        if self.bit_array[digest] == False:
            return False
    return True
```

### Step 4: Choosing Parameters

Remember our discussion on parameters? You can experiment with different values for `items_count` and `fp_prob` to find the right balance for your use case.

In the next section, we'll benchmark our `BloomFilter` implementation.

## Benchmarking the Bloom Filter

### Benchmark 1: Inserting 1,000,000 Items

In this benchmark, we'll measure the time it takes to insert 1,000,000 items into our Bloom filter. Here's how it works:

1. We create a `BloomFilter` instance with the specified `items_count` (1,000,000) and a false positive probability (`fp_prob`) of 0.01.

2. The size of the bit array (`m`) and the number of hash functions (`k`) are determined based on the chosen parameters.

3. We insert each item (represented by an integer from 0 to 999,999) into the filter using the `insert` method.

```mojo title="Mojo (struct BloomFilter)"
from time import time_function

fn benchmark1() capturing -> NoneType:
    """Benchmark 1: Insert 1,000,000 items."""
    var bloom = BloomFilter(items_count=1_000_000, fp_prob=0.01)

    print("Size of bit array:", bloom.size)
    print("False positive Probability:", bloom.fp_prob)
    print("Number of hash functions:", bloom.hash_count)
    print("Load factor:", bloom.get_load_factor())

    for i in range(bloom.items_count):
        bloom.insert(String(i))


print("-----------------------------------")
print("Benchmark 1: Insert 1,000,000 items")
print("-----------------------------------")
var time_taken = time_function[benchmark1]() / 10e9
print("Time taken:", time_taken, "seconds")
```

Output:

```
-----------------------------------
Benchmark 1: Insert 1,000,000 items
-----------------------------------
Size of bit array: 9585058
False positive Probability: 0.0099999997764825821
Number of hash functions: 6
Load factor: 0.10432904958724976
Time taken: 0.1557587 seconds
```

### Benchmark 2: Testing with Sample Words

In this benchmark, we test the Bloom filter with a set of sample words. Here's what happens:

1. We create another `BloomFilter` instance with a smaller `items_count` (7) and a higher `fp_prob` (0.2).

2. We insert a few words (such as "abound," "bloom," and "blossom") into the filter.

3. Next, we check the presence of both existing and non-existing words in the filter.

4. We categorize the results into three groups:

   - **Definitely not present**: Words that are absent in the filter.

   - **Probably present**: Words that might be present (due to false positives).

   - **False positive**: Words that are incorrectly considered present.

```mojo title="Mojo (struct BloomFilter)"
from collections import List

fn benchmark2() capturing -> NoneType:
    """Benchmark 2: Test the Bloom Filter with sample words."""
    var bloom = BloomFilter(items_count=7, fp_prob=0.2)

    print("Size of bit array:", bloom.size)
    print("False positive Probability:", bloom.fp_prob)
    print("Number of hash functions:", bloom.hash_count)
    print("Load factor:", bloom.get_load_factor(), "\n")

    # Insert word_present to Bloom Filter
    var word_present = List(
        "abound",
        "abounds",
        "abundance",
        "abundant",
        "accessible",
        "bloom",
        "blossom",
    )
    var word_absent = List("bluff", "cheater", "hate")
    for word in word_present:
        bloom.insert(word[])

    # Test presence of words
    var definitely_not_present = List[String]()
    var probably_present = List[String]()
    var false_positive = List[String]()
    var test_words = word_present + word_absent

    for word in test_words:
        if bloom.has(word[]):
            if word[] in word_absent:
                false_positive.append(word[])
            else:
                probably_present.append(word[])
        else:
            definitely_not_present.append(word[])

    print("Definitely not present:\t", end=" ")
    for word in definitely_not_present:
        print(word[], end=", ")

    print("\nProbably present:\t", end=" ")
    for word in probably_present:
        print(word[], end=", ")

    print("\nFalse positive:\t\t", end=" ")
    for word in false_positive:
        print(word[], end=", ")
    print()


print("----------------------------------------------------")
print("Benchmark 2: Test the Bloom Filter with sample words")
print("----------------------------------------------------")
benchmark2()
```

Output:

```
----------------------------------------------------
Benchmark 2: Test the Bloom Filter with sample words
----------------------------------------------------
Size of bit array: 23
False positive Probability: 0.20000000298023224
Number of hash functions: 2
Load factor: 0.30434781312942505

Definitely not present:  bluff, cheater,
Probably present:        abound, abounds, abundance, abundant, accessible, bloom, blossom,
False positive:          hate,
```

In the next section, we'll tackle the challenge of handling false positives.

## Handling False Positives

### What Are False Positives?

In a Bloom filter, a **false positive** occurs when the filter incorrectly indicates that an item is present, even though it isn't. These false alarms can happen due to hash collisions and the probabilistic nature of the filter.

### Mitigating False Positives

1. **Tuning Parameters**: As we discussed earlier, adjusting the parameters (such as `m`, `k`, and `fp_prob`) impacts false positives. A lower `fp_prob` reduces the chances of false positives but increases memory usage.

2. **Monitoring Load Factor**: Keep an eye on the **load factor** (the ratio of inserted items to the filter size). A high load factor increases the risk of false positives. If your filter becomes too crowded, consider resizing it.

3. **Combine with Other Data Structures**: Use Bloom filters alongside other data structures (like hash tables or databases) to verify potential matches. If the Bloom filter suggests an item is present, perform a secondary check to confirm its existence.

In our final section, we'll summarize our Bloom filter journey and share practical tips.

## Practical Use Cases and Tips

### Real-World Applications

1. **Caching Systems**: Bloom filters can help caching systems quickly check if an item is in the cache before diving into more expensive lookups.

2. **Spell Checkers**: They can use Bloom filters to identify whether a word exists in a dictionary. When you type a word, the spell checker can consult its dictionary (the Bloom filter) to see if the word is legit.

3. **Network Routers**: In the realm of networking, routers can use Bloom filters for efficient routing table lookups.

4. **Content Delivery Networks (CDNs)**: Bloom filters can help reduce cache misses by hinting at the presence of cached content.

### Practical Tips

- **Monitor Load Factor**: Keep an eye on your Bloom filter's load factor-the ratio of inserted items to the filter size. If it gets too crowded, consider resizing the filter to maintain its efficiency.

- **Combine with Other Tools**: Bloom filters work best when combined with other data structures. If the filter suggests an item is present, perform a secondary check using a more precise spell (like a hash table) to confirm its existence.
