---
title: "A Scalable deterministic global optimization algorithm for clustering problems"
tags: ['Global Optimization','Scalable','Clustering']
authors: ['Kaixun Hua', 'Mingfei Shi', 'Yankai Cao']
publication_types: ['report']
publication: "*International Conference on Machine Learning (ICML), 4391-4401*"
abstract: "The minimum sum-of-squares clustering (MSSC) task, which can be treated as a Mixed Integer Second Order Cone Programming (MISOCP) problem, is rarely investigated in the literature through deterministic optimization to find its global optimal value. In this paper, we modelled the MSSC task as a two-stage optimization problem and proposed a tailed reduced-space branch and bound (BB) algorithm. We designed several approaches to construct lower and upper bounds at each node in the BB scheme, including a scenario grouping based Lagrangian decomposition approach. One key advantage of this reduced-space algorithm is that it only needs to perform branching on the centers of clusters to guarantee convergence, and the size of centers is independent of the number of data samples. Moreover, the lower bounds can be computed by solving small-scale sample subproblems, and upper bounds can be obtained trivially. These two properties enable our algorithm easy to be paralleled and can be scalable to the dataset with up to 200,000 samples for finding a global -optimal solution of the MSSC task. We performed numerical experiments on both synthetic and real-world datasets and compared our proposed algorithms with the off-the-shelf global optimal solvers and classical local optimal algorithms. The results reveal a strong performance and scalability of our algorithm."
date: "2021-07-01"
publishDate: "2021-07-01"
url_pdf: "https://proceedings.mlr.press/v139/hua21a/hua21a.pdf"
featured: true
projects: []
slides: ""
---
