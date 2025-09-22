---
title: "Deep Learning-Based Approximation of Model Predictive Control Laws Using Mixture Networks"
tags: ['Model Predictive Control', 'Deep Learning', 'Deep Neural Networks']
authors: ['Morimasa Okamoto', 'Jiayang Ren', 'Qiangqiang Mao', 'Jianfeng Liu', 'Yankai Cao']
publication_types: ['article-journal']
publication: "*IEEE Transactions on Automation Science and Engineering 22, 2909-2922*"
abstract: "Model Predictive Control (MPC) is an optimization-based control scheme exploited in various industrial processes. It determines optimal control inputs that achieve the desired outcome by predicting future behavior based on models while satisfying system constraint sets. The consideration of complex system dynamics and multiple constraints enables the control of nonlinear processes with complicated behavior. Furthermore, because of its extensive applicability, MPC has been applied to the design of supply chain management, especially to scheduling problems that are formulated as mixed-integer linear programming (MILP) problems. However, the online implementation of MPC is challenging, especially for large-scale systems, due to the prohibitive computation cost. In recent years, the approximation method of MPC control laws using deep neural networks (DNNs) has been studied to address this issue. Nevertheless, it struggles to provide accurate approximation when multiple optimal control inputs exist for each system state. In this case, the MPC control laws follow one-to-many mappings, which DNNs cannot correctly approxi
mate asthey canonlyprovide one-to-one mappings. Therefore, we propose mixture network-based approximation methods. Mixture networks, with components of probability (density) distributions in the output layer, can approximate the MPC control laws through a combination of conditional probabilities provided by mixing several estimated probability distributions. This approach then generates multiple control inputs with the highest probabilities. Notably, the proposed method can be applied to various problems by selecting an appropriate probability distribution, such as using a Gaussian distribution for nonlinear problems and a Bernoulli distribution for MILP problems. In this thesis, we investigate two case studies: a benchmark problem for nonlinear problems and a scheduling problem in the steel-making process for MILP problems. The simulation results  demonstrate that the mixture network-based approximation method outperforms the DNN-based approximation method."
date: "2024-04-15"
publishDate: "2024-04-15"
url_pdf: "file:///D:/Downloads/ubc_2023_may_okamoto_morimasa.pdf.pdf"
featured: true
projects: []
slides: ""
---
