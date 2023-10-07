"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9186],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>N});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),l=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},p=function(e){var a=l(e.components);return r.createElement(i.Provider,{value:a},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(t),d=n,N=h["".concat(i,".").concat(d)]||h[d]||c[d]||s;return t?r.createElement(N,m(m({ref:a},p),{},{components:t})):r.createElement(N,m({ref:a},p))}));function N(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,m=new Array(s);m[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[h]="string"==typeof e?e:n,m[1]=o;for(var l=2;l<s;l++)m[l]=t[l];return r.createElement.apply(null,m)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9818:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>m,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(7462),n=(t(7294),t(3905));const s={title:"Logistic Regression Thresholds",tags:["Logistic Regression","Threshold","Machine Learning","Data Science","Classification"]},m="Mastering Logistic Regression Thresholds",o={unversionedId:"misc/thresh-log-regr",id:"misc/thresh-log-regr",title:"Logistic Regression Thresholds",description:"Hey there, data enthusiasts, Pythonistas, and machine learning mavens! Today, we\u2019re diving deep into the intriguing realm of logistic regression thresholds! Buckle up, as we embark on a fun-filled journey to find that elusive sweet spot where true magic happens! \ud83e\uddd9\u200d\u2642\ufe0f",source:"@site/docs/misc/thresh-log-regr.md",sourceDirName:"misc",slug:"/misc/thresh-log-regr",permalink:"/portfolio/docs/misc/thresh-log-regr",draft:!1,tags:[{label:"Logistic Regression",permalink:"/portfolio/docs/tags/logistic-regression"},{label:"Threshold",permalink:"/portfolio/docs/tags/threshold"},{label:"Machine Learning",permalink:"/portfolio/docs/tags/machine-learning"},{label:"Data Science",permalink:"/portfolio/docs/tags/data-science"},{label:"Classification",permalink:"/portfolio/docs/tags/classification"}],version:"current",frontMatter:{title:"Logistic Regression Thresholds",tags:["Logistic Regression","Threshold","Machine Learning","Data Science","Classification"]},sidebar:"tutorialSidebar",previous:{title:"Rich Terminal",permalink:"/portfolio/docs/misc/rich"},next:{title:"Explainable AI",permalink:"/portfolio/docs/misc/xai"}},i={},l=[{value:"What are Thresholds, Anyway?",id:"what-are-thresholds-anyway",level:2},{value:"Escaping the Shackles of the Status Quo",id:"escaping-the-shackles-of-the-status-quo",level:2},{value:"ROC Curve and the Quest for the Optimal Threshold",id:"roc-curve-and-the-quest-for-the-optimal-threshold",level:2},{value:"Precision and Recall",id:"precision-and-recall",level:2},{value:"F1 Score",id:"f1-score",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:l},h="wrapper";function c(e){let{components:a,...s}=e;return(0,n.kt)(h,(0,r.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mastering-logistic-regression-thresholds"},"Mastering Logistic Regression Thresholds"),(0,n.kt)("p",null,"Hey there, data enthusiasts, Pythonistas, and machine learning mavens! Today, we\u2019re diving deep into the intriguing realm of logistic regression thresholds! Buckle up, as we embark on a fun-filled journey to find that elusive sweet spot where true magic happens! \ud83e\uddd9\u200d\u2642\ufe0f"),(0,n.kt)("h2",{id:"what-are-thresholds-anyway"},"What are Thresholds, Anyway?"),(0,n.kt)("p",null,"Let\u2019s begin by demystifying the essence of thresholds in logistic regression. Imagine we have trained a logistic regression model, and now it\u2019s time to make predictions. Instead of yielding hard class labels, logistic regression predicts probabilities","\u2014","the likelihood of an instance belonging to a particular class. But how do we convert probabilities into discrete predictions? Enter the threshold!"),(0,n.kt)("p",null,"The threshold acts as a decision boundary, determining whether the predicted probability belongs to class 0 or class 1. The default threshold is often set at 0.5, where any probability greater than or equal to 0.5 is classified as class 1, and the rest as class 0. Easy, right? But why stick to the mundane \u201c0.5\u201d when we can explore the magical world of threshold tuning?"),(0,n.kt)("h2",{id:"escaping-the-shackles-of-the-status-quo"},"Escaping the Shackles of the Status Quo"),(0,n.kt)("p",null,"Ah, the allure of deviating from the norm! While 0.5 might seem like a sensible choice, life is full of excitement when we dare to explore new horizons! So, when should we consider altering the threshold? Great question!"),(0,n.kt)("p",null,"In the realm of logistic regression, it all boils down to the problem at hand and the trade-offs we\u2019re willing to make. Sometimes, misclassifying one class can have more dire consequences than the other. For instance, in medical diagnoses, misdiagnosing a severe condition could be much costlier than a false positive. In such scenarios, tweaking the threshold can dramatically impact the model\u2019s performance and save the day!"),(0,n.kt)("h2",{id:"roc-curve-and-the-quest-for-the-optimal-threshold"},"ROC Curve and the Quest for the Optimal Threshold"),(0,n.kt)("p",null,"It\u2019s time to embrace the ROC (Receiver Operating Characteristic) curve, our trusty guide in the quest for the optimal threshold! This nifty visualization plots the true positive rate (",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"T"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"P"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"R")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"T"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"P")),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"T"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"P")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"F"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"N")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rm{TPR} = \\rm{TP}/(\\rm{TP}+\\rm{FN})")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"TPR")),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"TP")),(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"/"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"TP")),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"FN")),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))))))),") against the false positive rate (",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"F"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"P"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"R")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"F"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"P")),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"F"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"P")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"T"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"N")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rm{FPR} = \\rm{FP}/(\\rm{FP}+\\rm{TN})")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"FPR")),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"FP")),(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"/"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"FP")),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"TN")),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))))))),") for various threshold values."),(0,n.kt)("p",null,"Imagine yourself on a roller coaster, where you control the threshold knob. As you adjust the threshold, the roller coaster glides along the ROC curve, and you get to observe the TPR and FPR changing in harmony. The point closest to the top-left corner represents the ideal threshold, where we maximize TPR while ",(0,n.kt)("em",{parentName:"p"},"minimizing")," FPR. The index of this point can be calculated as ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Expected 'EOF', got '&' at position 17: \u2026argmax(\\rm{TPR}&\u0332mdash;\\rm{FPR})",style:{color:"#cc0000"}},"\\argmax(\\rm{TPR}&mdash;\\rm{FPR})")),", based on Youden\u2019s J statistic."),(0,n.kt)("p",null,"Let\u2019s get our hands dirty with some Python code to visualize the ROC curve and the best threshold:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'import numpy as np\nimport matplotlib.pyplot as plt\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import roc_curve, roc_auc_score\n\n# Load data\nX, y = load_breast_cancer(return_X_y=True)\n\n# Split data into train and test sets\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.25, random_state=7\n)\n\n# Train the model\nmodel = LogisticRegression(max_iter=2000, random_state=7)\nmodel.fit(X_train, y_train)\n\n# Get predicted probabilities\ny_prob = model.predict_proba(X_test)[:, 1]\n\n# y_test contains true labels and y_prob contains predicted probabilities\nfpr, tpr, thresholds = roc_curve(y_test, y_prob)\nroc_auc = roc_auc_score(y_test, y_prob)\n\n# Find the best threshold based on Youden\'s J statistic\nJ = tpr - fpr\nix = np.argmax(J)\nbest_thresh = thresholds[ix]\n\n# Plot ROC curve\nplt.plot(\n    fpr,\n    tpr,\n    marker="o",\n    markersize=4,\n    color="blue",\n    label=f"ROC Curve (AUC = {roc_auc:.2f})",\n)\nplt.plot([0, 1], [0, 1], color="grey", linestyle="--")\nplt.xlabel("False Positive Rate")\nplt.ylabel("True Positive Rate")\nplt.legend(loc="lower right")\nplt.grid(True)\n\n# Annotate the best threshold\nplt.plot(fpr[ix], tpr[ix], color="red", marker="o", markersize=6)\nplt.annotate(\n    f"Best Threshold={best_thresh:.2f}",\n    xy=(fpr[ix], tpr[ix]),\n    xytext=(fpr[ix] + 0.09, tpr[ix] - 0.18),\n    arrowprops=dict(facecolor="black", shrink=0.15),\n)\nplt.show()\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(2885).Z,width:"567",height:"432"})),(0,n.kt)("p",null,"Also, the following shows the true (",(0,n.kt)("inlineCode",{parentName:"p"},"y_test"),") and predicted (",(0,n.kt)("inlineCode",{parentName:"p"},"y_prob"),") values:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Sorted y_test and y_prob\nsorted_y_test = sorted(y_test)\nsorted_y_prob = sorted(y_prob)\n\n# Plot\nplt.plot(sorted_y_test, "o", markersize=2, color="green")\nplt.plot(sorted_y_prob, "o", markersize=2, color="red", alpha=0.5)\nplt.axhline(y=best_thresh, color="black", linestyle="--")\nplt.annotate(\n    f"Best Threshold={best_thresh:.2f}",\n    xy=(95, best_thresh),\n    xytext=(95, best_thresh - 0.06),\n)\nplt.legend(labels=["y_test", "y_prob"], loc="lower right")\nplt.show()\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(9288).Z,width:"547",height:"413"})),(0,n.kt)("h2",{id:"precision-and-recall"},"Precision and Recall"),(0,n.kt)("p",null,"Allow me to introduce you to these remarkable characters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Precision:")," The connoisseur of correctness. Precision is all about delivering accurate positive predictions. When Precision speaks, you can trust that it\u2019s the real deal. It despises false positives","\u2014","instances we mistakenly label as positive when they\u2019re actually negative."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Recall:")," The advocate of inclusivity. Recall aims to capture as many true positives as possible, even if it means inviting a few false positives to the party. It abhors false negatives","\u2014","instances we mistakenly label as negative when they\u2019re truly positive.")),(0,n.kt)("p",null,"Here\u2019s the thrilling part: Precision and Recall often play a balancing act. As you tweak the threshold, their relationship transforms. Imagine you\u2019re organizing a party. If you\u2019re strict about invitations (high threshold), only a select few VIPs attend, ensuring high Precision. But you might miss out on other potential VIPs (low Recall). On the flip side, with a lenient invitation policy (low threshold), you get more VIPs (high Recall), but a few party crashers (low Precision) might slip in."),(0,n.kt)("p",null,"You must decide the threshold that strikes the perfect balance between Precision and Recall. Sometimes, your problem demands higher Precision (e.g., fraud detection, where false positives are costly), while in other cases, elevated Recall takes the spotlight (e.g., disease screening, where missing true positives is a big no-no)."),(0,n.kt)("p",null,"Let\u2019s calculate the Precision and Recall scores using Python:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'import numpy as np\nfrom sklearn.metrics import precision_score\n\n# Consider a series of threshold values\nthresholds = np.arange(0.05, 1.0, 0.05)\nbest_threshold = 0.0\nbest_precision = 0.0\n\n# Find the best threshold when the precision is maximized\nfor threshold in thresholds:\n    predicted_labels = (y_prob >= threshold).astype(int)\n    precision = precision_score(y_true=y_test, y_pred=predicted_labels)\n    if precision > best_precision:\n        best_threshold = threshold\n        best_precision = precision\n\nprint(f"Best threshold: {best_threshold:.2f}")\nprint(f"Best precision: {best_precision:.2f}")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Best threshold: 0.90\nBest precision: 0.99\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'import numpy as np\nfrom sklearn.metrics import recall_score\n\n# Consider a series of threshold values\nthresholds = np.arange(0.05, 1.0, 0.05)\nbest_threshold = 0.0\nbest_recall = 0.0\n\n# Find the best threshold when the recall is maximized\nfor threshold in thresholds:\n    predicted_labels = (y_prob >= threshold).astype(int)\n    recall = recall_score(y_true=y_test, y_pred=predicted_labels)\n    if recall > best_recall:\n        best_threshold = threshold\n        best_recall = recall\n\nprint(f"Best threshold: {best_threshold:.2f}")\nprint(f"Best recall: {best_recall:.2f}")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Best threshold: 0.05\nBest recall: 1.00\n")),(0,n.kt)("p",null,"But here\u2019s the secret sauce: you don\u2019t have to settle for just one threshold. You can experiment with various thresholds, observe how Precision and Recall perform, and choose the one that resonates with your problem\u2019s heartbeat."),(0,n.kt)("h2",{id:"f1-score"},"F1 Score"),(0,n.kt)("p",null,"The F1 score is like the perfect duet of precision and recall, i.e., ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mn",{parentName:"mrow"},"2"),(0,n.kt)("mo",{parentName:"mrow"},"\u2217"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"p"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"r"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"e"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"c"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"i"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"s"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"i"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"n")),(0,n.kt)("mo",{parentName:"mrow"},"\u2217"),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"r"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"e"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"c"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"a"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"l"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"l")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"p"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"r"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"e"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"c"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"i"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"s"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"i"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"n")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"r"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"e"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"c"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"a"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"l"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"l")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2 * (\\rm{precision} * \\rm{recall}) / (\\rm{precision} + \\rm{recall})")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"precision")),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"recall")),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"/"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"precision")),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathrm"},"recall")),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))))))),". It considers both false positives and false negatives, making it a brilliant metric for imbalanced datasets!"),(0,n.kt)("p",null,"The F1 score reaches its highest value at the threshold that balances precision and recall. We can easily find this threshold using Python:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'import numpy as np\nfrom sklearn.metrics import f1_score\n\n# Consider a series of threshold values\nthresholds = np.arange(0.05, 1.0, 0.05)\nbest_threshold = 0.0\nbest_f1 = 0.0\n\n# Find the best threshold and F1 score\nfor threshold in thresholds:\n    predicted_labels = (y_prob >= threshold).astype(int)\n    f1 = f1_score(y_true=y_test, y_pred=predicted_labels)\n    if f1 > best_f1:\n        best_threshold = threshold\n        best_f1 = f1\n\nprint(f"Best threshold: {best_threshold:.2f}")\nprint(f"Best F1 score: {best_f1:.2f}")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Best threshold: 0.70\nBest F1 score: 0.97\n")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Congratulations, fellow thresholdologists! \ud83c\udf89"),(0,n.kt)("p",null,"You\u2019ve now learned the secret sauce of threshold selection in logistic regression. Whether it\u2019s adjusting the threshold to suit your problem, rocking the ROC curve, or serenading the precision, recall or F1 score, Python is your trusty sidekick in this thrilling adventure!"),(0,n.kt)("p",null,"That\u2019s all for now, folks! Until next time! \ud83d\ude80"))}c.isMDXComponent=!0},9288:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/thresh-best-ad3108241d4d65b6f2afc09c11c097b9.png"},2885:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/thresh-roc-e2299e6f088d8bfc7b818919e8f30280.png"}}]);