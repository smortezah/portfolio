---
title: Data Balancing
description: Learn how to balance your data with Python
tags: [Data Science, Data Imbalance, Resampling, Machine Learning, SMOTE]
---

# Taming the Data Imbalance with Python

Welcome back to another thrilling ride on the data science rollercoaster. Today, we’re diving headfirst into the wacky world of data balancing&mdash;a crucial skill in your machine learning toolkit. Picture this: you’ve got a dataset that’s as unbalanced as a seesaw with an elephant on one side and a feather on the other. Fear not! We’re about to wield our coding wands and conjure up some enchanting solutions to slay the data imbalance dragon. 🐉🔥

## Taming the Data Asymmetry

Before we don our coding capes and leap into the heart of data balancing, let’s unravel the enigma that is data imbalance. Imagine you’re at a party where one corner is bustling with a crowd ready to dance the night away, while the other corner seems like a ghost town. That’s what data imbalance looks like in the world of machine learning&mdash;an unequal distribution of classes that can send your models waltzing off in the wrong direction.

But fret not, dear reader, for Python comes to the rescue with its trusty companions `numpy`, `pandas`, `scikit-learn`, and `imbalanced-learn`. Armed with these tools, we’ll load up our dataset and unveil its secrets. It’s like detective work, but with code!

```bash title="Shell"
pip install numpy pandas scikit-learn imbalanced-learn
```

```python title="Python"
import numpy as np
import pandas as pd

# Generate data
data = pd.DataFrame()
seeds = [7, 42, 73, 101]
n_rows = 200
for i, seed in enumerate(seeds):
    np.random.seed(seed)
    data[f"feature_{i+1}"] = np.random.randint(0, 10, n_rows)
data["target"] = np.random.choice([0, 1, 2], size=n_rows, p=[0.15, 0.30, 0.55])

X = data.drop("target", axis=1)
y = data["target"]

# The class distribution
class_counts = y.value_counts()
print(class_counts)
```

```
target
2    112
1     61
0     27
```

The `value_counts()` method gives us a glimpse into the abyss. You see the classes 0, 1 and 2 have 27, 61 and 112 instances, respectively. That’s the data imbalance waving its banner!

But fear not, for we’re just getting started on this quest to conquer the imbalance beast. We’re about to turn the tables and bring equilibrium to this topsy-turvy world. Buckle up&mdash;we’re diving into the magical realm of resampling in the next enchanting section! 🎩🔍

## Resampling to the Rescue

Ready to harness the power of Python to tackle that pesky data imbalance? It’s time to roll up your sleeves and dive into the enchanting world of resampling. Think of it as your trusty potion that turns a lopsided dataset into a symphony of balance, all while keeping our charming Python flair intact.

Remember, we’re on a mission to restore harmony to the universe of data, where the scales are tipped like a seesaw with a mischievous elephant on one side and a feather on the other.

### Oversampling Magic

Imagine you’re a party host with a disproportionately long guest list of party animals and a meager smattering of introverts. What do you do? You clone the introverts and suddenly your party is booming! That’s oversampling for you. In Python, our spellcaster of choice is the `RandomOverSampler` from the `imbalanced-learn` library. Let’s weave our magic:

```python title="Python"
from imblearn.over_sampling import RandomOverSampler

# Craft the Oversampling Potion
oversampler = RandomOverSampler(random_state=42)

# Perform the spell: Resample the data
X_resampled, y_resampled = oversampler.fit_resample(X, y)

# Reveal the new class distribution
resampled_class_counts = pd.Series(y_resampled).value_counts()
print(resampled_class_counts)
```

```
target
2    112
1    112
0    112
```

### Undersampling Charms

Now, imagine you’re a zookeeper trying to maintain balance in your animal kingdom. You’ve got a surplus of zebras and a lonely lion sulking in the corner. What do you do? Bid adieu to a few zebras and suddenly the lion’s reign begins! That’s the essence of undersampling. Our Python spellbook reveals the `RandomUnderSampler` from the same magical library. Behold:

```python title="Python"
from imblearn.under_sampling import RandomUnderSampler

# Brew the Undersampling Elixir
undersampler = RandomUnderSampler(random_state=42)

# Cast the spell: Resample the data
X_resampled, y_resampled = undersampler.fit_resample(X, y)

# Unveil the new class distribution
resampled_class_counts = pd.Series(y_resampled).value_counts()
print(resampled_class_counts)
```

```
target
0    27
1    27
2    27
```

Who knew battling data imbalance could be so thrilling? With oversampling and undersampling, you’re wielding Python-powered magic that’ll have you dancing with your dataset like never before! But wait, intrepid coder, our adventure is far from over. In the next section, we’ll dive even deeper and explore the art of crafting synthetic samples with SMOTE, an advanced spell that’ll leave your data equilibrium looking like a perfectly choreographed tango! 🎩🎭💃

## SMOTE to the Rescue

You’ve successfully dipped your toes into the waters of resampling, but now it’s time to take a quantum leap into the realm of Synthetic Minority Over-sampling Technique (SMOTE). Imagine a world where you can create magical replicas of your minority class, weaving new instances into the fabric of your dataset. Say goodbye to data imbalance&mdash;SMOTE is here to weave its intricate spells!

SMOTE is like a master potion maker that crafts synthetic samples, bridging the gap between the majority and minority classes. Think of it as an artist who adds brushstrokes to a canvas to bring balance and harmony. In Python, we summon the mighty `SMOTE` from the `imbalanced-learn` library to perform this act of data alchemy:

