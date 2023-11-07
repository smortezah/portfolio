"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9186],{87736:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var n=a(85893),r=a(11151);const t={title:"Logistic Regression Thresholds",description:"Find the optimal threshold for logistic regression",tags:["Logistic Regression","Threshold","Machine Learning","Data Science","Classification"]},i="Mastering Logistic Regression Thresholds",l={id:"misc/thresh-log-regr",title:"Logistic Regression Thresholds",description:"Find the optimal threshold for logistic regression",source:"@site/docs/misc/thresh-log-regr.md",sourceDirName:"misc",slug:"/misc/thresh-log-regr",permalink:"/portfolio/docs/misc/thresh-log-regr",draft:!1,unlisted:!1,tags:[{label:"Logistic Regression",permalink:"/portfolio/docs/tags/logistic-regression"},{label:"Threshold",permalink:"/portfolio/docs/tags/threshold"},{label:"Machine Learning",permalink:"/portfolio/docs/tags/machine-learning"},{label:"Data Science",permalink:"/portfolio/docs/tags/data-science"},{label:"Classification",permalink:"/portfolio/docs/tags/classification"}],version:"current",frontMatter:{title:"Logistic Regression Thresholds",description:"Find the optimal threshold for logistic regression",tags:["Logistic Regression","Threshold","Machine Learning","Data Science","Classification"]},sidebar:"tutorialSidebar",previous:{title:"Automatic Git Commit",permalink:"/portfolio/docs/misc/auto-commit"},next:{title:"Data Privacy",permalink:"/portfolio/docs/privacy/"}},o={},h=[{value:"What are Thresholds, Anyway?",id:"what-are-thresholds-anyway",level:2},{value:"Escaping the Shackles of the Status Quo",id:"escaping-the-shackles-of-the-status-quo",level:2},{value:"ROC Curve and the Quest for the Optimal Threshold",id:"roc-curve-and-the-quest-for-the-optimal-threshold",level:2},{value:"Precision and Recall",id:"precision-and-recall",level:2},{value:"F1 Score",id:"f1-score",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const s={annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"mastering-logistic-regression-thresholds",children:"Mastering Logistic Regression Thresholds"}),"\n",(0,n.jsx)(s.p,{children:"Hey there, data enthusiasts, Pythonistas, and machine learning mavens! Today, we\u2019re diving deep into the intriguing realm of logistic regression thresholds! Buckle up, as we embark on a fun-filled journey to find that elusive sweet spot where true magic happens! \ud83e\uddd9\u200d\u2642\ufe0f"}),"\n",(0,n.jsx)(s.h2,{id:"what-are-thresholds-anyway",children:"What are Thresholds, Anyway?"}),"\n",(0,n.jsx)(s.p,{children:"Let\u2019s begin by demystifying the essence of thresholds in logistic regression. Imagine we have trained a logistic regression model, and now it\u2019s time to make predictions. Instead of yielding hard class labels, logistic regression predicts probabilities\u2014the likelihood of an instance belonging to a particular class. But how do we convert probabilities into discrete predictions? Enter the threshold!"}),"\n",(0,n.jsx)(s.p,{children:"The threshold acts as a decision boundary, determining whether the predicted probability belongs to class 0 or class 1. The default threshold is often set at 0.5, where any probability greater than or equal to 0.5 is classified as class 1, and the rest as class 0. Easy, right? But why stick to the mundane \u201c0.5\u201d when we can explore the magical world of threshold tuning?"}),"\n",(0,n.jsx)(s.h2,{id:"escaping-the-shackles-of-the-status-quo",children:"Escaping the Shackles of the Status Quo"}),"\n",(0,n.jsx)(s.p,{children:"Ah, the allure of deviating from the norm! While 0.5 might seem like a sensible choice, life is full of excitement when we dare to explore new horizons! So, when should we consider altering the threshold? Great question!"}),"\n",(0,n.jsx)(s.p,{children:"In the realm of logistic regression, it all boils down to the problem at hand and the trade-offs we\u2019re willing to make. Sometimes, misclassifying one class can have more dire consequences than the other. For instance, in medical diagnoses, misdiagnosing a severe condition could be much costlier than a false positive. In such scenarios, tweaking the threshold can dramatically impact the model\u2019s performance and save the day!"}),"\n",(0,n.jsx)(s.h2,{id:"roc-curve-and-the-quest-for-the-optimal-threshold",children:"ROC Curve and the Quest for the Optimal Threshold"}),"\n",(0,n.jsxs)(s.p,{children:["It\u2019s time to embrace the ROC (Receiver Operating Characteristic) curve, our trusty guide in the quest for the optimal threshold! This nifty visualization plots the true positive rate (",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"T"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"P"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"R"})]}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"T"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"P"})]}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"T"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"P"})]}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"F"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"N"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]})]})]})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\rm{TPR} = \\rm{TP}/(\\rm{TP}+\\rm{FN})"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"TPR"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"TP"})}),(0,n.jsx)(s.span,{className:"mord mathrm",children:"/"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"TP"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"FN"})}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})]})]})]})]})})]}),") against the false positive rate (",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"F"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"P"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"R"})]}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"F"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"P"})]}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"F"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"P"})]}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"T"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"N"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]})]})]})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\rm{FPR} = \\rm{FP}/(\\rm{FP}+\\rm{TN})"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"FPR"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"FP"})}),(0,n.jsx)(s.span,{className:"mord mathrm",children:"/"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"FP"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"TN"})}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})]})]})]})]})})]}),") for various threshold values."]}),"\n",(0,n.jsxs)(s.p,{children:["Imagine yourself on a roller coaster, where you control the threshold knob. As you adjust the threshold, the roller coaster glides along the ROC curve, and you get to observe the TPR (True Positive Rate) and FPR (False Positive Rate) changing in harmony. The point closest to the top-left corner represents the ideal threshold, where we maximize TPR while ",(0,n.jsx)(s.em,{children:"minimizing"})," FPR. The index of this point can be calculated as ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"arg\u2009max"}),(0,n.jsx)(s.mo,{children:"\u2061"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"T"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"P"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"R"})]}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"F"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"P"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"R"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]})]})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\argmax(\\rm{TPR}-\\rm{FPR})"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(s.span,{className:"mop",children:[(0,n.jsx)(s.span,{className:"mord mathrm",style:{marginRight:"0.01389em"},children:"arg"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathrm",children:"max"})]}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"TPR"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"FPR"})}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})]})]})})]}),", based on Youden\u2019s J statistic."]}),"\n",(0,n.jsx)(s.p,{children:"Let\u2019s get our hands dirty with some Python code to visualize the ROC curve and the best threshold:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",metastring:'title="Python"',children:'import numpy as np\nimport matplotlib.pyplot as plt\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import roc_curve, roc_auc_score\n\n# Load data\nX, y = load_breast_cancer(return_X_y=True)\n\n# Split data into train and test sets\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.25, random_state=7\n)\n\n# Train the model\nmodel = LogisticRegression(max_iter=2000, random_state=7)\nmodel.fit(X_train, y_train)\n\n# Get predicted probabilities\ny_prob = model.predict_proba(X_test)[:, 1]\n\n# y_test contains true labels and y_prob contains predicted probabilities\nfpr, tpr, thresholds = roc_curve(y_test, y_prob)\nroc_auc = roc_auc_score(y_test, y_prob)\n\n# Find the best threshold based on Youden\'s J statistic\nJ = tpr - fpr\nix = np.argmax(J)\nbest_thresh = thresholds[ix]\n\n# Plot ROC curve\nplt.plot(\n    fpr,\n    tpr,\n    marker="o",\n    markersize=4,\n    color="blue",\n    label=f"ROC Curve (AUC = {roc_auc:.2f})",\n)\nplt.plot([0, 1], [0, 1], color="grey", linestyle="--")\nplt.xlabel("False Positive Rate")\nplt.ylabel("True Positive Rate")\nplt.legend(loc="lower right")\nplt.grid(True)\n\n# Annotate the best threshold\nplt.plot(fpr[ix], tpr[ix], color="red", marker="o", markersize=6)\nplt.annotate(\n    f"Best Threshold={best_thresh:.2f}",\n    xy=(fpr[ix], tpr[ix]),\n    xytext=(fpr[ix] + 0.09, tpr[ix] - 0.18),\n    arrowprops=dict(facecolor="black", shrink=0.15),\n)\nplt.show()\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(22885).Z+"",width:"567",height:"432"})}),"\n",(0,n.jsxs)(s.p,{children:["Also, the following shows the true (",(0,n.jsx)(s.code,{children:"y_test"}),") and predicted (",(0,n.jsx)(s.code,{children:"y_prob"}),") values:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",metastring:'title="Python"',children:'# Sorted y_test and y_prob\nsorted_y_test = sorted(y_test)\nsorted_y_prob = sorted(y_prob)\n\n# Plot\nplt.plot(sorted_y_test, "o", markersize=2, color="green")\nplt.plot(sorted_y_prob, "o", markersize=2, color="red", alpha=0.5)\nplt.axhline(y=best_thresh, color="black", linestyle="--")\nplt.annotate(\n    f"Best Threshold={best_thresh:.2f}",\n    xy=(95, best_thresh),\n    xytext=(95, best_thresh - 0.06),\n)\nplt.legend(labels=["y_test", "y_prob"], loc="lower right")\nplt.show()\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(19288).Z+"",width:"547",height:"413"})}),"\n",(0,n.jsx)(s.h2,{id:"precision-and-recall",children:"Precision and Recall"}),"\n",(0,n.jsx)(s.p,{children:"Allow me to introduce you to these remarkable characters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Precision:"})," The connoisseur of correctness. Precision is all about delivering accurate positive predictions. When Precision speaks, you can trust that it\u2019s the real deal. It despises false positives\u2014instances we mistakenly label as positive when they\u2019re actually negative."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Recall:"})," The advocate of inclusivity. Recall aims to capture as many true positives as possible, even if it means inviting a few false positives to the party. It abhors false negatives\u2014instances we mistakenly label as negative when they\u2019re truly positive."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Here\u2019s the thrilling part: Precision and Recall often play a balancing act. As you tweak the threshold, their relationship transforms. Imagine you\u2019re organizing a party. If you\u2019re strict about invitations (high threshold), only a select few VIPs attend, ensuring high Precision. But you might miss out on other potential VIPs (low Recall). On the flip side, with a lenient invitation policy (low threshold), you get more VIPs (high Recall), but a few party crashers (low Precision) might slip in."}),"\n",(0,n.jsx)(s.p,{children:"You must decide the threshold that strikes the perfect balance between Precision and Recall. Sometimes, your problem demands higher Precision (e.g., fraud detection, where false positives are costly), while in other cases, elevated Recall takes the spotlight (e.g., disease screening, where missing true positives is a big no-no)."}),"\n",(0,n.jsx)(s.p,{children:"Let\u2019s calculate the Precision and Recall scores using Python:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",metastring:'title="Python"',children:'import numpy as np\nfrom sklearn.metrics import precision_score\n\n# Consider a series of threshold values\nthresholds = np.arange(0.05, 1.0, 0.05)\nbest_threshold = 0.0\nbest_precision = 0.0\n\n# Find the best threshold when the precision is maximized\nfor threshold in thresholds:\n    predicted_labels = (y_prob >= threshold).astype(int)\n    precision = precision_score(y_true=y_test, y_pred=predicted_labels)\n    if precision > best_precision:\n        best_threshold = threshold\n        best_precision = precision\n\nprint(f"Best threshold: {best_threshold:.2f}")\nprint(f"Best precision: {best_precision:.2f}")\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Best threshold: 0.90\nBest precision: 0.99\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",metastring:'title="Python"',children:'import numpy as np\nfrom sklearn.metrics import recall_score\n\n# Consider a series of threshold values\nthresholds = np.arange(0.05, 1.0, 0.05)\nbest_threshold = 0.0\nbest_recall = 0.0\n\n# Find the best threshold when the recall is maximized\nfor threshold in thresholds:\n    predicted_labels = (y_prob >= threshold).astype(int)\n    recall = recall_score(y_true=y_test, y_pred=predicted_labels)\n    if recall > best_recall:\n        best_threshold = threshold\n        best_recall = recall\n\nprint(f"Best threshold: {best_threshold:.2f}")\nprint(f"Best recall: {best_recall:.2f}")\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Best threshold: 0.05\nBest recall: 1.00\n"})}),"\n",(0,n.jsx)(s.p,{children:"But here\u2019s the secret sauce: you don\u2019t have to settle for just one threshold. You can experiment with various thresholds, observe how Precision and Recall perform, and choose the one that resonates with your problem\u2019s heartbeat."}),"\n",(0,n.jsx)(s.h2,{id:"f1-score",children:"F1 Score"}),"\n",(0,n.jsxs)(s.p,{children:["The F1 score is like the perfect duet of precision and recall, i.e., ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mn,{children:"2"}),(0,n.jsx)(s.mo,{children:"\u2217"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"p"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"r"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"e"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"c"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"i"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"s"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"i"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"o"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"n"})]}),(0,n.jsx)(s.mo,{children:"\u2217"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"r"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"e"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"c"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"a"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"l"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"l"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"p"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"r"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"e"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"c"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"i"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"s"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"i"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"o"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"n"})]}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{mathvariant:"normal",children:"r"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"e"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"c"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"a"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"l"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"l"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]})]})]})]})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"2 * (\\rm{precision} * \\rm{recall}) / (\\rm{precision} + \\rm{recall})"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"2"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"precision"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"recall"})}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mord mathrm",children:"/"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"precision"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord mathrm",children:"recall"})}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})]})]})]})]})]})]}),". It considers both false positives and false negatives, making it a brilliant metric for imbalanced datasets!"]}),"\n",(0,n.jsx)(s.p,{children:"The F1 score reaches its highest value at the threshold that balances precision and recall. We can easily find this threshold using Python:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",metastring:'title="Python"',children:'import numpy as np\nfrom sklearn.metrics import f1_score\n\n# Consider a series of threshold values\nthresholds = np.arange(0.05, 1.0, 0.05)\nbest_threshold = 0.0\nbest_f1 = 0.0\n\n# Find the best threshold and F1 score\nfor threshold in thresholds:\n    predicted_labels = (y_prob >= threshold).astype(int)\n    f1 = f1_score(y_true=y_test, y_pred=predicted_labels)\n    if f1 > best_f1:\n        best_threshold = threshold\n        best_f1 = f1\n\nprint(f"Best threshold: {best_threshold:.2f}")\nprint(f"Best F1 score: {best_f1:.2f}")\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Best threshold: 0.70\nBest F1 score: 0.97\n"})}),"\n",(0,n.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(s.p,{children:"Congratulations, fellow thresholdologists! \ud83c\udf89"}),"\n",(0,n.jsx)(s.p,{children:"You\u2019ve now learned the secret sauce of threshold selection in logistic regression. Whether it\u2019s adjusting the threshold to suit your problem, rocking the ROC curve, or serenading the precision, recall or F1 score, Python is your trusty sidekick in this thrilling adventure!"}),"\n",(0,n.jsx)(s.p,{children:"That\u2019s all for now, folks! Until next time! \ud83d\ude80"})]})}function m(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19288:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/thresh-best-ad3108241d4d65b6f2afc09c11c097b9.png"},22885:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/thresh-roc-e2299e6f088d8bfc7b818919e8f30280.png"},11151:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>i});var n=a(67294);const r={},t=n.createContext(r);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);