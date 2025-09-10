---
title: "A scalable deterministic global optimization algorithm for training optimal decision tree"
tags: ['Mixed-integer Programming', 'Global Optimization', 'Decision Tree', 'Scalable']
authors: ['Kaixun Hua', 'Jiayang Ren', 'Yankai Cao']
publication_types: ['report']
publication: "*Advances in Neural Information Processing Systems 35, 8347-8359*"
abstract: "The training of optimal decision tree via mixed-integer programming (MIP) has attracted much attention in recent literature. However, for large datasets, state-of-the-art approaches struggle to solve the optimal decision tree training problems to a provable global optimal solution within a reasonable time. In this paper, we reformulate the optimal decision tree training problem as a two-stage optimization problem and propose a tailored reduced-space branch and bound algorithm to train optimal decision tree for the classification tasks with continuous features. We present several structure-exploiting lower and upper bounding methods. The computation of bounds can be decomposed into the solution of many small-scale subproblems and can be naturally parallelized. With these bounding methods, we prove that our algorithm can converge by branching only on variables representing the optimal decision tree structure, which is invariant to the size of datasets. Moreover, we propose a novel sample reduction method that can predetermine the cost of part of samples at each BB node. Combining the sample reduction method with the parallelized bounding strategies, our algorithm can be extremely scalable. Our algorithm can find global optimal solutions on dataset with over 245,000 samples (1000 cores, less than 1% optimality gap, within 2 hours). We test 21 real-world datasets from UCI Repository. The results reveal that for datasets with over 7,000 samples, our algorithm can, on average, improve the training accuracy by 3.6% and testing accuracy by 2.8%, compared to the current state-of-the-art."
date: "2022-12-06"
publishDate: "2022-12-06"
url_pdf: "https://proceedings.neurips.cc/paper_files/paper/2022/file/37771cc0be272368102a37f202bb88d8-Paper-Conference.pdf"
featured: true
projects: []
slides: ""
---
