export const dictionaryData = [
 {
  "title": "Activation function",
  "category": "Neural Networks",
  "definition": "In artificial neural networks, the activation function of a node is a function that calculates the output of the node based on its individual inputs and their weights. Nontrivial problems can be solved using only a few nodes if the activation function is nonlinear.\nModern activation functions include the logistic (sigmoid) function used in the 2012 speech recognition model developed by Hinton et al; the ReLU used in the 2012 AlexNet computer vision model and in the 2015 ResNet model; and the smooth version of the ReLU, the GELU, which was used in the 2018 BERT model. \n\n\n\n### Technical Discussion & Applications\nAs a pivotal technology within Neural Networks, Activation function allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/activation_function.jpg",
  "imageCitation": "Deep Sparse Rectifier Neural Networks - https://wiki.math.uwaterloo.ca/statwiki/index.php?title=Deep_Sparse_Rectifier_Neural_Networks",
  "defCitations": [
   {
    "source": "Wikipedia: Activation function",
    "url": "https://en.wikipedia.org/wiki/Activation_function"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Activation function",
    "url": "https://paperswithcode.com/method/activation-function"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Deep Sparse Rectifier Neural Networks",
     "url": "http://proceedings.mlr.press/v15/glorot11a/glorot11a.pdf"
    }
   ],
   "code": [
    {
     "title": "PyTorch Activation Functions",
     "url": "https://github.com/pytorch/pytorch/blob/master/torch/nn/modules/activation.py"
    }
   ],
   "tutorials": [
    {
     "title": "Visualizing Activation Functions",
     "url": "https://ml-cheatsheet.readthedocs.io/en/latest/activation_functions.html"
    }
   ],
   "videos": [
    {
     "title": "Activation Functions (Andrew Ng)",
     "url": "https://www.youtube.com/watch?v=Xvg00QnyaIY"
    }
   ]
  },
  "id": "term-0",
  "equation": "f(x) = \\begin{cases} x & \\text{if } x > 0 \\\\ 0 & \\text{otherwise} \\end{cases}",
  "structuredDefinition": {
   "introduction": "Foundational to Neural Networks, **Activation function** serves as the primary mechanism for abstracting complex environmental variables.",
   "technical": "In artificial neural networks, the activation function of a node is a function that calculates the output of the node based on its individual inputs and their weights. Nontrivial problems can be solved using only a few nodes if the activation function is nonlinear.\nModern activation functions include the logistic (sigmoid) function used in the 2012 speech recognition model developed by Hinton et al; the ReLU used in the 2012 AlexNet computer vision model and in the 2015 ResNet model; and the smooth version of the ReLU, the GELU, which was used in the 2018 BERT model.",
   "equationVars": "$f(x)$ is the output of the function. $x$ is the input value (typically the weighted sum of inputs). This specific example defines the ReLU function, returning $x$ if positive, and 0 otherwise.",
   "equationMeaning": "By formalizing these relationships, the formula explains how Activation function maintains stability while processing variable data streams.",
   "useCase": "The adoption of Activation function across various sectors highlights its importance in the global AI ecosystem.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Activation function, showing how data flows from input to result.",
   "origin": "Invented to address the limitations of earlier methods, **Activation function** was formally proposed in *Deep Sparse Rectifier Neural Networks*.",
   "currentTrends": "Modern iterations of Activation function are increasingly concerned with ethical deployment and long-term sustainability."
  },
  "relatedTerms": [
   "term-24",
   "term-34",
   "term-37",
   "term-41",
   "term-4"
  ]
 },
 {
  "title": "Artificial intelligence",
  "category": "General AI",
  "definition": "Artificial intelligence (AI) is the capability of computational systems to perform tasks typically associated with human intelligence, such as learning, reasoning, problem-solving, perception, and decision-making. It is a field of research in engineering, mathematics and computer science that develops and studies methods and software that enable machines to perceive their environment and use learning and intelligence to take actions that maximize their chances of achieving defined goals.\nHigh-profile applications of AI include advanced web search engines, chatbots, virtual assistants, autonomous vehicles, and play and analysis in strategy games (e.g., chess and Go). Since the 2020s, generative AI has become widely available to generate images, audio, and videos from text prompts.\nThe traditional goals of AI research include learning, reasoning, knowledge representation, planning, natural language processing, and perception, as well as support for robotics. To reach these goals, AI researchers have used techniques including state space search and mathematical optimization, formal logic, artificial neural networks, and methods based on statistics, operations research, and economics. AI also draws upon psychology, linguistics, philosophy, neuroscience, and other fields. Some companies, such as OpenAI, Google DeepMind and Meta, aim to create artificial general intelligence (AGI) \u2013 AI that can complete virtually any cognitive task at least as well as a human.\nArtificial intelligence was founded as an academic discipline in 1956, and the field went through multiple cycles of optimism throughout its history, followed by periods of disappointment and loss of funding, known as AI winters. Funding and interest increased substantially after 2012, when graphics processing units began being used to accelerate neural networks, and deep learning outperformed previous AI techniques. This growth accelerated further after 2017 with the transformer architecture. In the 2020s, an AI boom has coincided with advances in generative AI, which allowed for the creation and modification of media. In addition to AI safety and unintended consequences and harms from the use of AI, ethical concerns, AI's long-term effects, and potential existential risks have prompted discussions of AI regulation.\n\n\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Artificial intelligence enhances the scalability of General AI systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/artificial_intelligence.jpg",
  "imageCitation": "mdpi.com Article - https://www.mdpi.com/2076-3417/13/12/7082",
  "defCitations": [
   {
    "source": "Wikipedia: Artificial intelligence",
    "url": "https://en.wikipedia.org/wiki/Artificial_intelligence"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Artificial intelligence",
    "url": "https://paperswithcode.com/method/artificial-intelligence"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Computing Machinery and Intelligence (Turing, 1950)",
     "url": "https://academic.oup.com/mind/article/LIX/236/433/986238"
    }
   ],
   "code": [
    {
     "title": "OpenAI Gym Framework",
     "url": "https://github.com/openai/gym"
    }
   ],
   "tutorials": [
    {
     "title": "AI for Everyone (Andrew Ng)",
     "url": "https://www.coursera.org/learn/ai-for-everyone"
    }
   ],
   "videos": [
    {
     "title": "What is AI? (Crash Course)",
     "url": "https://www.youtube.com/watch?v=a0_lo_GDcFw"
    }
   ]
  },
  "id": "term-1",
  "equation": "AI \\approx \\max_{\\pi} \\mathbb{E} \\left[ \\sum_{t=0}^\\infty \\gamma^t R_t \\right]",
  "structuredDefinition": {
   "introduction": "Foundational to General AI, **Artificial intelligence** serves as the primary mechanism for abstracting complex environmental variables.",
   "technical": "Artificial intelligence (AI) is the capability of computational systems to perform tasks typically associated with human intelligence, such as learning, reasoning, problem-solving, perception, and decision-making. It is a field of research in engineering, mathematics and computer science that develops and studies methods and software that enable machines to perceive their environment and use learning and intelligence to take actions that maximize their chances of achieving defined goals.\nHigh-profile applications of AI include advanced web search engines, chatbots, virtual assistants, autonomous vehicles, and play and analysis in strategy games (e.g., chess and Go). Since the 2020s, generative AI has become widely available to generate images, audio, and videos from text prompts.\nThe traditional goals of AI research include learning, reasoning, knowledge representation, planning, natural language processing, and perception, as well as support for robotics. To reach these goals, AI researchers have used techniques including state space search and mathematical optimization, formal logic, artificial neural networks, and methods based on statistics, operations research, and economics. AI also draws upon psychology, linguistics, philosophy, neuroscience, and other fields.",
   "equationVars": "$\\pi$ denotes the policy or decision-making strategy. $E$ represents the expected value. $\\gamma$ (gamma) is the discount factor for future rewards. $R_t$ is the reward received at time step $t$.",
   "equationMeaning": "Through this algebraic lens, we can see how Artificial intelligence balances accuracy with computational overhead.",
   "useCase": "Engineers deploy Artificial intelligence whenever there is a need for high-performance scaling across massive datasets.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Artificial intelligence, showing how data flows from input to result.",
   "origin": "The roots of **Artificial intelligence** can be traced back to the work of researchers in *Computing Machinery and Intelligence (Turing, 1950)*, who sought to solve specific bottlenecks in General AI.",
   "currentTrends": "Industry leaders are currently exploring how Artificial intelligence can be applied to edge computing for faster local inference.",
   "technical2": "Some companies, such as OpenAI, Google DeepMind and Meta, aim to create artificial general intelligence (AGI) \u2013 AI that can complete virtually any cognitive task at least as well as a human.\nArtificial intelligence was founded as an academic discipline in 1956, and the field went through multiple cycles of optimism throughout its history, followed by periods of disappointment and loss of funding, known as AI winters. Funding and interest increased substantially after 2012, when graphics processing units began being used to accelerate neural networks, and deep learning outperformed previous AI techniques. This growth accelerated further after 2017 with the transformer architecture. In the 2020s, an AI boom has coincided with advances in generative AI, which allowed for the creation and modification of media. In addition to AI safety and unintended consequences and harms from the use of AI, ethical concerns, AI's long-term effects, and potential existential risks have prompted discussions of AI regulation."
  },
  "relatedTerms": [
   "term-5",
   "term-20",
   "term-10",
   "term-15",
   "term-28"
  ]
 },
 {
  "title": "Autoencoder",
  "category": "Generative AI",
  "definition": "An autoencoder is a type of artificial neural network used to learn efficient codings of unlabeled data (unsupervised learning). An autoencoder learns two functions: an encoding function that transforms the input data, and a decoding function that recreates the input data from the encoded representation. The autoencoder learns an efficient representation (encoding) for a set of data, typically for dimensionality reduction, to generate lower-dimensional embeddings for subsequent use by other machine learning algorithms.\nVariants exist which aim to make the learned representations assume useful properties. Examples are regularized autoencoders (sparse, denoising and contractive autoencoders), which are effective in learning representations for subsequent classification tasks, and variational autoencoders, which can be used as generative models. Autoencoders are applied to many problems, including facial recognition, feature detection, anomaly detection, and learning the meaning of words. In terms of data synthesis, autoencoders can also be used to randomly generate new data that is similar to the input (training) data.\n\n\n\n### Technical Discussion & Applications\nThe integration of Autoencoder into standard Generative AI workflows has led to significant gains in both accuracy and efficiency. By optimizing the way systems interpret complex signals, it provides a more robust foundation for autonomous learning.",
  "image": "/images/autoencoder.jpg",
  "imageCitation": "Dimensionality Reduction Method Through Autoencoders - https://quantdare.com/dimensionality-reduction-method-through-autoencoders/",
  "defCitations": [
   {
    "source": "Wikipedia: Autoencoder",
    "url": "https://en.wikipedia.org/wiki/Autoencoder"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Autoencoder",
    "url": "https://paperswithcode.com/method/autoencoder"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Reducing the Dimensionality of Data with Neural Networks (Hinton)",
     "url": "https://www.science.org/doi/10.1126/science.1127647"
    }
   ],
   "code": [
    {
     "title": "Keras Autoencoders",
     "url": "https://github.com/keras-team/keras-io/blob/master/examples/vision/autoencoder.py"
    }
   ],
   "tutorials": [
    {
     "title": "Building Autoencoders in Keras",
     "url": "https://blog.keras.io/building-autoencoders-in-keras.html"
    }
   ],
   "videos": [
    {
     "title": "Autoencoders Explained",
     "url": "https://www.youtube.com/watch?v=Rdpbnd0pCiI"
    }
   ]
  },
  "id": "term-2",
  "equation": "\\mathcal{L}(x, g( f(x))) = \\|x - g( f(x))\\|^2",
  "structuredDefinition": {
   "introduction": "Foundational to Generative AI, **Autoencoder** serves as the primary mechanism for abstracting complex environmental variables.",
   "technical": "An autoencoder is a type of artificial neural network used to learn efficient codings of unlabeled data (unsupervised learning). An autoencoder learns two functions: an encoding function that transforms the input data, and a decoding function that recreates the input data from the encoded representation. The autoencoder learns an efficient representation (encoding) for a set of data, typically for dimensionality reduction, to generate lower-dimensional embeddings for subsequent use by other machine learning algorithms.\nVariants exist which aim to make the learned representations assume useful properties.",
   "equationVars": "$L$ is the reconstruction loss. $x$ is the original input. $f(x)$ is the encoder function mapping to a latent space. $g()$ is the decoder function. $g(f(x))$ is the reconstructed output.",
   "equationMeaning": "The relationship defined here is what allows Autoencoder to converge on optimal solutions in high-dimensional spaces.",
   "useCase": "The versatility of Autoencoder makes it a go-to choice for developers working on low-latency, high-throughput applications.",
   "imageRef": "By mapping out the components of Autoencoder, this visual makes it clear how the hierarchical dependencies work together.",
   "origin": "The arrival of **Autoencoder** in the field of Generative AI was marked by the publication of *Reducing the Dimensionality of Data with Neural Networks (Hinton)*, which provided a new theoretical foundation.",
   "currentTrends": "A major trend in Autoencoder involves the use of self-supervised learning to minimize the need for manual data labeling.",
   "technical2": "Examples are regularized autoencoders (sparse, denoising and contractive autoencoders), which are effective in learning representations for subsequent classification tasks, and variational autoencoders, which can be used as generative models. Autoencoders are applied to many problems, including facial recognition, feature detection, anomaly detection, and learning the meaning of words. In terms of data synthesis, autoencoders can also be used to randomly generate new data that is similar to the input (training) data."
  },
  "relatedTerms": [
   "term-29",
   "term-10",
   "term-41",
   "term-28",
   "term-16"
  ]
 },
 {
  "title": "BERT",
  "category": "NLP",
  "definition": "Bidirectional encoder representations from transformers (BERT) is a language model introduced in October 2018 by researchers at Google. It learns to represent text as a sequence of vectors using self-supervised learning. It uses the encoder-only transformer architecture. BERT dramatically improved the state of the art for large language models. As of 2020, BERT is a ubiquitous baseline in natural language processing (NLP) experiments. \nBERT is trained by masked token prediction and next sentence prediction. With this training, BERT learns contextual, latent representations of tokens in their context, similar to ELMo and GPT-2. It found applications for many natural language processing tasks, such as coreference resolution and polysemy resolution. It improved on ELMo and spawned the study of \"BERTology\", which attempts to interpret what is learned by BERT.\nBERT was originally implemented in the English language at two model sizes, BERTBASE (110 million parameters) and BERTLARGE (340 million parameters). Both were trained on the Toronto BookCorpus (800M words) and English Wikipedia (2,500M words). The weights were released on GitHub. On March 11, 2020, 24 smaller models were released, the smallest being BERTTINY with just 4 million parameters.\n\n\n\n### Technical Discussion & Applications\nIn the rapidly evolving field of NLP, BERT remains a key focus for researchers looking to improve model generalization. Its mathematical elegance is matched by its versatility in solving real-world engineering problems.",
  "image": "/images/bert.jpg",
  "imageCitation": "Bert - https://www.weak-learner.com/blog/2019/08/16/bert/",
  "defCitations": [
   {
    "source": "Wikipedia: BERT (language model)",
    "url": "https://en.wikipedia.org/wiki/BERT_(language_model)"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: BERT",
    "url": "https://paperswithcode.com/method/bert"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "BERT: Pre-training of Deep Bidirectional Transformers",
     "url": "https://arxiv.org/abs/1810.04805"
    }
   ],
   "code": [
    {
     "title": "Google Research BERT",
     "url": "https://github.com/google-research/bert"
    }
   ],
   "tutorials": [
    {
     "title": "A Visual Guide to BERT",
     "url": "https://jalammar.github.io/illustrated-bert/"
    }
   ],
   "videos": [
    {
     "title": "BERT Neural Network Explained",
     "url": "https://www.youtube.com/watch?v=xI0INSTcuis"
    }
   ]
  },
  "id": "term-3",
  "equation": "\\mathcal{L}_{MLM} = - \\sum_{x \\in M} \\log P(x | \\tilde{X})",
  "structuredDefinition": {
   "introduction": "**BERT** represents a critical advancement in NLP, specifically addressing the complexities of modern data processing.",
   "technical": "Bidirectional encoder representations from transformers (BERT) is a language model introduced in October 2018 by researchers at Google. It learns to represent text as a sequence of vectors using self-supervised learning. It uses the encoder-only transformer architecture. BERT dramatically improved the state of the art for large language models. As of 2020, BERT is a ubiquitous baseline in natural language processing (NLP) experiments. \nBERT is trained by masked token prediction and next sentence prediction.",
   "equationVars": "$L_{MLM}$ is the Masked Language Modeling loss. $M$ is the set of masked tokens. $x$ is the original true token. $\\tilde{X}$ is the corrupted sequence with masks. $P$ is the predicted probability.",
   "equationMeaning": "Functionally, this model dictates how BERT interprets features to produce high-confidence predictions.",
   "useCase": "The adoption of BERT across various sectors highlights its importance in the global AI ecosystem.",
   "imageRef": "The diagram highlights the specific architectural choices that make BERT such a powerful tool in modern AI.",
   "origin": "First detailed in *BERT: Pre-training of Deep Bidirectional Transformers*, **BERT** introduced a new perspective on how NLP can be implemented.",
   "currentTrends": "Today, the focus on BERT has shifted toward improving transparency and reducing algorithmic bias.",
   "technical2": "With this training, BERT learns contextual, latent representations of tokens in their context, similar to ELMo and GPT-2. It found applications for many natural language processing tasks, such as coreference resolution and polysemy resolution. It improved on ELMo and spawned the study of \"BERTology\", which attempts to interpret what is learned by BERT.\nBERT was originally implemented in the English language at two model sizes, BERTBASE (110 million parameters) and BERTLARGE (340 million parameters). Both were trained on the Toronto BookCorpus (800M words) and English Wikipedia (2,500M words). The weights were released on GitHub. On March 11, 2020, 24 smaller models were released, the smallest being BERTTINY with just 4 million parameters."
  },
  "relatedTerms": [
   "term-46",
   "term-31",
   "term-17",
   "term-23",
   "term-47"
  ]
 },
 {
  "title": "Batch normalization",
  "category": "Neural Networks",
  "definition": "In artificial neural networks, batch normalization (also known as batch norm) is a normalization technique used to make training faster and more stable by adjusting the inputs to each layer\u2014re-centering them around zero and re-scaling them to a standard size. It was introduced by Sergey Ioffe and Christian Szegedy in 2015.\nExperts still debate why batch normalization works so well. It was initially thought to tackle internal covariate shift, a problem where parameter initialization and changes in the distribution of the inputs of each layer affect the learning rate of the network. However, newer research suggests it doesn\u2019t fix this shift but instead smooths the objective function\u2014a mathematical guide the network follows to improve\u2014enhancing performance. In very deep networks, batch normalization can initially cause a severe gradient explosion\u2014where updates to the network grow uncontrollably large\u2014but this is managed with shortcuts called skip connections in residual networks. Another theory is that batch normalization adjusts data by handling its size and path separately, speeding up training.\n\n\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Batch normalization enhances the scalability of Neural Networks systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/batch_normalization.jpg",
  "imageCitation": "Layers In Artificial Neural Networks Ann - https://www.geeksforgeeks.org/deep-learning/layers-in-artificial-neural-networks-ann/",
  "defCitations": [
   {
    "source": "Wikipedia: Batch normalization",
    "url": "https://en.wikipedia.org/wiki/Batch_normalization"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Batch normalization",
    "url": "https://paperswithcode.com/method/batch-normalization"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Batch Normalization: Accelerating Deep Network Training",
     "url": "https://arxiv.org/abs/1502.03167"
    }
   ],
   "code": [
    {
     "title": "Batch Norm implementation",
     "url": "https://github.com/kuangliu/pytorch-cifar/blob/master/models/resnet.py"
    }
   ],
   "tutorials": [
    {
     "title": "Understanding Batch Normalization",
     "url": "https://towardsdatascience.com/batch-normalization-in-neural-networks-1ac91516821c"
    }
   ],
   "videos": [
    {
     "title": "Batch Normalization (Andrew Ng)",
     "url": "https://www.youtube.com/watch?v=nUUqwFlVkPQ"
    }
   ]
  },
  "id": "term-4",
  "equation": "\\hat{x}_i = \\frac{x_i - \\mu_B}{\\sqrt{\\sigma_B^2 + \\epsilon}} \\gamma + \\beta",
  "structuredDefinition": {
   "introduction": "The concept of **Batch normalization** is essential for understanding how Neural Networks systems achieve high-level performance.",
   "technical": "In artificial neural networks, batch normalization (also known as batch norm) is a normalization technique used to make training faster and more stable by adjusting the inputs to each layer\u2014re-centering them around zero and re-scaling them to a standard size. It was introduced by Sergey Ioffe and Christian Szegedy in 2015.\nExperts still debate why batch normalization works so well. It was initially thought to tackle internal covariate shift, a problem where parameter initialization and changes in the distribution of the inputs of each layer affect the learning rate of the network.",
   "equationVars": "$\\hat{x}_i$ is the normalized value. $x_i$ is the input. $\\mu_B$ is the batch mean. $\\sigma_B^2$ is the batch variance. $\\epsilon$ (epsilon) is a small constant. $\\gamma$ and $\\beta$ are learned scaling and shifting parameters.",
   "equationMeaning": "The relationship defined here is what allows Batch normalization to converge on optimal solutions in high-dimensional spaces.",
   "useCase": "Real-world implementations of Batch normalization often focus on enhancing user experience through personalized data filtering.",
   "imageRef": "The illustration serves to clarify the complex relationships within Batch normalization, making the abstract mathematical concepts more tangible.",
   "origin": "Following its introduction in *Batch Normalization: Accelerating Deep Network Training*, **Batch normalization** quickly became a standard reference for Neural Networks optimization.",
   "currentTrends": "A major trend in Batch normalization involves the use of self-supervised learning to minimize the need for manual data labeling.",
   "technical2": "However, newer research suggests it doesn\u2019t fix this shift but instead smooths the objective function\u2014a mathematical guide the network follows to improve\u2014enhancing performance. In very deep networks, batch normalization can initially cause a severe gradient explosion\u2014where updates to the network grow uncontrollably large\u2014but this is managed with shortcuts called skip connections in residual networks. Another theory is that batch normalization adjusts data by handling its size and path separately, speeding up training."
  },
  "relatedTerms": [
   "term-31",
   "term-41",
   "term-0",
   "term-33",
   "term-37"
  ]
 },
 {
  "title": "Bayesian network",
  "category": "Probabilistic Models",
  "definition": "A Bayesian network (also known as a Bayes network, Bayes net, belief network, or decision network) is a probabilistic graphical model that represents a set of variables and their conditional dependencies via a directed acyclic graph (DAG). While it is one of several forms of causal notation, causal networks are special cases of Bayesian networks. Bayesian networks are ideal for taking an event that occurred and predicting the likelihood that any one of several possible known causes was the contributing factor. For example, a Bayesian network could represent the probabilistic relationships between diseases and symptoms. Given symptoms, the network can be used to compute the probabilities of the presence of various diseases.\nEfficient algorithms can perform inference and learning in Bayesian networks. Bayesian networks that model sequences of variables (e.g. speech signals or protein sequences) are called dynamic Bayesian networks. Generalizations of Bayesian networks that can represent and solve decision problems under uncertainty are called influence diagrams.\n\n\n\n### Technical Discussion & Applications\nThe ongoing refinement of Bayesian network continues to drive progress in Probabilistic Models. As systems become more complex, the role of Bayesian network in maintaining coherence and stability becomes increasingly critical for long-term reliability.",
  "image": "/images/bayesian_network.jpg",
  "imageCitation": "slideshare.net Article - https://www.slideshare.net/slideshow/bayesian-networks-inai/72983038",
  "defCitations": [
   {
    "source": "Wikipedia: Bayesian network",
    "url": "https://en.wikipedia.org/wiki/Bayesian_network"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Bayesian network",
    "url": "https://paperswithcode.com/method/bayesian-network"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Probabilistic Reasoning in Intelligent Systems (Pearl)",
     "url": "https://www.sciencedirect.com/book/9780080514895/probabilistic-reasoning-in-intelligent-systems"
    }
   ],
   "code": [
    {
     "title": "Pgmpy (Probabilistic Graphical Models)",
     "url": "https://github.com/pgmpy/pgmpy"
    }
   ],
   "tutorials": [
    {
     "title": "Bayesian Networks Tutorial",
     "url": "https://pgmpy.org"
    }
   ],
   "videos": [
    {
     "title": "Bayesian Networks (StatQuest)",
     "url": "https://www.youtube.com/watch?v=TuG8EAFlBcE"
    }
   ]
  },
  "id": "term-5",
  "equation": "P(X_1, \\dots, X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))",
  "structuredDefinition": {
   "introduction": "**Bayesian network** represents a critical advancement in Probabilistic Models, specifically addressing the complexities of modern data processing.",
   "technical": "A Bayesian network (also known as a Bayes network, Bayes net, belief network, or decision network) is a probabilistic graphical model that represents a set of variables and their conditional dependencies via a directed acyclic graph (DAG). While it is one of several forms of causal notation, causal networks are special cases of Bayesian networks. Bayesian networks are ideal for taking an event that occurred and predicting the likelihood that any one of several possible known causes was the contributing factor. For example, a Bayesian network could represent the probabilistic relationships between diseases and symptoms.",
   "equationVars": "$P(X_1, \\dots, X_n)$ is the joint probability distribution. $P(X_i \\mid \\text{Parents}(X_i))$ is the conditional probability of node $X_i$ given its direct parent nodes in the directed acyclic graph.",
   "equationMeaning": "The equation serves as the mathematical engine for Bayesian network, governing the way parameters are adjusted during the optimization phase.",
   "useCase": "The adoption of Bayesian network across various sectors highlights its importance in the global AI ecosystem.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Bayesian network, showing how data flows from input to result.",
   "origin": "Following its introduction in *Probabilistic Reasoning in Intelligent Systems (Pearl)*, **Bayesian network** quickly became a standard reference for Probabilistic Models optimization.",
   "currentTrends": "Modern iterations of Bayesian network are increasingly concerned with ethical deployment and long-term sustainability.",
   "technical2": "Given symptoms, the network can be used to compute the probabilities of the presence of various diseases.\nEfficient algorithms can perform inference and learning in Bayesian networks. Bayesian networks that model sequences of variables (e.g. speech signals or protein sequences) are called dynamic Bayesian networks. Generalizations of Bayesian networks that can represent and solve decision problems under uncertainty are called influence diagrams."
  },
  "relatedTerms": [
   "term-20",
   "term-24",
   "term-17",
   "term-28",
   "term-12"
  ]
 },
 {
  "title": "Computer vision",
  "category": "Computer Vision",
  "definition": "Computer vision tasks include methods for acquiring, processing, analyzing, and understanding digital images, and extraction of high-dimensional data from the real world in order to produce numerical or symbolic information, e.g. in the form of decisions. \"Understanding\" in this context signifies the transformation of visual images into descriptions of the world that make sense to thought processes and can elicit appropriate action. This image understanding can be seen as the disentangling of symbolic information from image data using models constructed with the aid of geometry, physics, statistics, and learning theory.\nThe scientific discipline of computer vision is concerned with the theory behind artificial systems that extract information from images. Image data can take many forms, such as video sequences, views from multiple cameras, multi-dimensional data from a 3D scanner, 3D point clouds from LiDaR sensors, or medical scanning devices. The technological discipline of computer vision seeks to apply its theories and models to the construction of computer vision systems.\nSubdisciplines of computer vision include scene reconstruction, object detection, event detection, activity recognition, video tracking, object recognition, 3D pose estimation, learning, indexing, motion estimation, visual servoing, 3D scene modeling, and image restoration.\n\n\n\n### Technical Discussion & Applications\nThe integration of Computer vision into standard Computer Vision workflows has led to significant gains in both accuracy and efficiency. By optimizing the way systems interpret complex signals, it provides a more robust foundation for autonomous learning.",
  "image": "/images/computer_vision.jpg",
  "imageCitation": "Imagenet Classification With Deep Convolutional Neural Networks A Revolution In Computer Vision 82C771Fb25D7 - https://medium.com/@nerminqasimli03/imagenet-classification-with-deep-convolutional-neural-networks-a-revolution-in-computer-vision-82c771fb25d7",
  "defCitations": [
   {
    "source": "Wikipedia: Computer vision",
    "url": "https://en.wikipedia.org/wiki/Computer_vision"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Computer vision",
    "url": "https://paperswithcode.com/method/computer-vision"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "ImageNet Classification with Deep Convolutional Neural Networks",
     "url": "https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf"
    }
   ],
   "code": [
    {
     "title": "OpenCV",
     "url": "https://github.com/opencv/opencv"
    }
   ],
   "tutorials": [
    {
     "title": "Computer Vision Basics",
     "url": "https://docs.opencv.org/master/d6/d00/tutorial_py_root.html"
    }
   ],
   "videos": [
    {
     "title": "Computer Vision Course (Stanford CS231n)",
     "url": "https://www.youtube.com/watch?v=vT1JzLTH4G4"
    }
   ]
  },
  "id": "term-6",
  "equation": " I(x,y) = \\sum_{i} \\sum_{j}  K(i,j) \\cdot  P(x-i, y-j)",
  "structuredDefinition": {
   "introduction": "Recognized as a cornerstone of Computer Vision, **Computer vision** provides the framework for intelligent data processing.",
   "technical": "Computer vision tasks include methods for acquiring, processing, analyzing, and understanding digital images, and extraction of high-dimensional data from the real world in order to produce numerical or symbolic information, e.g. in the form of decisions. \"Understanding\" in this context signifies the transformation of visual images into descriptions of the world that make sense to thought processes and can elicit appropriate action.",
   "equationVars": "$I(x,y)$ is the resulting pixel value at coordinates $(x,y)$. $K$ is the convolution kernel or filter. $P$ is the original image pixel matrix. $i$ and $j$ iterate over the spatial dimensions of the kernel.",
   "equationMeaning": "At its core, the math represents the trade-offs that Computer vision manages to ensure robust convergence.",
   "useCase": "Real-world implementations of Computer vision often focus on enhancing user experience through personalized data filtering.",
   "imageRef": "The illustration serves to clarify the complex relationships within Computer vision, making the abstract mathematical concepts more tangible.",
   "origin": "First detailed in *ImageNet Classification with Deep Convolutional Neural Networks*, **Computer vision** introduced a new perspective on how Computer Vision can be implemented.",
   "currentTrends": "Industry leaders are currently exploring how Computer vision can be applied to edge computing for faster local inference.",
   "technical2": "This image understanding can be seen as the disentangling of symbolic information from image data using models constructed with the aid of geometry, physics, statistics, and learning theory.\nThe scientific discipline of computer vision is concerned with the theory behind artificial systems that extract information from images. Image data can take many forms, such as video sequences, views from multiple cameras, multi-dimensional data from a 3D scanner, 3D point clouds from LiDaR sensors, or medical scanning devices. The technological discipline of computer vision seeks to apply its theories and models to the construction of computer vision systems.\nSubdisciplines of computer vision include scene reconstruction, object detection, event detection, activity recognition, video tracking, object recognition, 3D pose estimation, learning, indexing, motion estimation, visual servoing, 3D scene modeling, and image restoration."
  },
  "relatedTerms": [
   "term-38",
   "term-43",
   "term-27",
   "term-31",
   "term-14"
  ]
 },
 {
  "title": "Convolutional neural network",
  "category": "Deep Learning",
  "definition": "A convolutional neural network (CNN) is a type of feedforward neural network that learns features via filter (or kernel) optimization. This type of deep learning network has been applied to process and make predictions from many different types of data including text, images and audio. CNNs are the de-facto standard in deep learning-based approaches to computer vision and image processing, and have only recently been replaced\u2014in some cases\u2014by newer architectures such as the transformer.\nVanishing gradients and exploding gradients, seen during backpropagation in earlier neural networks, are prevented by the regularization that comes from using shared weights over fewer connections. For example, for each neuron in the fully-connected layer, 10,000 weights would be required for processing an image sized 100 \u00d7 100 pixels. However, applying cascaded convolution (or cross-correlation) kernels, only 25 weights for each convolutional layer are required to process 5x5-sized tiles. Higher-layer features are extracted from wider context windows, compared to lower-layer features.\nSome applications of CNNs include: \n\nimage and video recognition,\nrecommender systems,\nimage classification,\nimage segmentation,\nmedical image analysis,\nnatural language processing,\nbrain\u2013computer interfaces, and\nfinancial time series.\nCNNs are also known as shift invariant or space invariant artificial neural networks, based on the shared-weight architecture of the convolution kernels or filters that slide along input features and provide translation-equivariant responses known as feature maps. Counter-intuitively, most convolutional neural networks are not invariant to translation, due to the downsampling operation they apply to the input.\nFeedforward neural networks are usually fully connected networks, that is, each neuron in one layer is connected to all neurons in the next layer. The \"full connectivity\" of these networks makes them prone to overfitting data. Typical ways of regularization, or preventing overfitting, include: penalizing parameters during training (such as weight decay) or trimming connectivity (skipped connections, dropout, etc.) Robust datasets also increase the probability that CNNs will learn the generalized principles that characterize a given dataset rather than the biases of a poorly-populated set.\nConvolutional networks were inspired by biological processes in that the connectivity pattern between neurons resembles the organization of the animal visual cortex. Individual cortical neurons respond to stimuli only in a restricted region of the visual field known as the receptive field. The receptive fields of different neurons partially overlap such that they cover the entire visual field.\nCNNs use relatively little pre-processing compared to other image classification algorithms. This means that the network learns to optimize the filters (or kernels) through automated learning, whereas in traditional algorithms these filters are hand-engineered. This simplifies and automates the process, enhancing efficiency and scalability overcoming human-intervention bottlenecks.\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Convolutional neural network enhances the scalability of Deep Learning systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/convolutional_neural_network.jpg",
  "imageCitation": "Lenet - https://vitalab.github.io/article/2017/03/29/lenet.html",
  "defCitations": [
   {
    "source": "Wikipedia: Convolutional neural network",
    "url": "https://en.wikipedia.org/wiki/Convolutional_neural_network"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Convolutional neural network",
    "url": "https://paperswithcode.com/method/convolutional-neural-network"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Gradient-based learning applied to document recognition",
     "url": "https://ieeexplore.ieee.org"
    }
   ],
   "code": [
    {
     "title": "TorchVision Models",
     "url": "https://github.com/pytorch/vision"
    }
   ],
   "tutorials": [
    {
     "title": "CS231n: CNNs for Visual Recognition",
     "url": "https://cs231n.github.io/"
    }
   ],
   "videos": [
    {
     "title": "Convolutional Neural Networks (3Blue1Brown)",
     "url": "https://www.youtube.com/watch?v=KuXjwB4LzSA"
    }
   ]
  },
  "id": "term-7",
  "equation": "y = \\sigma(W x + b)",
  "structuredDefinition": {
   "introduction": "Within the broader landscape of Deep Learning, **Convolutional neural network** stands out as a fundamental method for structural optimization.",
   "technical": "A convolutional neural network (CNN) is a type of feedforward neural network that learns features via filter (or kernel) optimization. This type of deep learning network has been applied to process and make predictions from many different types of data including text, images and audio. CNNs are the de-facto standard in deep learning-based approaches to computer vision and image processing, and have only recently been replaced\u2014in some cases\u2014by newer architectures such as the transformer.\nVanishing gradients and exploding gradients, seen during backpropagation in earlier neural networks, are prevented by the regularization that comes from using shared weights over fewer connections. For example, for each neuron in the fully-connected layer, 10,000 weights would be required for processing an image sized 100 \u00d7 100 pixels. However, applying cascaded convolution (or cross-correlation) kernels, only 25 weights for each convolutional layer are required to process 5x5-sized tiles. Higher-layer features are extracted from wider context windows, compared to lower-layer features.\nSome applications of CNNs include: \n\nimage and video recognition,\nrecommender systems,\nimage classification,\nimage segmentation,\nmedical image analysis,\nnatural language processing,\nbrain\u2013computer interfaces, and\nfinancial time series.\nCNNs are also known as shift invariant or space invariant artificial neural networks, based on the shared-weight architecture of the convolution kernels or filters that slide along input features and provide translation-equivariant responses known as feature maps.",
   "equationVars": "$y$ is the output vector. $\\sigma$ (sigma) is the non-linear activation function. $W$ is the learned weight matrix. $x$ is the input feature vector. $b$ is the learned bias term.",
   "equationMeaning": "This mathematical expression encapsulates the internal logic of Convolutional neural network, showing how inputs are mapped to targeted outputs.",
   "useCase": "The versatility of Convolutional neural network makes it a go-to choice for developers working on low-latency, high-throughput applications.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Convolutional neural network, showing how data flows from input to result.",
   "origin": "The arrival of **Convolutional neural network** in the field of Deep Learning was marked by the publication of *Gradient-based learning applied to document recognition*, which provided a new theoretical foundation.",
   "currentTrends": "The cutting edge of Convolutional neural network involves integrating it with generative architectures to create more adaptive systems.",
   "technical2": "Counter-intuitively, most convolutional neural networks are not invariant to translation, due to the downsampling operation they apply to the input.\nFeedforward neural networks are usually fully connected networks, that is, each neuron in one layer is connected to all neurons in the next layer. The \"full connectivity\" of these networks makes them prone to overfitting data. Typical ways of regularization, or preventing overfitting, include: penalizing parameters during training (such as weight decay) or trimming connectivity (skipped connections, dropout, etc.) Robust datasets also increase the probability that CNNs will learn the generalized principles that characterize a given dataset rather than the biases of a poorly-populated set.\nConvolutional networks were inspired by biological processes in that the connectivity pattern between neurons resembles the organization of the animal visual cortex. Individual cortical neurons respond to stimuli only in a restricted region of the visual field known as the receptive field. The receptive fields of different neurons partially overlap such that they cover the entire visual field.\nCNNs use relatively little pre-processing compared to other image classification algorithms. This means that the network learns to optimize the filters (or kernels) through automated learning, whereas in traditional algorithms these filters are hand-engineered. This simplifies and automates the process, enhancing efficiency and scalability overcoming human-intervention bottlenecks."
  },
  "relatedTerms": [
   "term-27",
   "term-42",
   "term-35",
   "term-32",
   "term-38"
  ]
 },
 {
  "title": "Cross-validation",
  "category": "Model Evaluation",
  "definition": "Cross-validation, sometimes called rotation estimation or out-of-sample testing, is any of various similar model validation techniques for assessing how the results of a statistical analysis will generalize to an independent data set.\nCross-validation includes resampling and sample splitting methods that use different portions of the data to test and train a model on different iterations. It is often used in settings where the goal is prediction, and one wants to estimate how accurately a predictive model will perform in practice. It can also be used to assess the quality of a fitted model and the stability of its parameters.\nIn a prediction problem, a model is usually given a dataset of known data on which training is run (training dataset), and a dataset of unknown data (or first seen data) against which the model is tested (called the validation dataset or testing set). The goal of cross-validation is to test the model's ability to predict new data that was not used in estimating it, in order to flag problems like overfitting or selection bias and to give an insight on how the model will generalize to an independent dataset (i.e., an unknown dataset, for instance from a real problem).\nOne round of cross-validation involves partitioning a sample of data into complementary subsets, performing the analysis on one subset (called the training set), and validating the analysis on the other subset (called the validation set or testing set). To reduce variability, in most methods multiple rounds of cross-validation are performed using different partitions, and the validation results are combined (e.g. averaged) over the rounds to give an estimate of the model's predictive performance.\nIn summary, cross-validation combines (averages) measures of fitness in prediction to derive a more accurate estimate of model prediction performance.\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Cross-validation enhances the scalability of Model Evaluation systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/cross-validation.jpg",
  "imageCitation": "Cross Validation Explained - https://www.sharpsightlabs.com/blog/cross-validation-explained/",
  "defCitations": [
   {
    "source": "Wikipedia: Cross-validation (statistics)",
    "url": "https://en.wikipedia.org/wiki/Cross-validation_(statistics)"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Cross-validation",
    "url": "https://paperswithcode.com/method/cross-validation"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Cross-validatory choice and assessment of statistical predictions",
     "url": "https://rss.onlinelibrary.wiley.com/doi/10.1111/j.2517-6161.1974.tb00994.x"
    }
   ],
   "code": [
    {
     "title": "Scikit-Learn Model Selection",
     "url": "https://github.com/scikit-learn/scikit-learn/tree/main/sklearn/model_selection"
    }
   ],
   "tutorials": [
    {
     "title": "Cross-Validation Basics",
     "url": "https://scikit-learn.org/stable/modules/cross_validation.html"
    }
   ],
   "videos": [
    {
     "title": "Cross Validation (StatQuest)",
     "url": "https://www.youtube.com/watch?v=fSytzGwwBVw"
    }
   ]
  },
  "id": "term-8",
  "equation": " CV_{(K)} = \\frac{1}{K} \\sum_{k=1}^K \\text{MSE}_k",
  "structuredDefinition": {
   "introduction": "Recognized as a cornerstone of Model Evaluation, **Cross-validation** provides the framework for intelligent data processing.",
   "technical": "Cross-validation, sometimes called rotation estimation or out-of-sample testing, is any of various similar model validation techniques for assessing how the results of a statistical analysis will generalize to an independent data set.\nCross-validation includes resampling and sample splitting methods that use different portions of the data to test and train a model on different iterations. It is often used in settings where the goal is prediction, and one wants to estimate how accurately a predictive model will perform in practice. It can also be used to assess the quality of a fitted model and the stability of its parameters.\nIn a prediction problem, a model is usually given a dataset of known data on which training is run (training dataset), and a dataset of unknown data (or first seen data) against which the model is tested (called the validation dataset or testing set).",
   "equationVars": "$CV_{(K)}$ is the cross-validation error estimate. $K$ is the number of folds. $MSE_k$ is the Mean Squared Error computed on the $k$-th hold-out validation fold.",
   "equationMeaning": "This mathematical expression encapsulates the internal logic of Cross-validation, showing how inputs are mapped to targeted outputs.",
   "useCase": "The adoption of Cross-validation across various sectors highlights its importance in the global AI ecosystem.",
   "imageRef": "Examining the components within the image helps visualize how Cross-validation manages various input layers.",
   "origin": "Invented to address the limitations of earlier methods, **Cross-validation** was formally proposed in *Cross-validatory choice and assessment of statistical predictions*.",
   "currentTrends": "Modern iterations of Cross-validation are increasingly concerned with ethical deployment and long-term sustainability.",
   "technical2": "The goal of cross-validation is to test the model's ability to predict new data that was not used in estimating it, in order to flag problems like overfitting or selection bias and to give an insight on how the model will generalize to an independent dataset (i.e., an unknown dataset, for instance from a real problem).\nOne round of cross-validation involves partitioning a sample of data into complementary subsets, performing the analysis on one subset (called the training set), and validating the analysis on the other subset (called the validation set or testing set). To reduce variability, in most methods multiple rounds of cross-validation are performed using different partitions, and the validation results are combined (e.g. averaged) over the rounds to give an estimate of the model's predictive performance.\nIn summary, cross-validation combines (averages) measures of fitness in prediction to derive a more accurate estimate of model prediction performance."
  },
  "relatedTerms": [
   "term-33",
   "term-25",
   "term-26",
   "term-21",
   "term-42"
  ]
 },
 {
  "title": "Decision tree",
  "category": "Supervised Learning",
  "definition": "A decision tree is a decision support recursive partitioning structure that uses a tree-like model of decisions and their possible consequences, including chance event outcomes, resource costs, and utility. It is one way to display an algorithm that only contains conditional control statements.\nDecision trees are commonly used in operations research, specifically in decision analysis, to help identify a strategy most likely to reach a goal, but are also a popular tool in machine learning.\n\n\n\n### Technical Discussion & Applications\nIn the rapidly evolving field of Supervised Learning, Decision tree remains a key focus for researchers looking to improve model generalization. Its mathematical elegance is matched by its versatility in solving real-world engineering problems.",
  "image": "/images/decision_tree.jpg",
  "imageCitation": "Decision Trees - https://365datascience.com/tutorials/machine-learning-tutorials/decision-trees/",
  "defCitations": [
   {
    "source": "Wikipedia: Decision tree",
    "url": "https://en.wikipedia.org/wiki/Decision_tree"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Decision tree",
    "url": "https://paperswithcode.com/method/decision-tree"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Induction of Decision Trees (Quinlan)",
     "url": "https://link.springer.com/article/10.1007/BF00116251"
    }
   ],
   "code": [
    {
     "title": "Scikit-Learn Decision Trees",
     "url": "https://github.com/scikit-learn/scikit-learn/tree/main/sklearn/tree"
    }
   ],
   "tutorials": [
    {
     "title": "Decision Trees in Python",
     "url": "https://realpython.com"
    }
   ],
   "videos": [
    {
     "title": "Decision Trees (StatQuest)",
     "url": "https://www.youtube.com/watch?v=7VeUPuVNj6I"
    }
   ]
  },
  "id": "term-9",
  "equation": "\\text{Gain}(S, A) = \\text{Entropy}(S) - \\sum_{v \\in \\text{Values}(A)} \\frac{|S_v|}{|S|} \\text{Entropy}(S_v)",
  "structuredDefinition": {
   "introduction": "As a key element in Supervised Learning, **Decision tree** plays a vital role in transforming raw data into actionable intelligence.",
   "technical": "A decision tree is a decision support recursive partitioning structure that uses a tree-like model of decisions and their possible consequences, including chance event outcomes, resource costs, and utility. It is one way to display an algorithm that only contains conditional control statements.\nDecision trees are commonly used in operations research, specifically in decision analysis, to help identify a strategy most likely to reach a goal, but are also a popular tool in machine learning.",
   "equationVars": "$\\text{Gain}(S, A)$ is the information gain of splitting set $S$ using attribute $A$. $\\text{Entropy}(S)$ is the impurity of the current set. $S_v$ is the subset of $S$ where attribute $A$ has value $v$.",
   "equationMeaning": "At its core, the math represents the trade-offs that Decision tree manages to ensure robust convergence.",
   "useCase": "The versatility of Decision tree makes it a go-to choice for developers working on low-latency, high-throughput applications.",
   "imageRef": "The provided diagram offers a visual roadmap of Decision tree, detailing the specific nodes and connections that drive the process.",
   "origin": "Developed as a response to Supervised Learning challenges, **Decision tree** was first popularized in *Induction of Decision Trees (Quinlan)*.",
   "currentTrends": "Researchers are currently investigating how Decision tree can be made more efficient through hardware-aware optimizations."
  },
  "relatedTerms": [
   "term-25",
   "term-42",
   "term-30",
   "term-2",
   "term-26"
  ]
 },
 {
  "title": "Deep learning",
  "category": "General AI",
  "definition": "In machine learning, deep learning (DL) focuses on utilizing multilayered neural networks to perform tasks such as classification, regression, and representation learning. The field takes inspiration from biological neuroscience and revolves around stacking artificial neurons into layers and \"training\" them to process data. The adjective \"deep\" refers to the use of multiple layers (ranging from three to several hundred or thousands) in the network. Methods used can be supervised, semi-supervised or unsupervised.\nSome common deep learning network architectures include fully connected networks, deep belief networks, recurrent neural networks, convolutional neural networks, generative adversarial networks, transformers, and neural radiance fields. These architectures have been applied to fields including computer vision, speech recognition, natural language processing, machine translation, bioinformatics, drug design, medical image analysis, climate science, material inspection and board game programs, where they have produced results comparable to and in some cases surpassing human expert performance.\nEarly forms of neural networks were inspired by information processing and distributed communication nodes in biological systems, particularly the human brain. However, current neural networks do not intend to model the brain function of organisms, and are generally seen as low-quality models for that purpose.\n\n\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Deep learning enhances the scalability of General AI systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/deep_learning.jpg",
  "imageCitation": "Deap Learning Archi - https://technozi-learning.blogspot.com/2023/01/deap-learning-archi.html",
  "defCitations": [
   {
    "source": "Wikipedia: Deep learning",
    "url": "https://en.wikipedia.org/wiki/Deep_learning"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Deep learning",
    "url": "https://paperswithcode.com/method/deep-learning"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Deep Learning (LeCun, Bengio, Hinton)",
     "url": "https://www.nature.com/articles/nature14539"
    }
   ],
   "code": [
    {
     "title": "PyTorch Framework",
     "url": "https://github.com/pytorch/pytorch"
    }
   ],
   "tutorials": [
    {
     "title": "Deep Learning Specialization",
     "url": "https://www.deeplearning.ai/courses/deep-learning-specialization/"
    }
   ],
   "videos": [
    {
     "title": "Deep Learning Crash Course",
     "url": "https://www.youtube.com/watch?v=aircAruvnKk"
    }
   ]
  },
  "id": "term-10",
  "equation": " f(x) = f^{(L)}(f^{(L-1)}(\\dots f^{(1)}(x) \\dots))",
  "structuredDefinition": {
   "introduction": "The emergence of **Deep learning** has significantly altered the trajectory of General AI by introducing more efficient learning paradigms.",
   "technical": "In machine learning, deep learning (DL) focuses on utilizing multilayered neural networks to perform tasks such as classification, regression, and representation learning. The field takes inspiration from biological neuroscience and revolves around stacking artificial neurons into layers and \"training\" them to process data. The adjective \"deep\" refers to the use of multiple layers (ranging from three to several hundred or thousands) in the network.",
   "equationVars": "$f(x)$ represents the final output of the network. $f^{(L)}$ denotes the mathematical operation at the $L$-th layer. $x$ is the initial input vector. The nested structure illustrates the hierarchical, multi-layered processing.",
   "equationMeaning": "The relationship defined here is what allows Deep learning to converge on optimal solutions in high-dimensional spaces.",
   "useCase": "Real-world implementations of Deep learning often focus on enhancing user experience through personalized data filtering.",
   "imageRef": "The diagram highlights the specific architectural choices that make Deep learning such a powerful tool in modern AI.",
   "origin": "Developed as a response to General AI challenges, **Deep learning** was first popularized in *Deep Learning (LeCun, Bengio, Hinton)*.",
   "currentTrends": "Researchers are currently investigating how Deep learning can be made more efficient through hardware-aware optimizations.",
   "technical2": "Methods used can be supervised, semi-supervised or unsupervised.\nSome common deep learning network architectures include fully connected networks, deep belief networks, recurrent neural networks, convolutional neural networks, generative adversarial networks, transformers, and neural radiance fields. These architectures have been applied to fields including computer vision, speech recognition, natural language processing, machine translation, bioinformatics, drug design, medical image analysis, climate science, material inspection and board game programs, where they have produced results comparable to and in some cases surpassing human expert performance.\nEarly forms of neural networks were inspired by information processing and distributed communication nodes in biological systems, particularly the human brain. However, current neural networks do not intend to model the brain function of organisms, and are generally seen as low-quality models for that purpose."
  },
  "relatedTerms": [
   "term-16",
   "term-28",
   "term-32",
   "term-1",
   "term-24"
  ]
 },
 {
  "title": "Dropout",
  "category": "Regularization",
  "definition": "Dropout and dilution (also called DropConnect) are regularization techniques for reducing overfitting in artificial neural networks by preventing complex co-adaptations on training data. They are an efficient way of performing model averaging with neural networks. Dilution refers to randomly decreasing weights towards zero, while dropout refers to randomly setting the outputs of hidden neurons to zero. Both are usually performed during the training process of a neural network, not during inference.\n\n### Technical Discussion & Applications\nThe ongoing refinement of Dropout continues to drive progress in Regularization. As systems become more complex, the role of Dropout in maintaining coherence and stability becomes increasingly critical for long-term reliability.",
  "image": "/images/dropout.jpg",
  "imageCitation": "Optimizing Neural Networks Tensorflow - https://www.aiclouddatapulse.com/optimizing-neural-networks-tensorflow/",
  "defCitations": [
   {
    "source": "Wikipedia: Dilution (neural networks)",
    "url": "https://en.wikipedia.org/wiki/Dilution_(neural_networks)"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Dropout",
    "url": "https://paperswithcode.com/method/dropout"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Dropout: A Simple Way to Prevent Neural Networks from Overfitting",
     "url": "https://jmlr.org/papers/v15/srivastava14a.html"
    }
   ],
   "code": [
    {
     "title": "Dropout in Keras",
     "url": "https://github.com/topics/machine-learning"
    }
   ],
   "tutorials": [
    {
     "title": "How to use Dropout",
     "url": "https://machinelearningmastery.com/dropout-for-regularizing-deep-neural-networks/"
    }
   ],
   "videos": [
    {
     "title": "Dropout Regularization (DeepLearningAI)",
     "url": "https://www.youtube.com/watch?v=ARq74QuavAo"
    }
   ]
  },
  "id": "term-11",
  "equation": "y = f(W \\cdot (\\mathbf{r} * \\mathbf{x}) + b)",
  "structuredDefinition": {
   "introduction": "**Dropout** represents a critical advancement in Regularization, specifically addressing the complexities of modern data processing.",
   "technical": "Dropout and dilution (also called DropConnect) are regularization techniques for reducing overfitting in artificial neural networks by preventing complex co-adaptations on training data. They are an efficient way of performing model averaging with neural networks.",
   "equationVars": "$y$ is the layer output. $f$ is the activation function. $W$ is the weight matrix. $r$ is a binary mask vector (0s and 1s) drawn from a Bernoulli distribution. $x$ is the input vector. $b$ is the bias.",
   "equationMeaning": "Through this algebraic lens, we can see how Dropout balances accuracy with computational overhead.",
   "useCase": "Real-world implementations of Dropout often focus on enhancing user experience through personalized data filtering.",
   "imageRef": "The graphic breakdown of Dropout helps demystify the internal mechanics that allow the model to learn effectively.",
   "origin": "The legacy of **Dropout** began with *Dropout: A Simple Way to Prevent Neural Networks from Overfitting*, a paper that is now considered essential reading for anyone in Regularization.",
   "currentTrends": "Current work in Dropout is heavily influenced by the rise of transformer-based architectures and their scalability.",
   "technical2": "Dilution refers to randomly decreasing weights towards zero, while dropout refers to randomly setting the outputs of hidden neurons to zero. Both are usually performed during the training process of a neural network, not during inference."
  },
  "relatedTerms": [
   "term-44",
   "term-40",
   "term-12",
   "term-24",
   "term-42"
  ]
 },
 {
  "title": "Elastic net regularization",
  "category": "Regularization",
  "definition": "In statistics and, in particular, in the fitting of linear or logistic regression models, the elastic net is a regularized regression method that linearly combines the L1 and L2 penalties of the lasso and ridge methods.\nNevertheless, elastic net regularization is typically more accurate than both methods with regard to reconstruction.\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Elastic net regularization enhances the scalability of Regularization systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/elastic_net_regularization.jpg",
  "imageCitation": "Elastic Net Regularization Complete Guide Mathematical Foundations Python Implementation - https://mbrenndoerfer.com/writing/elastic-net-regularization-complete-guide-mathematical-foundations-python-implementation",
  "defCitations": [
   {
    "source": "Wikipedia: Elastic net regularization",
    "url": "https://en.wikipedia.org/wiki/Elastic_net_regularization"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Elastic net regularization",
    "url": "https://paperswithcode.com/method/elastic-net-regularization"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Regularization and variable selection via the elastic net",
     "url": "https://rss.onlinelibrary.wiley.com/doi/10.1111/j.1467-9868.2005.00503.x"
    }
   ],
   "code": [
    {
     "title": "Elastic Net Scikit-Learn",
     "url": "https://github.com/scikit-learn/scikit-learn/blob/main/sklearn/linear_model/_coordinate_descent.py"
    }
   ],
   "tutorials": [
    {
     "title": "Elastic Net Guide",
     "url": "https://machinelearningmastery.com/elastic-net-regression-in-python/"
    }
   ],
   "videos": [
    {
     "title": "Elastic Net (StatQuest)",
     "url": "https://www.youtube.com/watch?v=1dKRdX9bfIo"
    }
   ]
  },
  "id": "term-12",
  "equation": "\\min_{\\beta} \\left\\{ \\frac{1}{2N} \\|y - X\\beta\\|^2_2 + \\lambda_1 \\|\\beta\\|_1 + \\frac{\\lambda_2}{2} \\|\\beta\\|^2_2 \\right\\}",
  "structuredDefinition": {
   "introduction": "Recognized as a cornerstone of Regularization, **Elastic net regularization** provides the framework for intelligent data processing.",
   "technical": "In statistics and, in particular, in the fitting of linear or logistic regression models, the elastic net is a regularized regression method that linearly combines the L1 and L2 penalties of the lasso and ridge methods.\nNevertheless, elastic net regularization is typically more accurate than both methods with regard to reconstruction.",
   "equationVars": "$\\beta$ represents the model coefficients. $N$ is the number of samples. $\\lambda_1$ is the L1 penalty strength (promoting sparsity). $\\lambda_2$ is the L2 penalty strength (preventing large weights).",
   "equationMeaning": "The relationship defined here is what allows Elastic net regularization to converge on optimal solutions in high-dimensional spaces.",
   "useCase": "Engineers deploy Elastic net regularization whenever there is a need for high-performance scaling across massive datasets.",
   "imageRef": "The diagram highlights the specific architectural choices that make Elastic net regularization such a powerful tool in modern AI.",
   "origin": "Following its introduction in *Regularization and variable selection via the elastic net*, **Elastic net regularization** quickly became a standard reference for Regularization optimization.",
   "currentTrends": "Today, the focus on Elastic net regularization has shifted toward improving transparency and reducing algorithmic bias."
  },
  "relatedTerms": [
   "term-24",
   "term-7",
   "term-8",
   "term-40",
   "term-11"
  ]
 },
 {
  "title": "Ensemble learning",
  "category": "Ensemble Learning",
  "definition": "In statistics and machine learning, ensemble methods use multiple learning algorithms to obtain better predictive performance than could be obtained from any of the constituent learning algorithms alone.\nUnlike a statistical ensemble in statistical mechanics, which is usually infinite, a machine learning ensemble consists of only a concrete finite set of alternative models, but typically allows for much more flexible structure to exist among those alternatives.\n\n\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Ensemble learning enhances the scalability of Ensemble Learning systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/ensemble_learning.jpg",
  "imageCitation": "How To Build A Strong Ml Model Using Weaker Models The Power Of Ensemble Learning E72A9D1308F2 - https://medium.com/@arushi.sthapak2003/how-to-build-a-strong-ml-model-using-weaker-models-the-power-of-ensemble-learning-e72a9d1308f2",
  "defCitations": [
   {
    "source": "Wikipedia: Ensemble learning",
    "url": "https://en.wikipedia.org/wiki/Ensemble_learning"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Ensemble learning",
    "url": "https://paperswithcode.com/method/ensemble-learning"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "The Strength of Weak Learnability",
     "url": "https://link.springer.com/article/10.1007/BF00115615"
    }
   ],
   "code": [
    {
     "title": "Ensemble module Scikit-Learn",
     "url": "https://github.com/scikit-learn/scikit-learn/tree/main/sklearn/ensemble"
    }
   ],
   "tutorials": [
    {
     "title": "Ensemble Learning to Improve Machine Learning Results",
     "url": "https://blog.statsbot.co"
    }
   ],
   "videos": [
    {
     "title": "Ensemble Learning Methods",
     "url": "https://www.youtube.com/watch?v=Un9zObFjBH0"
    }
   ]
  },
  "id": "term-13",
  "equation": "H(x) = \\text{sign}\\left(\\sum_{t=1}^T \\alpha_t h_t(x)\\right)",
  "structuredDefinition": {
   "introduction": "As a key element in Ensemble Learning, **Ensemble learning** plays a vital role in transforming raw data into actionable intelligence.",
   "technical": "In statistics and machine learning, ensemble methods use multiple learning algorithms to obtain better predictive performance than could be obtained from any of the constituent learning algorithms alone.\nUnlike a statistical ensemble in statistical mechanics, which is usually infinite, a machine learning ensemble consists of only a concrete finite set of alternative models, but typically allows for much more flexible structure to exist among those alternatives.",
   "equationVars": "$H(x)$ is the strong ensemble prediction. $\\text{sign}()$ outputs +1 or -1. $T$ is the total number of weak learners. $\\alpha_t$ (alpha) is the weight assigned to learner $t$. $h_t(x)$ is the prediction of the $t$-th weak learner.",
   "equationMeaning": "The relationship defined here is what allows Ensemble learning to converge on optimal solutions in high-dimensional spaces.",
   "useCase": "From autonomous vehicles to fraud detection, Ensemble learning provides the necessary logic for real-time responsiveness.",
   "imageRef": "By mapping out the components of Ensemble learning, this visual makes it clear how the hierarchical dependencies work together.",
   "origin": "The roots of **Ensemble learning** can be traced back to the work of researchers in *The Strength of Weak Learnability*, who sought to solve specific bottlenecks in Ensemble Learning.",
   "currentTrends": "Industry leaders are currently exploring how Ensemble learning can be applied to edge computing for faster local inference."
  },
  "relatedTerms": [
   "term-21",
   "term-18",
   "term-36",
   "term-19",
   "term-11"
  ]
 },
 {
  "title": "Expert system",
  "category": "History & Philosophy",
  "definition": "In artificial intelligence (AI), an expert system is a computer system emulating the decision-making ability of a human expert.\nExpert systems are designed to solve complex problems by reasoning through bodies of knowledge, represented mainly as if\u2013then rules rather than through conventional procedural programming code. Expert systems were among the first truly successful forms of AI software. They were created in the 1970s and then proliferated in the 1980s, being then widely regarded as the future of AI \u2014 before the advent of successful artificial neural networks.\nAn expert system is divided into two subsystems: 1) a knowledge base, which represents facts and rules; and 2) an inference engine, which applies the rules to the known facts to deduce new facts, and can include explaining and debugging abilities.\n\n\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Expert system enhances the scalability of History & Philosophy systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/expert_system.jpg",
  "imageCitation": "Mycin - https://www.slideserve.com/jana/mycin",
  "defCitations": [
   {
    "source": "Wikipedia: Expert system",
    "url": "https://en.wikipedia.org/wiki/Expert_system"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Expert system",
    "url": "https://paperswithcode.com/method/expert-system"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "MYCIN: A computer-based medical consultation system",
     "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2232353/"
    }
   ],
   "code": [
    {
     "title": "CLIPS Expert System Tool",
     "url": "https://github.com/topics/machine-learning"
    }
   ],
   "tutorials": [
    {
     "title": "Introduction to Expert Systems",
     "url": "https://www.javatpoint.com"
    }
   ],
   "videos": [
    {
     "title": "Expert Systems (AI Course)",
     "url": "https://www.youtube.com/watch?v=H74T6E2kivc"
    }
   ]
  },
  "id": "term-14",
  "equation": "\\text{IF } Condition \\text{ THEN } Action",
  "structuredDefinition": {
   "introduction": "As a key element in History & Philosophy, **Expert system** plays a vital role in transforming raw data into actionable intelligence.",
   "technical": "In artificial intelligence (AI), an expert system is a computer system emulating the decision-making ability of a human expert.\nExpert systems are designed to solve complex problems by reasoning through bodies of knowledge, represented mainly as if\u2013then rules rather than through conventional procedural programming code.",
   "equationVars": "IF represents the antecedent or conditional trigger. Condition is the logical rule matching the knowledge base. THEN indicates the consequent. Action is the resulting decision or deduction.",
   "equationMeaning": "The relationship defined here is what allows Expert system to converge on optimal solutions in high-dimensional spaces.",
   "useCase": "Beyond academic research, Expert system finds its way into everyday tools like recommendation engines and predictive text.",
   "imageRef": "The provided diagram offers a visual roadmap of Expert system, detailing the specific nodes and connections that drive the process.",
   "origin": "Invented to address the limitations of earlier methods, **Expert system** was formally proposed in *MYCIN: A computer-based medical consultation system*.",
   "currentTrends": "The cutting edge of Expert system involves integrating it with generative architectures to create more adaptive systems.",
   "technical2": "Expert systems were among the first truly successful forms of AI software. They were created in the 1970s and then proliferated in the 1980s, being then widely regarded as the future of AI \u2014 before the advent of successful artificial neural networks.\nAn expert system is divided into two subsystems: 1) a knowledge base, which represents facts and rules; and 2) an inference engine, which applies the rules to the known facts to deduce new facts, and can include explaining and debugging abilities."
  },
  "relatedTerms": [
   "term-45",
   "term-24",
   "term-19",
   "term-12",
   "term-25"
  ]
 },
 {
  "title": "Fuzzy logic",
  "category": "Mathematical Logic",
  "definition": "Fuzzy logic is a form of many-valued logic in which the truth value of variables may be any real number between 0 and 1. It is employed to handle the concept of partial truth, where the truth value may range between completely true and completely false. By contrast, in Boolean logic, the truth values of variables may only be the integer values 0 or 1.\nThe term fuzzy logic was introduced with the 1965 proposal of fuzzy set theory by mathematician Lotfi Zadeh. Basic fuzzy logic had, however, been studied since the 1920s, as infinite-valued logic\u2014notably by \u0141ukasiewicz and Tarski. The works of Zadeh and Joseph Goguen in the 1960s and 1970s went further by considering issues such as linguistic variables and lattices.\nFuzzy logic is based on the observation that people make decisions based on imprecise and non-numerical information. Fuzzy models or fuzzy sets are mathematical means of representing vagueness and imprecise information (hence the term fuzzy). These models have the capability of recognising, representing, manipulating, interpreting, and using data and information that are vague and lack certainty.\nFuzzy logic has been applied to many fields, from control theory to artificial intelligence.\n\n\n\n### Technical Discussion & Applications\nThe integration of Fuzzy logic into standard Mathematical Logic workflows has led to significant gains in both accuracy and efficiency. By optimizing the way systems interpret complex signals, it provides a more robust foundation for autonomous learning.",
  "image": "/images/fuzzy_logic.jpg",
  "imageCitation": "Fuzzy Logic Introduction - https://www.geeksforgeeks.org/artificial-intelligence/fuzzy-logic-introduction/",
  "defCitations": [
   {
    "source": "Wikipedia: Fuzzy logic",
    "url": "https://en.wikipedia.org/wiki/Fuzzy_logic"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Fuzzy logic",
    "url": "https://paperswithcode.com/method/fuzzy-logic"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Fuzzy Sets (Zadeh, 1965)",
     "url": "https://www.sciencedirect.com/science/article/pii/S001999586590241X"
    }
   ],
   "code": [
    {
     "title": "Scikit-Fuzzy",
     "url": "https://github.com/scikit-fuzzy/scikit-fuzzy"
    }
   ],
   "tutorials": [
    {
     "title": "Fuzzy Logic Tutorial",
     "url": "https://pythonhosted.org/scikit-fuzzy/auto_examples/index.html"
    }
   ],
   "videos": [
    {
     "title": "Fuzzy Logic Explained",
     "url": "https://www.youtube.com/watch?v=r804UF8Ia4c"
    }
   ]
  },
  "id": "term-15",
  "equation": "\\mu_A(x) \\in [0, 1]",
  "structuredDefinition": {
   "introduction": "Foundational to Mathematical Logic, **Fuzzy logic** serves as the primary mechanism for abstracting complex environmental variables.",
   "technical": "Fuzzy logic is a form of many-valued logic in which the truth value of variables may be any real number between 0 and 1. It is employed to handle the concept of partial truth, where the truth value may range between completely true and completely false. By contrast, in Boolean logic, the truth values of variables may only be the integer values 0 or 1.\nThe term fuzzy logic was introduced with the 1965 proposal of fuzzy set theory by mathematician Lotfi Zadeh.",
   "equationVars": "$\\mu_A(x)$ (mu) is the membership function for set $A$. $x$ is an element in the universe of discourse. $[0, 1]$ indicates that the membership value is not strictly binary, but a continuous degree of truth.",
   "equationMeaning": "Through this algebraic lens, we can see how Fuzzy logic balances accuracy with computational overhead.",
   "useCase": "Beyond academic research, Fuzzy logic finds its way into everyday tools like recommendation engines and predictive text.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Fuzzy logic, showing how data flows from input to result.",
   "origin": "First detailed in *Fuzzy Sets (Zadeh, 1965)*, **Fuzzy logic** introduced a new perspective on how Mathematical Logic can be implemented.",
   "currentTrends": "Current work in Fuzzy logic is heavily influenced by the rise of transformer-based architectures and their scalability.",
   "technical2": "Basic fuzzy logic had, however, been studied since the 1920s, as infinite-valued logic\u2014notably by \u0141ukasiewicz and Tarski. The works of Zadeh and Joseph Goguen in the 1960s and 1970s went further by considering issues such as linguistic variables and lattices.\nFuzzy logic is based on the observation that people make decisions based on imprecise and non-numerical information. Fuzzy models or fuzzy sets are mathematical means of representing vagueness and imprecise information (hence the term fuzzy). These models have the capability of recognising, representing, manipulating, interpreting, and using data and information that are vague and lack certainty.\nFuzzy logic has been applied to many fields, from control theory to artificial intelligence."
  },
  "relatedTerms": [
   "term-31",
   "term-41",
   "term-21",
   "term-33",
   "term-16"
  ]
 },
 {
  "title": "Generative adversarial network",
  "category": "Generative AI",
  "definition": "A generative adversarial network (GAN) is a class of machine learning frameworks and a prominent framework for approaching generative artificial intelligence. The concept was initially developed by Ian Goodfellow and his colleagues in June 2014. In a GAN, two neural networks compete with each other in the form of a zero-sum game, where one agent's gain is another agent's loss.\nGiven a training set, this technique learns to generate new data with the same statistics as the training set. For example, a GAN trained on photographs can generate new photographs that look at least superficially authentic to human observers, having many realistic characteristics. Though originally proposed as a form of generative model for unsupervised learning, GANs have also proved useful for semi-supervised learning, fully supervised learning, and reinforcement learning.\nThe core idea of a GAN is based on the \"indirect\" training through the discriminator, another neural network that can tell how \"realistic\" the input seems, which itself is also being updated dynamically. This means that the generator is not trained to minimize the distance to a specific image, but rather to fool the discriminator. This enables the model to learn in an unsupervised manner.\nGANs are similar to mimicry in evolutionary biology, with an evolutionary arms race between both networks.\n\n### Technical Discussion & Applications\nAs a pivotal technology within Generative AI, Generative adversarial network allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/generative_adversarial_network.jpg",
  "imageCitation": "Neural Network Architectures Guide - https://www.v7labs.com/blog/neural-network-architectures-guide",
  "defCitations": [
   {
    "source": "Wikipedia: Generative adversarial network",
    "url": "https://en.wikipedia.org/wiki/Generative_adversarial_network"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Generative adversarial network",
    "url": "https://paperswithcode.com/method/generative-adversarial-network"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Generative Adversarial Nets (Goodfellow et al.)",
     "url": "https://arxiv.org/abs/1406.2661"
    }
   ],
   "code": [
    {
     "title": "PyTorch GANs",
     "url": "https://github.com/eriklindernoren/PyTorch-GAN"
    }
   ],
   "tutorials": [
    {
     "title": "GANs for Beginners",
     "url": "https://developers.google.com/machine-learning/gan"
    }
   ],
   "videos": [
    {
     "title": "Generative Adversarial Networks Explained",
     "url": "https://www.youtube.com/watch?v=8L11aMN5KY8"
    }
   ]
  },
  "id": "term-16",
  "equation": "\\min_G \\max_D V(D, G) = \\mathbb{E}_{x}[\\log D(x)] + \\mathbb{E}_{z}[\\log(1 - D(G(z)))]",
  "structuredDefinition": {
   "introduction": "In the context of Generative AI, **Generative adversarial network** is frequently cited as the most robust approach for achieving intelligent data processing.",
   "technical": "A generative adversarial network (GAN) is a class of machine learning frameworks and a prominent framework for approaching generative artificial intelligence. The concept was initially developed by Ian Goodfellow and his colleagues in June 2014. In a GAN, two neural networks compete with each other in the form of a zero-sum game, where one agent's gain is another agent's loss.\nGiven a training set, this technique learns to generate new data with the same statistics as the training set.",
   "equationVars": "$G$ is the Generator. $D$ is the Discriminator. $V(D, G)$ is the value function. $p_{data}$ is the real data distribution. $p_z$ is the latent noise distribution. $x$ is real data, $z$ is noise.",
   "equationMeaning": "This mathematical expression encapsulates the internal logic of Generative adversarial network, showing how inputs are mapped to targeted outputs.",
   "useCase": "Industries ranging from finance to healthcare leverage Generative adversarial network to automate complex decision-making processes.",
   "imageRef": "The graphic breakdown of Generative adversarial network helps demystify the internal mechanics that allow the model to learn effectively.",
   "origin": "The roots of **Generative adversarial network** can be traced back to the work of researchers in *Generative Adversarial Nets (Goodfellow et al.)*, who sought to solve specific bottlenecks in Generative AI.",
   "currentTrends": "Industry leaders are currently exploring how Generative adversarial network can be applied to edge computing for faster local inference.",
   "technical2": "For example, a GAN trained on photographs can generate new photographs that look at least superficially authentic to human observers, having many realistic characteristics. Though originally proposed as a form of generative model for unsupervised learning, GANs have also proved useful for semi-supervised learning, fully supervised learning, and reinforcement learning.\nThe core idea of a GAN is based on the \"indirect\" training through the discriminator, another neural network that can tell how \"realistic\" the input seems, which itself is also being updated dynamically. This means that the generator is not trained to minimize the distance to a specific image, but rather to fool the discriminator. This enables the model to learn in an unsupervised manner.\nGANs are similar to mimicry in evolutionary biology, with an evolutionary arms race between both networks."
  },
  "relatedTerms": [
   "term-39",
   "term-8",
   "term-21",
   "term-2",
   "term-40"
  ]
 },
 {
  "title": "Generative pre-trained transformer",
  "category": "NLP",
  "definition": "A generative pre-trained transformer (GPT) is a type of large language model (LLM) that is widely used in generative artificial intelligence chatbots. GPTs are based on a deep learning architecture called the transformer. They are pre-trained on large datasets of unlabeled content, and able to generate novel content.\nOpenAI was the first to apply generative pre-training to the transformer architecture, introducing the GPT-1 model in 2018. The company has since released many bigger GPT models. The chatbot ChatGPT, released in late 2022 (using GPT-3.5), was followed by many competitor chatbots using their own generative pre-trained transformers to generate text, such as Gemini, DeepSeek and Claude.\nGPTs are primarily used to generate text, but can be trained to generate other kinds of data. For example, GPT-4o can process and generate text, images and audio. To improve performance on complex tasks, some GPTs, such as OpenAI o3, allocate more computation time analyzing the problem before generating an output, and are called reasoning models. In 2025, GPT-5 was released with a router that automatically selects whether to use a faster model or slower reasoning model based on the provided task.\n\n### Technical Discussion & Applications\nIn the rapidly evolving field of NLP, Generative pre-trained transformer remains a key focus for researchers looking to improve model generalization. Its mathematical elegance is matched by its versatility in solving real-world engineering problems.",
  "image": "/images/generative_pre-trained_transformer.jpg",
  "imageCitation": "Introduction To Generative Pre Trained Transformer Gpt - https://www.geeksforgeeks.org/artificial-intelligence/introduction-to-generative-pre-trained-transformer-gpt/",
  "defCitations": [
   {
    "source": "Wikipedia: Generative pre-trained transformer",
    "url": "https://en.wikipedia.org/wiki/Generative_pre-trained_transformer"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Generative pre-trained transformer",
    "url": "https://paperswithcode.com/method/generative-pre-trained-transformer"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Improving Language Understanding by Generative Pre-Training",
     "url": "https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"
    }
   ],
   "code": [
    {
     "title": "MinGPT by Karpathy",
     "url": "https://github.com/karpathy/minGPT"
    }
   ],
   "tutorials": [
    {
     "title": "The Illustrated GPT-2",
     "url": "https://jalammar.github.io/illustrated-gpt2/"
    }
   ],
   "videos": [
    {
     "title": "Let's build GPT: from scratch, in code (Karpathy)",
     "url": "https://www.youtube.com/watch?v=kCc8FmEb1nY"
    }
   ]
  },
  "id": "term-17",
  "equation": "\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V",
  "structuredDefinition": {
   "introduction": "Foundational to NLP, **Generative pre-trained transformer** serves as the primary mechanism for abstracting complex environmental variables.",
   "technical": "A generative pre-trained transformer (GPT) is a type of large language model (LLM) that is widely used in generative artificial intelligence chatbots. GPTs are based on a deep learning architecture called the transformer. They are pre-trained on large datasets of unlabeled content, and able to generate novel content.\nOpenAI was the first to apply generative pre-training to the transformer architecture, introducing the GPT-1 model in 2018. The company has since released many bigger GPT models.",
   "equationVars": "$Q$ represents the Query matrix. $K$ represents the Key matrix. $V$ represents the Value matrix. $d_k$ is the dimensionality of the keys, used as a scaling factor to prevent gradients from vanishing.",
   "equationMeaning": "This formulation provides a rigorous basis for Generative pre-trained transformer, ensuring that the system generalizes well across unseen datasets.",
   "useCase": "Engineers deploy Generative pre-trained transformer whenever there is a need for high-performance scaling across massive datasets.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Generative pre-trained transformer, showing how data flows from input to result.",
   "origin": "The roots of **Generative pre-trained transformer** can be traced back to the work of researchers in *Improving Language Understanding by Generative Pre-Training*, who sought to solve specific bottlenecks in NLP.",
   "currentTrends": "Recent developments in Generative pre-trained transformer research are pushing the boundaries of what is possible in resource-constrained environments.",
   "technical2": "The chatbot ChatGPT, released in late 2022 (using GPT-3.5), was followed by many competitor chatbots using their own generative pre-trained transformers to generate text, such as Gemini, DeepSeek and Claude.\nGPTs are primarily used to generate text, but can be trained to generate other kinds of data. For example, GPT-4o can process and generate text, images and audio. To improve performance on complex tasks, some GPTs, such as OpenAI o3, allocate more computation time analyzing the problem before generating an output, and are called reasoning models. In 2025, GPT-5 was released with a router that automatically selects whether to use a faster model or slower reasoning model based on the provided task."
  },
  "relatedTerms": [
   "term-3",
   "term-47",
   "term-31",
   "term-46",
   "term-23"
  ]
 },
 {
  "title": "Genetic algorithm",
  "category": "Evolutionary Computation",
  "definition": "A genetic algorithm (GA) is a metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms (EA) in computer science and operations research. Genetic algorithms are commonly used to generate high-quality solutions to optimization and search problems via biologically inspired operators such as selection, crossover, and mutation. Some examples of GA applications include optimizing decision trees for better performance, solving sudoku puzzles, hyperparameter optimization, and causal inference.\n\n\n\n### Technical Discussion & Applications\nAs a pivotal technology within Evolutionary Computation, Genetic algorithm allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/genetic_algorithm.jpg",
  "imageCitation": "An Illustrated Guide To Genetic Algorithm 830491987527235627 - https://it.pinterest.com/pin/an-illustrated-guide-to-genetic-algorithm--830491987527235627/",
  "defCitations": [
   {
    "source": "Wikipedia: Genetic algorithm",
    "url": "https://en.wikipedia.org/wiki/Genetic_algorithm"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Genetic algorithm",
    "url": "https://paperswithcode.com/method/genetic-algorithm"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Adaptation in Natural and Artificial Systems (Holland)",
     "url": "https://mitpress.mit.edu/9780262581110/adaptation-in-natural-and-artificial-systems/"
    }
   ],
   "code": [
    {
     "title": "DEAP (Distributed Evolutionary Algorithms)",
     "url": "https://github.com/DEAP/deap"
    }
   ],
   "tutorials": [
    {
     "title": "Genetic Algorithms in Python",
     "url": "https://towardsdatascience.com/introduction-to-genetic-algorithms-including-example-code-e396e98d8bf3"
    }
   ],
   "videos": [
    {
     "title": "Genetic Algorithms Explained",
     "url": "https://www.youtube.com/watch?v=MacVqujSXWE"
    }
   ]
  },
  "id": "term-18",
  "equation": "f(x_i) > f(x_j) \\implies P(\\text{select } x_i) > P(\\text{select } x_j)",
  "structuredDefinition": {
   "introduction": "Foundational to Evolutionary Computation, **Genetic algorithm** serves as the primary mechanism for abstracting complex environmental variables.",
   "technical": "A genetic algorithm (GA) is a metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms (EA) in computer science and operations research.",
   "equationVars": "$f(x)$ is the fitness function evaluating an individual. $x_i$ and $x_j$ are distinct individuals. $P(\\text{select})$ is the probability of being chosen for the next generation's reproduction.",
   "equationMeaning": "This mathematical expression encapsulates the internal logic of Genetic algorithm, showing how inputs are mapped to targeted outputs.",
   "useCase": "From autonomous vehicles to fraud detection, Genetic algorithm provides the necessary logic for real-time responsiveness.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Genetic algorithm, showing how data flows from input to result.",
   "origin": "Historically, the development of **Genetic algorithm** was prompted by the need to handle data distributions that previous models found insurmountable.",
   "currentTrends": "The cutting edge of Genetic algorithm involves integrating it with generative architectures to create more adaptive systems.",
   "technical2": "Genetic algorithms are commonly used to generate high-quality solutions to optimization and search problems via biologically inspired operators such as selection, crossover, and mutation. Some examples of GA applications include optimizing decision trees for better performance, solving sudoku puzzles, hyperparameter optimization, and causal inference."
  },
  "relatedTerms": [
   "term-35",
   "term-36",
   "term-46",
   "term-43",
   "term-2"
  ]
 },
 {
  "title": "Gradient boosting",
  "category": "Ensemble Learning",
  "definition": "Gradient boosting is a machine learning technique based on boosting in a functional space, where the target is pseudo-residuals instead of residuals as in traditional boosting. It gives a prediction model in the form of an ensemble of weak prediction models, i.e., models that make very few assumptions about the data, which are typically simple decision trees. When a decision tree is the weak learner, the resulting algorithm is called gradient-boosted trees; it usually outperforms random forest. As with other boosting methods, a gradient-boosted trees model is built in stages, but it generalizes the other methods by allowing optimization of an arbitrary differentiable loss function.\n\n\n\n### Technical Discussion & Applications\nIn the rapidly evolving field of Ensemble Learning, Gradient boosting remains a key focus for researchers looking to improve model generalization. Its mathematical elegance is matched by its versatility in solving real-world engineering problems.",
  "image": "/images/gradient_boosting.jpg",
  "imageCitation": "Gradient Boosting Algorithm In Machine Learning - https://pythongeeks.org/gradient-boosting-algorithm-in-machine-learning/",
  "defCitations": [
   {
    "source": "Wikipedia: Gradient boosting",
    "url": "https://en.wikipedia.org/wiki/Gradient_boosting"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Gradient boosting",
    "url": "https://paperswithcode.com/method/gradient-boosting"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Greedy Function Approximation: A Gradient Boosting Machine",
     "url": "https://projecteuclid.org/journals/annals-of-statistics/volume-29/issue-5/Greedy-function-approximation-A-gradient-boostingmachine/10.1214/aos/1013203451.full"
    }
   ],
   "code": [
    {
     "title": "XGBoost",
     "url": "https://github.com/dmlc/xgboost"
    }
   ],
   "tutorials": [
    {
     "title": "Gradient Boosting Tutorial",
     "url": "https://machinelearningmastery.com/gentle-introduction-gradient-boosting-algorithm-machine-learning/"
    }
   ],
   "videos": [
    {
     "title": "Gradient Boost (StatQuest)",
     "url": "https://www.youtube.com/watch?v=3CC4N4z3GJc"
    }
   ]
  },
  "id": "term-19",
  "equation": "F_m(x) = F_{m-1}(x) + \\gamma_m h_m(x)",
  "structuredDefinition": {
   "introduction": "Often described as a building block for Ensemble Learning, **Gradient boosting** enables sophisticated modeling of non-linear patterns.",
   "technical": "Gradient boosting is a machine learning technique based on boosting in a functional space, where the target is pseudo-residuals instead of residuals as in traditional boosting. It gives a prediction model in the form of an ensemble of weak prediction models, i.e., models that make very few assumptions about the data, which are typically simple decision trees.",
   "equationVars": "$F_m(x)$ is the model at stage $m$. $F_{m-1}(x)$ is the previous model. $\\gamma_m$ (gamma) is the step size or learning rate. $h_m(x)$ is the new weak learner trained to predict the pseudo-residuals.",
   "equationMeaning": "Through this algebraic lens, we can see how Gradient boosting balances accuracy with computational overhead.",
   "useCase": "From autonomous vehicles to fraud detection, Gradient boosting provides the necessary logic for real-time responsiveness.",
   "imageRef": "This schematic illustrates the flow of information through the Gradient boosting framework, highlighting the key stages of computation.",
   "origin": "First detailed in *Greedy Function Approximation: A Gradient Boosting Machine*, **Gradient boosting** introduced a new perspective on how Ensemble Learning can be implemented.",
   "currentTrends": "Industry leaders are currently exploring how Gradient boosting can be applied to edge computing for faster local inference.",
   "technical2": "When a decision tree is the weak learner, the resulting algorithm is called gradient-boosted trees; it usually outperforms random forest. As with other boosting methods, a gradient-boosted trees model is built in stages, but it generalizes the other methods by allowing optimization of an arbitrary differentiable loss function."
  },
  "relatedTerms": [
   "term-13",
   "term-43",
   "term-36",
   "term-10",
   "term-37"
  ]
 },
 {
  "title": "Hidden Markov model",
  "category": "Probabilistic Models",
  "definition": "A hidden Markov model (HMM) is a Markov model in which the observations are dependent on a latent (or hidden) Markov process (referred to as \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n). An HMM requires that there be an observable process \n \n \n  \n  Y\n  \n \n {\\displaystyle Y}\n \n whose outcomes depend on the outcomes of \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n in a known way. Since \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n cannot be observed directly, the goal is to learn about state of \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n by observing \n \n \n  \n  Y\n  \n \n {\\displaystyle Y}\n \n. By definition of being a Markov model, an HMM has an additional requirement that the outcome of \n \n \n  \n  Y\n  \n \n {\\displaystyle Y}\n \n at time \n \n \n  \n  t\n  =\n  \n   t\n   \n   0\n   \n  \n  \n \n {\\displaystyle t=t_{0}}\n \n must be \"influenced\" exclusively by the outcome of \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n at \n \n \n  \n  t\n  =\n  \n   t\n   \n   0\n   \n  \n  \n \n {\\displaystyle t=t_{0}}\n \n and that the outcomes of \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n and \n \n \n  \n  Y\n  \n \n {\\displaystyle Y}\n \n at \n \n \n  \n  t\n  <\n  \n   t\n   \n   0\n   \n  \n  \n \n {\\displaystyle t<t_{0}}\n \n must be conditionally independent of \n \n \n  \n  Y\n  \n \n {\\displaystyle Y}\n \n at \n \n \n  \n  t\n  =\n  \n   t\n   \n   0\n   \n  \n  \n \n {\\displaystyle t=t_{0}}\n \n given \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n at time \n \n \n  \n  t\n  =\n  \n   t\n   \n   0\n   \n  \n  \n \n {\\displaystyle t=t_{0}}\n \n. Estimation of the parameters in an HMM can be performed using maximum likelihood estimation. For linear chain HMMs, the Baum\u2013Welch algorithm can be used to estimate parameters.\nHidden Markov models are known for their applications to thermodynamics, statistical mechanics, physics, chemistry, economics, finance, signal processing, information theory, pattern recognition\u2014such as speech recognition, handwriting recognition, gesture recognition, part-of-speech tagging, musical score following, partial discharges and bioinformatics.\n\n\n\n### Technical Discussion & Applications\nThe integration of Hidden Markov model into standard Probabilistic Models workflows has led to significant gains in both accuracy and efficiency. By optimizing the way systems interpret complex signals, it provides a more robust foundation for autonomous learning.",
  "image": "/images/hidden_markov_model.jpg",
  "imageCitation": "What Is Hidden Markov Model With Example - https://storage.googleapis.com/dapnrgpkryvrde/what-is-hidden-markov-model-with-example.html",
  "defCitations": [
   {
    "source": "Wikipedia: Hidden Markov model",
    "url": "https://en.wikipedia.org/wiki/Hidden_Markov_model"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Hidden Markov model",
    "url": "https://paperswithcode.com/method/hidden-markov-model"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "A tutorial on hidden Markov models",
     "url": "https://ieeexplore.ieee.org"
    }
   ],
   "code": [
    {
     "title": "Hmmlearn Library",
     "url": "https://github.com/hmmlearn/hmmlearn"
    }
   ],
   "tutorials": [
    {
     "title": "Understanding HMMs",
     "url": "https://towardsdatascience.com/hidden-markov-models-explained-with-a-real-life-example-and-python-code-2cd007bdc836"
    }
   ],
   "videos": [
    {
     "title": "Hidden Markov Models (StatQuest)",
     "url": "https://www.youtube.com/watch?v=RWkHJnFj5rY"
    }
   ]
  },
  "id": "term-20",
  "equation": "P(Y, X) = P(Y_1) P(X_1 | Y_1) \\prod_{t=2}^T P(Y_t | Y_{t-1}) P(X_t | Y_t)",
  "structuredDefinition": {
   "introduction": "Often described as a building block for Probabilistic Models, **Hidden Markov model** enables sophisticated modeling of non-linear patterns.",
   "technical": "A hidden Markov model (HMM) is a Markov model in which the observations are dependent on a latent (or hidden) Markov process (referred to as \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n). An HMM requires that there be an observable process \n \n \n  \n  Y\n  \n \n {\\displaystyle Y}\n \n whose outcomes depend on the outcomes of \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n in a known way. Since \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n cannot be observed directly, the goal is to learn about state of \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n by observing \n \n \n  \n  Y\n  \n \n {\\displaystyle Y}\n \n.",
   "equationVars": "$P(Y, X)$ is the joint probability of hidden states $Y$ and observations $X$. $P(Y_t \\mid Y_{t-1})$ is the transition probability. $P(X_t \\mid Y_t)$ is the emission probability of seeing $X_t$ given state $Y_t$.",
   "equationMeaning": "At its core, the math represents the trade-offs that Hidden Markov model manages to ensure robust convergence.",
   "useCase": "Industries ranging from finance to healthcare leverage Hidden Markov model to automate complex decision-making processes.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Hidden Markov model, showing how data flows from input to result.",
   "origin": "The roots of **Hidden Markov model** can be traced back to the work of researchers in *A tutorial on hidden Markov models*, who sought to solve specific bottlenecks in Probabilistic Models.",
   "currentTrends": "A major trend in Hidden Markov model involves the use of self-supervised learning to minimize the need for manual data labeling.",
   "technical2": "By definition of being a Markov model, an HMM has an additional requirement that the outcome of \n \n \n  \n  Y\n  \n \n {\\displaystyle Y}\n \n at time \n \n \n  \n  t\n  =\n  \n   t\n   \n   0\n   \n  \n  \n \n {\\displaystyle t=t_{0}}\n \n must be \"influenced\" exclusively by the outcome of \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n at \n \n \n  \n  t\n  =\n  \n   t\n   \n   0\n   \n  \n  \n \n {\\displaystyle t=t_{0}}\n \n and that the outcomes of \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n and \n \n \n  \n  Y\n  \n \n {\\displaystyle Y}\n \n at \n \n \n  \n  t\n  <\n  \n   t\n   \n   0\n   \n  \n  \n \n {\\displaystyle t<t_{0}}\n \n must be conditionally independent of \n \n \n  \n  Y\n  \n \n {\\displaystyle Y}\n \n at \n \n \n  \n  t\n  =\n  \n   t\n   \n   0\n   \n  \n  \n \n {\\displaystyle t=t_{0}}\n \n given \n \n \n  \n  X\n  \n \n {\\displaystyle X}\n \n at time \n \n \n  \n  t\n  =\n  \n   t\n   \n   0\n   \n  \n  \n \n {\\displaystyle t=t_{0}}\n \n. Estimation of the parameters in an HMM can be performed using maximum likelihood estimation. For linear chain HMMs, the Baum\u2013Welch algorithm can be used to estimate parameters.\nHidden Markov models are known for their applications to thermodynamics, statistical mechanics, physics, chemistry, economics, finance, signal processing, information theory, pattern recognition\u2014such as speech recognition, handwriting recognition, gesture recognition, part-of-speech tagging, musical score following, partial discharges and bioinformatics."
  },
  "relatedTerms": [
   "term-11",
   "term-34",
   "term-45",
   "term-32",
   "term-5"
  ]
 },
 {
  "title": "Hyperparameter optimization",
  "category": "Optimization",
  "definition": "In machine learning, hyperparameter optimization or tuning is the problem of choosing a set of optimal hyperparameters for a learning algorithm. A hyperparameter is a parameter whose value is used to control the learning process, which must be configured before the process starts.\nHyperparameter optimization determines the set of hyperparameters that yields an optimal model which minimizes a predefined loss function on a given data set. The objective function takes a set of hyperparameters and returns the associated loss. Cross-validation is often used to estimate this generalization performance, and therefore choose the set of values for hyperparameters that maximize it.\n\n### Technical Discussion & Applications\nThe integration of Hyperparameter optimization into standard Optimization workflows has led to significant gains in both accuracy and efficiency. By optimizing the way systems interpret complex signals, it provides a more robust foundation for autonomous learning.",
  "image": "/images/hyperparameter_optimization.jpg",
  "imageCitation": "A Comprehensive Guide On Hyperparameter Tuning And Its Techniques - https://www.analyticsvidhya.com/blog/2022/02/a-comprehensive-guide-on-hyperparameter-tuning-and-its-techniques/",
  "defCitations": [
   {
    "source": "Wikipedia: Hyperparameter optimization",
    "url": "https://en.wikipedia.org/wiki/Hyperparameter_optimization"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Hyperparameter optimization",
    "url": "https://paperswithcode.com/method/hyperparameter-optimization"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Random Search for Hyper-Parameter Optimization",
     "url": "https://www.jmlr.org/papers/volume13/bergstra12a/bergstra12a.pdf"
    }
   ],
   "code": [
    {
     "title": "Optuna Library",
     "url": "https://github.com/optuna/optuna"
    }
   ],
   "tutorials": [
    {
     "title": "A Guide to Hyperparameter Tuning",
     "url": "https://towardsdatascience.com/understanding-hyperparameters-and-its-optimisation-techniques-f0debba07568"
    }
   ],
   "videos": [
    {
     "title": "Hyperparameter Tuning with Optuna",
     "url": "https://www.youtube.com/watch?v=P6NwZVl8ttc"
    }
   ]
  },
  "id": "term-21",
  "equation": "\\theta^* = \\arg\\min_{\\theta \\in \\Theta} \\mathcal{L}(A_\\theta(X_{train}), X_{val})",
  "structuredDefinition": {
   "introduction": "Often described as a building block for Optimization, **Hyperparameter optimization** enables sophisticated modeling of non-linear patterns.",
   "technical": "In machine learning, hyperparameter optimization or tuning is the problem of choosing a set of optimal hyperparameters for a learning algorithm. A hyperparameter is a parameter whose value is used to control the learning process, which must be configured before the process starts.\nHyperparameter optimization determines the set of hyperparameters that yields an optimal model which minimizes a predefined loss function on a given data set.",
   "equationVars": "$\\theta^*$ (theta star) represents the optimal hyperparameters. $\\Theta$ (capital theta) is the search space. $L$ is the loss function. $A_{\\theta}$ is the learning algorithm. $X_{train}$ and $X_{val}$ are the datasets.",
   "equationMeaning": "Functionally, this model dictates how Hyperparameter optimization interprets features to produce high-confidence predictions.",
   "useCase": "From autonomous vehicles to fraud detection, Hyperparameter optimization provides the necessary logic for real-time responsiveness.",
   "imageRef": "By mapping out the components of Hyperparameter optimization, this visual makes it clear how the hierarchical dependencies work together.",
   "origin": "Historically, the development of **Hyperparameter optimization** was prompted by the need to handle data distributions that previous models found insurmountable.",
   "currentTrends": "Current work in Hyperparameter optimization is heavily influenced by the rise of transformer-based architectures and their scalability.",
   "technical2": "The objective function takes a set of hyperparameters and returns the associated loss. Cross-validation is often used to estimate this generalization performance, and therefore choose the set of values for hyperparameters that maximize it."
  },
  "relatedTerms": [
   "term-3",
   "term-17",
   "term-45",
   "term-10",
   "term-43"
  ]
 },
 {
  "title": "K-means clustering",
  "category": "Unsupervised Learning",
  "definition": "k-means clustering is a method of vector quantization, originally from signal processing, that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean (cluster centers or cluster centroid). This results in a partitioning of the data space into Voronoi cells. k-means clustering minimizes within-cluster variances (squared Euclidean distances), but not regular Euclidean distances, which would be the more difficult Weber problem: the mean optimizes squared errors, whereas only the geometric median minimizes Euclidean distances. For instance, better Euclidean solutions can be found using k-medians and k-medoids.\nThe problem is computationally difficult (NP-hard); however, efficient heuristic algorithms converge quickly to a local optimum. These are usually similar to the expectation\u2013maximization algorithm for mixtures of Gaussian distributions via an iterative refinement approach employed by both k-means and Gaussian mixture modeling. They both use cluster centers to model the data; however, k-means clustering tends to find clusters of comparable spatial extent, while the Gaussian mixture model allows clusters to have different shapes.\nThe unsupervised k-means algorithm has a loose relationship to the k-nearest neighbor classifier, a popular supervised machine learning technique for classification that is often confused with k-means due to the name. Applying the 1-nearest neighbor classifier to the cluster centers obtained by k-means classifies new data into the existing clusters. This is known as nearest centroid classifier or Rocchio algorithm.\n\n\n\n### Technical Discussion & Applications\nThe ongoing refinement of K-means clustering continues to drive progress in Unsupervised Learning. As systems become more complex, the role of K-means clustering in maintaining coherence and stability becomes increasingly critical for long-term reliability.",
  "image": "/images/k-means_clustering.jpg",
  "imageCitation": "5 Machine Learning Models Explained In 5 Minutes - https://www.kdnuggets.com/5-machine-learning-models-explained-in-5-minutes",
  "defCitations": [
   {
    "source": "Wikipedia: K-means clustering",
    "url": "https://en.wikipedia.org/wiki/K-means_clustering"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: K-means clustering",
    "url": "https://paperswithcode.com/method/k-means-clustering"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Some methods for classification and analysis of multivariate observations",
     "url": "https://digitalassets.lib.berkeley.edu/math/ucb/text/math_s5_v1_article-16.pdf"
    }
   ],
   "code": [
    {
     "title": "Faiss (Facebook AI Similarity Search)",
     "url": "https://github.com/facebookresearch/faiss"
    }
   ],
   "tutorials": [
    {
     "title": "K-Means Clustering Algorithm",
     "url": "https://towardsdatascience.com/understanding-k-means-clustering-in-machine-learning-6a6e67336aa1"
    }
   ],
   "videos": [
    {
     "title": "K-means clustering (StatQuest)",
     "url": "https://www.youtube.com/watch?v=4b5d3muPQmA"
    }
   ]
  },
  "id": "term-22",
  "equation": "\\min_{C} \\sum_{k=1}^K \\sum_{x \\in C_k} \\|x - \\mu_k\\|^2",
  "structuredDefinition": {
   "introduction": "As a key element in Unsupervised Learning, **K-means clustering** plays a vital role in transforming raw data into actionable intelligence.",
   "technical": "k-means clustering is a method of vector quantization, originally from signal processing, that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean (cluster centers or cluster centroid). This results in a partitioning of the data space into Voronoi cells. k-means clustering minimizes within-cluster variances (squared Euclidean distances), but not regular Euclidean distances, which would be the more difficult Weber problem: the mean optimizes squared errors, whereas only the geometric median minimizes Euclidean distances. For instance, better Euclidean solutions can be found using k-medians and k-medoids.\nThe problem is computationally difficult (NP-hard); however, efficient heuristic algorithms converge quickly to a local optimum.",
   "equationVars": "$C_k$ represents the $k$-th cluster. $x$ is a data point belonging to that cluster. $\\mu_{c_k}$ (mu) is the centroid or mean vector of the $k$-th cluster.",
   "equationMeaning": "The equation serves as the mathematical engine for K-means clustering, governing the way parameters are adjusted during the optimization phase.",
   "useCase": "Beyond academic research, K-means clustering finds its way into everyday tools like recommendation engines and predictive text.",
   "imageRef": "This schematic illustrates the flow of information through the K-means clustering framework, highlighting the key stages of computation.",
   "origin": "**K-means clustering** emerged as a breakthrough concept in the seminal paper *Some methods for classification and analysis of multivariate observations*, redefining the standard for Unsupervised Learning.",
   "currentTrends": "The cutting edge of K-means clustering involves integrating it with generative architectures to create more adaptive systems.",
   "technical2": "These are usually similar to the expectation\u2013maximization algorithm for mixtures of Gaussian distributions via an iterative refinement approach employed by both k-means and Gaussian mixture modeling. They both use cluster centers to model the data; however, k-means clustering tends to find clusters of comparable spatial extent, while the Gaussian mixture model allows clusters to have different shapes.\nThe unsupervised k-means algorithm has a loose relationship to the k-nearest neighbor classifier, a popular supervised machine learning technique for classification that is often confused with k-means due to the name. Applying the 1-nearest neighbor classifier to the cluster centers obtained by k-means classifies new data into the existing clusters. This is known as nearest centroid classifier or Rocchio algorithm."
  },
  "relatedTerms": [
   "term-0",
   "term-23",
   "term-38",
   "term-39",
   "term-34"
  ]
 },
 {
  "title": "Large language model",
  "category": "NLP",
  "definition": "A large language model (LLM) is a computational model designed to perform natural language processing tasks, especially language generation, using contextual relationships derived from a large set of training data. LLMs can generate, summarize, translate and parse text in a variety of contexts, and are the technological underpinning of modern chatbots. LLMs can accurately mimic natural language patterns because they are trained on collections of human-written text. For the same reason, biased or inaccurate training data can make a LLM's output less reliable. \nAs of 2024, the largest and most capable LLMs are all based on transformer architectures, which, according to the 2017 paper Attention Is All You Need, can be more efficient and parallelizable than earlier statistical and recurrent neural network models. Research into other architectures, such as state space models, is ongoing.\nBenchmark evaluations for LLMs attempt to measure model reasoning, factual accuracy, alignment, and safety.\n\n### Technical Discussion & Applications\nThe integration of Large language model into standard NLP workflows has led to significant gains in both accuracy and efficiency. By optimizing the way systems interpret complex signals, it provides a more robust foundation for autonomous learning.",
  "image": "/images/large_language_model.jpg",
  "imageCitation": "Survey Large Language Models Graphs - https://www.aimodels.fyi/papers/arxiv/survey-large-language-models-graphs",
  "defCitations": [
   {
    "source": "Wikipedia: Large language model",
    "url": "https://en.wikipedia.org/wiki/Large_language_model"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Large language model",
    "url": "https://paperswithcode.com/method/large-language-model"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Language Models are Few-Shot Learners (GPT-3)",
     "url": "https://arxiv.org/abs/2005.14165"
    }
   ],
   "code": [
    {
     "title": "LangChain",
     "url": "https://github.com/hwchase17/langchain"
    }
   ],
   "tutorials": [
    {
     "title": "Introduction to Large Language Models",
     "url": "https://developers.google.com/machine-learning/resources/intro-llms"
    }
   ],
   "videos": [
    {
     "title": "State of GPT (Andrej Karpathy)",
     "url": "https://www.youtube.com/watch?v=bZQun8Y4L2A"
    }
   ]
  },
  "id": "term-23",
  "equation": "P(w_t | w_{1:t-1}) = \\text{softmax}(W \\cdot h_t)",
  "structuredDefinition": {
   "introduction": "**Large language model** represents a critical advancement in NLP, specifically addressing the complexities of modern data processing.",
   "technical": "A large language model (LLM) is a computational model designed to perform natural language processing tasks, especially language generation, using contextual relationships derived from a large set of training data. LLMs can generate, summarize, translate and parse text in a variety of contexts, and are the technological underpinning of modern chatbots. LLMs can accurately mimic natural language patterns because they are trained on collections of human-written text.",
   "equationVars": "$P(w_t \\mid w_{1:t-1})$ is the conditional probability of the next word given the previous words. $W$ is the output projection weight matrix. $h_t$ is the hidden state representation of the context at step $t$.",
   "equationMeaning": "The variables in this equation interact to define the decision boundaries that characterize Large language model.",
   "useCase": "From autonomous vehicles to fraud detection, Large language model provides the necessary logic for real-time responsiveness.",
   "imageRef": "As shown in the technical drawing, Large language model relies on a structured sequence of operations to ensure data integrity.",
   "origin": "The arrival of **Large language model** in the field of NLP was marked by the publication of *Language Models are Few-Shot Learners (GPT-3)*, which provided a new theoretical foundation.",
   "currentTrends": "Recent developments in Large language model research are pushing the boundaries of what is possible in resource-constrained environments.",
   "technical2": "For the same reason, biased or inaccurate training data can make a LLM's output less reliable. \nAs of 2024, the largest and most capable LLMs are all based on transformer architectures, which, according to the 2017 paper Attention Is All You Need, can be more efficient and parallelizable than earlier statistical and recurrent neural network models. Research into other architectures, such as state space models, is ongoing.\nBenchmark evaluations for LLMs attempt to measure model reasoning, factual accuracy, alignment, and safety."
  },
  "relatedTerms": [
   "term-31",
   "term-47",
   "term-3",
   "term-46",
   "term-17"
  ]
 },
 {
  "title": "Lasso",
  "category": "Regularization",
  "definition": "In statistics and machine learning, lasso (least absolute shrinkage and selection operator; also Lasso, LASSO or L1 regularization) is a regression analysis method that performs both variable selection and regularization in order to enhance the prediction accuracy and interpretability of the resulting statistical model. The lasso method assumes that the coefficients of the linear model are sparse, meaning that few of them are non-zero. It was originally introduced in geophysics, and later by Robert Tibshirani, who coined the term.\nLasso was originally formulated for linear regression models. This simple case reveals a substantial amount about the estimator. These include its relationship to ridge regression and best subset selection and the connections between lasso coefficient estimates and so-called soft thresholding. It also reveals that (like standard linear regression) the coefficient estimates do not need to be unique if covariates are collinear.\nThough originally defined for linear regression, lasso regularization is easily extended to other statistical models including generalized linear models, generalized estimating equations, proportional hazards models, and M-estimators. Lasso's ability to perform subset selection relies on the form of the constraint and has a variety of interpretations including in terms of geometry, Bayesian statistics and convex analysis.\nThe LASSO is closely related to basis pursuit denoising.\n\n### Technical Discussion & Applications\nIn the rapidly evolving field of Regularization, Lasso remains a key focus for researchers looking to improve model generalization. Its mathematical elegance is matched by its versatility in solving real-world engineering problems.",
  "image": "/images/lasso.jpg",
  "imageCitation": "Lasso Regression - https://www.statisticalaid.com/lasso-regression/",
  "defCitations": [
   {
    "source": "Wikipedia: Lasso (statistics)",
    "url": "https://en.wikipedia.org/wiki/Lasso_(statistics)"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Lasso",
    "url": "https://paperswithcode.com/method/lasso"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Regression Shrinkage and Selection Via the Lasso",
     "url": "https://rss.onlinelibrary.wiley.com/doi/10.1111/j.2517-6161.1996.tb02080.x"
    }
   ],
   "code": [
    {
     "title": "Lasso Implementation",
     "url": "https://github.com/scikit-learn/scikit-learn/blob/main/sklearn/linear_model/_coordinate_descent.py"
    }
   ],
   "tutorials": [
    {
     "title": "Lasso and Ridge Regression",
     "url": "https://towardsdatascience.com/ridge-and-lasso-regression-a-complete-guide-with-python-scikit-learn-e20e34bcbf0b"
    }
   ],
   "videos": [
    {
     "title": "Lasso Regression (StatQuest)",
     "url": "https://www.youtube.com/watch?v=NGf0voTMlcs"
    }
   ]
  },
  "id": "term-24",
  "equation": "\\min_{\\beta} \\left\\{ \\frac{1}{N} \\|y - X\\beta\\|^2_2 + \\lambda \\|\\beta\\|_1 \\right\\}",
  "structuredDefinition": {
   "introduction": "Often described as a building block for Regularization, **Lasso** enables sophisticated modeling of non-linear patterns.",
   "technical": "In statistics and machine learning, lasso (least absolute shrinkage and selection operator; also Lasso, LASSO or L1 regularization) is a regression analysis method that performs both variable selection and regularization in order to enhance the prediction accuracy and interpretability of the resulting statistical model. The lasso method assumes that the coefficients of the linear model are sparse, meaning that few of them are non-zero. It was originally introduced in geophysics, and later by Robert Tibshirani, who coined the term.\nLasso was originally formulated for linear regression models.",
   "equationVars": "$\\beta$ represents the coefficients. $y$ is the target vector. $X$ is the feature matrix. $\\|y - X\\beta\\|^2_2$ is the standard squared error. $\\lambda$ (lambda) is the regularization strength. $\\|\\beta\\|_1$ is the L1 penalty (sum of absolute values).",
   "equationMeaning": "Through this algebraic lens, we can see how Lasso balances accuracy with computational overhead.",
   "useCase": "Industries ranging from finance to healthcare leverage Lasso to automate complex decision-making processes.",
   "imageRef": "As shown in the technical drawing, Lasso relies on a structured sequence of operations to ensure data integrity.",
   "origin": "Invented to address the limitations of earlier methods, **Lasso** was formally proposed in *Regression Shrinkage and Selection Via the Lasso*.",
   "currentTrends": "Recent developments in Lasso research are pushing the boundaries of what is possible in resource-constrained environments.",
   "technical2": "This simple case reveals a substantial amount about the estimator. These include its relationship to ridge regression and best subset selection and the connections between lasso coefficient estimates and so-called soft thresholding. It also reveals that (like standard linear regression) the coefficient estimates do not need to be unique if covariates are collinear.\nThough originally defined for linear regression, lasso regularization is easily extended to other statistical models including generalized linear models, generalized estimating equations, proportional hazards models, and M-estimators. Lasso's ability to perform subset selection relies on the form of the constraint and has a variety of interpretations including in terms of geometry, Bayesian statistics and convex analysis.\nThe LASSO is closely related to basis pursuit denoising."
  },
  "relatedTerms": [
   "term-4",
   "term-27",
   "term-12",
   "term-11",
   "term-40"
  ]
 },
 {
  "title": "Linear regression",
  "category": "Supervised Learning",
  "definition": "In statistics, linear regression is a model that estimates the relationship between a scalar response (dependent variable) and one or more explanatory variables (regressor or independent variable). \n\"Linear regression is linear in its unknown parameters (i.e., the parameters appear only to the first power) not necessarily in variables.\"\nFrom a mathematical perspective, X and Y are treated as variables, and the parameters are considered fixed constants but from a statistics perspective, the focus is on the parameters. Once we substitute observed data for X and Y, the model becomes a function of the parameters, which then behave like variables that need to be estimated. \nExamples of linear regression\n\n \n \n  \n  Y\n  =\n  \n   \u03b2\n   \n   0\n   \n  \n  +\n  \n   \u03b2\n   \n   1\n   \n  \n  X\n  +\n  \u03f5\n  \n \n {\\displaystyle Y=$\beta_0$+$\beta_1$X+$\epsilon$}\n \n\n \n \n  \n  Y\n  =\n  \n   \u03b2\n   \n   0\n   \n  \n  +\n  \n   \u03b2\n   \n   1\n   \n  \n  \n   X\n   \n   2\n   \n  \n  +\n  \u03f5\n  \n \n {\\displaystyle Y=$\beta_0$+$\beta_1$X^{2}+$\epsilon$}\n \n\n \n \n  \n  Y\n  =\n  \n   \u03b2\n   \n   0\n   \n  \n  +\n  \n   \u03b2\n   \n   1\n   \n  \n  l\n  n\n  X\n  +\n  \u03f5\n  \n \n {\\displaystyle Y=$\beta_0$+$\beta_1$lnX+$\epsilon$}\n \n\nIn the above equations, the coefficients (parameters) are linear (i.e., raised to the power of 1).\nExamples of non-linear regression\n\n \n \n  \n  Y\n  =\n  \n   \u03b2\n   \n   0\n   \n  \n  +\n  \n   \u03b2\n   \n   1\n   \n   \n   2\n   \n  \n  X\n  +\n  \u03f5\n  \n \n {\\displaystyle Y=$\beta_0$+$\beta_1$^{2}X+$\epsilon$}\n \n\n \n \n  \n  Y\n  =\n  l\n  n\n  \n   \u03b2\n   \n   1\n   \n  \n  X\n  +\n  \u03f5\n  \n \n {\\displaystyle Y=ln$\beta_1$X+$\epsilon$}\n \n \nIn the above equations, the coefficients (parameters) are non-linear.\nA model with exactly one explanatory variable is a simple linear regression; a model with two or more explanatory variables is a multiple linear regression. This term is distinct from multivariate linear regression, which predicts multiple correlated dependent variables rather than a single dependent variable.\nIn linear regression, the relationships are modeled using linear predictor functions whose unknown model parameters are estimated from the data. Most commonly, the conditional mean of the response given the values of the explanatory variables (or predictors) is assumed to be an affine function of those values; less commonly, the conditional median or some other quantile is used. Like all forms of regression analysis, linear regression focuses on the conditional probability distribution of the response given the values of the predictors, rather than on the joint probability distribution of all of these variables, which is the domain of multivariate analysis.\nLinear regression is also a type of machine learning algorithm, more specifically a supervised algorithm, that learns from the labelled datasets and maps the data points to the most optimized linear functions that can be used for prediction on new datasets.\nLinear regression was the first type of regression analysis to be studied rigorously, and to be used extensively in practical applications. This is because models which depend linearly on their unknown parameters are easier to fit than models which are non-linearly related to their parameters and because the statistical properties of the resulting estimators are easier to determine.\nLinear regression has many practical uses. Most applications fall into one of the following two broad categories:\n\nIf the goal is to reduce error, i.e. variance in prediction or forecasting, linear regression can be used to fit a predictive model to an observed data set of values of the response and explanatory variables. After developing such a model, if additional values of the explanatory variables are collected without an accompanying response value, the fitted model can be used to make a prediction of the response.\nIf the goal is to explain variation in the response variable that can be attributed to variation in the explanatory variables, linear regression analysis can be applied to quantify the strength of the relationship between the response and the explanatory variables, and in particular to determine whether some explanatory variables may have no linear relationship with the response at all, or to identify which subsets of explanatory variables may contain redundant information about the response.\nLinear regression models are often fitted using the least squares approach, but they may also be fitted in other ways, such as by minimizing the \"lack of fit\" in some other norm (as with least absolute deviations regression), or by minimizing a penalized version of the least squares cost function as in ridge regression (L2-norm penalty) and lasso (L1-norm penalty). Use of the Mean Squared Error (MSE) as the cost on a dataset that has many large outliers, can result in a model that fits the outliers more than the true data due to the higher importance assigned by MSE to large errors. So, cost functions that are robust to outliers should be used if the dataset has many large outliers. Conversely, the least squares approach can be used to fit models that are not linear models. Thus, although the terms \"least squares\" and \"linear model\" are closely linked, they are not synonymous.\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Linear regression enhances the scalability of Supervised Learning systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/linear_regression.jpg",
  "imageCitation": "Least Square Method - https://www.geeksforgeeks.org/maths/least-square-method/",
  "defCitations": [
   {
    "source": "Wikipedia: Linear regression",
    "url": "https://en.wikipedia.org/wiki/Linear_regression"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Linear regression",
    "url": "https://paperswithcode.com/method/linear-regression"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "The Method of Least Squares",
     "url": "https://mathworld.wolfram.com/LeastSquaresFitting.html"
    }
   ],
   "code": [
    {
     "title": "Linear Models Scikit-Learn",
     "url": "https://github.com/scikit-learn/scikit-learn/tree/main/sklearn/linear_model"
    }
   ],
   "tutorials": [
    {
     "title": "Linear Regression Overview",
     "url": "https://developers.google.com/machine-learning/crash-course/descending-into-ml/linear-regression"
    }
   ],
   "videos": [
    {
     "title": "Linear Regression (StatQuest)",
     "url": "https://www.youtube.com/watch?v=7ArmBVF2dCs"
    }
   ]
  },
  "id": "term-25",
  "equation": "y = \\beta_0 + \\beta_1 x + \\epsilon",
  "structuredDefinition": {
   "introduction": "**Linear regression** represents a critical advancement in Supervised Learning, specifically addressing the complexities of modern data processing.",
   "technical": "In statistics, linear regression is a model that estimates the relationship between a scalar response (dependent variable) and one or more explanatory variables (regressor or independent variable). \n\"Linear regression is linear in its unknown parameters (i.e., the parameters appear only to the first power) not necessarily in variables.\"\nFrom a mathematical perspective, X and Y are treated as variables, and the parameters are considered fixed constants but from a statistics perspective, the focus is on the parameters. Once we substitute observed data for X and Y, the model becomes a function of the parameters, which then behave like variables that need to be estimated. \nExamples of linear regression\n\n \n \n  \n  Y\n  =\n  \n   \u03b2\n   \n   0\n   \n  \n  +\n  \n   \u03b2\n   \n   1\n   \n  \n  X\n  +\n  \u03f5\n  \n \n {\\displaystyle Y=$\beta_0$+$\beta_1$X+$\epsilon$}\n \n\n \n \n  \n  Y\n  =\n  \n   \u03b2\n   \n   0\n   \n  \n  +\n  \n   \u03b2\n   \n   1\n   \n  \n  \n   X\n   \n   2\n   \n  \n  +\n  \u03f5\n  \n \n {\\displaystyle Y=$\beta_0$+$\beta_1$X^{2}+$\epsilon$}\n \n\n \n \n  \n  Y\n  =\n  \n   \u03b2\n   \n   0\n   \n  \n  +\n  \n   \u03b2\n   \n   1\n   \n  \n  l\n  n\n  X\n  +\n  \u03f5\n  \n \n {\\displaystyle Y=$\beta_0$+$\beta_1$lnX+$\epsilon$}\n \n\nIn the above equations, the coefficients (parameters) are linear (i.e., raised to the power of 1).\nExamples of non-linear regression\n\n \n \n  \n  Y\n  =\n  \n   \u03b2\n   \n   0\n   \n  \n  +\n  \n   \u03b2\n   \n   1\n   \n   \n   2\n   \n  \n  X\n  +\n  \u03f5\n  \n \n {\\displaystyle Y=$\beta_0$+$\beta_1$^{2}X+$\epsilon$}\n \n\n \n \n  \n  Y\n  =\n  l\n  n\n  \n   \u03b2\n   \n   1\n   \n  \n  X\n  +\n  \u03f5\n  \n \n {\\displaystyle Y=ln$\beta_1$X+$\epsilon$}\n \n \nIn the above equations, the coefficients (parameters) are non-linear.\nA model with exactly one explanatory variable is a simple linear regression; a model with two or more explanatory variables is a multiple linear regression. This term is distinct from multivariate linear regression, which predicts multiple correlated dependent variables rather than a single dependent variable.\nIn linear regression, the relationships are modeled using linear predictor functions whose unknown model parameters are estimated from the data. Most commonly, the conditional mean of the response given the values of the explanatory variables (or predictors) is assumed to be an affine function of those values; less commonly, the conditional median or some other quantile is used. Like all forms of regression analysis, linear regression focuses on the conditional probability distribution of the response given the values of the predictors, rather than on the joint probability distribution of all of these variables, which is the domain of multivariate analysis.\nLinear regression is also a type of machine learning algorithm, more specifically a supervised algorithm, that learns from the labelled datasets and maps the data points to the most optimized linear functions that can be used for prediction on new datasets.\nLinear regression was the first type of regression analysis to be studied rigorously, and to be used extensively in practical applications.",
   "equationVars": "$y$ is the dependent target variable. $\\beta_0$ is the y-intercept. $\\beta_1$ is the slope coefficient. $x$ is the independent input feature. $\\epsilon$ (epsilon) represents the irreducible error or noise.",
   "equationMeaning": "At its core, the math represents the trade-offs that Linear regression manages to ensure robust convergence.",
   "useCase": "Industries ranging from finance to healthcare leverage Linear regression to automate complex decision-making processes.",
   "imageRef": "As shown in the technical drawing, Linear regression relies on a structured sequence of operations to ensure data integrity.",
   "origin": "Historically, the development of **Linear regression** was prompted by the need to handle data distributions that previous models found insurmountable.",
   "currentTrends": "Current work in Linear regression is heavily influenced by the rise of transformer-based architectures and their scalability.",
   "technical2": "This is because models which depend linearly on their unknown parameters are easier to fit than models which are non-linearly related to their parameters and because the statistical properties of the resulting estimators are easier to determine.\nLinear regression has many practical uses. Most applications fall into one of the following two broad categories:\n\nIf the goal is to reduce error, i.e. variance in prediction or forecasting, linear regression can be used to fit a predictive model to an observed data set of values of the response and explanatory variables. After developing such a model, if additional values of the explanatory variables are collected without an accompanying response value, the fitted model can be used to make a prediction of the response.\nIf the goal is to explain variation in the response variable that can be attributed to variation in the explanatory variables, linear regression analysis can be applied to quantify the strength of the relationship between the response and the explanatory variables, and in particular to determine whether some explanatory variables may have no linear relationship with the response at all, or to identify which subsets of explanatory variables may contain redundant information about the response.\nLinear regression models are often fitted using the least squares approach, but they may also be fitted in other ways, such as by minimizing the \"lack of fit\" in some other norm (as with least absolute deviations regression), or by minimizing a penalized version of the least squares cost function as in ridge regression (L2-norm penalty) and lasso (L1-norm penalty). Use of the Mean Squared Error (MSE) as the cost on a dataset that has many large outliers, can result in a model that fits the outliers more than the true data due to the higher importance assigned by MSE to large errors. So, cost functions that are robust to outliers should be used if the dataset has many large outliers. Conversely, the least squares approach can be used to fit models that are not linear models. Thus, although the terms \"least squares\" and \"linear model\" are closely linked, they are not synonymous."
  },
  "relatedTerms": [
   "term-17",
   "term-30",
   "term-9",
   "term-42",
   "term-26"
  ]
 },
 {
  "title": "Logistic regression",
  "category": "Supervised Learning",
  "definition": "In statistics, a logistic model (or logit model) is a statistical model that models the log-odds of an event as a linear combination of one or more independent variables. In regression analysis, logistic regression (or logit regression) estimates the parameters of a logistic model (the coefficients in the linear or non linear combinations). In binary logistic regression there is a single binary dependent variable, coded by an indicator variable, where the two values are labeled \"0\" and \"1\", while the independent variables can each be a binary variable (two classes, coded by an indicator variable) or a continuous variable (any real value). The corresponding probability of the value labeled \"1\" can vary between 0 (certainly the value \"0\") and 1 (certainly the value \"1\"), hence the labeling; the function that converts log-odds to probability is the logistic function, hence the name. The unit of measurement for the log-odds scale is called a logit, from logistic unit, hence the alternative names. See \u00a7 Background and \u00a7 Definition for formal mathematics, and \u00a7 Example for a worked example.\nBinary variables are widely used in statistics to model the probability of a certain class or event taking place, such as the probability of a team winning, of a patient being healthy, etc. (see \u00a7 Applications), and the logistic model has been the most commonly used model for binary regression since about 1970. Binary variables can be generalized to categorical variables when there are more than two possible values (e.g. whether an image is of a cat, dog, lion, etc.), and the binary logistic regression generalized to multinomial logistic regression. If the multiple categories are ordered, one can use the ordinal logistic regression (for example the proportional odds ordinal logistic model). See \u00a7 Extensions for further extensions. The logistic regression model itself simply models probability of output in terms of input and does not perform statistical classification (it is not a classifier), though it can be used to make a classifier, for instance by choosing a cutoff value and classifying inputs with probability greater than the cutoff as one class, below the cutoff as the other; this is a common way to make a binary classifier.\nAnalogous linear models for binary variables with a different sigmoid function instead of the logistic function (to convert the linear combination to a probability) can also be used, most notably the probit model; see \u00a7 Alternatives. The defining characteristic of the logistic model is that increasing one of the independent variables multiplicatively scales the odds of the given outcome at a constant rate, with each independent variable having its own parameter; for a binary dependent variable this generalizes the odds ratio. More abstractly, the logistic function is the natural parameter for the Bernoulli distribution, and in this sense is the \"simplest\" way to convert a real number to a probability.\nThe parameters of a logistic regression are most commonly estimated by maximum-likelihood estimation (MLE). This does not have a closed-form expression, unlike linear least squares; see \u00a7 Model fitting. Logistic regression by MLE plays a similarly basic role for binary or categorical responses as linear regression by ordinary least squares (OLS) plays for scalar responses: it is a simple, well-analyzed baseline model; see \u00a7 Comparison with linear regression for discussion. The logistic regression as a general statistical model was originally developed and popularized primarily by Joseph Berkson, beginning in Berkson (1944), where he coined \"logit\"; see \u00a7 History.\n\n### Technical Discussion & Applications\nThe integration of Logistic regression into standard Supervised Learning workflows has led to significant gains in both accuracy and efficiency. By optimizing the way systems interpret complex signals, it provides a more robust foundation for autonomous learning.",
  "image": "/images/logistic_regression.jpg",
  "imageCitation": "Logistic Regression Explained 9Ee73Cede081 - https://towardsdatascience.com/logistic-regression-explained-9ee73cede081",
  "defCitations": [
   {
    "source": "Wikipedia: Logistic regression",
    "url": "https://en.wikipedia.org/wiki/Logistic_regression"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Logistic regression",
    "url": "https://paperswithcode.com/method/logistic-regression"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "The Regression Analysis of Binary Sequences",
     "url": "https://rss.onlinelibrary.wiley.com/doi/10.1111/j.2517-6161.1958.tb00292.x"
    }
   ],
   "code": [
    {
     "title": "Logistic Regression in TF",
     "url": "https://github.com/aymericdamien/TensorFlow-Examples/blob/master/examples/2_BasicModels/logistic_regression.py"
    }
   ],
   "tutorials": [
    {
     "title": "Logistic Regression Crash Course",
     "url": "https://developers.google.com/machine-learning/crash-course/logistic-regression/video-lecture"
    }
   ],
   "videos": [
    {
     "title": "Logistic Regression (StatQuest)",
     "url": "https://www.youtube.com/watch?v=yIYKR4sgzI8"
    }
   ]
  },
  "id": "term-26",
  "equation": "P(y=1|x) = \\frac{1}{1 + e^{-(\\beta_0 + \\beta_1 x)}}",
  "structuredDefinition": {
   "introduction": "The concept of **Logistic regression** is essential for understanding how Supervised Learning systems achieve high-level performance.",
   "technical": "In statistics, a logistic model (or logit model) is a statistical model that models the log-odds of an event as a linear combination of one or more independent variables. In regression analysis, logistic regression (or logit regression) estimates the parameters of a logistic model (the coefficients in the linear or non linear combinations). In binary logistic regression there is a single binary dependent variable, coded by an indicator variable, where the two values are labeled \"0\" and \"1\", while the independent variables can each be a binary variable (two classes, coded by an indicator variable) or a continuous variable (any real value). The corresponding probability of the value labeled \"1\" can vary between 0 (certainly the value \"0\") and 1 (certainly the value \"1\"), hence the labeling; the function that converts log-odds to probability is the logistic function, hence the name. The unit of measurement for the log-odds scale is called a logit, from logistic unit, hence the alternative names. See \u00a7 Background and \u00a7 Definition for formal mathematics, and \u00a7 Example for a worked example.\nBinary variables are widely used in statistics to model the probability of a certain class or event taking place, such as the probability of a team winning, of a patient being healthy, etc. (see \u00a7 Applications), and the logistic model has been the most commonly used model for binary regression since about 1970. Binary variables can be generalized to categorical variables when there are more than two possible values (e.g.",
   "equationVars": "$P(y=1|x)$ is the predicted probability of the positive class. $e$ is Euler's number. $\\beta_0$ is the intercept. $\\beta_1$ is the coefficient for feature $x$.",
   "equationMeaning": "This formulation provides a rigorous basis for Logistic regression, ensuring that the system generalizes well across unseen datasets.",
   "useCase": "From autonomous vehicles to fraud detection, Logistic regression provides the necessary logic for real-time responsiveness.",
   "imageRef": "As shown in the technical drawing, Logistic regression relies on a structured sequence of operations to ensure data integrity.",
   "origin": "The arrival of **Logistic regression** in the field of Supervised Learning was marked by the publication of *The Regression Analysis of Binary Sequences*, which provided a new theoretical foundation.",
   "currentTrends": "Researchers are currently investigating how Logistic regression can be made more efficient through hardware-aware optimizations.",
   "technical2": "whether an image is of a cat, dog, lion, etc.), and the binary logistic regression generalized to multinomial logistic regression. If the multiple categories are ordered, one can use the ordinal logistic regression (for example the proportional odds ordinal logistic model). See \u00a7 Extensions for further extensions. The logistic regression model itself simply models probability of output in terms of input and does not perform statistical classification (it is not a classifier), though it can be used to make a classifier, for instance by choosing a cutoff value and classifying inputs with probability greater than the cutoff as one class, below the cutoff as the other; this is a common way to make a binary classifier.\nAnalogous linear models for binary variables with a different sigmoid function instead of the logistic function (to convert the linear combination to a probability) can also be used, most notably the probit model; see \u00a7 Alternatives. The defining characteristic of the logistic model is that increasing one of the independent variables multiplicatively scales the odds of the given outcome at a constant rate, with each independent variable having its own parameter; for a binary dependent variable this generalizes the odds ratio. More abstractly, the logistic function is the natural parameter for the Bernoulli distribution, and in this sense is the \"simplest\" way to convert a real number to a probability.\nThe parameters of a logistic regression are most commonly estimated by maximum-likelihood estimation (MLE). This does not have a closed-form expression, unlike linear least squares; see \u00a7 Model fitting. Logistic regression by MLE plays a similarly basic role for binary or categorical responses as linear regression by ordinary least squares (OLS) plays for scalar responses: it is a simple, well-analyzed baseline model; see \u00a7 Comparison with linear regression for discussion. The logistic regression as a general statistical model was originally developed and popularized primarily by Joseph Berkson, beginning in Berkson (1944), where he coined \"logit\"; see \u00a7 History."
  },
  "relatedTerms": [
   "term-25",
   "term-9",
   "term-3",
   "term-30",
   "term-42"
  ]
 },
 {
  "title": "Long short-term memory",
  "category": "Deep Learning",
  "definition": "Long short-term memory (LSTM) is a type of recurrent neural network (RNN) aimed at mitigating the vanishing gradient problem commonly encountered by traditional RNNs. Its relative insensitivity to gap length is its advantage over other RNNs, hidden Markov models, and other sequence learning methods. It aims to provide a short-term memory for RNN that can last thousands of timesteps (thus \"long short-term memory\"). The name is made in analogy with long-term memory and short-term memory and their relationship, studied by cognitive psychologists since the early 20th century.\nAn LSTM unit is typically composed of a cell and three gates: an input gate, an output gate, and a forget gate. The cell remembers values over arbitrary time intervals, and the gates regulate the flow of information into and out of the cell. Forget gates decide what information to discard from the previous state, by mapping the previous state and the current input to a value between 0 and 1. A (rounded) value of 1 signifies retention of the information, and a value of 0 represents discarding. Input gates decide which pieces of new information to store in the current cell state, using the same system as forget gates. Output gates control which pieces of information in the current cell state to output, by assigning a value from 0 to 1 to the information, considering the previous and current states. Selectively outputting relevant information from the current state allows the LSTM network to maintain useful, long-term dependencies to make predictions, both in current and future time-steps.\nLSTM has wide applications in classification, data processing, time series analysis tasks, speech recognition, machine translation, speech activity detection, robot control, video games, healthcare, energy forecasting.\n\n\n\n### Technical Discussion & Applications\nAs a pivotal technology within Deep Learning, Long short-term memory allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/long_short-term_memory.jpg",
  "imageCitation": "36497807 Three Stages Of Memory From Sensory Memory To Short Term Memory And Long Term Memory - https://www.vecteezy.com/vector-art/36497807-three-stages-of-memory-from-sensory-memory-to-short-term-memory-and-long-term-memory",
  "defCitations": [
   {
    "source": "Wikipedia: Long short-term memory",
    "url": "https://en.wikipedia.org/wiki/Long_short-term_memory"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Long short-term memory",
    "url": "https://paperswithcode.com/method/long-short-term-memory"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Long Short-Term Memory (Hochreiter & Schmidhuber)",
     "url": "https://www.bioinf.jku.at/publications/older/2604.pdf"
    }
   ],
   "code": [
    {
     "title": "LSTM in TensorFlow",
     "url": "https://github.com/topics/machine-learning"
    }
   ],
   "tutorials": [
    {
     "title": "Understanding LSTM Networks",
     "url": "https://colah.github.io/posts/2015-08-Understanding-LSTMs/"
    }
   ],
   "videos": [
    {
     "title": "Illustrated Guide to LSTM",
     "url": "https://www.youtube.com/watch?v=8HyCNIVRbSU"
    }
   ]
  },
  "id": "term-27",
  "equation": "f_t = \\sigma(W_f \\cdot [h_{t-1}, x_t] + b_f)",
  "structuredDefinition": {
   "introduction": "**Long short-term memory** represents a critical advancement in Deep Learning, specifically addressing the complexities of modern data processing.",
   "technical": "Long short-term memory (LSTM) is a type of recurrent neural network (RNN) aimed at mitigating the vanishing gradient problem commonly encountered by traditional RNNs. Its relative insensitivity to gap length is its advantage over other RNNs, hidden Markov models, and other sequence learning methods. It aims to provide a short-term memory for RNN that can last thousands of timesteps (thus \"long short-term memory\"). The name is made in analogy with long-term memory and short-term memory and their relationship, studied by cognitive psychologists since the early 20th century.\nAn LSTM unit is typically composed of a cell and three gates: an input gate, an output gate, and a forget gate. The cell remembers values over arbitrary time intervals, and the gates regulate the flow of information into and out of the cell.",
   "equationVars": "$f_t$ is the forget gate's activation vector. $\\sigma$ (sigma) is the sigmoid function. $W_f$ is the weight matrix for the forget gate. $h_{t-1}$ is the previous hidden state. $x_t$ is the current input. $b_f$ is the bias.",
   "equationMeaning": "The variables in this equation interact to define the decision boundaries that characterize Long short-term memory.",
   "useCase": "Real-world implementations of Long short-term memory often focus on enhancing user experience through personalized data filtering.",
   "imageRef": "Examining the components within the image helps visualize how Long short-term memory manages various input layers.",
   "origin": "The legacy of **Long short-term memory** began with *Long Short-Term Memory (Hochreiter & Schmidhuber)*, a paper that is now considered essential reading for anyone in Deep Learning.",
   "currentTrends": "A major trend in Long short-term memory involves the use of self-supervised learning to minimize the need for manual data labeling.",
   "technical2": "Forget gates decide what information to discard from the previous state, by mapping the previous state and the current input to a value between 0 and 1. A (rounded) value of 1 signifies retention of the information, and a value of 0 represents discarding. Input gates decide which pieces of new information to store in the current cell state, using the same system as forget gates. Output gates control which pieces of information in the current cell state to output, by assigning a value from 0 to 1 to the information, considering the previous and current states. Selectively outputting relevant information from the current state allows the LSTM network to maintain useful, long-term dependencies to make predictions, both in current and future time-steps.\nLSTM has wide applications in classification, data processing, time series analysis tasks, speech recognition, machine translation, speech activity detection, robot control, video games, healthcare, energy forecasting."
  },
  "relatedTerms": [
   "term-32",
   "term-8",
   "term-38",
   "term-21",
   "term-7"
  ]
 },
 {
  "title": "Machine learning",
  "category": "General AI",
  "definition": "Machine learning (ML) is a field of study in artificial intelligence concerned with the development and study of statistical algorithms that can learn from data and generalize to unseen data, and thus perform tasks without explicit programming language instructions. Within a subdiscipline of machine learning, advances in the field of deep learning have allowed neural networks, a class of statistical algorithms, to surpass many previous machine learning approaches in performance.\nStatistics and mathematical optimisation (mathematical programming) methods compose the foundations of machine learning. Data mining is a related field of study, focusing on exploratory data analysis (EDA) through unsupervised learning.\nFrom a theoretical viewpoint, probably approximately correct learning provides a mathematical and statistical framework for describing machine learning. Most traditional machine learning and deep learning algorithms can be described as empirical risk minimisation under this framework.\n\n\n\n### Technical Discussion & Applications\nThe integration of Machine learning into standard General AI workflows has led to significant gains in both accuracy and efficiency. By optimizing the way systems interpret complex signals, it provides a more robust foundation for autonomous learning.",
  "image": "/images/machine_learning.jpg",
  "imageCitation": "Machine Learning Architecture - https://lakefs.io/blog/machine-learning-architecture/",
  "defCitations": [
   {
    "source": "Wikipedia: Machine learning",
    "url": "https://en.wikipedia.org/wiki/Machine_learning"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Machine learning",
    "url": "https://paperswithcode.com/method/machine-learning"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "A Few Useful Things to Know About Machine Learning",
     "url": "https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf"
    }
   ],
   "code": [
    {
     "title": "Scikit-Learn Repository",
     "url": "https://github.com/scikit-learn/scikit-learn"
    }
   ],
   "tutorials": [
    {
     "title": "Google Machine Learning Crash Course",
     "url": "https://developers.google.com/machine-learning/crash-course"
    }
   ],
   "videos": [
    {
     "title": "Machine Learning Explained (StatQuest)",
     "url": "https://www.youtube.com/watch?v=Gv9_4yMHFhI"
    }
   ]
  },
  "id": "term-28",
  "equation": "\\min_{\\theta} \\frac{1}{N} \\sum_{i=1}^N \\mathcal{L}(y_i, f_\\theta(x_i))",
  "structuredDefinition": {
   "introduction": "Foundational to General AI, **Machine learning** serves as the primary mechanism for abstracting complex environmental variables.",
   "technical": "Machine learning (ML) is a field of study in artificial intelligence concerned with the development and study of statistical algorithms that can learn from data and generalize to unseen data, and thus perform tasks without explicit programming language instructions. Within a subdiscipline of machine learning, advances in the field of deep learning have allowed neural networks, a class of statistical algorithms, to surpass many previous machine learning approaches in performance.\nStatistics and mathematical optimisation (mathematical programming) methods compose the foundations of machine learning.",
   "equationVars": "$\\theta$ (theta) represents the model parameters being optimized. $N$ is the total number of training samples. $L$ is the loss function calculating the error. $y_i$ is the actual true label, and $f_{\\theta}(x_i)$ is the model's prediction for input $x_i$.",
   "equationMeaning": "The equation serves as the mathematical engine for Machine learning, governing the way parameters are adjusted during the optimization phase.",
   "useCase": "Real-world implementations of Machine learning often focus on enhancing user experience through personalized data filtering.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Machine learning, showing how data flows from input to result.",
   "origin": "Historically, the development of **Machine learning** was prompted by the need to handle data distributions that previous models found insurmountable.",
   "currentTrends": "Researchers are currently investigating how Machine learning can be made more efficient through hardware-aware optimizations.",
   "technical2": "Data mining is a related field of study, focusing on exploratory data analysis (EDA) through unsupervised learning.\nFrom a theoretical viewpoint, probably approximately correct learning provides a mathematical and statistical framework for describing machine learning. Most traditional machine learning and deep learning algorithms can be described as empirical risk minimisation under this framework."
  },
  "relatedTerms": [
   "term-37",
   "term-1",
   "term-44",
   "term-11",
   "term-10"
  ]
 },
 {
  "title": "Markov decision process",
  "category": "Reinforcement Learning",
  "definition": "A Markov decision process (MDP) is a mathematical model for sequential decision making when outcomes are uncertain. It is a type of stochastic decision process, and is often solved using the methods of stochastic dynamic programming.\nOriginating from operations research in the 1950s, MDPs have since gained recognition in a variety of fields, including ecology, economics, healthcare, telecommunications and reinforcement learning. Reinforcement learning utilizes the MDP framework to model the interaction between a learning agent and its environment. In this framework, the interaction is characterized by states, actions, and rewards. The MDP framework is designed to provide a simplified representation of key elements of artificial intelligence challenges. This modeling framework incorporates the understanding of cause and effect, the management of uncertainty and nondeterminism, and the pursuit of explicit goals.\nThe name comes from its connection to Markov chains, a concept developed by the Russian mathematician Andrey Markov. The \"Markov\" in \"Markov decision process\" refers to the underlying structure of state transitions that still follow the Markov property. The process is called a \"decision process\" because it involves making decisions that influence these state transitions, extending the concept of a Markov chain into the realm of decision-making under uncertainty.\n\n\n\n### Technical Discussion & Applications\nThe integration of Markov decision process into standard Reinforcement Learning workflows has led to significant gains in both accuracy and efficiency. By optimizing the way systems interpret complex signals, it provides a more robust foundation for autonomous learning.",
  "image": "/images/markov_decision_process.jpg",
  "imageCitation": "Markov Decision Processes - https://thedecisionlab.com/reference-guide/statistics/markov-decision-processes",
  "defCitations": [
   {
    "source": "Wikipedia: Markov decision process",
    "url": "https://en.wikipedia.org/wiki/Markov_decision_process"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Markov decision process",
    "url": "https://paperswithcode.com/method/markov-decision-process"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "A Markovian Decision Process (Bellman)",
     "url": "https://www.jstor.org/stable/24900506"
    }
   ],
   "code": [
    {
     "title": "MDP Toolbox for Python",
     "url": "https://github.com/sawcordwell/pymdptoolbox"
    }
   ],
   "tutorials": [
    {
     "title": "Markov Decision Processes",
     "url": "https://towardsdatascience.com/understanding-the-markov-decision-process-mdp-8f838510f150"
    }
   ],
   "videos": [
    {
     "title": "Markov Decision Processes (Stanford)",
     "url": "https://www.youtube.com/watch?v=9g32v7bK3Co"
    }
   ]
  },
  "id": "term-29",
  "equation": "P(S_{t+1}=s', R_{t+1}=r \\mid S_t=s, A_t=a)",
  "structuredDefinition": {
   "introduction": "Often described as a building block for Reinforcement Learning, **Markov decision process** enables sophisticated modeling of non-linear patterns.",
   "technical": "A Markov decision process (MDP) is a mathematical model for sequential decision making when outcomes are uncertain. It is a type of stochastic decision process, and is often solved using the methods of stochastic dynamic programming.\nOriginating from operations research in the 1950s, MDPs have since gained recognition in a variety of fields, including ecology, economics, healthcare, telecommunications and reinforcement learning. Reinforcement learning utilizes the MDP framework to model the interaction between a learning agent and its environment. In this framework, the interaction is characterized by states, actions, and rewards.",
   "equationVars": "$P$ denotes probability. $S_{t+1}$ and $S_t$ are the next and current states. $R_{t+1}$ is the reward. $A_t$ is the action taken. This defines the transition dynamics of the environment.",
   "equationMeaning": "At its core, the math represents the trade-offs that Markov decision process manages to ensure robust convergence.",
   "useCase": "Industries ranging from finance to healthcare leverage Markov decision process to automate complex decision-making processes.",
   "imageRef": "By mapping out the components of Markov decision process, this visual makes it clear how the hierarchical dependencies work together.",
   "origin": "The legacy of **Markov decision process** began with *A Markovian Decision Process (Bellman)*, a paper that is now considered essential reading for anyone in Reinforcement Learning.",
   "currentTrends": "The next generation of Markov decision process will likely feature enhanced multi-modal capabilities, bridging the gap between text and vision.",
   "technical2": "The MDP framework is designed to provide a simplified representation of key elements of artificial intelligence challenges. This modeling framework incorporates the understanding of cause and effect, the management of uncertainty and nondeterminism, and the pursuit of explicit goals.\nThe name comes from its connection to Markov chains, a concept developed by the Russian mathematician Andrey Markov. The \"Markov\" in \"Markov decision process\" refers to the underlying structure of state transitions that still follow the Markov property. The process is called a \"decision process\" because it involves making decisions that influence these state transitions, extending the concept of a Markov chain into the realm of decision-making under uncertainty."
  },
  "relatedTerms": [
   "term-13",
   "term-35",
   "term-8",
   "term-39",
   "term-19"
  ]
 },
 {
  "title": "Naive Bayes classifier",
  "category": "Supervised Learning",
  "definition": "In statistics, naive (sometimes simple or idiot's) Bayes classifiers are a family of \"probabilistic classifiers\" which assumes that the features are conditionally independent, given the target class. In other words, a naive Bayes model assumes the information about the class provided by each variable is unrelated to the information from the others, with no information shared between the predictors. The highly unrealistic nature of this assumption, called the naive independence assumption, is what gives the classifier its name. These classifiers are some of the simplest Bayesian network models.\nNaive Bayes classifiers generally perform worse than more advanced models like logistic regressions, especially at quantifying uncertainty (with naive Bayes models often producing wildly overconfident probabilities). However, they are highly scalable, requiring only one parameter for each feature or predictor in a learning problem. Maximum-likelihood training can be done by evaluating a closed-form expression (simply by counting observations in each group), rather than the expensive iterative approximation algorithms required by most other models.\nDespite the use of Bayes' theorem in the classifier's decision rule, naive Bayes is not (necessarily) a Bayesian method, and naive Bayes models can be fit to data using either Bayesian or frequentist methods.\n\n\n\n### Technical Discussion & Applications\nAs a pivotal technology within Supervised Learning, Naive Bayes classifier allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/naive_bayes_classifier.jpg",
  "imageCitation": "slideshare.net Article - https://www.slideshare.net/slideshow/bayes-classification-83124063/83124063",
  "defCitations": [
   {
    "source": "Wikipedia: Naive Bayes classifier",
    "url": "https://en.wikipedia.org/wiki/Naive_Bayes_classifier"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Naive Bayes classifier",
    "url": "https://paperswithcode.com/method/naive-bayes-classifier"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "An Essay towards solving a Problem in the Doctrine of Chances",
     "url": "https://royalsocietypublishing.org/doi/10.1098/rstl.1763.0053"
    }
   ],
   "code": [
    {
     "title": "Scikit-Learn Naive Bayes",
     "url": "https://github.com/scikit-learn/scikit-learn/blob/main/sklearn/naive_bayes.py"
    }
   ],
   "tutorials": [
    {
     "title": "Naive Bayes Classifier Tutorial",
     "url": "https://scikit-learn.org/stable/modules/naive_bayes.html"
    }
   ],
   "videos": [
    {
     "title": "Naive Bayes (StatQuest)",
     "url": "https://www.youtube.com/watch?v=O2L2Uv9pdDA"
    }
   ]
  },
  "id": "term-30",
  "equation": "\\hat{y} = \\arg\\max_y P(y) \\prod_{i=1}^n P(x_i | y)",
  "structuredDefinition": {
   "introduction": "**Naive Bayes classifier** represents a critical advancement in Supervised Learning, specifically addressing the complexities of modern data processing.",
   "technical": "In statistics, naive (sometimes simple or idiot's) Bayes classifiers are a family of \"probabilistic classifiers\" which assumes that the features are conditionally independent, given the target class. In other words, a naive Bayes model assumes the information about the class provided by each variable is unrelated to the information from the others, with no information shared between the predictors. The highly unrealistic nature of this assumption, called the naive independence assumption, is what gives the classifier its name.",
   "equationVars": "$\\hat{y}$ is the predicted class. $P(y)$ is the prior probability of class $y$. $P(x_i \\mid y)$ is the conditional probability of feature $x_i$ given class $y$. The product symbol assumes all features are conditionally independent.",
   "equationMeaning": "The variables in this equation interact to define the decision boundaries that characterize Naive Bayes classifier.",
   "useCase": "The versatility of Naive Bayes classifier makes it a go-to choice for developers working on low-latency, high-throughput applications.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Naive Bayes classifier, showing how data flows from input to result.",
   "origin": "The legacy of **Naive Bayes classifier** began with *An Essay towards solving a Problem in the Doctrine of Chances*, a paper that is now considered essential reading for anyone in Supervised Learning.",
   "currentTrends": "Industry leaders are currently exploring how Naive Bayes classifier can be applied to edge computing for faster local inference.",
   "technical2": "These classifiers are some of the simplest Bayesian network models.\nNaive Bayes classifiers generally perform worse than more advanced models like logistic regressions, especially at quantifying uncertainty (with naive Bayes models often producing wildly overconfident probabilities). However, they are highly scalable, requiring only one parameter for each feature or predictor in a learning problem. Maximum-likelihood training can be done by evaluating a closed-form expression (simply by counting observations in each group), rather than the expensive iterative approximation algorithms required by most other models.\nDespite the use of Bayes' theorem in the classifier's decision rule, naive Bayes is not (necessarily) a Bayesian method, and naive Bayes models can be fit to data using either Bayesian or frequentist methods."
  },
  "relatedTerms": [
   "term-28",
   "term-42",
   "term-25",
   "term-9",
   "term-26"
  ]
 },
 {
  "title": "Natural language processing",
  "category": "NLP",
  "definition": "Natural language processing (NLP) is the processing of natural language information by a computer. NLP is a subfield of computer science and is closely associated with artificial intelligence. NLP is also related to information retrieval, knowledge representation, computational linguistics, and linguistics more broadly.\nMajor processing tasks in an NLP system include: speech recognition, text classification, natural language understanding, and natural language generation.\n\n\n\n### Technical Discussion & Applications\nIn the rapidly evolving field of NLP, Natural language processing remains a key focus for researchers looking to improve model generalization. Its mathematical elegance is matched by its versatility in solving real-world engineering problems.",
  "image": "/images/natural_language_processing.jpg",
  "imageCitation": "slideplayer.com Article - https://slideplayer.com/slide/4559559/",
  "defCitations": [
   {
    "source": "Wikipedia: Natural language processing",
    "url": "https://en.wikipedia.org/wiki/Natural_language_processing"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Natural language processing",
    "url": "https://paperswithcode.com/method/natural-language-processing"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "A Neural Probabilistic Language Model (Bengio et al.)",
     "url": "https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf"
    }
   ],
   "code": [
    {
     "title": "NLTK (Natural Language Toolkit)",
     "url": "https://github.com/nltk/nltk"
    }
   ],
   "tutorials": [
    {
     "title": "NLP with Python",
     "url": "https://www.nltk.org/book/"
    }
   ],
   "videos": [
    {
     "title": "NLP Course (Hugging Face)",
     "url": "https://www.youtube.com/watch?v=00G_EHEOecI"
    }
   ]
  },
  "id": "term-31",
  "equation": "P(w_1, \\dots, w_n) = \\prod_{i=1}^n P(w_i | w_1 \\dots w_{i-1})",
  "structuredDefinition": {
   "introduction": "Within the broader landscape of NLP, **Natural language processing** stands out as a fundamental method for structural optimization.",
   "technical": "Natural language processing (NLP) is the processing of natural language information by a computer.",
   "equationVars": "$P(w_1 \\dots w_n)$ is the overall probability of a sentence. $P(w_i \\mid w_1 \\dots w_{i-1})$ is the probability of the $i$-th word conditioned on all preceding words in the sequence.",
   "equationMeaning": "At its core, the math represents the trade-offs that Natural language processing manages to ensure robust convergence.",
   "useCase": "Real-world implementations of Natural language processing often focus on enhancing user experience through personalized data filtering.",
   "imageRef": "The illustration serves to clarify the complex relationships within Natural language processing, making the abstract mathematical concepts more tangible.",
   "origin": "Following its introduction in *A Neural Probabilistic Language Model (Bengio et al.)*, **Natural language processing** quickly became a standard reference for NLP optimization.",
   "currentTrends": "Modern iterations of Natural language processing are increasingly concerned with ethical deployment and long-term sustainability.",
   "technical2": "NLP is a subfield of computer science and is closely associated with artificial intelligence. NLP is also related to information retrieval, knowledge representation, computational linguistics, and linguistics more broadly.\nMajor processing tasks in an NLP system include: speech recognition, text classification, natural language understanding, and natural language generation."
  },
  "relatedTerms": [
   "term-3",
   "term-23",
   "term-17",
   "term-46",
   "term-47"
  ]
 },
 {
  "title": "Neural network",
  "category": "Deep Learning",
  "definition": "A neural network is a group of interconnected units called neurons that send signals to one another. Neurons can be either biological cells or mathematical models. While individual neurons are simple, many of them together in a network can perform complex tasks. There are two main types of neural networks.\n\nIn neuroscience, a biological neural network is a physical structure found in brains and complex nervous systems \u2013 a population of nerve cells connected by synapses.\nIn machine learning, an artificial neural network is a mathematical model used to approximate nonlinear functions. Artificial neural networks are used to solve artificial intelligence problems.\nIn neuroscience, behavior and cognition arise from interactions between distributed brain regions. In computer science, artificial neural networks power many modern AI systems, but require large datasets and substantial computing power. Additionally, their internal representations are difficult to interpret.\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Neural network enhances the scalability of Deep Learning systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/neural_network.jpg",
  "imageCitation": "Backpropagation In Neural Network - https://www.geeksforgeeks.org/machine-learning/backpropagation-in-neural-network/",
  "defCitations": [
   {
    "source": "Wikipedia: Neural network",
    "url": "https://en.wikipedia.org/wiki/Neural_network"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Neural network",
    "url": "https://paperswithcode.com/method/neural-network"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Learning representations by back-propagating errors",
     "url": "https://www.nature.com/articles/323533a0"
    }
   ],
   "code": [
    {
     "title": "Keras Library",
     "url": "https://github.com/keras-team/keras"
    }
   ],
   "tutorials": [
    {
     "title": "Neural Networks and Deep Learning",
     "url": "http://neuralnetworksanddeeplearning.com/"
    }
   ],
   "videos": [
    {
     "title": "But what is a neural network? (3Blue1Brown)",
     "url": "https://www.youtube.com/watch?v=aircAruvnKk"
    }
   ]
  },
  "id": "term-32",
  "equation": "y = \\sigma(W x + b)",
  "structuredDefinition": {
   "introduction": "Foundational to Deep Learning, **Neural network** serves as the primary mechanism for abstracting complex environmental variables.",
   "technical": "A neural network is a group of interconnected units called neurons that send signals to one another. Neurons can be either biological cells or mathematical models. While individual neurons are simple, many of them together in a network can perform complex tasks.",
   "equationVars": "$y$ is the output vector. $\\sigma$ (sigma) is the non-linear activation function. $W$ is the learned weight matrix. $x$ is the input feature vector. $b$ is the learned bias term.",
   "equationMeaning": "Functionally, this model dictates how Neural network interprets features to produce high-confidence predictions.",
   "useCase": "Engineers deploy Neural network whenever there is a need for high-performance scaling across massive datasets.",
   "imageRef": "The graphic breakdown of Neural network helps demystify the internal mechanics that allow the model to learn effectively.",
   "origin": "The arrival of **Neural network** in the field of Deep Learning was marked by the publication of *Learning representations by back-propagating errors*, which provided a new theoretical foundation.",
   "currentTrends": "Researchers are currently investigating how Neural network can be made more efficient through hardware-aware optimizations.",
   "technical2": "There are two main types of neural networks.\n\nIn neuroscience, a biological neural network is a physical structure found in brains and complex nervous systems \u2013 a population of nerve cells connected by synapses.\nIn machine learning, an artificial neural network is a mathematical model used to approximate nonlinear functions. Artificial neural networks are used to solve artificial intelligence problems.\nIn neuroscience, behavior and cognition arise from interactions between distributed brain regions. In computer science, artificial neural networks power many modern AI systems, but require large datasets and substantial computing power. Additionally, their internal representations are difficult to interpret."
  },
  "relatedTerms": [
   "term-0",
   "term-2",
   "term-27",
   "term-38",
   "term-7"
  ]
 },
 {
  "title": "Overfitting",
  "category": "Model Evaluation",
  "definition": "In mathematical modeling, overfitting is the production of an analysis that corresponds too closely or exactly to a particular set of data, and may therefore fail to fit to additional data or predict future observations reliably. An overfitted model is a mathematical model that contains more parameters than can be justified by the data. In the special case of a model that consists of a polynomial function, these parameters represent the degree of a polynomial. The essence of overfitting is to unknowingly extract some of the residual variation (i.e., noise) as if that variation represents the underlying model structure.\nUnderfitting occurs when a mathematical model cannot adequately capture the underlying structure of the data. An under-fitted model is a model that is missing some parameters or terms that would appear in a correctly specified model. Underfitting would occur, for example, when fitting a linear model to nonlinear data. Such a model will tend to have poor predictive performance.\nThe possibility of over-fitting exists when the criterion used for selecting the model is not the same as the criterion used to judge the suitability of a model. For example, a model might be selected by maximizing its performance on some set of training data, yet its suitability might be determined by its ability to perform well on unseen data; overfitting occurs when a model begins to \"memorize\" training data rather than \"learning\" to generalize from a trend.\nAs an extreme example, if the number of parameters is the same as or greater than the number of observations, then a model can perfectly predict the training data simply by memorizing the data in its entirety. (For an illustration, see Figure 2.) Such a model will typically fail severely when making predictions.\nOverfitting is related to both the complexity of the chosen model and how well it is optimized during training. A function class that is too large, in a suitable sense, relative to the dataset size is likely to overfit. Even when the fitted model does not have an excessive number of parameters, it is to be expected that the fitted relationship will appear to perform less well on a new dataset than on the dataset used for fitting (a phenomenon sometimes known as shrinkage). In particular, the value of the coefficient of determination will shrink relative to the original data.\nTo lessen the chance or amount of overfitting, several techniques are available (e.g., model comparison, cross-validation, regularization, early stopping, pruning, Bayesian priors, or dropout). The basis of some techniques is to either (1) explicitly penalize overly complex models or (2) test the model's ability to generalize by evaluating its performance on a set of data not used for training, which is assumed to approximate the typical unseen data that a model will encounter.\n\n### Technical Discussion & Applications\nIn the rapidly evolving field of Model Evaluation, Overfitting remains a key focus for researchers looking to improve model generalization. Its mathematical elegance is matched by its versatility in solving real-world engineering problems.",
  "image": "/images/overfitting.jpg",
  "imageCitation": "How To Identify And Prevent Ov 3Gft1Wahto - https://www.perplexity.ai/page/how-to-identify-and-prevent-ov-3GFt1wAHTo.HNuoe57y2dw",
  "defCitations": [
   {
    "source": "Wikipedia: Overfitting",
    "url": "https://en.wikipedia.org/wiki/Overfitting"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Overfitting",
    "url": "https://paperswithcode.com/method/overfitting"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "A Study of Cross-Validation and Bootstrap for Accuracy Estimation and Model Selection",
     "url": "https://www.ijcai.org/Proceedings/95-2/Papers/016.pdf"
    }
   ],
   "code": [
    {
     "title": "Regularization Techniques in TF",
     "url": "https://github.com/tensorflow/docs/blob/master/site/en/tutorials/keras/overfit_and_underfit.ipynb"
    }
   ],
   "tutorials": [
    {
     "title": "Handling Overfitting and Underfitting",
     "url": "https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/"
    }
   ],
   "videos": [
    {
     "title": "Overfitting and Underfitting in Machine Learning",
     "url": "https://www.youtube.com/watch?v=DQWI1kvmwRg"
    }
   ]
  },
  "id": "term-33",
  "equation": "E_{train}(f) \\ll E_{test}(f)",
  "structuredDefinition": {
   "introduction": "The concept of **Overfitting** is essential for understanding how Model Evaluation systems achieve high-level performance.",
   "technical": "In mathematical modeling, overfitting is the production of an analysis that corresponds too closely or exactly to a particular set of data, and may therefore fail to fit to additional data or predict future observations reliably. An overfitted model is a mathematical model that contains more parameters than can be justified by the data. In the special case of a model that consists of a polynomial function, these parameters represent the degree of a polynomial. The essence of overfitting is to unknowingly extract some of the residual variation (i.e., noise) as if that variation represents the underlying model structure.\nUnderfitting occurs when a mathematical model cannot adequately capture the underlying structure of the data. An under-fitted model is a model that is missing some parameters or terms that would appear in a correctly specified model. Underfitting would occur, for example, when fitting a linear model to nonlinear data.",
   "equationVars": "$E_{train}(f)$ is the error of the model $f$ on the training dataset. $E_{test}(f)$ is the error of the model on the unseen test dataset. The inequality shows training error is much lower than test error.",
   "equationMeaning": "The equation serves as the mathematical engine for Overfitting, governing the way parameters are adjusted during the optimization phase.",
   "useCase": "In commercial settings, Overfitting is frequently paired with other frameworks to solve multi-faceted engineering challenges.",
   "imageRef": "This schematic illustrates the flow of information through the Overfitting framework, highlighting the key stages of computation.",
   "origin": "**Overfitting** emerged as a breakthrough concept in the seminal paper *A Study of Cross-Validation and Bootstrap for Accuracy Estimation and Model Selection*, redefining the standard for Model Evaluation.",
   "currentTrends": "Current work in Overfitting is heavily influenced by the rise of transformer-based architectures and their scalability.",
   "technical2": "Such a model will tend to have poor predictive performance.\nThe possibility of over-fitting exists when the criterion used for selecting the model is not the same as the criterion used to judge the suitability of a model. For example, a model might be selected by maximizing its performance on some set of training data, yet its suitability might be determined by its ability to perform well on unseen data; overfitting occurs when a model begins to \"memorize\" training data rather than \"learning\" to generalize from a trend.\nAs an extreme example, if the number of parameters is the same as or greater than the number of observations, then a model can perfectly predict the training data simply by memorizing the data in its entirety. (For an illustration, see Figure 2.) Such a model will typically fail severely when making predictions.\nOverfitting is related to both the complexity of the chosen model and how well it is optimized during training. A function class that is too large, in a suitable sense, relative to the dataset size is likely to overfit. Even when the fitted model does not have an excessive number of parameters, it is to be expected that the fitted relationship will appear to perform less well on a new dataset than on the dataset used for fitting (a phenomenon sometimes known as shrinkage). In particular, the value of the coefficient of determination will shrink relative to the original data.\nTo lessen the chance or amount of overfitting, several techniques are available (e.g., model comparison, cross-validation, regularization, early stopping, pruning, Bayesian priors, or dropout). The basis of some techniques is to either (1) explicitly penalize overly complex models or (2) test the model's ability to generalize by evaluating its performance on a set of data not used for training, which is assumed to approximate the typical unseen data that a model will encounter."
  },
  "relatedTerms": [
   "term-20",
   "term-13",
   "term-17",
   "term-8",
   "term-2"
  ]
 },
 {
  "title": "Principal component analysis",
  "category": "Unsupervised Learning",
  "definition": "Principal component analysis (PCA) is a linear dimensionality reduction technique with applications in exploratory data analysis, visualization and data preprocessing.\nThe data are linearly transformed onto a new coordinate system such that the directions (principal components) capturing the largest variation in the data can be easily identified.\nThe principal components of a collection of points in a real coordinate space are a sequence of \n \n \n  \n  p\n  \n \n {\\displaystyle p}\n \n unit vectors, where the \n \n \n  \n  i\n  \n \n {\\displaystyle i}\n \n-th vector is the direction of a line that best fits the data while being orthogonal to the first \n \n \n  \n  i\n  \u2212\n  1\n  \n \n {\\displaystyle i-1}\n \n vectors. Here, a best-fitting line is defined as one that minimizes the average squared perpendicular distance from the points to the line. These directions (i.e., principal components) constitute an orthonormal basis in which different individual dimensions of the data are linearly uncorrelated. Many studies use the first two principal components in order to plot the data in two dimensions and to visually identify clusters of closely related data points.\nPrincipal component analysis has applications in many fields such as population genetics, microbiome studies, and atmospheric science.\n\n### Technical Discussion & Applications\nAs a pivotal technology within Unsupervised Learning, Principal component analysis allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/principal_component_analysis.jpg",
  "imageCitation": "Principal Component Analysis Pca A Beginners Guide A12B0E1Ced19 - https://medium.com/@jamalshah811/principal-component-analysis-pca-a-beginners-guide-a12b0e1ced19",
  "defCitations": [
   {
    "source": "Wikipedia: Principal component analysis",
    "url": "https://en.wikipedia.org/wiki/Principal_component_analysis"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Principal component analysis",
    "url": "https://paperswithcode.com/method/principal-component-analysis"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "On Lines and Planes of Closest Fit to Systems of Points",
     "url": "https://www.tandfonline.com/doi/abs/10.1080/14786440109462720"
    }
   ],
   "code": [
    {
     "title": "PCA in Scikit-Learn",
     "url": "https://github.com/scikit-learn/scikit-learn/blob/main/sklearn/decomposition/_pca.py"
    }
   ],
   "tutorials": [
    {
     "title": "A Tutorial on Principal Component Analysis",
     "url": "https://arxiv.org/abs/1404.1100"
    }
   ],
   "videos": [
    {
     "title": "Principal Component Analysis (StatQuest)",
     "url": "https://www.youtube.com/watch?v=FgakZw6K1QQ"
    }
   ]
  },
  "id": "term-34",
  "equation": "\\Sigma = \\frac{1}{n-1} X^T X = V \\Lambda V^T",
  "structuredDefinition": {
   "introduction": "In the context of Unsupervised Learning, **Principal component analysis** is frequently cited as the most robust approach for achieving complex pattern recognition.",
   "technical": "Principal component analysis (PCA) is a linear dimensionality reduction technique with applications in exploratory data analysis, visualization and data preprocessing.\nThe data are linearly transformed onto a new coordinate system such that the directions (principal components) capturing the largest variation in the data can be easily identified.\nThe principal components of a collection of points in a real coordinate space are a sequence of \n \n \n  \n  p\n  \n \n {\\displaystyle p}\n \n unit vectors, where the \n \n \n  \n  i\n  \n \n {\\displaystyle i}\n \n-th vector is the direction of a line that best fits the data while being orthogonal to the first \n \n \n  \n  i\n  \u2212\n  1\n  \n \n {\\displaystyle i-1}\n \n vectors. Here, a best-fitting line is defined as one that minimizes the average squared perpendicular distance from the points to the line.",
   "equationVars": "$\\Sigma$ (Sigma) is the covariance matrix. $X$ is the centered data matrix. $n$ is the number of samples. $V$ is the matrix of eigenvectors (principal components). $\\Lambda$ (Lambda) is the diagonal matrix of eigenvalues.",
   "equationMeaning": "The equation serves as the mathematical engine for Principal component analysis, governing the way parameters are adjusted during the optimization phase.",
   "useCase": "Real-world implementations of Principal component analysis often focus on enhancing user experience through personalized data filtering.",
   "imageRef": "As shown in the technical drawing, Principal component analysis relies on a structured sequence of operations to ensure data integrity.",
   "origin": "First detailed in *On Lines and Planes of Closest Fit to Systems of Points*, **Principal component analysis** introduced a new perspective on how Unsupervised Learning can be implemented.",
   "currentTrends": "Industry leaders are currently exploring how Principal component analysis can be applied to edge computing for faster local inference.",
   "technical2": "These directions (i.e., principal components) constitute an orthonormal basis in which different individual dimensions of the data are linearly uncorrelated. Many studies use the first two principal components in order to plot the data in two dimensions and to visually identify clusters of closely related data points.\nPrincipal component analysis has applications in many fields such as population genetics, microbiome studies, and atmospheric science."
  },
  "relatedTerms": [
   "term-22",
   "term-40",
   "term-47",
   "term-10",
   "term-20"
  ]
 },
 {
  "title": "Q-learning",
  "category": "Reinforcement Learning",
  "definition": "Q-learning is a reinforcement learning algorithm that trains an agent to assign values to its possible actions based on its current state, without requiring a model of the environment (model-free). It can handle problems with stochastic transitions and rewards without requiring adaptations.\nFor example, in a grid maze, an agent learns to reach an exit worth 10 points. At a junction, Q-learning might assign a higher value to moving right than left if right gets to the exit faster, improving this choice by trying both directions over time.\nFor any finite Markov decision process, Q-learning finds an optimal policy in the sense of maximizing the expected value of the total reward over any and all successive steps, starting from the current state. Q-learning can identify an optimal action-selection policy for any given finite Markov decision process, given infinite exploration time and a partly random policy. \n\"Q\" refers to the function that the algorithm computes: the expected reward\u2014that is, the quality\u2014of an action taken in a given state.\n\n\n\n### Technical Discussion & Applications\nThe ongoing refinement of Q-learning continues to drive progress in Reinforcement Learning. As systems become more complex, the role of Q-learning in maintaining coherence and stability becomes increasingly critical for long-term reliability.",
  "image": "/images/q-learning.jpg",
  "imageCitation": "23060859 Deep Q Learning Architecture Diagram - https://stablediffusionweb.com/image/23060859-deep-q-learning-architecture-diagram",
  "defCitations": [
   {
    "source": "Wikipedia: Q-learning",
    "url": "https://en.wikipedia.org/wiki/Q-learning"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Q-learning",
    "url": "https://paperswithcode.com/method/q-learning"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Q-learning (Watkins & Dayan)",
     "url": "https://link.springer.com/article/10.1007/BF00992698"
    }
   ],
   "code": [
    {
     "title": "Keras-RL",
     "url": "https://github.com/keras-rl/keras-rl"
    }
   ],
   "tutorials": [
    {
     "title": "Q-Learning Introduction",
     "url": "https://huggingface.co/learn/deep-rl-course/unit2/introduction"
    }
   ],
   "videos": [
    {
     "title": "Q-Learning Explained",
     "url": "https://www.youtube.com/watch?v=qhRNvCVVQaA"
    }
   ]
  },
  "id": "term-35",
  "equation": "Q(s,a) \\leftarrow Q(s,a) + \\alpha [r + \\gamma \\max_{a'} Q(s',a') - Q(s,a)]",
  "structuredDefinition": {
   "introduction": "In the context of Reinforcement Learning, **Q-learning** is frequently cited as the most robust approach for achieving complex pattern recognition.",
   "technical": "Q-learning is a reinforcement learning algorithm that trains an agent to assign values to its possible actions based on its current state, without requiring a model of the environment (model-free). It can handle problems with stochastic transitions and rewards without requiring adaptations.\nFor example, in a grid maze, an agent learns to reach an exit worth 10 points.",
   "equationVars": "$Q(s,a)$ is the current Q-value for a state-action pair. $\\alpha$ (alpha) is the learning rate. $r$ is the observed reward. $\\gamma$ (gamma) is the discount factor. $\\max_{a'} Q(s', a')$ is the maximum expected future reward from the next state $s'$.",
   "equationMeaning": "The relationship defined here is what allows Q-learning to converge on optimal solutions in high-dimensional spaces.",
   "useCase": "Industries ranging from finance to healthcare leverage Q-learning to automate complex decision-making processes.",
   "imageRef": "The graphic breakdown of Q-learning helps demystify the internal mechanics that allow the model to learn effectively.",
   "origin": "Developed as a response to Reinforcement Learning challenges, **Q-learning** was first popularized in *Q-learning (Watkins & Dayan)*.",
   "currentTrends": "A major trend in Q-learning involves the use of self-supervised learning to minimize the need for manual data labeling.",
   "technical2": "At a junction, Q-learning might assign a higher value to moving right than left if right gets to the exit faster, improving this choice by trying both directions over time.\nFor any finite Markov decision process, Q-learning finds an optimal policy in the sense of maximizing the expected value of the total reward over any and all successive steps, starting from the current state. Q-learning can identify an optimal action-selection policy for any given finite Markov decision process, given infinite exploration time and a partly random policy. \n\"Q\" refers to the function that the algorithm computes: the expected reward\u2014that is, the quality\u2014of an action taken in a given state."
  },
  "relatedTerms": [
   "term-29",
   "term-39",
   "term-25",
   "term-11",
   "term-23"
  ]
 },
 {
  "title": "Random forest",
  "category": "Ensemble Learning",
  "definition": "Random forests or random decision forests is an ensemble learning method for classification, regression and other tasks that works by creating a multitude of decision trees during training. For classification tasks, the output of the random forest is the class selected by most trees. For regression tasks, the output is the average of the predictions of the trees. Random forests correct for decision trees' habit of overfitting to their training set.\nThe first algorithm for random decision forests was created in 1995 by Tin Kam Ho using the random subspace method, which, in Ho's formulation, is a way to implement the \"stochastic discrimination\" approach to classification proposed by Eugene Kleinberg.\nAn extension of the algorithm was developed by Leo Breiman and Adele Cutler, who registered \"Random Forests\" as a trademark in 2006 (as of 2019, owned by Minitab, Inc.). The extension combines Breiman's \"bagging\" idea and random selection of features, introduced first by Ho and later independently by Amit and Geman in order to construct a collection of decision trees with controlled variance.\n\n\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Random forest enhances the scalability of Ensemble Learning systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/random_forest.jpg",
  "imageCitation": "Random Forest Algorithm In Machine Learning - https://www.sitepoint.com/random-forest-algorithm-in-machine-learning/",
  "defCitations": [
   {
    "source": "Wikipedia: Random forest",
    "url": "https://en.wikipedia.org/wiki/Random_forest"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Random forest",
    "url": "https://paperswithcode.com/method/random-forest"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Random Forests (Breiman)",
     "url": "https://link.springer.com/article/10.1023/A:1010933404324"
    }
   ],
   "code": [
    {
     "title": "Ranger (Fast Random Forest)",
     "url": "https://github.com/imbs-hl/ranger"
    }
   ],
   "tutorials": [
    {
     "title": "Understanding Random Forests",
     "url": "https://towardsdatascience.com/understanding-random-forest-58381e0602d2"
    }
   ],
   "videos": [
    {
     "title": "Random Forests (StatQuest)",
     "url": "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ"
    }
   ]
  },
  "id": "term-36",
  "equation": "\\hat{f}_{rf}(x) = \\frac{1}{B} \\sum_{b=1}^B \\hat{f}_b(x)",
  "structuredDefinition": {
   "introduction": "As a key element in Ensemble Learning, **Random forest** plays a vital role in transforming raw data into actionable intelligence.",
   "technical": "Random forests or random decision forests is an ensemble learning method for classification, regression and other tasks that works by creating a multitude of decision trees during training. For classification tasks, the output of the random forest is the class selected by most trees.",
   "equationVars": "$f_{rf}(x)$ is the final ensemble prediction. $B$ is the total number of decision trees in the forest. $f_b(x)$ is the prediction of the $b$-th individual decision tree.",
   "equationMeaning": "By formalizing these relationships, the formula explains how Random forest maintains stability while processing variable data streams.",
   "useCase": "Engineers deploy Random forest whenever there is a need for high-performance scaling across massive datasets.",
   "imageRef": "The graphic breakdown of Random forest helps demystify the internal mechanics that allow the model to learn effectively.",
   "origin": "**Random forest** emerged as a breakthrough concept in the seminal paper *Random Forests (Breiman)*, redefining the standard for Ensemble Learning.",
   "currentTrends": "The next generation of Random forest will likely feature enhanced multi-modal capabilities, bridging the gap between text and vision.",
   "technical2": "For regression tasks, the output is the average of the predictions of the trees. Random forests correct for decision trees' habit of overfitting to their training set.\nThe first algorithm for random decision forests was created in 1995 by Tin Kam Ho using the random subspace method, which, in Ho's formulation, is a way to implement the \"stochastic discrimination\" approach to classification proposed by Eugene Kleinberg.\nAn extension of the algorithm was developed by Leo Breiman and Adele Cutler, who registered \"Random Forests\" as a trademark in 2006 (as of 2019, owned by Minitab, Inc.). The extension combines Breiman's \"bagging\" idea and random selection of features, introduced first by Ho and later independently by Amit and Geman in order to construct a collection of decision trees with controlled variance."
  },
  "relatedTerms": [
   "term-19",
   "term-13",
   "term-42",
   "term-20",
   "term-26"
  ]
 },
 {
  "title": "Rectifier",
  "category": "Neural Networks",
  "definition": "In the context of artificial neural networks, the rectifier or ReLU (rectified linear unit) activation function is an activation function defined as the non-negative part of its argument, i.e., the ramp function:\n\n \n \n  \n  ReLU\n  \u2061\n  (\n  x\n  )\n  =\n  \n   x\n   \n   +\n   \n  \n  =\n  max\n  (\n  0\n  ,\n  x\n  )\n  =\n  \n   \n   \n    x\n    +\n    \n    |\n    \n    x\n    \n    |\n    \n   \n   2\n   \n  \n  =\n  \n   \n   {\n   \n    \n    \n     x\n    \n    \n     \n     if \n     \n     x\n     >\n     0\n     ,\n    \n    \n    \n    \n     0\n    \n    \n     x\n     \u2264\n     0\n    \n    \n   \n   \n   \n  \n  \n \n {\\displaystyle \\operatorname {ReLU} (x)=x^{+}=\\max(0,x)={\\frac {x+|x|}{2}}={\\begin{cases}x&{\\text{if }}x>0,\\\\0&x\\leq 0\\end{cases}}}\n \n\nwhere \n \n \n  \n  x\n  \n \n {\\displaystyle x}\n \n is the input to a neuron. This is analogous to half-wave rectification in electrical engineering.\nReLU is one of the most popular activation functions for artificial neural networks, and finds application in computer vision and speech recognition using deep neural nets and computational neuroscience.\n\n### Technical Discussion & Applications\nAs a pivotal technology within Neural Networks, Rectifier allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/rectifier.jpg",
  "imageCitation": "A538B05Ebb01A40323997629E171C91Aa28B8E2F - https://www.semanticscholar.org/paper/Rectified-Linear-Units-Improve-Restricted-Boltzmann-Nair-Hinton/a538b05ebb01a40323997629e171c91aa28b8e2f",
  "defCitations": [
   {
    "source": "Wikipedia: Rectified linear unit",
    "url": "https://en.wikipedia.org/wiki/Rectified_linear_unit"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Rectifier",
    "url": "https://paperswithcode.com/method/rectifier"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Rectified Linear Units Improve Restricted Boltzmann Machines",
     "url": "https://www.cs.toronto.edu/~hinton/absps/reluICML.pdf"
    }
   ],
   "code": [
    {
     "title": "ReLU in PyTorch",
     "url": "https://github.com/pytorch/pytorch/issues/432"
    }
   ],
   "tutorials": [
    {
     "title": "A Practical Guide to ReLU",
     "url": "https://machinelearningmastery.com/rectified-linear-activation-function-for-deep-learning-neural-networks/"
    }
   ],
   "videos": [
    {
     "title": "Why Use ReLU? (Andrew Ng)",
     "url": "https://www.youtube.com/watch?v=68BZ5fCBepI"
    }
   ]
  },
  "id": "term-37",
  "equation": " f(x) = \\max(0, x)",
  "structuredDefinition": {
   "introduction": "**Rectifier** represents a critical advancement in Neural Networks, specifically addressing the complexities of modern data processing.",
   "technical": "In the context of artificial neural networks, the rectifier or ReLU (rectified linear unit) activation function is an activation function defined as the non-negative part of its argument, i.e., the ramp function:\n\n \n \n  \n  ReLU\n  \u2061\n  (\n  x\n  )\n  =\n  \n   x\n   \n   +\n   \n  \n  =\n  max\n  (\n  0\n  ,\n  x\n  )\n  =\n  \n   \n   \n    x\n    +\n    \n    |\n    \n    x\n    \n    |\n    \n   \n   2\n   \n  \n  =\n  \n   \n   {\n   \n    \n    \n     x\n    \n    \n     \n     if \n     \n     x\n     >\n     0\n     ,\n    \n    \n    \n    \n     0\n    \n    \n     x\n     \u2264\n     0\n    \n    \n   \n   \n   \n  \n  \n \n {\\displaystyle \\operatorname {ReLU} (x)=x^{+}=\\max(0,x)={\\frac {x+|x|}{2}}={\\begin{cases}x&{\\text{if }}x>0,\\\\0&x\\leq 0\\end{cases}}}\n \n\nwhere \n \n \n  \n  x\n  \n \n {\\displaystyle x}\n \n is the input to a neuron. This is analogous to half-wave rectification in electrical engineering.\nReLU is one of the most popular activation functions for artificial neural networks, and finds application in computer vision and speech recognition using deep neural nets and computational neuroscience.",
   "equationVars": "$f(x)$ is the output activation. $\\max(0, x)$ means the function returns the input $x$ if it is strictly greater than zero, otherwise it clips the output to exactly zero.",
   "equationMeaning": "Through this algebraic lens, we can see how Rectifier balances accuracy with computational overhead.",
   "useCase": "Real-world implementations of Rectifier often focus on enhancing user experience through personalized data filtering.",
   "imageRef": "The provided diagram offers a visual roadmap of Rectifier, detailing the specific nodes and connections that drive the process.",
   "origin": "Following its introduction in *Rectified Linear Units Improve Restricted Boltzmann Machines*, **Rectifier** quickly became a standard reference for Neural Networks optimization.",
   "currentTrends": "Today, the focus on Rectifier has shifted toward improving transparency and reducing algorithmic bias."
  },
  "relatedTerms": [
   "term-4",
   "term-18",
   "term-0",
   "term-41",
   "term-40"
  ]
 },
 {
  "title": "Recurrent neural network",
  "category": "Deep Learning",
  "definition": "In artificial neural networks, recurrent neural networks (RNNs) are designed for processing sequential data, such as text, speech, and time series, where the order of elements is important. Unlike feedforward neural networks, which process inputs independently, RNNs utilize recurrent connections, where the output of a neuron at one time step is fed back as input to the network at the next time step. This enables RNNs to capture temporal dependencies and patterns within sequences.\nThe fundamental building block of RNN is the recurrent unit, which maintains a hidden state\u2014a form of memory that is updated at each time step based on the current input and the previous hidden state. This feedback mechanism allows the network to learn from past inputs and incorporate that knowledge into its current processing. RNNs have been successfully applied to tasks such as unsegmented, connected handwriting recognition, speech recognition, natural language processing, and neural machine translation.\nHowever, traditional RNNs suffer from the vanishing gradient problem, which limits their ability to learn long-range dependencies. This issue was addressed by the development of the long short-term memory (LSTM) architecture in 1997, making it the standard RNN variant for handling long-term dependencies. Later, gated recurrent units (GRUs) were introduced as a more computationally efficient alternative.\nIn recent years, transformers, which rely on self-attention mechanisms instead of recurrence, have become the dominant architecture for many sequence-processing tasks, particularly in natural language processing, due to their superior handling of long-range dependencies and greater parallelizability. Nevertheless, RNNs remain relevant for applications where computational efficiency, real-time processing, or the inherent sequential nature of data is crucial.\n\n\n\n### Technical Discussion & Applications\nAs a pivotal technology within Deep Learning, Recurrent neural network allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/recurrent_neural_network.jpg",
  "imageCitation": "Attention And Memory In Deep Learning - https://www.geeksforgeeks.org/deep-learning/attention-and-memory-in-deep-learning/",
  "defCitations": [
   {
    "source": "Wikipedia: Recurrent neural network",
    "url": "https://en.wikipedia.org/wiki/Recurrent_neural_network"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Recurrent neural network",
    "url": "https://paperswithcode.com/method/recurrent-neural-network"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Finding Structure in Time (Elman)",
     "url": "https://crl.ucsd.edu"
    }
   ],
   "code": [
    {
     "title": "RNN implementation in PyTorch",
     "url": "https://github.com/pytorch/examples/tree/main/word_language_model"
    }
   ],
   "tutorials": [
    {
     "title": "The Unreasonable Effectiveness of Recurrent Neural Networks",
     "url": "http://karpathy.github.io/2015/05/21/rnn-effectiveness/"
    }
   ],
   "videos": [
    {
     "title": "Recurrent Neural Networks (StatQuest)",
     "url": "https://www.youtube.com/watch?v=AsNTP8Kwu80"
    }
   ]
  },
  "id": "term-38",
  "equation": "y = \\sigma(W x + b)",
  "structuredDefinition": {
   "introduction": "As a key element in Deep Learning, **Recurrent neural network** plays a vital role in transforming raw data into actionable intelligence.",
   "technical": "In artificial neural networks, recurrent neural networks (RNNs) are designed for processing sequential data, such as text, speech, and time series, where the order of elements is important. Unlike feedforward neural networks, which process inputs independently, RNNs utilize recurrent connections, where the output of a neuron at one time step is fed back as input to the network at the next time step. This enables RNNs to capture temporal dependencies and patterns within sequences.\nThe fundamental building block of RNN is the recurrent unit, which maintains a hidden state\u2014a form of memory that is updated at each time step based on the current input and the previous hidden state. This feedback mechanism allows the network to learn from past inputs and incorporate that knowledge into its current processing.",
   "equationVars": "$y$ is the output vector. $\\sigma$ (sigma) is the non-linear activation function. $W$ is the learned weight matrix. $x$ is the input feature vector. $b$ is the learned bias term.",
   "equationMeaning": "At its core, the math represents the trade-offs that Recurrent neural network manages to ensure robust convergence.",
   "useCase": "The adoption of Recurrent neural network across various sectors highlights its importance in the global AI ecosystem.",
   "imageRef": "A closer look at the figure reveals the underlying architecture of Recurrent neural network, showing how data flows from input to result.",
   "origin": "**Recurrent neural network** emerged as a breakthrough concept in the seminal paper *Finding Structure in Time (Elman)*, redefining the standard for Deep Learning.",
   "currentTrends": "The next generation of Recurrent neural network will likely feature enhanced multi-modal capabilities, bridging the gap between text and vision.",
   "technical2": "RNNs have been successfully applied to tasks such as unsegmented, connected handwriting recognition, speech recognition, natural language processing, and neural machine translation.\nHowever, traditional RNNs suffer from the vanishing gradient problem, which limits their ability to learn long-range dependencies. This issue was addressed by the development of the long short-term memory (LSTM) architecture in 1997, making it the standard RNN variant for handling long-term dependencies. Later, gated recurrent units (GRUs) were introduced as a more computationally efficient alternative.\nIn recent years, transformers, which rely on self-attention mechanisms instead of recurrence, have become the dominant architecture for many sequence-processing tasks, particularly in natural language processing, due to their superior handling of long-range dependencies and greater parallelizability. Nevertheless, RNNs remain relevant for applications where computational efficiency, real-time processing, or the inherent sequential nature of data is crucial."
  },
  "relatedTerms": [
   "term-34",
   "term-27",
   "term-32",
   "term-5",
   "term-7"
  ]
 },
 {
  "title": "Reinforcement learning",
  "category": "Reinforcement Learning",
  "definition": "In machine learning and optimal control, reinforcement learning (RL) is concerned with how an intelligent agent should take actions in a dynamic environment in order to maximize a reward signal. Reinforcement learning is one of the three basic machine learning paradigms, alongside supervised learning and unsupervised learning.\nWhile supervised learning and unsupervised learning algorithms respectively attempt to discover patterns in labeled and unlabeled data, reinforcement learning involves training an agent through interactions with its environment. To learn to maximize rewards from these interactions, the agent makes decisions between trying new actions to learn more about the environment (exploration), or using current knowledge of the environment to take the best action (exploitation). The search for the optimal balance between these two strategies is known as the exploration\u2013exploitation dilemma.\n\nThe environment is typically stated in the form of a Markov decision process, as many reinforcement learning algorithms use dynamic programming techniques. The main difference between classical dynamic programming methods and reinforcement learning algorithms is that the latter do not assume knowledge of an exact mathematical model of the Markov decision process, and they target large Markov decision processes where exact methods become infeasible.\n\n### Technical Discussion & Applications\nAs a pivotal technology within Reinforcement Learning, Reinforcement learning allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/reinforcement_learning.jpg",
  "imageCitation": "Deep Reinforcement Learning Guide - https://www.v7labs.com/blog/deep-reinforcement-learning-guide",
  "defCitations": [
   {
    "source": "Wikipedia: Reinforcement learning",
    "url": "https://en.wikipedia.org/wiki/Reinforcement_learning"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Reinforcement learning",
    "url": "https://paperswithcode.com/method/reinforcement-learning"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Reinforcement Learning: An Introduction (Sutton & Barto)",
     "url": "http://incompleteideas.net/book/the-book-2nd.html"
    }
   ],
   "code": [
    {
     "title": "Stable Baselines3",
     "url": "https://github.com/DLR-RM/stable-baselines3"
    }
   ],
   "tutorials": [
    {
     "title": "Spinning Up in Deep RL (OpenAI)",
     "url": "https://spinningup.openai.com/"
    }
   ],
   "videos": [
    {
     "title": "Reinforcement Learning Course (David Silver)",
     "url": "https://www.youtube.com/watch?v=2pWv7GOvuf0"
    }
   ]
  },
  "id": "term-39",
  "equation": "V^\\pi(s) = \\mathbb{E}_\\pi \\left[ \\sum_{k=0}^\\infty \\gamma^k r_{t+k+1} \\mid S_t = s \\right]",
  "structuredDefinition": {
   "introduction": "Recognized as a cornerstone of Reinforcement Learning, **Reinforcement learning** provides the framework for complex pattern recognition.",
   "technical": "In machine learning and optimal control, reinforcement learning (RL) is concerned with how an intelligent agent should take actions in a dynamic environment in order to maximize a reward signal. Reinforcement learning is one of the three basic machine learning paradigms, alongside supervised learning and unsupervised learning.\nWhile supervised learning and unsupervised learning algorithms respectively attempt to discover patterns in labeled and unlabeled data, reinforcement learning involves training an agent through interactions with its environment.",
   "equationVars": "$V^{\\pi}(s)$ is the value of state $s$ under policy $\\pi$. $E_{\\pi}$ represents the expected return following the policy. $\\gamma$ (gamma) is the discount factor. $r_{t+k+1}$ is the reward received at future steps.",
   "equationMeaning": "Functionally, this model dictates how Reinforcement learning interprets features to produce high-confidence predictions.",
   "useCase": "The adoption of Reinforcement learning across various sectors highlights its importance in the global AI ecosystem.",
   "imageRef": "By mapping out the components of Reinforcement learning, this visual makes it clear how the hierarchical dependencies work together.",
   "origin": "Following its introduction in *Reinforcement Learning: An Introduction (Sutton & Barto)*, **Reinforcement learning** quickly became a standard reference for Reinforcement Learning optimization.",
   "currentTrends": "The cutting edge of Reinforcement learning involves integrating it with generative architectures to create more adaptive systems.",
   "technical2": "To learn to maximize rewards from these interactions, the agent makes decisions between trying new actions to learn more about the environment (exploration), or using current knowledge of the environment to take the best action (exploitation). The search for the optimal balance between these two strategies is known as the exploration\u2013exploitation dilemma.\n\nThe environment is typically stated in the form of a Markov decision process, as many reinforcement learning algorithms use dynamic programming techniques. The main difference between classical dynamic programming methods and reinforcement learning algorithms is that the latter do not assume knowledge of an exact mathematical model of the Markov decision process, and they target large Markov decision processes where exact methods become infeasible."
  },
  "relatedTerms": [
   "term-29",
   "term-24",
   "term-35",
   "term-9",
   "term-30"
  ]
 },
 {
  "title": "Ridge regression",
  "category": "Regularization",
  "definition": "Ridge regression (also known as Tikhonov regularization, named for Andrey Tikhonov) is a method of estimating the coefficients of multiple-regression models in scenarios where the variables are highly correlated. It has been used in many fields including econometrics, chemistry, and engineering. It is a method of regularization of ill-posed problems. It is particularly useful to mitigate the problem of multicollinearity in linear regression, which commonly occurs in models with large numbers of parameters. In general, the method provides improved efficiency in parameter estimation problems in exchange for a tolerable amount of bias (see bias\u2013variance tradeoff).\nThe theory was first introduced by Hoerl and Kennard in 1970 in their Technometrics papers \"Ridge regressions: biased estimation of nonorthogonal problems\" and \"Ridge regressions: applications in nonorthogonal problems\". \nRidge regression was developed as a possible solution to the imprecision of least square estimators when linear regression models have some multicollinear (highly correlated) independent variables\u2014by creating a ridge regression estimator (RR). This provides a more precise ridge parameters estimate, as its variance and mean square estimator are often smaller than the least square estimators previously derived.\n\n### Technical Discussion & Applications\nAs a pivotal technology within Regularization, Ridge regression allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/ridge_regression.jpg",
  "imageCitation": "What Is Ridge Regression - https://www.geeksforgeeks.org/machine-learning/what-is-ridge-regression/",
  "defCitations": [
   {
    "source": "Wikipedia: Ridge regression",
    "url": "https://en.wikipedia.org/wiki/Ridge_regression"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Ridge regression",
    "url": "https://paperswithcode.com/method/ridge-regression"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Ridge Regression: Biased Estimation for Nonorthogonal Problems",
     "url": "https://www.tandfonline.com/doi/abs/10.1080/00401706.1970.10488634"
    }
   ],
   "code": [
    {
     "title": "Ridge Implementation in Python",
     "url": "https://github.com/scikit-learn/scikit-learn/blob/main/sklearn/linear_model/_ridge.py"
    }
   ],
   "tutorials": [
    {
     "title": "Understanding Ridge Regression",
     "url": "https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression"
    }
   ],
   "videos": [
    {
     "title": "Ridge Regression (StatQuest)",
     "url": "https://www.youtube.com/watch?v=Q81RR3yKn30"
    }
   ]
  },
  "id": "term-40",
  "equation": "\\min_{\\beta} \\left\\{ \\|y - X\\beta\\|^2_2 + \\lambda \\|\\beta\\|^2_2 \\right\\}",
  "structuredDefinition": {
   "introduction": "As a key element in Regularization, **Ridge regression** plays a vital role in transforming raw data into actionable intelligence.",
   "technical": "Ridge regression (also known as Tikhonov regularization, named for Andrey Tikhonov) is a method of estimating the coefficients of multiple-regression models in scenarios where the variables are highly correlated. It has been used in many fields including econometrics, chemistry, and engineering. It is a method of regularization of ill-posed problems.",
   "equationVars": "$\\beta$ represents the coefficients. $y$ is the target. $X$ is the input matrix. $\\|y - X\\beta\\|^2_2$ is the data fidelity term. $\\lambda$ is the regularization parameter. $\\|\\beta\\|^2_2$ is the L2 penalty (sum of squared coefficients).",
   "equationMeaning": "Functionally, this model dictates how Ridge regression interprets features to produce high-confidence predictions.",
   "useCase": "Beyond academic research, Ridge regression finds its way into everyday tools like recommendation engines and predictive text.",
   "imageRef": "By mapping out the components of Ridge regression, this visual makes it clear how the hierarchical dependencies work together.",
   "origin": "The legacy of **Ridge regression** began with *Ridge Regression: Biased Estimation for Nonorthogonal Problems*, a paper that is now considered essential reading for anyone in Regularization.",
   "currentTrends": "Modern iterations of Ridge regression are increasingly concerned with ethical deployment and long-term sustainability.",
   "technical2": "It is particularly useful to mitigate the problem of multicollinearity in linear regression, which commonly occurs in models with large numbers of parameters. In general, the method provides improved efficiency in parameter estimation problems in exchange for a tolerable amount of bias (see bias\u2013variance tradeoff).\nThe theory was first introduced by Hoerl and Kennard in 1970 in their Technometrics papers \"Ridge regressions: biased estimation of nonorthogonal problems\" and \"Ridge regressions: applications in nonorthogonal problems\". \nRidge regression was developed as a possible solution to the imprecision of least square estimators when linear regression models have some multicollinear (highly correlated) independent variables\u2014by creating a ridge regression estimator (RR). This provides a more precise ridge parameters estimate, as its variance and mean square estimator are often smaller than the least square estimators previously derived."
  },
  "relatedTerms": [
   "term-26",
   "term-12",
   "term-24",
   "term-28",
   "term-11"
  ]
 },
 {
  "title": "Softmax function",
  "category": "Neural Networks",
  "definition": "The softmax function, also known as softargmax or normalized exponential function, converts a tuple of K real numbers into a probability distribution over K possible outcomes. It is a generalization of the logistic function to multiple dimensions, and is used in multinomial logistic regression. The softmax function is often used as the last activation function of a neural network to normalize the output of a network to a probability distribution over predicted output classes.\n\n\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Softmax function enhances the scalability of Neural Networks systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/softmax_function.jpg",
  "imageCitation": "slideshare.net Article - https://www.slideshare.net/slideshow/pr-171-large-margin-softmax-loss-for-convolutional-neural-networks/151939758",
  "defCitations": [
   {
    "source": "Wikipedia: Softmax function",
    "url": "https://en.wikipedia.org/wiki/Softmax_function"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Softmax function",
    "url": "https://paperswithcode.com/method/softmax-function"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Bridging the Gap Between Softmax and Margin-based Loss",
     "url": "https://arxiv.org/abs/2105.02100"
    }
   ],
   "code": [
    {
     "title": "TensorFlow Softmax Implementation",
     "url": "https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/ops/nn_ops.py"
    }
   ],
   "tutorials": [
    {
     "title": "Understanding the Softmax Function",
     "url": "https://towardsdatascience.com/softmax-activation-function-how-it-actually-works-d292d335bd78"
    }
   ],
   "videos": [
    {
     "title": "Softmax Function Explained",
     "url": "https://www.youtube.com/watch?v=LLux1SW--oM"
    }
   ]
  },
  "id": "term-41",
  "equation": "\\sigma(\\mathbf{z})_i = \\frac{e^{z_i}}{\\sum_{j=1}^K e^{z_j}}",
  "structuredDefinition": {
   "introduction": "Recognized as a cornerstone of Neural Networks, **Softmax function** provides the framework for complex pattern recognition.",
   "technical": "The softmax function, also known as softargmax or normalized exponential function, converts a tuple of K real numbers into a probability distribution over K possible outcomes.",
   "equationVars": "$\\sigma(z)_i$ is the output probability for class $i$. $e$ is Euler's number. $z_i$ is the raw logit score for class $i$. $K$ is the total number of classes in the distribution.",
   "equationMeaning": "This formulation provides a rigorous basis for Softmax function, ensuring that the system generalizes well across unseen datasets.",
   "useCase": "Engineers deploy Softmax function whenever there is a need for high-performance scaling across massive datasets.",
   "imageRef": "This schematic illustrates the flow of information through the Softmax function framework, highlighting the key stages of computation.",
   "origin": "Invented to address the limitations of earlier methods, **Softmax function** was formally proposed in *Bridging the Gap Between Softmax and Margin-based Loss*.",
   "currentTrends": "Modern iterations of Softmax function are increasingly concerned with ethical deployment and long-term sustainability.",
   "technical2": "It is a generalization of the logistic function to multiple dimensions, and is used in multinomial logistic regression. The softmax function is often used as the last activation function of a neural network to normalize the output of a network to a probability distribution over predicted output classes."
  },
  "relatedTerms": [
   "term-39",
   "term-4",
   "term-37",
   "term-29",
   "term-0"
  ]
 },
 {
  "title": "Support vector machine",
  "category": "Supervised Learning",
  "definition": "In machine learning, support vector machines (SVMs, also support vector networks) are supervised max-margin models with associated learning algorithms that analyze data for classification and regression analysis. Developed at AT&T Bell Laboratories, SVMs are one of the most studied models, being based on statistical learning frameworks of VC theory proposed by Vapnik (1982, 1995) and Chervonenkis (1974).\nIn addition to performing linear classification, SVMs can efficiently perform non-linear classification using the kernel trick, representing the data only through a set of pairwise similarity comparisons between the original data points using a kernel function, which transforms them into coordinates in a higher-dimensional feature space. Thus, SVMs use the kernel trick to implicitly map their inputs into high-dimensional feature spaces, where linear classification can be performed. Being max-margin models, SVMs are resilient to noisy data (e.g., misclassified examples). SVMs can also be used for regression tasks, where the objective becomes \n \n \n  \n  \u03f5\n  \n \n {\\displaystyle $\epsilon$}\n \n-sensitive.\nThe support vector clustering algorithm, created by Hava Siegelmann and Vladimir Vapnik, applies the statistics of support vectors, developed in the support vector machines algorithm, to categorize unlabeled data. These data sets require unsupervised learning approaches, which attempt to find natural clustering of the data into groups, and then to map new data according to these clusters.\nThe popularity of SVMs is likely due to their amenability to theoretical analysis, and their flexibility in being applied to a wide variety of tasks, including structured prediction problems. It is not clear that SVMs have better predictive performance than other linear models, such as logistic regression and linear regression.\n\n\n\n### Technical Discussion & Applications\nBy providing a structured approach to data abstraction, Support vector machine enhances the scalability of Supervised Learning systems. This allows for more granular control over how information is processed and stored across large-scale distributed networks.",
  "image": "/images/support_vector_machine.jpg",
  "imageCitation": "Memahami Analisis Support Vector Machine Dalam Machine Learning - https://pelatihan-ui.com/memahami-analisis-support-vector-machine-dalam-machine-learning/",
  "defCitations": [
   {
    "source": "Wikipedia: Support vector machine",
    "url": "https://en.wikipedia.org/wiki/Support_vector_machine"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Support vector machine",
    "url": "https://paperswithcode.com/method/support-vector-machine"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Support-vector networks (Cortes & Vapnik)",
     "url": "https://link.springer.com/article/10.1007/BF00994018"
    }
   ],
   "code": [
    {
     "title": "LIBSVM",
     "url": "https://github.com/cjlin1/libsvm"
    }
   ],
   "tutorials": [
    {
     "title": "SVM Tutorial",
     "url": "https://www.datacamp.com/tutorial/svm-classification-scikit-learn-python"
    }
   ],
   "videos": [
    {
     "title": "Support Vector Machines (StatQuest)",
     "url": "https://www.youtube.com/watch?v=efR1C6CvhmE"
    }
   ]
  },
  "id": "term-42",
  "equation": "\\min_{w, b} \\frac{1}{2} \\|w\\|^2 \\text{ subject to } y_i(w \\cdot x_i + b) \\ge 1",
  "structuredDefinition": {
   "introduction": "Recognized as a cornerstone of Supervised Learning, **Support vector machine** provides the framework for complex pattern recognition.",
   "technical": "In machine learning, support vector machines (SVMs, also support vector networks) are supervised max-margin models with associated learning algorithms that analyze data for classification and regression analysis. Developed at AT&T Bell Laboratories, SVMs are one of the most studied models, being based on statistical learning frameworks of VC theory proposed by Vapnik (1982, 1995) and Chervonenkis (1974).\nIn addition to performing linear classification, SVMs can efficiently perform non-linear classification using the kernel trick, representing the data only through a set of pairwise similarity comparisons between the original data points using a kernel function, which transforms them into coordinates in a higher-dimensional feature space. Thus, SVMs use the kernel trick to implicitly map their inputs into high-dimensional feature spaces, where linear classification can be performed.",
   "equationVars": "$w$ is the normal vector to the hyperplane (determining its orientation). $b$ is the bias or intercept term. $y_i$ is the class label (+1 or -1) of the $i$-th sample. $x_i$ is the feature vector of the $i$-th sample.",
   "equationMeaning": "The relationship defined here is what allows Support vector machine to converge on optimal solutions in high-dimensional spaces.",
   "useCase": "From autonomous vehicles to fraud detection, Support vector machine provides the necessary logic for real-time responsiveness.",
   "imageRef": "The graphic breakdown of Support vector machine helps demystify the internal mechanics that allow the model to learn effectively.",
   "origin": "Following its introduction in *Support-vector networks (Cortes & Vapnik)*, **Support vector machine** quickly became a standard reference for Supervised Learning optimization.",
   "currentTrends": "Recent developments in Support vector machine research are pushing the boundaries of what is possible in resource-constrained environments.",
   "technical2": "Being max-margin models, SVMs are resilient to noisy data (e.g., misclassified examples). SVMs can also be used for regression tasks, where the objective becomes \n \n \n  \n  \u03f5\n  \n \n {\\displaystyle $\epsilon$}\n \n-sensitive.\nThe support vector clustering algorithm, created by Hava Siegelmann and Vladimir Vapnik, applies the statistics of support vectors, developed in the support vector machines algorithm, to categorize unlabeled data. These data sets require unsupervised learning approaches, which attempt to find natural clustering of the data into groups, and then to map new data according to these clusters.\nThe popularity of SVMs is likely due to their amenability to theoretical analysis, and their flexibility in being applied to a wide variety of tasks, including structured prediction problems. It is not clear that SVMs have better predictive performance than other linear models, such as logistic regression and linear regression."
  },
  "relatedTerms": [
   "term-30",
   "term-26",
   "term-9",
   "term-20",
   "term-25"
  ]
 },
 {
  "title": "Swarm intelligence",
  "category": "Evolutionary Computation",
  "definition": "Swarm intelligence (SI) is the collective behavior of decentralized, self-organized systems, natural or artificial. The concept is employed in work on artificial intelligence. The expression was introduced by Jing Wang and Gerardo Beni in 1989, in the context of cellular robotic systems.\nSwarm intelligence systems consist typically of a population of simple agents or boids interacting locally with one another and with their environment. The inspiration often comes from nature, especially biological systems. The agents follow very simple rules, and although there is no centralized control structure dictating how individual agents should behave, local, and to a certain degree random, interactions between such agents lead to the emergence of \"intelligent\" global behavior, unknown to the individual agents. Examples of swarm intelligence in natural systems include ant colonies, bee colonies, bird flocking, hawks hunting, animal herding, bacterial growth, fish schooling and microbial intelligence.\nThe application of swarm principles to robots is called swarm robotics while swarm intelligence refers to the more general set of algorithms. Swarm prediction has been used in the context of forecasting problems. Similar approaches to those proposed for swarm robotics are considered for genetically modified organisms in synthetic collective intelligence.\n\n### Technical Discussion & Applications\nAs a pivotal technology within Evolutionary Computation, Swarm intelligence allows developers to bridge the gap between theoretical research and practical deployment. Its ability to handle non-linear data structures makes it indispensable for modern AI pipelines.",
  "image": "/images/swarm_intelligence.jpg",
  "imageCitation": "Filter Design Using Particle Swarm Optimization - https://storage.googleapis.com/deqpnbnpwzespe/filter-design-using-particle-swarm-optimization.html",
  "defCitations": [
   {
    "source": "Wikipedia: Swarm intelligence",
    "url": "https://en.wikipedia.org/wiki/Swarm_intelligence"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Swarm intelligence",
    "url": "https://paperswithcode.com/method/swarm-intelligence"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Particle swarm optimization",
     "url": "https://ieeexplore.ieee.org"
    }
   ],
   "code": [
    {
     "title": "PySwarms",
     "url": "https://github.com/ljvmiranda921/pyswarms"
    }
   ],
   "tutorials": [
    {
     "title": "Intro to Particle Swarm Optimization",
     "url": "https://pyswarms.readthedocs.io/en/latest/"
    }
   ],
   "videos": [
    {
     "title": "Swarm Intelligence and PSO",
     "url": "https://www.youtube.com/watch?v=JhgDMAm-imI"
    }
   ]
  },
  "id": "term-43",
  "equation": "v_i(t+1) = w v_i(t) + c_1 r_1 (p_i - x_i(t)) + c_2 r_2 (g - x_i(t))",
  "structuredDefinition": {
   "introduction": "As a key element in Evolutionary Computation, **Swarm intelligence** plays a vital role in transforming raw data into actionable intelligence.",
   "technical": "Swarm intelligence (SI) is the collective behavior of decentralized, self-organized systems, natural or artificial. The concept is employed in work on artificial intelligence. The expression was introduced by Jing Wang and Gerardo Beni in 1989, in the context of cellular robotic systems.\nSwarm intelligence systems consist typically of a population of simple agents or boids interacting locally with one another and with their environment. The inspiration often comes from nature, especially biological systems.",
   "equationVars": "$v_i$ is the velocity of particle $i$. $w$ is the inertia weight. $c_1$ and $c_2$ are cognitive and social coefficients. $r_1$ and $r_2$ are random vectors. $p_i$ is the personal best position. $g$ is the global best position. $x_i$ is the current position.",
   "equationMeaning": "At its core, the math represents the trade-offs that Swarm intelligence manages to ensure robust convergence.",
   "useCase": "The versatility of Swarm intelligence makes it a go-to choice for developers working on low-latency, high-throughput applications.",
   "imageRef": "The graphic breakdown of Swarm intelligence helps demystify the internal mechanics that allow the model to learn effectively.",
   "origin": "First detailed in *Particle swarm optimization*, **Swarm intelligence** introduced a new perspective on how Evolutionary Computation can be implemented.",
   "currentTrends": "A major trend in Swarm intelligence involves the use of self-supervised learning to minimize the need for manual data labeling.",
   "technical2": "The agents follow very simple rules, and although there is no centralized control structure dictating how individual agents should behave, local, and to a certain degree random, interactions between such agents lead to the emergence of \"intelligent\" global behavior, unknown to the individual agents. Examples of swarm intelligence in natural systems include ant colonies, bee colonies, bird flocking, hawks hunting, animal herding, bacterial growth, fish schooling and microbial intelligence.\nThe application of swarm principles to robots is called swarm robotics while swarm intelligence refers to the more general set of algorithms. Swarm prediction has been used in the context of forecasting problems. Similar approaches to those proposed for swarm robotics are considered for genetically modified organisms in synthetic collective intelligence."
  },
  "relatedTerms": [
   "term-37",
   "term-5",
   "term-36",
   "term-18",
   "term-11"
  ]
 },
 {
  "title": "Transformer",
  "category": "Architecture",
  "definition": "In deep learning, the transformer is a family of artificial neural network architectures based on the multi-head attention mechanism, in which text is converted to numerical representations called tokens, and each token is converted into a vector via lookup from a word embedding table. At each layer, each token is then contextualized within the scope of the context window with other (unmasked) tokens via a parallel multi-head attention mechanism, allowing the signal for key tokens to be amplified and less important tokens to be diminished. \nTransformers have the advantage of having no recurrent units, therefore requiring less training time than earlier recurrent neural architectures (RNNs) such as long short-term memory (LSTM). Later variations have been widely adopted for training large language models (LLMs) on large (language) datasets.\n\nThe original version of the transformer architecture was proposed in the 2017 paper \"Attention Is All You Need\" by researchers at Google. The predecessors of transformers were developed as an improvement over previous architectures for machine translation, but have found many applications since. They are used in large-scale natural language processing, computer vision (vision transformers), reinforcement learning, audio, multimodal learning, robotics, and playing chess. It has also led to the development of pre-trained systems, such as generative pre-trained transformers (GPTs) and BERT (bidirectional encoder representations from transformers).\n\n### Technical Discussion & Applications\nIn the rapidly evolving field of Architecture, Transformer remains a key focus for researchers looking to improve model generalization. Its mathematical elegance is matched by its versatility in solving real-world engineering problems.",
  "image": "/images/transformer.jpg",
  "imageCitation": "Attention Is All You Need Transforming The Landscape Of Machine Learning - https://decodingdatascience.com/attention-is-all-you-need-transforming-the-landscape-of-machine-learning/",
  "defCitations": [
   {
    "source": "Wikipedia: Transformer (deep learning)",
    "url": "https://en.wikipedia.org/wiki/Transformer_(deep_learning)"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Transformer",
    "url": "https://paperswithcode.com/method/transformer"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Attention Is All You Need",
     "url": "https://arxiv.org/abs/1706.03762"
    }
   ],
   "code": [
    {
     "title": "HuggingFace Transformers",
     "url": "https://github.com/huggingface/transformers"
    }
   ],
   "tutorials": [
    {
     "title": "The Illustrated Transformer",
     "url": "https://jalammar.github.io/illustrated-transformer/"
    }
   ],
   "videos": [
    {
     "title": "Transformer Neural Networks - EXPLAINED",
     "url": "https://www.youtube.com/watch?v=TQQlZhbC5ps"
    }
   ]
  },
  "id": "term-44",
  "equation": "\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V",
  "structuredDefinition": {
   "introduction": "As a key element in Architecture, **Transformer** plays a vital role in transforming raw data into actionable intelligence.",
   "technical": "In deep learning, the transformer is a family of artificial neural network architectures based on the multi-head attention mechanism, in which text is converted to numerical representations called tokens, and each token is converted into a vector via lookup from a word embedding table. At each layer, each token is then contextualized within the scope of the context window with other (unmasked) tokens via a parallel multi-head attention mechanism, allowing the signal for key tokens to be amplified and less important tokens to be diminished. \nTransformers have the advantage of having no recurrent units, therefore requiring less training time than earlier recurrent neural architectures (RNNs) such as long short-term memory (LSTM).",
   "equationVars": "$Q$ represents the Query matrix. $K$ represents the Key matrix. $V$ represents the Value matrix. $d_k$ is the dimensionality of the keys, used as a scaling factor to prevent gradients from vanishing.",
   "equationMeaning": "This mathematical expression encapsulates the internal logic of Transformer, showing how inputs are mapped to targeted outputs.",
   "useCase": "The versatility of Transformer makes it a go-to choice for developers working on low-latency, high-throughput applications.",
   "imageRef": "By mapping out the components of Transformer, this visual makes it clear how the hierarchical dependencies work together.",
   "origin": "Historically, the development of **Transformer** was prompted by the need to handle data distributions that previous models found insurmountable.",
   "currentTrends": "Modern iterations of Transformer are increasingly concerned with ethical deployment and long-term sustainability.",
   "technical2": "Later variations have been widely adopted for training large language models (LLMs) on large (language) datasets.\n\nThe original version of the transformer architecture was proposed in the 2017 paper \"Attention Is All You Need\" by researchers at Google. The predecessors of transformers were developed as an improvement over previous architectures for machine translation, but have found many applications since. They are used in large-scale natural language processing, computer vision (vision transformers), reinforcement learning, audio, multimodal learning, robotics, and playing chess. It has also led to the development of pre-trained systems, such as generative pre-trained transformers (GPTs) and BERT (bidirectional encoder representations from transformers)."
  },
  "relatedTerms": [
   "term-23",
   "term-22",
   "term-33",
   "term-2",
   "term-7"
  ]
 },
 {
  "title": "Turing test",
  "category": "History & Philosophy",
  "definition": "The Turing test, originally called the imitation game by Alan Turing in 1949, is a test of a machine's ability to exhibit intelligent behaviour equivalent to that of a human. In the test, a human evaluator judges a text transcript of a natural-language conversation between a human and a machine. The evaluator tries to identify the machine, and the machine passes if the evaluator cannot reliably tell them apart. The results would not depend on the machine's ability to answer questions correctly, only on how closely its answers resembled those of a human. Since the Turing test is a test of indistinguishability in performance capacity, the verbal version generalizes naturally to all of human performance capacity, verbal as well as nonverbal (robotic).\nThe test was introduced by Turing in his 1950 paper \"Computing Machinery and Intelligence\" while working at the University of Manchester. It opens with the words: \"I propose to consider the question, 'Can machines think?'.\" Because \"thinking\" is difficult to define, Turing chooses to \"replace the question by another, which is closely related to it and is expressed in relatively unambiguous words\". Turing describes the new form of the problem in terms of a three-person party game called the \"imitation game\", in which an interrogator asks questions of a man and a woman in another room in order to determine the correct sex of the two players. Turing's new question is: \"Are there imaginable digital computers which would do well in the imitation game?\" This question, Turing believed, was one that could actually be answered. In the remainder of the paper, he argued against the major objections to the proposition that \"machines can think\".\nSince Turing introduced his test, it has been highly influential in the philosophy of artificial intelligence, resulting in substantial discussion and controversy, as well as criticism from philosophers like John Searle, who argue against the test's ability to detect consciousness.\n\n### Technical Discussion & Applications\nThe integration of Turing test into standard History & Philosophy workflows has led to significant gains in both accuracy and efficiency. By optimizing the way systems interpret complex signals, it provides a more robust foundation for autonomous learning.",
  "image": "/images/turing_test.jpg",
  "imageCitation": "Introduction To Ai - https://robolms.com/lesson/introduction-to-ai/",
  "defCitations": [
   {
    "source": "Wikipedia: Turing test",
    "url": "https://en.wikipedia.org/wiki/Turing_test"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Turing test",
    "url": "https://paperswithcode.com/method/turing-test"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Computing Machinery and Intelligence",
     "url": "https://academic.oup.com/mind/article/LIX/236/433/986238"
    }
   ],
   "code": [
    {
     "title": "Eliza Chatbot Source",
     "url": "https://github.com/wadetb/eliza"
    }
   ],
   "tutorials": [
    {
     "title": "The Turing Test Overview",
     "url": "https://plato.stanford.edu/entries/turing-test/"
    }
   ],
   "videos": [
    {
     "title": "The Turing Test Explained",
     "url": "https://www.youtube.com/watch?v=3wLqsRLvV-c"
    }
   ]
  },
  "id": "term-45",
  "equation": "P(\\text{Human} | \\text{Resp}_A) = P(\\text{Human} | \\text{Resp}_B)",
  "structuredDefinition": {
   "introduction": "Often described as a building block for History & Philosophy, **Turing test** enables sophisticated modeling of non-linear patterns.",
   "technical": "The Turing test, originally called the imitation game by Alan Turing in 1949, is a test of a machine's ability to exhibit intelligent behaviour equivalent to that of a human. In the test, a human evaluator judges a text transcript of a natural-language conversation between a human and a machine. The evaluator tries to identify the machine, and the machine passes if the evaluator cannot reliably tell them apart. The results would not depend on the machine's ability to answer questions correctly, only on how closely its answers resembled those of a human.",
   "equationVars": "$P$ denotes probability. 'Human' represents the event that the judge believes the entity is human. $\\text{Resp}_A$ and $\\text{Resp}_B$ are the conversational responses from the machine and the actual human.",
   "equationMeaning": "The variables in this equation interact to define the decision boundaries that characterize Turing test.",
   "useCase": "Industries ranging from finance to healthcare leverage Turing test to automate complex decision-making processes.",
   "imageRef": "The provided diagram offers a visual roadmap of Turing test, detailing the specific nodes and connections that drive the process.",
   "origin": "Invented to address the limitations of earlier methods, **Turing test** was formally proposed in *Computing Machinery and Intelligence*.",
   "currentTrends": "Recent developments in Turing test research are pushing the boundaries of what is possible in resource-constrained environments.",
   "technical2": "Since the Turing test is a test of indistinguishability in performance capacity, the verbal version generalizes naturally to all of human performance capacity, verbal as well as nonverbal (robotic).\nThe test was introduced by Turing in his 1950 paper \"Computing Machinery and Intelligence\" while working at the University of Manchester. It opens with the words: \"I propose to consider the question, 'Can machines think?'.\" Because \"thinking\" is difficult to define, Turing chooses to \"replace the question by another, which is closely related to it and is expressed in relatively unambiguous words\". Turing describes the new form of the problem in terms of a three-person party game called the \"imitation game\", in which an interrogator asks questions of a man and a woman in another room in order to determine the correct sex of the two players. Turing's new question is: \"Are there imaginable digital computers which would do well in the imitation game?\" This question, Turing believed, was one that could actually be answered. In the remainder of the paper, he argued against the major objections to the proposition that \"machines can think\".\nSince Turing introduced his test, it has been highly influential in the philosophy of artificial intelligence, resulting in substantial discussion and controversy, as well as criticism from philosophers like John Searle, who argue against the test's ability to detect consciousness."
  },
  "relatedTerms": [
   "term-37",
   "term-14",
   "term-10",
   "term-5",
   "term-21"
  ]
 },
 {
  "title": "Word embedding",
  "category": "NLP",
  "definition": "In natural language processing, a word embedding is a representation of a word. The embedding is used in text analysis. Typically, the representation is a real-valued vector that encodes the meaning of the word in such a way that the words that are closer in the vector space are expected to be similar in meaning. Word embeddings can be obtained using language modeling and feature learning techniques, where words or phrases from the vocabulary are mapped to vectors of real numbers.\nMethods to generate this mapping include neural networks, dimensionality reduction on the word co-occurrence matrix, probabilistic models, explainable knowledge base method, and explicit representation in terms of the context in which words appear.\nWord and phrase embeddings, when used as the underlying input representation, have been shown to boost the performance in NLP tasks such as syntactic parsing and sentiment analysis.\n\n\n\n### Technical Discussion & Applications\nIn the rapidly evolving field of NLP, Word embedding remains a key focus for researchers looking to improve model generalization. Its mathematical elegance is matched by its versatility in solving real-world engineering problems.",
  "image": "/images/word_embedding.jpg",
  "imageCitation": "Word Embeddings For Pytorch Text Classification Networks - https://coderzcolumn.com/tutorials/artificial-intelligence/word-embeddings-for-pytorch-text-classification-networks",
  "defCitations": [
   {
    "source": "Wikipedia: Word embedding",
    "url": "https://en.wikipedia.org/wiki/Word_embedding"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Word embedding",
    "url": "https://paperswithcode.com/method/word-embedding"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Distributed Representations of Words and Phrases (Mikolov)",
     "url": "https://arxiv.org/abs/1310.4546"
    }
   ],
   "code": [
    {
     "title": "Gensim Library",
     "url": "https://github.com/piskvorky/gensim"
    }
   ],
   "tutorials": [
    {
     "title": "Word Embeddings Guide",
     "url": "https://www.tensorflow.org/text/guide/word_embeddings"
    }
   ],
   "videos": [
    {
     "title": "Word Embeddings (StatQuest)",
     "url": "https://www.youtube.com/watch?v=viZrOnJclY0"
    }
   ]
  },
  "id": "term-46",
  "equation": "\\text{sim}(A, B) = \\frac{A \\cdot B}{\\|A\\| \\|B\\|}",
  "structuredDefinition": {
   "introduction": "The emergence of **Word embedding** has significantly altered the trajectory of NLP by introducing more efficient learning paradigms.",
   "technical": "In natural language processing, a word embedding is a representation of a word. The embedding is used in text analysis.",
   "equationVars": "$\\text{sim}(A, B)$ is the cosine similarity between two word vectors. $A$ and $B$ are the word embedding vectors. $A \\cdot B$ is their dot product. $\\|A\\|$ and $\\|B\\|$ are their respective magnitudes.",
   "equationMeaning": "The equation serves as the mathematical engine for Word embedding, governing the way parameters are adjusted during the optimization phase.",
   "useCase": "Real-world implementations of Word embedding often focus on enhancing user experience through personalized data filtering.",
   "imageRef": "By mapping out the components of Word embedding, this visual makes it clear how the hierarchical dependencies work together.",
   "origin": "Developed as a response to NLP challenges, **Word embedding** was first popularized in *Distributed Representations of Words and Phrases (Mikolov)*.",
   "currentTrends": "A major trend in Word embedding involves the use of self-supervised learning to minimize the need for manual data labeling.",
   "technical2": "Typically, the representation is a real-valued vector that encodes the meaning of the word in such a way that the words that are closer in the vector space are expected to be similar in meaning. Word embeddings can be obtained using language modeling and feature learning techniques, where words or phrases from the vocabulary are mapped to vectors of real numbers.\nMethods to generate this mapping include neural networks, dimensionality reduction on the word co-occurrence matrix, probabilistic models, explainable knowledge base method, and explicit representation in terms of the context in which words appear.\nWord and phrase embeddings, when used as the underlying input representation, have been shown to boost the performance in NLP tasks such as syntactic parsing and sentiment analysis."
  },
  "relatedTerms": [
   "term-31",
   "term-3",
   "term-23",
   "term-47",
   "term-17"
  ]
 },
 {
  "title": "Word2vec",
  "category": "NLP",
  "definition": "Word2vec is a technique in natural language processing for obtaining vector representations of words. These vectors capture information about the meaning of the word based on the surrounding words. The word2vec algorithm estimates these representations by modeling text in a large corpus. Once trained, such a model can detect synonymous words or suggest additional words for a partial sentence. Word2vec was developed by Tom\u00e1\u0161 Mikolov, Kai Chen, Greg Corrado, Ilya Sutskever and Jeff Dean at Google, and published in 2013.\nWord2vec represents a word as a high-dimension vector of numbers which capture relationships between words. In particular, words which appear in similar contexts are mapped to vectors which are nearby as measured by cosine similarity. This indicates the level of semantic similarity between the words, so for example the vectors for walk and ran are nearby, as are those for \"but\" and \"however\", and \"Berlin\" and \"Germany\".\n\n\n\n### Technical Discussion & Applications\nIn the rapidly evolving field of NLP, Word2vec remains a key focus for researchers looking to improve model generalization. Its mathematical elegance is matched by its versatility in solving real-world engineering problems.",
  "image": "/images/word2vec.jpg",
  "imageCitation": "Word Embeddings Explained C07C5Ea44D64 - https://towardsdatascience.com/word-embeddings-explained-c07c5ea44d64/",
  "defCitations": [
   {
    "source": "Wikipedia: Word2vec",
    "url": "https://en.wikipedia.org/wiki/Word2vec"
   },
   {
    "source": "Enriched via Standard ML Application Theory",
    "url": "https://developers.google.com/machine-learning/crash-course"
   },
   {
    "source": "[Trends & SOTA Research] PapersWithCode Benchmarks: Word2vec",
    "url": "https://paperswithcode.com/method/word2vec"
   }
  ],
  "resources": {
   "papers": [
    {
     "title": "Efficient Estimation of Word Representations in Vector Space",
     "url": "https://arxiv.org/abs/1301.3781"
    }
   ],
   "code": [
    {
     "title": "Original Word2Vec C Code",
     "url": "https://github.com/tmikolov/word2vec"
    }
   ],
   "tutorials": [
    {
     "title": "Illustrated Word2Vec",
     "url": "https://jalammar.github.io/illustrated-word2vec/"
    }
   ],
   "videos": [
    {
     "title": "Word2Vec Explained",
     "url": "https://www.youtube.com/watch?v=ISPId9Lhc1g"
    }
   ]
  },
  "id": "term-47",
  "equation": "J(\\theta) = -\\frac{1}{T} \\sum_{t=1}^T \\sum_{-c \\le j \\le c, j \\neq 0} \\log P(w_{t+j} | w_t)",
  "structuredDefinition": {
   "introduction": "Foundational to NLP, **Word2vec** serves as the primary mechanism for abstracting complex environmental variables.",
   "technical": "Word2vec is a technique in natural language processing for obtaining vector representations of words. These vectors capture information about the meaning of the word based on the surrounding words. The word2vec algorithm estimates these representations by modeling text in a large corpus.",
   "equationVars": "$J(\\theta)$ is the objective loss function. $T$ is the total number of words. $c$ is the context window size. $P(w_{t+j} \\mid w_t)$ is the probability of predicting the context word given the center word $w_t$.",
   "equationMeaning": "The equation serves as the mathematical engine for Word2vec, governing the way parameters are adjusted during the optimization phase.",
   "useCase": "From autonomous vehicles to fraud detection, Word2vec provides the necessary logic for real-time responsiveness.",
   "imageRef": "This schematic illustrates the flow of information through the Word2vec framework, highlighting the key stages of computation.",
   "origin": "Invented to address the limitations of earlier methods, **Word2vec** was formally proposed in *Efficient Estimation of Word Representations in Vector Space*.",
   "currentTrends": "Today, the focus on Word2vec has shifted toward improving transparency and reducing algorithmic bias.",
   "technical2": "Once trained, such a model can detect synonymous words or suggest additional words for a partial sentence. Word2vec was developed by Tom\u00e1\u0161 Mikolov, Kai Chen, Greg Corrado, Ilya Sutskever and Jeff Dean at Google, and published in 2013.\nWord2vec represents a word as a high-dimension vector of numbers which capture relationships between words. In particular, words which appear in similar contexts are mapped to vectors which are nearby as measured by cosine similarity. This indicates the level of semantic similarity between the words, so for example the vectors for walk and ran are nearby, as are those for \"but\" and \"however\", and \"Berlin\" and \"Germany\"."
  },
  "relatedTerms": [
   "term-46",
   "term-31",
   "term-3",
   "term-23",
   "term-17"
  ]
 }
];