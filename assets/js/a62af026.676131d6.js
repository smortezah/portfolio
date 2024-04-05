"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6959],{57567:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var t=r(85893),a=r(11151);const s={title:"Introducing Keras Core",authors:["mori"],tags:["Keras","PyTorch","Jax","Deep Learning","Machine Learning"]},i=void 0,n={permalink:"/portfolio/blog/keras-core",source:"@site/blog/keras-core.md",title:"Introducing Keras Core",description:"Hey there, data enthusiasts! Get ready to witness the revolution in the world of deep learning frameworks with the arrival of Keras Core, a preview version of the future of Keras. By Fall 2023, Keras Core will evolve into Keras 3.0, bringing remarkable advancements to the table. This groundbreaking library is a complete rewrite of the Keras codebase, establishing a modular backend architecture. What does this mean for you? Well, it enables running Keras workflows on various frameworks, starting with TensorFlow, PyTorch, and JAX.",date:"2024-04-05T14:49:00.000Z",formattedDate:"April 5, 2024",tags:[{label:"Keras",permalink:"/portfolio/blog/tags/keras"},{label:"PyTorch",permalink:"/portfolio/blog/tags/py-torch"},{label:"Jax",permalink:"/portfolio/blog/tags/jax"},{label:"Deep Learning",permalink:"/portfolio/blog/tags/deep-learning"},{label:"Machine Learning",permalink:"/portfolio/blog/tags/machine-learning"}],readingTime:4.32,hasTruncateMarker:!0,authors:[{name:"Morteza Hosseini",title:"Data scientist / ML engineer",key:"mori"}],frontMatter:{title:"Introducing Keras Core",authors:["mori"],tags:["Keras","PyTorch","Jax","Deep Learning","Machine Learning"]},unlisted:!1,prevItem:{title:"Advanced Guidelines for ML Model Training",permalink:"/portfolio/blog/guideline-ml"},nextItem:{title:"Why is Parquet format so popular?",permalink:"/portfolio/blog/parquet"}},l={authorsImageUrls:[void 0]},d=[{value:"Why Use Keras Core?",id:"why-use-keras-core",level:2},{value:"Exploring the Main Features of Keras Core",id:"exploring-the-main-features-of-keras-core",level:2},{value:"Empowering Developers with Progressive Disclosure and a Stateless API",id:"empowering-developers-with-progressive-disclosure-and-a-stateless-api",level:2},{value:"The Bottom line",id:"the-bottom-line",level:2}];function c(e){const o={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"Hey there, data enthusiasts! Get ready to witness the revolution in the world of deep learning frameworks with the arrival of Keras Core, a preview version of the future of Keras. By Fall 2023, Keras Core will evolve into Keras 3.0, bringing remarkable advancements to the table. This groundbreaking library is a complete rewrite of the Keras codebase, establishing a modular backend architecture. What does this mean for you? Well, it enables running Keras workflows on various frameworks, starting with TensorFlow, PyTorch, and JAX."}),"\n",(0,t.jsx)(o.p,{children:"Exciting times lie ahead!"}),"\n",(0,t.jsx)(o.h2,{id:"why-use-keras-core",children:"Why Use Keras Core?"}),"\n",(0,t.jsx)(o.p,{children:"But wait, why are they making Keras multi-backend again? Let\u2019s take a quick trip down memory lane. Not too long ago, Keras had the ability to run on multiple backends like Theano, TensorFlow, CNTK, and even MXNet. However, in 2018, they decided to focus exclusively on TensorFlow as other backends discontinued development. But times have changed! Fast forward to 2023, and we see TensorFlow dominating the production ML space with a market share of 55% to 60%. On the other hand, PyTorch has captured the ML research realm with a market share of 40% to 45%. Meanwhile, JAX, although with a smaller market share, has gained recognition from leading players in generative AI. It\u2019s clear that each framework has its strengths and user base. Keras Core enables the users to leverage the power of all three frameworks simultaneously."}),"\n",(0,t.jsx)(o.p,{children:"Say goodbye to framework silos and welcome the new era of multi-framework ML!"}),"\n",(0,t.jsx)(o.h2,{id:"exploring-the-main-features-of-keras-core",children:"Exploring the Main Features of Keras Core"}),"\n",(0,t.jsx)(o.p,{children:"Now that we understand the motivation behind Keras Core, let\u2019s dive into its incredible features."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Always get the best performance for your models:"})," With Keras Core, you can achieve optimal training and inference performance across different hardware platforms. The benchmarks indicate that JAX usually delivers the best performance on GPU, TPU, and CPU. However, results may vary depending on the model, and non-XLA TensorFlow occasionally outperforms on GPU. The beauty of Keras Core lies in its ability to dynamically select the backend that will offer the highest efficiency for your specific model. No code changes required!"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Maximize available ecosystem surface for your models:"})," Keras Core opens up a world of possibilities by allowing you to utilize your models with various ecosystems. Any Keras Core model can be used as a PyTorch ",(0,t.jsx)(o.code,{children:"Module"}),", exported as a TensorFlow ",(0,t.jsx)(o.code,{children:"SavedModel"}),", or instantiated as a stateless JAX function. This flexibility means you can leverage PyTorch ecosystem packages, TensorFlow deployment and production tools (such as TF-Serving, TF.js, and TFLite), and JAX\u2019s large-scale TPU training infrastructure. Write your ",(0,t.jsx)(o.code,{children:"model.py"})," using Keras Core APIs, and unlock access to everything the ML world has to offer."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Maximize distribution for your open-source model releases:"})," If you want to release a pretrained model and make it accessible to as many people as possible, Keras Core is your secret weapon. By implementing your model in Keras Core, you instantly make it usable by anyone, regardless of their framework preference. While implementing in pure TensorFlow or PyTorch limits your reach to roughly half the market, Keras Core doubles your impact at no additional development cost. Get ready to leave a lasting impression!"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Use data pipelines from any source:"})," The versatility of Keras Core shines when it comes to data pipelines. Whether you\u2019re working with ",(0,t.jsx)(o.code,{children:"tf.data.Dataset"})," objects, PyTorch ",(0,t.jsx)(o.code,{children:"DataLoader"})," objects, NumPy arrays, or Pandas dataframes, the Keras Core ",(0,t.jsx)(o.code,{children:"fit()"}),", ",(0,t.jsx)(o.code,{children:"evaluate()"}),", and ",(0,t.jsx)(o.code,{children:"predict()"})," routines seamlessly integrate with all backends. Train a Keras Core + TensorFlow model on a PyTorch ",(0,t.jsx)(o.code,{children:"DataLoader"})," or a Keras Core + PyTorch model on a ",(0,t.jsx)(o.code,{children:"tf.data.Dataset"}),". The choice is yours, and Keras Core adapts effortlessly."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"empowering-developers-with-progressive-disclosure-and-a-stateless-api",children:"Empowering Developers with Progressive Disclosure and a Stateless API"}),"\n",(0,t.jsxs)(o.p,{children:["The Keras team have brought the principle of progressive disclosure of complexity to Keras Core, just like in the existing Keras API. You can start with simple workflows using ",(0,t.jsx)(o.code,{children:"Sequential"})," and ",(0,t.jsx)(o.code,{children:"Functional"})," models, training them with ",(0,t.jsx)(o.code,{children:"fit()"}),". As your needs grow, you can easily customize different components while reusing most of your existing code. Keras Core allows you to maintain a smooth transition without hitting a complexity cliff or requiring a switch to a different set of tools. For instance, you can customize your training loop while leveraging the power of ",(0,t.jsx)(o.code,{children:"fit()"})," by simply overriding the ",(0,t.jsx)(o.code,{children:"train_step"})," method. The possibilities are endless!"]}),"\n",(0,t.jsxs)(o.p,{children:["But that\u2019s not all. Keras Core introduces a new stateless API for layers, models, metrics, and optimizers, catering to functional programming enthusiasts. All stateful objects in Keras now have a stateless API, making them compatible with JAX functions that require full statelessness. Layers and models, optimizers, and metrics provide ",(0,t.jsx)(o.code,{children:"stateless_call()"}),", ",(0,t.jsx)(o.code,{children:"stateless_apply()"}),", ",(0,t.jsx)(o.code,{children:"stateless_update_state()"})," and ",(0,t.jsx)(o.code,{children:"stateless_result()"})," methods, respectively. These methods offer the same functionalities as their stateful counterparts but without any side effects. You can effortlessly use them in your JAX, PyTorch, or TensorFlow workflows, ensuring a smooth and enjoyable development experience."]}),"\n",(0,t.jsx)(o.h2,{id:"the-bottom-line",children:"The Bottom line"}),"\n",(0,t.jsx)(o.p,{children:"It\u2019s time to embrace the future of deep learning frameworks with Keras Core. Unlock the potential of multi-framework ML, achieve top performance, maximize ecosystem compatibility, and enjoy the flexibility of the stateless API. Say goodbye to limitations and hello to boundless possibilities!"}),"\n",(0,t.jsx)(o.p,{children:"Happy coding with Keras Core and may your machine learning endeavors reach new heights!"})]})}function h(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,o,r)=>{r.d(o,{Z:()=>n,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);