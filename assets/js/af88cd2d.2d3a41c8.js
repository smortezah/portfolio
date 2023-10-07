"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2533],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=s,d=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(d,r(r({ref:t},h),{},{components:a})):n.createElement(d,r({ref:t},h))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:s,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const i={title:"p-Value ~ 0.05",tags:["p-Value","Statistics","Machine Learning","Data Science","Null Hypotheses"]},r="To Reject or Not to Reject: Navigating p-Values Near 0.05",l={unversionedId:"stats/pvalue~0.05",id:"stats/pvalue~0.05",title:"p-Value ~ 0.05",description:"Understanding p-value & the Significance Level",source:"@site/docs/stats/pvalue~0.05.md",sourceDirName:"stats",slug:"/stats/pvalue~0.05",permalink:"/portfolio/docs/stats/pvalue~0.05",draft:!1,tags:[{label:"p-Value",permalink:"/portfolio/docs/tags/p-value"},{label:"Statistics",permalink:"/portfolio/docs/tags/statistics"},{label:"Machine Learning",permalink:"/portfolio/docs/tags/machine-learning"},{label:"Data Science",permalink:"/portfolio/docs/tags/data-science"},{label:"Null Hypotheses",permalink:"/portfolio/docs/tags/null-hypotheses"}],version:"current",frontMatter:{title:"p-Value ~ 0.05",tags:["p-Value","Statistics","Machine Learning","Data Science","Null Hypotheses"]},sidebar:"tutorialSidebar",previous:{title:"Statistics",permalink:"/portfolio/docs/stats/"}},o={},p=[{value:"Understanding p-value &amp; the Significance Level",id:"understanding-p-value--the-significance-level",level:2},{value:"p-value",id:"p-value",level:3},{value:"The Significance Level (alpha)",id:"the-significance-level-alpha",level:3},{value:"Interplay between p-value &amp; alpha",id:"interplay-between-p-value--alpha",level:3},{value:"When Your p-value Is Close to 0.05",id:"when-your-p-value-is-close-to-005",level:2},{value:"Deciphering Statistical Decisions",id:"deciphering-statistical-decisions",level:2},{value:"Python in Action",id:"python-in-action",level:2},{value:"Experiment 1",id:"experiment-1",level:3},{value:"Experiment 2",id:"experiment-2",level:3},{value:"Experiment 3",id:"experiment-3",level:3},{value:"Experiment 4",id:"experiment-4",level:3},{value:"Striking a Balance",id:"striking-a-balance",level:2}],h={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"to-reject-or-not-to-reject-navigating-p-values-near-005"},"To Reject or Not to Reject: Navigating p-Values Near 0.05"),(0,s.kt)("h2",{id:"understanding-p-value--the-significance-level"},"Understanding p-value & the Significance Level"),(0,s.kt)("p",null,"In the realm of statistics, the p-value and significance level (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"))))),") are two critical concepts that lay the groundwork for hypothesis testing. However, understanding their role and how they interact with each other can often be a puzzle, especially when the p-value hovers around 0.05. So, let\u2019s decipher these pieces, one by one."),(0,s.kt)("h3",{id:"p-value"},"p-value"),(0,s.kt)("p",null,"The p-value is one of the most misunderstood and widely used concepts in statistics. In layman\u2019s terms, a p-value tells us the probability of obtaining an effect at least as substantial as the one we actually observed in our sample data, assuming that the null hypothesis is true."),(0,s.kt)("p",null,"Essentially, the p-value is not about the hypothesis being correct; it\u2019s about the data. It indicates how extreme the data is. If our p-value is small, that means the observed data is quite unlikely under the null hypothesis, nudging us towards rejecting it. However, if the p-value is large, we may conclude the data we observed is likely under the null hypothesis, and therefore, we might retain it."),(0,s.kt)("h3",{id:"the-significance-level-alpha"},"The Significance Level (",(0,s.kt)("span",{parentName:"h3",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"))))),")"),(0,s.kt)("p",null,"On the other side of the field stands ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"))))),", the level of significance. It is the threshold of the probability of incorrectly rejecting a true null hypothesis. Commonly set at 0.05, it means that there is a 5% chance that you will reject the null hypothesis when it is true. ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"))))),", then, essentially controls the rate of falsely claiming something is significant when it\u2019s not."),(0,s.kt)("h3",{id:"interplay-between-p-value--alpha"},"Interplay between p-value & ",(0,s.kt)("span",{parentName:"h3",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1")))))),(0,s.kt)("p",null,"Now that you\u2019re acquainted with both the p-value and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"))))),", it\u2019s important for you to understand their interplay. The core decision in hypothesis testing revolves around comparing the p-value with ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"))))),". If the p-value is less than or equal to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1")))))," (typically p <= 0.05), then we reject the null hypothesis, stating that the result is statistically significant. On the other hand, if the p-value is more significant than the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1")))))," value, we fail to reject the null hypothesis, implying our results may have arisen due to chance."),(0,s.kt)("p",null,"In an ideal world, these decisions would be straightforward. But as data, we often find our p-values teasingly close to that 0.05 mark, creating an intriguing dilemma which we will explore in the next section."),(0,s.kt)("h2",{id:"when-your-p-value-is-close-to-005"},"When Your p-value Is Close to 0.05"),(0,s.kt)("p",null,"This section focuses on the statistical conundrum that arises when your p-value hovers around the 0.05 mark. This a common dilemma for data scientists and researchers. Why is that so? Well, the threshold of 0.05 is generally accepted as the boundary that separates the \u201cstatistically significant\u201d from the \u201cnot statistically significant\u201d. It is like a statistical-guard standing at the conventional gate of significance."),(0,s.kt)("p",null,"If your p-value comes in neatly below 0.05, you skip happily past the guard, declaring that you have statistically significant results! But what if your p-value is slightly above the 0.05 threshold, say, at 0.052? It\u2019s basically the same, right?"),(0,s.kt)("p",null,"Not so fast! In a strictly statistical sense, a p-value of 0.052 means your results do not cross the threshold to be deemed statistically significant. You can hear the guard rustling in his stance. This is where the dilemma sneaks in. But remember, as a researcher, you should not treat this 0.05 threshold as a hard and fast rule. Statistical significance is not an \u201call or nothing\u201d scenario, and the p-",(0,s.kt)("em",{parentName:"p"},"value is just one piece of the puzzle"),"."),(0,s.kt)("p",null,"Additional factors like the context of the problem, the experiment design, the sample size, and the potential implications of Type I and Type II errors, should all be considered when deciding what your decision should be when your p-value hovers around 0.05."),(0,s.kt)("p",null,"In the next section, we\u2019ll be deep diving into this debate and discuss when to reject or retain the null hypothesis in such borderline cases."),(0,s.kt)("h2",{id:"deciphering-statistical-decisions"},"Deciphering Statistical Decisions"),(0,s.kt)("p",null,"While traditional statistical practice suggests that a p-value greater than 0.05 indicates a lack of statistical significance, is essential to understand that statistical significance is not an all-or-nothing concept. In these situations, it becomes crucial to consider additional factors alongside the p-value."),(0,s.kt)("p",null,"One important consideration is the context of the problem and the implications of Type I and Type II errors. Type I error occurs when we incorrectly reject the null hypothesis, while Type II error occurs when we incorrectly fail to reject the null hypothesis. These errors have different consequences, and their relative impacts determine the appropriate course of action."),(0,s.kt)("p",null,"Another factor to consider is the design and quality of the study. The sample size, statistical power, and potential biases all play a role in the interpretation of the results. A larger sample size increases the power to detect true effects, while biased study designs can lead to conclusions."),(0,s.kt)("p",null,"Additionally, prior knowledge, expert opinion, and practical considerations come into play. These external factors can influence the decision-making process, especially when the p-value is marginal. Consulting domain experts and considering the real-world implications of the research can provide valuable insights for informed decision making."),(0,s.kt)("p",null,"To aid in your decision, conducting sensitivity analyses or exploring alternative statistical approaches can be beneficial. By exploring different statistical techniques or considering different thresholds for significance, you can gain a broader understanding of the robustness of your findings and evaluate the impact of different assumptions."),(0,s.kt)("p",null,"Ultimately, the decision of whether to reject or retain the null hypothesis requires a balanced approach, weighing the statistical evidence alongside other relevant factors. It is important to avoid making hasty conclusions based solely on the p-value, recognizing that statistical significance is just one piece of the puzzle."),(0,s.kt)("p",null,"In the next section, we will bring discussion to life by illustrating practical examples and providing Python code examples to guide your decision-making process."),(0,s.kt)("h2",{id:"python-in-action"},"Python in Action"),(0,s.kt)("p",null,"This section provides a hands-on practical application of the principles discussed so far. We\u2019ll implement some Python code and evaluate our data to gain insights when our p-value is teasingly close to 0.05."),(0,s.kt)("p",null,"First things first, let\u2019s install the necessary Python packages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Shell"',title:'"Shell"'},"pip install scipy numpy statsmodels\n")),(0,s.kt)("h3",{id:"experiment-1"},"Experiment 1"),(0,s.kt)("p",null,"Assuming we have drawn a sample and conducted a test, here is how we can calculate a p-value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},"import scipy.stats as stats\nimport numpy as np\n\n# Set seed for reproducibility\nnp.random.seed(7)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Hypothetical test scores\ntest_scores = np.random.normal(100, 10, 1000)\n\n# Check for normality\n_, p_value_norm = stats.normaltest(test_scores)\nprint(f"p-value for normality: {p_value_norm}")\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"p-value for normality: 0.5458837263512903\n")),(0,s.kt)("p",null,"In this hypothetical scenario, we\u2019re analyzing test scores and checking for normality. If the p-value calculated is around the 0.05 mark, we find ourselves in our previously defined \u201cgray area.\u201d"),(0,s.kt)("p",null,"This juncture is where our previous discussions come into play! Analyzing the p-value against ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1")))))," becomes increasingly relevant as these decisions are ",(0,s.kt)("em",{parentName:"p"},"rarely black and white"),"."),(0,s.kt)("p",null,"While the standard rule is to reject the null hypothesis if the p-value <= 0.05, remember- this decision should not exclusively rely on this comparison. Considering the larger picture, the context, and the practical relevance of Type I or Type II errors can directly influence this decision potentially (as we discussed in previous sections)."),(0,s.kt)("p",null,"We could modify our rule of thumb slightly to adapt to this situation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'alpha = 0.05\n\nif p_value_norm < alpha:\n    print("Null hypothesis is rejected")\nelif p_value_norm == alpha:\n    print("p-value is on borderline, consider other factors!")\nelse:\n    print("Fail to reject null hypothesis")\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Fail to reject null hypothesis\n")),(0,s.kt)("p",null,"While this script follows the traditional p-value <= 0.05 rule to reject the null hypothesis, it also considers the situation if our p-value is at the brink, i.e., exactly 0.05, urging us to consider other factors before making our decision."),(0,s.kt)("h3",{id:"experiment-2"},"Experiment 2"),(0,s.kt)("p",null,"Up until now, we have discussed and implemented a basic hypothetical example. Let\u2019s expand this further."),(0,s.kt)("p",null,"What if we\u2019re looking to carry out a two-sample t-test, which is a statistical test that is used to determine if two population means are equal? Here\u2019s how we could handle it in Python."),(0,s.kt)("p",null,"Firstly, we generate some random data for two groups. These groups have different means, so we expect that the null hypothesis (which states that the group means are equal) would be rejected. We carry out the two-sample t-test using ",(0,s.kt)("inlineCode",{parentName:"p"},"scipy")," library:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'group1_scores = np.random.normal(100, 10, 100)\ngroup2_scores = np.random.normal(105, 10, 100)\n\n_, p_value_ttest = stats.ttest_ind(group1_scores, group2_scores)\nprint(f"p-value from the t-test: {p_value_ttest}")\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"p-value from the t-test: 0.0031876814729812518\n")),(0,s.kt)("p",null,"Let\u2019s test the p-value result against our significance level (",(0,s.kt)("inlineCode",{parentName:"p"},"alpha"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'alpha = 0.05\n\nif p_value_ttest < alpha:\n    print("Null hypothesis is rejected")\nelif p_value_ttest == alpha:\n    print("p-value is on borderline, consider other factors!")\nelse:\n    print("Fail to reject null hypothesis")\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Null hypothesis is rejected\n")),(0,s.kt)("p",null,"As before, if the p-value is below our alpha, we reject the null hypothesis. If it\u2019s exactly at alpha, other factors need to be considered. If above alpha, typically we wouldn\u2019t reject the null hypothesis."),(0,s.kt)("p",null,"One useful advantage of writing the analysis code in this manner is that it allows for the swift execution of these decisions based on a changeable alpha. As a researcher, it helps to see how alterations in your alpha threshold affect the decisions made by our hypothesis tests. After all, the 0.05 mark is a convention, not a universal rule."),(0,s.kt)("p",null,"Remember, selecting an appropriate technique for hypothesis testing and interpreting the p-value in the context of your problem is important. Often, no single statistical method will yield a ",(0,s.kt)("em",{parentName:"p"},"definitive")," answer. Instead, the answer will depend almost entirely on the context","\u2014","what question you\u2019re asking, what data you have, what assumptions you\u2019re willing to make, and what level of uncertainty you\u2019re willing to tolerate."),(0,s.kt)("h3",{id:"experiment-3"},"Experiment 3"),(0,s.kt)("p",null,"We have so far talked about single hypothesis testing where we examine one feature or variable at a time. But what if we want to carry out multiple hypothesis testing? That\u2019s where things can get a bit tricky."),(0,s.kt)("p",null,"The problem with multiple hypothesis testing is with the accumulation of Type I error (false positives). Each test has a chance of producing a false positive, and if you\u2019re testing many hypotheses, the chances of getting at least one false positive increase."),(0,s.kt)("p",null,"One approach to remedy these effects is by adjusting your significance level (",(0,s.kt)("inlineCode",{parentName:"p"},"alpha"),") using techniques like the ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bonferroni_correction"},"Bonferroni correction"),". Let\u2019s implement it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Let\'s assume we are testing 20 hypotheses\nn_tests = 20\n\n# Original alpha value\nalpha = 0.05\n\n# Bonferroni correction\nalpha_new = alpha / n_tests\nprint(f"Adjusted alpha: {alpha_new}")\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Adjusted alpha: 0.0025\n")),(0,s.kt)("p",null,"In our hypothetical situation, we\u2019ve assumed we\u2019re testing 20 hypotheses. The Bonferroni correction simply divides the original alpha (0.05) by the number of tests, effectively reducing our threshold for significance and making it harder to reject the null hypothesis."),(0,s.kt)("p",null,"Now, when comparing p-values to this new threshold, we have:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# List of dummy p-values for illustration\np_values = [0.05, 0.03, 0.1, 0.01, 0.001, 0.0001]\n\nfor index, p in enumerate(p_values):\n    if p < alpha_new:\n        print(f"Test {index+1}: Null hypothesis is rejected.")\n    elif p == alpha_new:\n        print(\n            f"Test {index+1}: p-value is on borderline, consider "\n            "other factors!"\n        )\n    else:\n        print(f"Test {index+1}: Fail to reject null hypothesis.")\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Test 1: Fail to reject null hypothesis.\nTest 2: Fail to reject null hypothesis.\nTest 3: Fail to reject null hypothesis.\nTest 4: Fail to reject null hypothesis.\nTest 5: Null hypothesis is rejected.\nTest 6: Null hypothesis is rejected.\n")),(0,s.kt)("p",null,"The Bonferroni correction helps to ",(0,s.kt)("em",{parentName:"p"},"guard against false positives"),", but it can make it more difficult to detect true effects (increasing Type II errors, or false negatives). As always, it\u2019s crucial to consider these trade-offs when designing an experiment or interpreting results."),(0,s.kt)("h3",{id:"experiment-4"},"Experiment 4"),(0,s.kt)("p",null,"Let\u2019s explore another example invoking regression analysis. This will offer you practical insights into handling continuous variables and interpreting the resulting p-values."),(0,s.kt)("p",null,"Let\u2019s assume we have data on employee satisfaction and the duration they\u2019ve been at the company. We want to see if there\u2019s any significant relationship between \u201cyears at company\u201d and \u201cjob satisfaction.\u201d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Synthetic dataset\ndf = pd.DataFrame(\n    {\n        "YearsAtCompany": np.random.randint(0, 10, 100),\n        "JobSatisfaction": np.random.randint(0, 5, 100),\n    }\n)\n\n# Specify our independent and dependent variables\nX = df["YearsAtCompany"]\ny = df["JobSatisfaction"]\n\n# Add an intercept to the independent variable\nX = sm.add_constant(X)\n\n# Fit the Ordinary Least Squares Model (OLS)\nmodel = sm.OLS(y, X)\nresults = model.fit()\n\n# Summary Statistics\nprint(results.summary())\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"                            OLS Regression Results\n==============================================================================\nDep. Variable:        JobSatisfaction   R-squared:                       0.023\nModel:                            OLS   Adj. R-squared:                  0.013\nMethod:                 Least Squares   F-statistic:                     2.274\nDate:                Tue, 05 Sep 2023   Prob (F-statistic):              0.135\nTime:                        09:59:44   Log-Likelihood:                -184.97\nNo. Observations:                 100   AIC:                             373.9\nDf Residuals:                      98   BIC:                             379.2\nDf Model:                           1\nCovariance Type:            nonrobust\n==================================================================================\n                     coef    std err          t      P>|t|      [0.025      0.975]\n----------------------------------------------------------------------------------\nconst              1.7245      0.288      5.990      0.000       1.153       2.296\nYearsAtCompany     0.0791      0.052      1.508      0.135      -0.025       0.183\n==============================================================================\nOmnibus:                      130.047   Durbin-Watson:                   2.303\nProb(Omnibus):                  0.000   Jarque-Bera (JB):                8.823\nSkew:                          -0.103   Prob(JB):                       0.0121\nKurtosis:                       1.559   Cond. No.                         10.4\n==============================================================================\n\nNotes:\n[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"summary()")," function provides us with a wealth of information. Most importantly, it gives the p-value for each coefficient in the ",(0,s.kt)("inlineCode",{parentName:"p"},"P>|t|")," column."),(0,s.kt)("p",null,"If the p-value is less than or equal to our significance level (0.05), in which case it is, we can conclude that the ",(0,s.kt)("inlineCode",{parentName:"p"},"YearsAtCompany")," is a significant predictor of ",(0,s.kt)("inlineCode",{parentName:"p"},"JobSatisfaction"),". In other words, the number of years an employee has spent at a company significantly impacts his/her job satisfaction","\u2014","an essential insight for business decisions!"),(0,s.kt)("p",null,"Remember to look beyond the p-value","\u2014","the coefficient (",(0,s.kt)("inlineCode",{parentName:"p"},"coef")," column) provides the change in the ",(0,s.kt)("inlineCode",{parentName:"p"},"JobSatisfaction")," variable for each one-unit change in ",(0,s.kt)("inlineCode",{parentName:"p"},"YearsAtCompany"),", while the R-squared value indicates how well our model fits the data. If our p-value hovers around 0.05, it\u2019s then crucial to consider these additional stats for a well-rounded decision."),(0,s.kt)("h2",{id:"striking-a-balance"},"Striking a Balance"),(0,s.kt)("p",null,"After a deep dive into the world of hypothesis testing, handling p-values, and exploring practical Python implementations, it\u2019s time to wrap up. The question remains","\u2014","what should your decision be when your p-value is on a razor\u2019s edge near 0.05?"),(0,s.kt)("p",null,"If there\u2019s one thing to take away, it is this: ",(0,s.kt)("em",{parentName:"p"},"Context is critical"),". It\u2019s easy to be enticed by the strict cut-off p-value of 0.05, but remember, every analysis is more than just a p-value."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Contextual Factors:")," Always consider the study design, the experiment context, and the practical importance of the results. Are the results clinically significant? What implications could false positives or false negatives hold in this context? Are there any real-world consequences to rejecting our null hypothesis? Remember, our ultimate goal is the pursuit of truth, not just the pursuit of statistically significant p-values."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Exploratory and Confirmatory Analyses:")," Often, a more comprehensive view can be obtained by combining both exploratory and confirmatory analyses, where you not only test for predefined effects but also explore unexpected patterns in your data."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Alternative Statistical Approaches:")," There\u2019s often more than one way to statistically approach a problem. For example, Bayesian methods can complement traditional p-value based decision making."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Transparency in Reporting:")," If your p-value is around the 0.05 threshold, report it as it is, alongside other pertinent results (like confidence intervals or effect sizes), and provide an interpretation of the result in the context of your specific study.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Reporting example\np_value = 0.051\n\nreport = f"""\nOur analysis yielded a p-value {p_value:.3f}, which is close to our alpha level\nset at 0.05. Despite its borderline significance, a look at the effect size\nand confidence intervals reveals that our findings hold practical\nsignificance. Here, we discuss these findings in further depth--taking into\naccount the practical implications and real-world context.\n"""\n\nprint(report)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Our analysis yielded a p-value 0.051, which is close to our alpha level\nset at 0.05. Despite its borderline significance, a look at the effect size\nand confidence intervals reveals that our findings hold practical\nsignificance. Here, we discuss these findings in further depth--taking into\naccount the practical implications and real-world context.\n")),(0,s.kt)("p",null,"Together, these array of strategies can help guide your decision when the p-value plays hide and seek with the 0.05 threshold, ensuring you perceive the bigger picture beyond just statistical significance."),(0,s.kt)("p",null,"In conclusion, our goal with data science is not merely to produce p-values for hypothesis tests, but rather to generate accurate insights that can empower practical applications and decision-making."),(0,s.kt)("p",null,"Stay curious. Remember, balance is key!"))}m.isMDXComponent=!0}}]);