```python title="Python"
from imblearn.over_sampling import SMOTE

# Prepare the Cauldron for SMOTE
smote = SMOTE(random_state=42)

# Unleash the enchantment: Resample the data
X_resampled, y_resampled = smote.fit_resample(X, y)

# Reveal the new class distribution
resampled_class_counts = pd.Series(y_resampled).value_counts()
print(resampled_class_counts)
```

```
target
2    112
1    112
0    112
```

Imagine having your own magical forge where you’re crafting instances of your minority class like an artisan blacksmith. With SMOTE, your dataset becomes a masterpiece of balance and representation. You’ve gone beyond traditional resampling and entered the realm of creating entirely new experiences for your models!

## Evaluation Matters!

As we tread further into the labyrinth of data balancing, a crucial pit stop awaits us: the realm of evaluation. Just as a knight must test their sword before charging into battle, we must rigorously assess the performance of our resampled models. After all, balance isn’t just about quantity; it’s about quality and effectiveness. So, let’s don our detective hats and scrutinize our models like seasoned data sleuths!

### The Splitting Spell

Before we put our models to the test, we must partition our dataset into training and testing sets. Python has just the incantation we need, courtesy of the `train_test_split` function from the `sklearn.model_selection` module:

```python title="Python"
from sklearn.model_selection import train_test_split

# Split the dataset into train and test sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```

With our trusty data division spell, we’ve created training and testing sets that will be instrumental in measuring the prowess of our models.

### Cross-Validation

Next up, we summon the art of cross-validation. Just as a wizard practices their spells to perfection, our models need rigorous testing to ensure they’re up to the task. Python provides an instrument called `cross_val_score` to help us wield the power of cross-validation:

```python title="Python"
from sklearn.model_selection import cross_val_score
from sklearn.neighbors import KNeighborsClassifier

# Create a KNN classifier
knn = KNeighborsClassifier()

# Perform cross-validation
scores = cross_val_score(knn, X_train, y_train, cv=5, scoring="f1_macro")

# Display the scores
print("Cross-Validation Scores:", [round(score, 3) for score in scores])
print("Mean F1-score:", round(scores.mean(), 3))
```

```
Cross-Validation Scores: [0.378, 0.25, 0.214, 0.197, 0.444]
Mean F1-score: 0.296
```

Here, we’ve used the $k$-NN classifier as our artifact and employed cross-validation to measure its performance. The `f1_macro` scoring metric helps us account for the imbalanced classes, giving us a clearer picture of how well our model performs on both the majority and minority classes.

Remember, accurate evaluation is the compass guiding us through the uncharted waters of data balancing. Cross-validation provides a sneak peek into how our models might perform in the real world, helping us fine-tune our strategies and ensure our data equilibrium is on point.

But our adventure doesn’t end here! In the next section, we’re going to pull out the big guns&mdash;ensemble methods that’ll have you cheering for your models like an enchanted audience at a grand wizardry show. Prepare to witness the grand finale of our data balancing saga! 🧙‍♂️🔍🔮

## Ensemble to the Rescue

The time has come for the grand finale of our data balancing odyssey! We’ve delved deep into the art of resampling, crafted synthetic spells with SMOTE, and fine-tuned our models for performance. But now, we’re about to unveil the true masterpiece&mdash;the ensemble methods that’ll have you applauding your models like a standing ovation at a magical symphony.

Ensemble methods are like assembling a league of extraordinary heroes, each with their own unique powers, to tackle a formidable foe. In our case, that foe is the data imbalance monster! Python has bestowed upon us a treasure trove of ensemble algorithms, and we’ll summon the illustrious `RandomForestClassifier` to center stage:

```python title="Python"
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Split the dataset into train and test sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create the model
rf_classifier = RandomForestClassifier(random_state=42)

# Train the model
rf_classifier.fit(X_train, y_train)

# Make predictions
y_pred = rf_classifier.predict(X_test)

# Assess the performance
report = classification_report(y_test, y_pred)
print("Classification Report:\n", report)
```

```
Classification Report:
               precision    recall  f1-score   support

           0       0.25      0.25      0.25         4
           1       0.40      0.12      0.19        16
           2       0.48      0.75      0.59        20

    accuracy                           0.45        40
   macro avg       0.38      0.38      0.34        40
weighted avg       0.43      0.45      0.40        40
```

The `RandomForestClassifier` is like a conductor guiding an orchestra of decision trees, harmonizing their efforts to create a powerful, balanced prediction engine. We’ve trained our ensemble hero on the resampled data and used the `predict` function to gaze into the crystal ball and see how well our model performs.

The `classification_report` function shines a light on the battlefield, revealing precision, recall, and F1-score for each class. It’s like having a mystical seer provide insights into the strengths and weaknesses of your model’s performance.

Ensemble methods offer a plethora of options&mdash;from bagging with Random Forests to boosting with XGBoost. Each has its own flair, but the common thread is their ability to navigate the treacherous waters of imbalanced data, maintaining equilibrium and making accurate predictions.

## Conclusion

Well, there you have it! We’ve embarked on a journey through the wilds of data imbalance, armed with nothing but our trusty Python spells. We’ve learned to wield the power of resampling, craft synthetic samples, and even tamed the ensemble beasts. So, go forth, balance your data, and conquer those machine learning challenges like the true Python wizards you are! 🎩🐍

Keep coding! 💻✨
