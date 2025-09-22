---
title: "Global optimization of k-center clustering"
tags: ['K-center Clustering','Global Optimization']
authors: ['Mingfei Shi', 'Kaixun Hua', 'Jiayang Ren', 'Yankai Cao']
publication_types: ['report']
publication: "*International Conference on Machine Learning (ICML), 19956-19966*"
abstract: " k-center problem is a well-known clustering method and can be formulated as a mixed-integer nonlinear programming problem. This work provides a practical global optimization algorithm for this task based on a reduced-space spatial branch and bound scheme. This algorithm can guarantee convergence to the global optimum by only branching on the centers of clusters, which is independent of the dataset’s cardinality. In addition, a set of feasibility-based bounds tightening techniques are proposed to narrow down the domain of centers and significantly accelerate the convergence. To demonstrate the capacity of this algorithm, we present computational results on 32 datasets. Notably, for the dataset with 14 million samples and 3 features, the serial implementation of the algorithm can converge to an optimality gap of 0.1% within 2 hours. Compared with a heuristic method, the global optimum obtained by our algorithm can reduce the objective function on average by 30.4%."
date: "2022-06-28"
publishDate: "2022-06-28"
url_pdf: "https://proceedings.mlr.press/v162/shi22b/shi22b.pdf"
featured: true
projects: []
slides: ""
---
