---
title: Introducing Keras Core
authors: [mori]
date: 2023/10/12
tags: [Keras, PyTorch, Jax, Deep Learning, Machine Learning]
---

Hey there, data enthusiasts! Get ready to witness the revolution in the world of deep learning frameworks with the arrival of Keras Core, a preview version of the future of Keras. By Fall 2023, Keras Core will evolve into Keras 3.0, bringing remarkable advancements to the table. This groundbreaking library is a complete rewrite of the Keras codebase, establishing a modular backend architecture. What does this mean for you? Well, it enables running Keras workflows on various frameworks, starting with TensorFlow, PyTorch, and JAX.

Exciting times lie ahead!

## Why Use Keras Core?

But wait, why are they making Keras multi-backend again? Let’s take a quick trip down memory lane. Not too long ago, Keras had the ability to run on multiple backends like Theano, TensorFlow, CNTK, and even MXNet. However, in 2018, they decided to focus exclusively on TensorFlow as other backends discontinued development. But times have changed! Fast forward to 2023, and we see TensorFlow dominating the production ML space with a market share of 55% to 60%. On the other hand, PyTorch has captured the ML research realm with a market share of 40% to 45%. Meanwhile, JAX, although with a smaller market share, has gained recognition from leading players in generative AI. It’s clear that each framework has its strengths and user base. Keras Core enables the users to leverage the power of all three frameworks simultaneously.

Say goodbye to framework silos and welcome the new era of multi-framework ML!

<!--truncate-->

## Exploring the Main Features of Keras Core

Now that we understand the motivation behind Keras Core, let’s dive into its incredible features.

- **Always get the best performance for your models:** With Keras Core, you can achieve optimal training and inference performance across different hardware platforms. The benchmarks indicate that JAX usually delivers the best performance on GPU, TPU, and CPU. However, results may vary depending on the model, and non-XLA TensorFlow occasionally outperforms on GPU. The beauty of Keras Core lies in its ability to dynamically select the backend that will offer the highest efficiency for your specific model. No code changes required!
- **Maximize available ecosystem surface for your models:** Keras Core opens up a world of possibilities by allowing you to utilize your models with various ecosystems. Any Keras Core model can be used as a PyTorch `Module`, exported as a TensorFlow `SavedModel`, or instantiated as a stateless JAX function. This flexibility means you can leverage PyTorch ecosystem packages, TensorFlow deployment and production tools (such as TF-Serving, TF.js, and TFLite), and JAX’s large-scale TPU training infrastructure. Write your `model.py` using Keras Core APIs, and unlock access to everything the ML world has to offer.
- **Maximize distribution for your open-source model releases:** If you want to release a pretrained model and make it accessible to as many people as possible, Keras Core is your secret weapon. By implementing your model in Keras Core, you instantly make it usable by anyone, regardless of their framework preference. While implementing in pure TensorFlow or PyTorch limits your reach to roughly half the market, Keras Core doubles your impact at no additional development cost. Get ready to leave a lasting impression!
- **Use data pipelines from any source:** The versatility of Keras Core shines when it comes to data pipelines. Whether you’re working with `tf.data.Dataset` objects, PyTorch `DataLoader` objects, NumPy arrays, or Pandas dataframes, the Keras Core `fit()`, `evaluate()`, and `predict()` routines seamlessly integrate with all backends. Train a Keras Core + TensorFlow model on a PyTorch `DataLoader` or a Keras Core + PyTorch model on a `tf.data.Dataset`. The choice is yours, and Keras Core adapts effortlessly.

## Empowering Developers with Progressive Disclosure and a Stateless API

The Keras team have brought the principle of progressive disclosure of complexity to Keras Core, just like in the existing Keras API. You can start with simple workflows using `Sequential` and `Functional` models, training them with `fit()`. As your needs grow, you can easily customize different components while reusing most of your existing code. Keras Core allows you to maintain a smooth transition without hitting a complexity cliff or requiring a switch to a different set of tools. For instance, you can customize your training loop while leveraging the power of `fit()` by simply overriding the `train_step` method. The possibilities are endless!

But that’s not all. Keras Core introduces a new stateless API for layers, models, metrics, and optimizers, catering to functional programming enthusiasts. All stateful objects in Keras now have a stateless API, making them compatible with JAX functions that require full statelessness. Layers and models, optimizers, and metrics provide `stateless_call()`, `stateless_apply()`, `stateless_update_state()` and `stateless_result()` methods, respectively. These methods offer the same functionalities as their stateful counterparts but without any side effects. You can effortlessly use them in your JAX, PyTorch, or TensorFlow workflows, ensuring a smooth and enjoyable development experience.

## The Bottom line

It’s time to embrace the future of deep learning frameworks with Keras Core. Unlock the potential of multi-framework ML, achieve top performance, maximize ecosystem compatibility, and enjoy the flexibility of the stateless API. Say goodbye to limitations and hello to boundless possibilities!

Happy coding with Keras Core and may your machine learning endeavors reach new heights!
