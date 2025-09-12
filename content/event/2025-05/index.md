---
title: Prof. Yankai Cao gave a talk at the MIT PSE Seminar
event: "Link"
event_url: https://pse-seminar.mit.edu/seminars/cao/

location:  
address:
  street:  
  city:  
  region:  
  postcode:  
  country:  

summary: 'titled  *Decoding control: scalable MPC approximation with decision trees*.'
abstract: 'Model Predictive Control (MPC) is widely used in the process industry for its superior control performance. However, its real-time computational demands limit implementation in systems with fast dynamics. To address this, we propose an offline approach to approximate MPC control laws using oblique decision trees (DTs) with linear predictions, which are then deployed as online controllers. Unlike Explicit MPC—which suffers from scalability issues due to the exponential growth of partitions—DTs offer both interpretability through if-else rules and scalability via data-driven training, with datasets generated from ideal MPC simulations. Notably, DTs with oblique splits and linear leaf predictions mirror the piecewise affine structure of explicit MPC. A key challenge is training the DT model, a mixed-integer problem. We tackle this with a novel gradient-based algorithm, enabling efficient training with GPU-accelerated machine-learning tools. Through case studies, we demonstrate that this method accurately approximates both linear and nonlinear MPC control laws, significantly reducing online computation time while maintaining control performance.'


# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2025-05-08T14:00:00Z'
date_end: ''
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2025-05-08'

authors: [' ']
tags: ['Model Predictive Control']

# Is this a featured talk? (true/false)
featured: false

image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/bzdhc5b3Bxs)'
  focal_point: Right

url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides:

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
---
