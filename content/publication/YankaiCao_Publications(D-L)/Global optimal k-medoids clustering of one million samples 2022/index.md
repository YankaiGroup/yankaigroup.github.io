---
title: "Global optimal k-medoids clustering of one million samples"
tags: ['K-medoids Clustering','Global Optimization']
authors: ['Jiayang Ren', 'Kaixun Hua', 'Yankai Cao']
publication_types: ['report']
publication: "*Advances in Neural Information Processing Systems (NeurIPS) 35, 982-994*"
abstract: "We study the deterministic global optimization of the K-Medoids clustering problem. This work proposes a branch and bound (BB) scheme, in which a tailored Lagrangian relaxation method proposed in the 1970s is used to provide a lower bound at each BB node. The lower bounding method already guarantees the maximum gap at the root node. A closed-form solution to the lower bound can be derived analytically without explicitly solving any optimization problems, and its computation can be easily parallelized. Moreover, with this lower bounding method, finite convergence to the global optimal solution can be guaranteed by branching only on the regions of medoids. We also present several tailored bound tightening techniques to reduce the search space and computational cost. Extensive computational studies on 28 machine learning datasets demonstrate that our algorithm can provide a provable global optimal solution with an optimality gap of 0.1% within 4 hours on datasets with up to one million samples. Besides, our algorithm can obtain better or equal objective values than the heuristic method. A theoretical proof of global convergence for our algorithm is also presented."
date: "2022-12-06"
publishDate: "2022-12-06"
url_pdf: "https://proceedings.neurips.cc/paper_files/paper/2022/file/06abed94583030dd50abe6767bd643b1-Paper-Conference.pdf"
featured: true
projects: []
slides: ""
---
