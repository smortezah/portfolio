---
title: p-Value ~ 0.05
tags: [p-Value, Statistics, Machine Learning, Data Science, Null Hypotheses]
---

# To Reject or Not to Reject: Navigating p-Values Near 0.05

## Understanding p-value & the Significance Level

In the realm of statistics, the p-value and significance level ($\alpha$) are two critical concepts that lay the groundwork for hypothesis testing. However, understanding their role and how they interact with each other can often be a puzzle, especially when the p-value hovers around 0.05. So, let’s decipher these pieces, one by one.

### p-value

The p-value is one of the most misunderstood and widely used concepts in statistics. In layman’s terms, a p-value tells us the probability of obtaining an effect at least as substantial as the one we actually observed in our sample data, assuming that the null hypothesis is true.

Essentially, the p-value is not about the hypothesis being correct; it’s about the data. It indicates how extreme the data is. If our p-value is small, that means the observed data is quite unlikely under the null hypothesis, nudging us towards rejecting it. However, if the p-value is large, we may conclude the data we observed is likely under the null hypothesis, and therefore, we might retain it.

### The Significance Level ($\alpha$)

On the other side of the field stands $\alpha$, the level of significance. It is the threshold of the probability of incorrectly rejecting a true null hypothesis. Commonly set at 0.05, it means that there is a 5% chance that you will reject the null hypothesis when it is true. $\alpha$, then, essentially controls the rate of falsely claiming something is significant when it’s not.

### Interplay between p-value & $\alpha$

Now that you’re acquainted with both the p-value and $\alpha$, it’s important for you to understand their interplay. The core decision in hypothesis testing revolves around comparing the p-value with $\alpha$. If the p-value is less than or equal to $\alpha$ (typically p \<= 0.05), then we reject the null hypothesis, stating that the result is statistically significant. On the other hand, if the p-value is more significant than the $\alpha$ value, we fail to reject the null hypothesis, implying our results may have arisen due to chance.

In an ideal world, these decisions would be straightforward. But as data, we often find our p-values teasingly close to that 0.05 mark, creating an intriguing dilemma which we will explore in the next section.

## When Your p-value Is Close to 0.05

This section focuses on the statistical conundrum that arises when your p-value hovers around the 0.05 mark. This a common dilemma for data scientists and researchers. Why is that so? Well, the threshold of 0.05 is generally accepted as the boundary that separates the “statistically significant” from the “not statistically significant”. It is like a statistical-guard standing at the conventional gate of significance.

If your p-value comes in neatly below 0.05, you skip happily past the guard, declaring that you have statistically significant results! But what if your p-value is slightly above the 0.05 threshold, say, at 0.052? It’s basically the same, right?

Not so fast! In a strictly statistical sense, a p-value of 0.052 means your results do not cross the threshold to be deemed statistically significant. You can hear the guard rustling in his stance. This is where the dilemma sneaks in. But remember, as a researcher, you should not treat this 0.05 threshold as a hard and fast rule. Statistical significance is not an “all or nothing” scenario, and the p-_value is just one piece of the puzzle_.

Additional factors like the context of the problem, the experiment design, the sample size, and the potential implications of Type I and Type II errors, should all be considered when deciding what your decision should be when your p-value hovers around 0.05.

In the next section, we’ll be deep diving into this debate and discuss when to reject or retain the null hypothesis in such borderline cases.

## Deciphering Statistical Decisions

While traditional statistical practice suggests that a p-value greater than 0.05 indicates a lack of statistical significance, is essential to understand that statistical significance is not an all-or-nothing concept. In these situations, it becomes crucial to consider additional factors alongside the p-value.

One important consideration is the context of the problem and the implications of Type I and Type II errors. Type I error occurs when we incorrectly reject the null hypothesis, while Type II error occurs when we incorrectly fail to reject the null hypothesis. These errors have different consequences, and their relative impacts determine the appropriate course of action.

