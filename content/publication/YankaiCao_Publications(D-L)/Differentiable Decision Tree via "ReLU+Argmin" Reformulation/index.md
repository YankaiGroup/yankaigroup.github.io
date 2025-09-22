---
title: "Differentiable Decision Tree via ``ReLU+Argmin'' Reformulation"
tags: ['Decision tree','Differentiable decision tree']
authors: ['Qiangqiang Mao', 'Jiayang Ren', 'Yixiu Wang', 'Chenxuanyin Zou', 'Jingjing Zheng', 'Yankai Cao']
publication_types: ['report']
publication: "*NeurIPS*"
abstract: "Decision tree, despite its unmatched interpretability and lightweight structure, faces two key issues: non-differentiability and low testing accuracy, both of which limit its broader applicability. This study addresses these issues by developing a differentiable oblique tree that optimizes entire tree structure using gradient-based optimization, avoiding the suboptimality common in greedy tree inductions. We propose an exact reformulation of hard-split trees based on "ReLU+Argmin" mechanism, and then cast the reformulated tree training as an unconstrained optimization task. The ReLU-based sample branching, expressed as exact-zero or non-zero values, preserve a unique decision path, in contrast to soft decision trees with probabilistic routing. The subsequent Argmin operation identifies the unique zero-violation path, enabling deterministic predictions. For effective gradient flow, we approximate Argmin behaviors by scaling softmin function. To ameliorate numerical instability, we propose a warm-start annealing scheme that solves multiple optimization tasks with increasingly accurate approximations. This reformulation alongside distributed GPU parallelism offers strong scalability, supporting 12-depth tree even on million-scale datasets where most baselines fail. Extensive experiments demonstrate that our optimized tree achieves superior testing accuracy against 14 baselines, including an average improvement of 7.54% over CART, even 2.01% over the classic random forest."
summary:
date: "2025-09-18"
publishDate: "2025-09-18"
url_pdf: "https://openreview.net/pdf?id=F11iEhKoYp"
featured: false
projects: []
slides: ""
---
