"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5699],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=i,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||s;return t?n.createElement(m,r(r({ref:a},p),{},{components:t})):n.createElement(m,r({ref:a},p))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=h;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<s;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9747:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const s={title:"Explainable AI",tags:["XAI","Explainable AI","Machine Learning","ShAP","Data Science"]},r="Explainable AI: The Future of Machine Learning",l={unversionedId:"misc/xai",id:"misc/xai",title:"Explainable AI",description:"What is Explainable AI?",source:"@site/docs/misc/xai.md",sourceDirName:"misc",slug:"/misc/xai",permalink:"/portfolio/docs/misc/xai",draft:!1,tags:[{label:"XAI",permalink:"/portfolio/docs/tags/xai"},{label:"Explainable AI",permalink:"/portfolio/docs/tags/explainable-ai"},{label:"Machine Learning",permalink:"/portfolio/docs/tags/machine-learning"},{label:"ShAP",permalink:"/portfolio/docs/tags/sh-ap"},{label:"Data Science",permalink:"/portfolio/docs/tags/data-science"}],version:"current",frontMatter:{title:"Explainable AI",tags:["XAI","Explainable AI","Machine Learning","ShAP","Data Science"]},sidebar:"tutorialSidebar",previous:{title:"Logistic Regression Thresholds",permalink:"/portfolio/docs/misc/thresh-log-regr"},next:{title:"Web Scraping",permalink:"/portfolio/docs/scrape/"}},o={},c=[{value:"What is Explainable AI?",id:"what-is-explainable-ai",level:2},{value:"Why is Explainable AI Important?",id:"why-is-explainable-ai-important",level:2},{value:"Techniques for Explainable AI",id:"techniques-for-explainable-ai",level:2},{value:"SHAP (SHapley Additive exPlanations)",id:"shap-shapley-additive-explanations",level:3},{value:"Decision Trees",id:"decision-trees",level:3},{value:"Rule-Based Models",id:"rule-based-models",level:3},{value:"Challenges and Future Directions",id:"challenges-and-future-directions",level:2}],p={toc:c},d="wrapper";function u(e){let{components:a,...s}=e;return(0,i.kt)(d,(0,n.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"explainable-ai-the-future-of-machine-learning"},"Explainable AI: The Future of Machine Learning"),(0,i.kt)("h2",{id:"what-is-explainable-ai"},"What is Explainable AI?"),(0,i.kt)("p",null,"Machine learning (ML) is a subfield of artificial intelligence that involves the use of algorithms and statistical models to enable computer systems to learn from data and make predictions or decisions without being explicitly programmed. However, as ML models become more complex, they can become increasingly difficult to interpret. This lack of interpretability can lead to ethical concerns, such as biased decision-making and lack of transparency. For example, an ML model used in healthcare may make a diagnosis based on a set of features, but it may not be clear why the model made that diagnosis or how it arrived at that decision."),(0,i.kt)("p",null,"Explainable AI (XAI) is a field of research that aims to address these concerns by developing ML models that are transparent and interpretable. XAI is becoming increasingly important as ML models are being used in high-stakes applications, such as healthcare and finance. By providing explanations for their decisions and predictions, XAI can help ensure that ML models are fair, transparent, and accountable."),(0,i.kt)("p",null,"XAI seeks to create models that can provide explanations for their decisions and predictions, rather than being treated as a \u201cblack box\u201d. Black box models are ML models that are difficult or impossible to interpret. These models can be highly accurate, but their lack of transparency can lead to ethical concerns, such as biased decision-making and lack of accountability."),(0,i.kt)("p",null,"Explainable AI techniques can be broadly categorized into two types: model-agnostic and model-specific:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Model-agnostic")," techniques can be applied to any machine learning model, regardless of its architecture or complexity. An example of model-agnostic techniques include SHAP (SHapley Additive exPlanations)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Model-specific")," techniques are designed for specific types of ML models. For example, decision trees and rule-based models are inherently interpretable, while deep neural networks are typically considered black box models.")),(0,i.kt)("h2",{id:"why-is-explainable-ai-important"},"Why is Explainable AI Important?"),(0,i.kt)("p",null,"XAI is important for several reasons, including ethical implications, transparency in decision-making, and regulatory compliance."),(0,i.kt)("p",null,"One of the main ethical implications of black box models is the potential for biased decision-making. Black box models can be highly accurate, but their lack of transparency can make it difficult to identify and correct biases in the data or model. This can lead to unfair or discriminatory decisions, such as denying loans or job opportunities to certain groups of people. XAI can help address these ethical concerns by providing transparency and accountability in the decision-making process."),(0,i.kt)("p",null,"Transparency in decision-making is also important for building trust and confidence in the use of ML models. When people understand how a model is making decisions, they are more likely to trust and accept those decisions. This is especially important in high-stakes applications, such as healthcare and finance, where the consequences of a wrong decision can be significant."),(0,i.kt)("p",null,"Finally, regulatory compliance is another reason why XAI is important. In some industries, such as healthcare and finance, there are regulations that require transparency and accountability in decision-making. XAI can help ensure that ML models comply with these regulations and provide the necessary transparency and accountability."),(0,i.kt)("p",null,"Here are some examples of industries where XAI is crucial:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Healthcare:")," In healthcare, machine learning models are used for a variety of tasks, such as diagnosing diseases and predicting patient outcomes. These models can have a significant impact on patient care and outcomes, so it is important to ensure that they are transparent and interpretable. XAI can help healthcare professionals understand how a model is making decisions and provide insights into the underlying factors that contribute to those decisions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Finance:")," In finance, ML models are used for tasks such as fraud detection and credit scoring. These models can have a significant impact on people\u2019s financial lives, so it is important to ensure that they are fair and transparent. XAI can help ensure that these models are not making decisions based on biased or discriminatory factors, and can provide insights into the factors that contribute to a particular decision."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Autonomous Vehicles:")," In the field of autonomous vehicles, machine learning models are used for tasks such as object detection and path planning. These models can have a significant impact on public safety, so it is important to ensure that they are transparent and accountable. XAI can help ensure that these models are making decisions based on factors such as safety and efficiency, and can provide insights into the factors that contribute to a particular decision.")),(0,i.kt)("h2",{id:"techniques-for-explainable-ai"},"Techniques for Explainable AI"),(0,i.kt)("p",null,"There are several popular techniques for explainable AI, including both model-agnostic and model-specific techniques."),(0,i.kt)("h3",{id:"shap-shapley-additive-explanations"},"SHAP (SHapley Additive exPlanations)"),(0,i.kt)("p",null,"SHAP is a model-agnostic technique that provides global explanations for a model\u2019s behavior. It works by assigning each feature an importance value for a given prediction, based on the contribution of that feature to the prediction. SHAP can be used with any machine learning model, regardless of its architecture or complexity."),(0,i.kt)("p",null,"Here\u2019s an example of how to use SHAP in Python:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Shell"',title:'"Shell"'},"pip install shap scikit-learn\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'from sklearn.model_selection import train_test_split\nfrom sklearn.svm import SVC\nimport shap\n\n# Train an SVM classifier\nX_train, X_test, y_train, y_test = train_test_split(\n    *shap.datasets.iris(), test_size=0.2, random_state=0\n)\nsvm = SVC(kernel="rbf", probability=True)\nsvm.fit(X_train, y_train)\n\n# Use Kernel SHAP to explain test set predictions\nexplainer = shap.KernelExplainer(svm.predict_proba, X_train, link="logit")\nshap_values = explainer.shap_values(X_test, nsamples=100)\n\n# Plot the SHAP values for the output of the first instance\nforce = shap.plots.force(\n    base_value=explainer.expected_value[0],\n    shap_values=shap_values[0][0, :],\n    features=X_test.iloc[0, :],\n    link="logit",\n)\n\n# Save the plot to an HTML file\nshap.save_html("shap.html", force)\n\n# Show the plot\nforce\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(1056).Z,width:"1901",height:"147"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pros:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SHAP provides global explanations for a model\u2019s behavior, which can be useful for understanding how a model is making decisions."),(0,i.kt)("li",{parentName:"ul"},"SHAP can be used with any machine learning model.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cons:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SHAP can be computationally expensive, especially for large datasets or complex models."),(0,i.kt)("li",{parentName:"ul"},"SHAP may not provide a complete understanding of a model\u2019s behavior, as it only provides feature importance values for a given prediction.")),(0,i.kt)("h3",{id:"decision-trees"},"Decision Trees"),(0,i.kt)("p",null,"Decision trees are a model-specific technique that are inherently interpretable. They work by recursively partitioning the feature space into smaller regions, based on the values of the features. Each partition corresponds to a decision rule, which can be easily understood by humans."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Shell"',title:'"Shell"'},"pip install scikit-learn\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},"from sklearn.tree import DecisionTreeClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn import tree\n\n# Load iris dataset\niris = load_iris()\n\n# Define features and target\nX = iris.data\ny = iris.target\n\n# Create decision tree classifier\ndt = DecisionTreeClassifier(random_state=42)\ndt.fit(X, y)\n\n# Generate visual representation of decision tree\ntree.plot_tree(\n    dt,\n    feature_names=iris.feature_names,\n    class_names=list(iris.target_names),\n    filled=True,\n)\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(1400).Z,width:"950",height:"482"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pros:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decision trees are inherently interpretable, as they can be represented as a set of rules that can be easily understood by humans."),(0,i.kt)("li",{parentName:"ul"},"Decision trees can be used for both classification and regression problems.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cons:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decision trees can be prone to overfitting, especially for complex problems or datasets with many features."),(0,i.kt)("li",{parentName:"ul"},"Decision trees may not always be the most accurate or efficient model, depending on the complexity of the problem.")),(0,i.kt)("h3",{id:"rule-based-models"},"Rule-Based Models"),(0,i.kt)("p",null,"Rule-based models are a model-specific technique that are similar to decision trees, but are based on a set of if-else statements. Each rule corresponds to a specific condition on the features, and the output is determined by the first rule that is satisfied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Create rule-based model\ndef rule_based_model(X):\n    if X[2] <= 2.45:\n        return 0\n    elif X[3] <= 1.75:\n        if X[2] <= 4.95:\n            if X[3] <= 1.65:\n                return 1\n            else:\n                return 2\n        else:\n            if X[3] <= 1.55:\n                return 1\n            else:\n                return 2\n    else:\n        if X[2] <= 4.85:\n            if X[3] <= 1.65:\n                return 2\n            else:\n                return 1\n        else:\n            return 2\n\n# Test rule-based model\nX_test = [[5.1, 3.5, 1.4, 0.2], [6.2, 3.4, 5.4, 2.3]]\nfor x in X_test:\n    print(f"Input: {x}, Prediction: {rule_based_model(x)}")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: [5.1, 3.5, 1.4, 0.2], Prediction: 0\nInput: [6.2, 3.4, 5.4, 2.3], Prediction: 2\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pros:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rule-based models are inherently interpretable, as they are based on a set of if-else statements that can be easily understood by humans."),(0,i.kt)("li",{parentName:"ul"},"Rule-based models can be useful for problems where the decision-making process can be easily represented as a set of rules.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cons:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rule-based models may not always be the most accurate or efficient model, depending on the complexity of the problem."),(0,i.kt)("li",{parentName:"ul"},"Rule-based models can be difficult to scale to large datasets or complex problems.")),(0,i.kt)("h2",{id:"challenges-and-future-directions"},"Challenges and Future Directions"),(0,i.kt)("p",null,"Implementing explainable AI techniques can be challenging for several reasons, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Technical Complexity:")," Many XAI techniques are complex and require specialized knowledge to implement and interpret. This can make it difficult for non-experts to use and understand these techniques, which can limit their adoption and impact."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Computational Cost:")," Some XAI techniques, such as SHAP, can be computationally expensive, especially for large datasets or complex models. This can make it difficult to use these techniques in real-time applications or on resource-constrained devices."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lack of Standardization:")," There is currently a lack of standardization in the field of XAI, which can make it difficult to compare and evaluate different techniques. This can also make it difficult to ensure that XAI techniques are being used appropriately and effectively.")),(0,i.kt)("p",null,"Despite these challenges, there is ongoing research in the field of XAI that is focused on addressing these challenges and improving the effectiveness and usability of XAI techniques. Here are some examples of current research:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Interpretable Machine Learning: Interpretable machine learning (IML) is a subfield of XAI that focuses on developing machine learning models that are inherently interpretable. This can help address the technical complexity challenge by making it easier for non-experts to understand how a model is making decisions. Some examples of IML techniques include decision trees, rule-based models, and linear models."),(0,i.kt)("li",{parentName:"ul"},"Model-Specific Techniques: Model-specific XAI techniques are focused on developing techniques that are tailored to specific types of models, such as deep neural networks. These techniques can help address the computational cost challenge by optimizing the XAI technique for the specific model architecture. Some examples of model-specific XAI techniques include ",(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1704.02685"},"DeepLIFT")," and ",(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1703.01365"},"Integrated Gradients"),"."),(0,i.kt)("li",{parentName:"ul"},"Standardization Efforts: There are ongoing efforts to standardize XAI techniques and ensure that they are being used appropriately and effectively. For example, the DARPA XAI program is focused on developing XAI techniques that are transparent, explainable, and verifiable. The program is also focused on developing evaluation metrics and standards for XAI techniques.")),(0,i.kt)("p",null,"Looking to the future, XAI has the potential to have a significant impact on society by improving the transparency and accountability of machine learning models. XAI can help address ethical concerns, build trust and confidence, and ensure regulatory compliance. However, there are also potential risks and challenges associated with XAI, such as the potential for malicious actors to exploit XAI techniques for nefarious purposes. It will be important for researchers and practitioners to continue to develop and refine XAI techniques, while also considering the potential risks and challenges associated with these techniques."))}u.isMDXComponent=!0},1400:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/xai-decision-tree-2888324ae84464b3ea4dd515cfd9e9a3.png"},1056:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/xai-shap-f46aac8fa91627ce4fdbba51d522d72a.png"}}]);