---
title: "AdaMSS: Adaptive Multi-Subspace Approach for Parameter-Efficient Fine-Tuning"
tags: ['LLMs','Large Models']
authors: ['Jingjing Zheng', 'Wanglong Lu', 'Yiming Dong', 'Chaojie Ji', 'Yankai Cao', 'Zhouchen Lin']
publication_types: ['article-journal']
publication: "*NeurIPS*"
abstract: "In this paper, we propose AdaMSS, an adaptive multi-subspace approach for parameter-efficient fine-tuning of large models. Unlike traditional parameter-efficient fine-tuning methods that operate within a large single subspace of the network weights, AdaMSS leverages subspace segmentation to obtain multiple smaller subspaces and adaptively reduces the number of trainable parameters during training, ultimately updating only those associated with a small subset of subspaces most relevant to the target downstream task. By using the lowest-rank representation, AdaMSS achieves more compact expressiveness and finer tuning of the model parameters. Theoretical analyses demonstrate that AdaMSS has better generalization guarantee than LoRA, PiSSA, and other single-subspace low-rank-based methods. Extensive experiments across image classification, natural language understanding, and natural language generation tasks show that AdaMSS achieves comparable performance to full fine-tuning and outperforms other parameter-efficient fine-tuning methods in most cases, all while requiring fewer trainable parameters. Notably, on the ViT-Large model, AdaMSS achieves 4.7% higher average accuracy than LoRA across seven tasks, using just 15.4% of the trainable parameters. On RoBERTa-Large, AdaMSS outperforms PiSSA by 7% in average accuracy across six tasks while reducing the number of trainable parameters by approximately 94.4%. These results demonstrate the effectiveness of AdaMSS in parameter-efficient fine-tuning."
summary:
date: "2025-09-01"
publishDate: "2025-09-01"
url_pdf: "https://arxiv.org/pdf/2301.00061"
featured: true
projects: []
slides: ""
---