Another factor to consider is the design and quality of the study. The sample size, statistical power, and potential biases all play a role in the interpretation of the results. A larger sample size increases the power to detect true effects, while biased study designs can lead to conclusions.

Additionally, prior knowledge, expert opinion, and practical considerations come into play. These external factors can influence the decision-making process, especially when the p-value is marginal. Consulting domain experts and considering the real-world implications of the research can provide valuable insights for informed decision making.

To aid in your decision, conducting sensitivity analyses or exploring alternative statistical approaches can be beneficial. By exploring different statistical techniques or considering different thresholds for significance, you can gain a broader understanding of the robustness of your findings and evaluate the impact of different assumptions.

Ultimately, the decision of whether to reject or retain the null hypothesis requires a balanced approach, weighing the statistical evidence alongside other relevant factors. It is important to avoid making hasty conclusions based solely on the p-value, recognizing that statistical significance is just one piece of the puzzle.

In the next section, we will bring discussion to life by illustrating practical examples and providing Python code examples to guide your decision-making process.

## Python in Action

This section provides a hands-on practical application of the principles discussed so far. We’ll implement some Python code and evaluate our data to gain insights when our p-value is teasingly close to 0.05.

First things first, let’s install the necessary Python packages:

```bash title="Shell"
pip install scipy numpy statsmodels
```

### Experiment 1

Assuming we have drawn a sample and conducted a test, here is how we can calculate a p-value:

```python title="Python"
import scipy.stats as stats
import numpy as np

# Set seed for reproducibility
np.random.seed(7)
```

```python title="Python"
# Hypothetical test scores
test_scores = np.random.normal(100, 10, 1000)

# Check for normality
_, p_value_norm = stats.normaltest(test_scores)
print(f"p-value for normality: {p_value_norm}")
```

```
p-value for normality: 0.5458837263512903
```

In this hypothetical scenario, we’re analyzing test scores and checking for normality. If the p-value calculated is around the 0.05 mark, we find ourselves in our previously defined “gray area.”

This juncture is where our previous discussions come into play! Analyzing the p-value against $\alpha$ becomes increasingly relevant as these decisions are _rarely black and white_.

While the standard rule is to reject the null hypothesis if the p-value \<= 0.05, remember- this decision should not exclusively rely on this comparison. Considering the larger picture, the context, and the practical relevance of Type I or Type II errors can directly influence this decision potentially (as we discussed in previous sections).

We could modify our rule of thumb slightly to adapt to this situation:

```python title="Python"
alpha = 0.05

if p_value_norm < alpha:
    print("Null hypothesis is rejected")
elif p_value_norm == alpha:
    print("p-value is on borderline, consider other factors!")
else:
    print("Fail to reject null hypothesis")
```

```
Fail to reject null hypothesis
```

While this script follows the traditional p-value \<= 0.05 rule to reject the null hypothesis, it also considers the situation if our p-value is at the brink, i.e., exactly 0.05, urging us to consider other factors before making our decision.

### Experiment 2

Up until now, we have discussed and implemented a basic hypothetical example. Let’s expand this further.

What if we’re looking to carry out a two-sample t-test, which is a statistical test that is used to determine if two population means are equal? Here’s how we could handle it in Python.

Firstly, we generate some random data for two groups. These groups have different means, so we expect that the null hypothesis (which states that the group means are equal) would be rejected. We carry out the two-sample t-test using `scipy` library:

```python title="Python"
group1_scores = np.random.normal(100, 10, 100)
group2_scores = np.random.normal(105, 10, 100)

_, p_value_ttest = stats.ttest_ind(group1_scores, group2_scores)
print(f"p-value from the t-test: {p_value_ttest}")
```

```
p-value from the t-test: 0.0031876814729812518
```

Let’s test the p-value result against our significance level (`alpha`):

```python title="Python"
alpha = 0.05

if p_value_ttest < alpha:
    print("Null hypothesis is rejected")
elif p_value_ttest == alpha:
    print("p-value is on borderline, consider other factors!")
else:
    print("Fail to reject null hypothesis")
```

```
Null hypothesis is rejected
```

As before, if the p-value is below our alpha, we reject the null hypothesis. If it’s exactly at alpha, other factors need to be considered. If above alpha, typically we wouldn’t reject the null hypothesis.

One useful advantage of writing the analysis code in this manner is that it allows for the swift execution of these decisions based on a changeable alpha. As a researcher, it helps to see how alterations in your alpha threshold affect the decisions made by our hypothesis tests. After all, the 0.05 mark is a convention, not a universal rule.

Remember, selecting an appropriate technique for hypothesis testing and interpreting the p-value in the context of your problem is important. Often, no single statistical method will yield a _definitive_ answer. Instead, the answer will depend almost entirely on the context&mdash;what question you’re asking, what data you have, what assumptions you’re willing to make, and what level of uncertainty you’re willing to tolerate.

### Experiment 3

We have so far talked about single hypothesis testing where we examine one feature or variable at a time. But what if we want to carry out multiple hypothesis testing? That’s where things can get a bit tricky.

The problem with multiple hypothesis testing is with the accumulation of Type I error (false positives). Each test has a chance of producing a false positive, and if you’re testing many hypotheses, the chances of getting at least one false positive increase.

One approach to remedy these effects is by adjusting your significance level (`alpha`) using techniques like the [Bonferroni correction](https://en.wikipedia.org/wiki/Bonferroni_correction). Let’s implement it:

```python title="Python"
# Let's assume we are testing 20 hypotheses
n_tests = 20

# Original alpha value
alpha = 0.05

# Bonferroni correction
alpha_new = alpha / n_tests
print(f"Adjusted alpha: {alpha_new}")
```

```
Adjusted alpha: 0.0025
```

In our hypothetical situation, we’ve assumed we’re testing 20 hypotheses. The Bonferroni correction simply divides the original alpha (0.05) by the number of tests, effectively reducing our threshold for significance and making it harder to reject the null hypothesis.

Now, when comparing p-values to this new threshold, we have:

```python title="Python"
# List of dummy p-values for illustration
p_values = [0.05, 0.03, 0.1, 0.01, 0.001, 0.0001]

for index, p in enumerate(p_values):
    if p < alpha_new:
        print(f"Test {index+1}: Null hypothesis is rejected.")
    elif p == alpha_new:
        print(
            f"Test {index+1}: p-value is on borderline, consider "
            "other factors!"
        )
    else:
        print(f"Test {index+1}: Fail to reject null hypothesis.")
```

```
Test 1: Fail to reject null hypothesis.
Test 2: Fail to reject null hypothesis.
Test 3: Fail to reject null hypothesis.
Test 4: Fail to reject null hypothesis.
Test 5: Null hypothesis is rejected.
Test 6: Null hypothesis is rejected.
```

The Bonferroni correction helps to _guard against false positives_, but it can make it more difficult to detect true effects (increasing Type II errors, or false negatives). As always, it’s crucial to consider these trade-offs when designing an experiment or interpreting results.

### Experiment 4

Let’s explore another example invoking regression analysis. This will offer you practical insights into handling continuous variables and interpreting the resulting p-values.

Let’s assume we have data on employee satisfaction and the duration they’ve been at the company. We want to see if there’s any significant relationship between “years at company” and “job satisfaction.”

```python title="Python"
# Synthetic dataset
df = pd.DataFrame(
    {
        "YearsAtCompany": np.random.randint(0, 10, 100),
        "JobSatisfaction": np.random.randint(0, 5, 100),
    }
)

# Specify our independent and dependent variables
X = df["YearsAtCompany"]
y = df["JobSatisfaction"]

# Add an intercept to the independent variable
X = sm.add_constant(X)

# Fit the Ordinary Least Squares Model (OLS)
model = sm.OLS(y, X)
results = model.fit()

# Summary Statistics
print(results.summary())
```

```
                            OLS Regression Results
==============================================================================
Dep. Variable:        JobSatisfaction   R-squared:                       0.023
Model:                            OLS   Adj. R-squared:                  0.013
Method:                 Least Squares   F-statistic:                     2.274
Date:                Tue, 05 Sep 2023   Prob (F-statistic):              0.135
Time:                        09:59:44   Log-Likelihood:                -184.97
No. Observations:                 100   AIC:                             373.9
Df Residuals:                      98   BIC:                             379.2
Df Model:                           1
Covariance Type:            nonrobust
==================================================================================
                     coef    std err          t      P>|t|      [0.025      0.975]
----------------------------------------------------------------------------------
const              1.7245      0.288      5.990      0.000       1.153       2.296
YearsAtCompany     0.0791      0.052      1.508      0.135      -0.025       0.183
==============================================================================
Omnibus:                      130.047   Durbin-Watson:                   2.303
Prob(Omnibus):                  0.000   Jarque-Bera (JB):                8.823
Skew:                          -0.103   Prob(JB):                       0.0121
Kurtosis:                       1.559   Cond. No.                         10.4
==============================================================================

Notes:
[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.
```

The `summary()` function provides us with a wealth of information. Most importantly, it gives the p-value for each coefficient in the `P>|t|` column.

If the p-value is less than or equal to our significance level (0.05), in which case it is, we can conclude that the `YearsAtCompany` is a significant predictor of `JobSatisfaction`. In other words, the number of years an employee has spent at a company significantly impacts his/her job satisfaction&mdash;an essential insight for business decisions!

Remember to look beyond the p-value&mdash;the coefficient (`coef` column) provides the change in the `JobSatisfaction` variable for each one-unit change in `YearsAtCompany`, while the R-squared value indicates how well our model fits the data. If our p-value hovers around 0.05, it’s then crucial to consider these additional stats for a well-rounded decision.

## Striking a Balance

After a deep dive into the world of hypothesis testing, handling p-values, and exploring practical Python implementations, it’s time to wrap up. The question remains&mdash;what should your decision be when your p-value is on a razor’s edge near 0.05?

If there’s one thing to take away, it is this: _Context is critical_. It’s easy to be enticed by the strict cut-off p-value of 0.05, but remember, every analysis is more than just a p-value.

- **Contextual Factors:** Always consider the study design, the experiment context, and the practical importance of the results. Are the results clinically significant? What implications could false positives or false negatives hold in this context? Are there any real-world consequences to rejecting our null hypothesis? Remember, our ultimate goal is the pursuit of truth, not just the pursuit of statistically significant p-values.
- **Exploratory and Confirmatory Analyses:** Often, a more comprehensive view can be obtained by combining both exploratory and confirmatory analyses, where you not only test for predefined effects but also explore unexpected patterns in your data.
- **Alternative Statistical Approaches:** There’s often more than one way to statistically approach a problem. For example, Bayesian methods can complement traditional p-value based decision making.
- **Transparency in Reporting:** If your p-value is around the 0.05 threshold, report it as it is, alongside other pertinent results (like confidence intervals or effect sizes), and provide an interpretation of the result in the context of your specific study.

```python title="Python"
# Reporting example
p_value = 0.051

report = f"""
Our analysis yielded a p-value {p_value:.3f}, which is close to our alpha level
set at 0.05. Despite its borderline significance, a look at the effect size
and confidence intervals reveals that our findings hold practical
significance. Here, we discuss these findings in further depth--taking into
account the practical implications and real-world context.
"""

print(report)
```

```
Our analysis yielded a p-value 0.051, which is close to our alpha level
set at 0.05. Despite its borderline significance, a look at the effect size
and confidence intervals reveals that our findings hold practical
significance. Here, we discuss these findings in further depth--taking into
account the practical implications and real-world context.
```

Together, these array of strategies can help guide your decision when the p-value plays hide and seek with the 0.05 threshold, ensuring you perceive the bigger picture beyond just statistical significance.

In conclusion, our goal with data science is not merely to produce p-values for hypothesis tests, but rather to generate accurate insights that can empower practical applications and decision-making.

Stay curious. Remember, balance is key!
