---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: markdown
    content:
      title: 
      subtitle: ''
      text:
    design:
      columns: '2'
      background:
        image: 
          filename: ubc_vancouver_upscaled_4k.svg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: contain
          text_color_light: true
      spacing:
        padding: ['250px', '0', '250px', '0']
      css_class: narrow-hero

      
  - block: markdown
    id: home
    content:
      title: <strong>Now Solving:</strong>  Global Optimal AI
      subtitle: ''
      text: |
        <div style="display: flex; align-items: center; gap: 2rem;">
        <div class="text-center" style="max-width: 600px;">
         <h2>We focus on <strong class="text-2xl font-bold">S</strong>calable <strong class="text-2xl font-bold">O</strong>ptimization, <strong class="text-2xl font-bold">L</strong>earning, and <strong class="text-2xl font-bold">I</strong>ntelligent <strong class="text-2xl font-bold">D</strong>ecision-making (SOLID).</h2>
         <br>
         <p class="text-xs font-light" style="font-size: 17px;"><strong>SOLID Lab</strong> is based in the
         <a href="https://chbe.ubc.ca" class="custom-link" target="_blank"> Department of Chemical and Biological Engineering </a> at <a href="https://www.ubc.ca/" class="custom-link" target="_blank"> The University of British Columbia </a>.<br></p>
         <br>
         <a href="/#research" class="btn btn-dark" style="font-size: 17px;">Explore Our Research</a>
         <a href="people/" class="btn btn-light" style="font-size: 17px;">Meet Our People</a>
        </div>
        <div class="vertical-line" style="height: 375px;"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <h4 style="color: #374151; font-weight: bold;"> Latest Highlight </h4>
         <!-- News Card 1 --> 
          <div class="events-card">
            <p class="text-xs" style="font-size: 17px;"> A paper was published in Management Science. 
                <span style="color: #6B7280; font-weight: normal; font-style: normal; font-family: 'Segoe UI', sans-serif;" class="bg-green-500"> &nbsp;| September 2025 </span> 
            </p>
          </div>
         <!-- News Card 1 --> 
          <div class="events-card">
            <p class="text-xs" style="font-size: 17px;"> Two papers were accepted to NeurIPS. 
                <span style="color: #6B7280; font-weight: normal; font-style: normal; font-family: 'Segoe UI', sans-serif;" class="bg-green-500"> &nbsp;| September 2025 </span> 
            </p>
          </div>
         <!-- News Card 1 --> 
          <div class="events-card">
            <p class="text-xs" style="font-size: 17px;"> Jiayang received the Wall Research Award. 
                <span style="color: #6B7280; font-weight: normal; font-style: normal; font-family: 'Segoe UI', sans-serif;" class="bg-green-500"> &nbsp;| June 2025 </span> 
            </p>
          </div>
          <!-- News Card 1 --> 
          <div class="events-card">
            <p class="text-xs" style="font-size: 17px;"> Prof. Yankai Cao gave a talk at the MIT PSE Seminar. 
                <span style="color: #6B7280; font-weight: normal; font-style: normal; font-family: 'Segoe UI', sans-serif;" class="bg-green-500"> &nbsp;| May 2025 </span> 
            </p>
          </div>  
          <!-- News Card 1 --> 
          <div class="events-card">
            <p class="text-xs" style="font-size: 17px;"> Congratulations to Jingyi on her PhD graduation! 
                <span style="color: #6B7280; font-weight: normal; font-style: normal; font-family: 'Segoe UI', sans-serif;" class="bg-green-500"> &nbsp;| April 2025 </span> 
            </p>
          </div>  
         <!-- News Card 1 --> 
          <div class="events-card">
            <p class="text-xs" style="font-size: 17px;"> Jason Zhao received the Four Year Doctoral Fellowship. 
                <span style="color: #6B7280; font-weight: normal; font-style: normal; font-family: 'Segoe UI', sans-serif;" class="bg-green-500"> &nbsp;| March 2025 </span> 
            </p>
          </div>   
          <!-- News Card 3 -->
          <a href="https://www.nature.com/articles/s41467-022-29837-w" target="_blank" style="text-decoration: none; color: inherit;">
          <div class="events-card" style="font-size: 17px;">
            <p class="text-xs"> Yixiu Wang has published a paper in Nature communication as a co-first author. The paper has been cited for more than 500 times.
                <span style="color: #6B7280; font-weight: normal; font-style: normal; font-family: 'Segoe UI', sans-serif;" class="bg-green-500"> &nbsp;| April 2022 </span> 
            </p>
          </div>
          </a>
          <a href="event/" class="btn btn-outline" style="font-size: 17px;"> →  More lab news </a> </p> 
           <h4 style="color: #374151; font-weight: bold;"> Recruiting </h4>
           <p style="color: #374151; font-weight: normal; font-size: 17px;"> We are  seeking future postdoctoral researchers, graduate students, visiting students, and undergraduate students. <a href="positions/" class="btn btn-outline" style="font-size: 17px;">→ Join Us</a> </p> 
        </div>
        </div>
        <br>
        <div class="vertical-line" style="width: 1300px; height:2px;"></div>
    design:
      columns: '1'
      background:
        color: '#ffffff'   
      spacing:
        padding: ['80px', '0', '10px', '0']

 

  - block: tag_cloud
    id: research
    content:
      title:  Research
      text: |
         <p class="text-xl font-light mt-2">SOLID Lab focuses on the design and implementation of large-scale local and global optimization algorithms to solve problems that arise in diverse decision-making paradigms such as <em>machine learning</em>, <em>stochastic optimization</em>,and <em>optimal control</em>. Our algorithms combine mathematical techniques and emerging high-performance computing hardware to achieve computational scalability. We make these developments accessible to academic and industrial users by implementing algorithms on easy-to-use and extensible software libraries.</p>
         <p class="text-xl font-light mt-2">The problems that we are addressing are of unprecedented complexity and defy the state-of-the-art. For example, in our recent work, we developed a novel global optimization algorithm capable of solving k-center clustering problems (an unsupervised learning task) with up to 1 billion samples, while state-of-the-art approaches in the literature can only address several thousand samples.</p>
         <p class="text-xl font-light mt-2"> We are currently using our tools to address engineering and scientific questions that arise in diverse application domains, including optimal decision trees, optimal clustering, deep-learning-based control, optimal power system planning, AI for bioprocess operation, and optimal design of zero energy buildings.</p>

      taxonomy: tags
      # Choose how many tags you would like to display (0 = all tags)
      count: 20
    design:
      columns: '2'
      background:
        color: '#ffffff'
      # Minimum and maximum font sizes (1.0 = 100%).
      font_size_min: 0.7
      font_size_max: 2.0  
      spacing:
        padding: ['80px', '40px', '10px', '0']
 

     
  - block: collection
    id: publications
    content:
      title: Selected Publications  <a href="publication/" class="btn btn-outline">→ See Full Publications </a>
      text: ""
      count: 30
      filters:
        folders:
          - publication
        publication_type: ""
        featured_only: true
      citation_style: ieee
    design:
      view: citation
      show_icon: false 
      columns: '2'
      background:
        color: '#ffffff'
      spacing:
        padding: ['40px', '40px', '10px', '0']
    
 
 
 
  - block: slider
    id: gallery
    content:
      title: Gallery
      slides:
      - title:  
        content: 📚💡 2025 Group Meeting
        align: left
        background:
          image:
            filename: 5901759354989_.pic_hd.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#666'
          background-size: contain
        link: 
          text: See Full Gallery
          url: ../gallery/
      - title:  
        content: 🎉🎓 Celebrate Jingyi’s Graduation (2025)
        align: left
        background:
          image:
            filename: WechatIMG208-scaled.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#666'
          background-size: contain
        link: 
          text: See Full Gallery
          url: ../gallery/
      - title:  
        content: 🔥 Group BBQ (2023)
        align: right
        background:
          image:
            filename: picture3-e1745732324801.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#555'
          background-size: contain
        link: 
          text: See Full Gallery
          url: ../gallery/
      - title:  
        content: 🍽️ Group Dinner (2022)
        align: left
        background:
          image:
            filename: picture2-e1745732281446.jpg
            filters:
              brightness: 0.5
          position: center
          color: '#333'
          background-size: contain
        link: 
          text: See Full Gallery
          url: ../gallery/
        #link:
         # icon: 
          #icon_pack: 
          #text: See Full Gallery
          #url: ../gallery/
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '500px'
      slide_weight: '700px'
      is_fullscreen: false
      # Automatically transition through slides?
      loop: false
      # Duration of transition between slides (in ms)
      interval: 100
      fit: contain


    
  - block: markdown
    id: contact
    content:
      title: ""
      text: |
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 2rem;">
  
          <!-- Left: Lab Info -->
          <div style="flex: 1; min-width: 250px;">
            <h3><strong>SOLID Lab</strong></h3>
            <p>
              We focus on Scalable Optimization, Learning, and Intelligent Decision-making (SOLID). SOLID Lab is based in the Department of Chemical and Biological Engineering at The University of British Columbia.
            </p>
          </div>
  
  
          <!-- Right: Affiliations -->
          <div style="flex: 1; min-width: 200px;">
            <h3>Affiliations</h3>
            <ul style="list-style: none; padding-left: 0;">
              <li><a href="https://www.ubc.ca/">The University of British Columbia</a></li>
              <li><a href="https://chbe.ubc.ca/">Chemical & Biological Engineering</a></li>
              <li><a href="https://cerc.ubc.ca/">Clean Energy Research Center</a></li>
              <li><a href="https://www.iam.ubc.ca/">Institute of Applied Mathematics</a></li>
              <li><a href="https://greencollege.ubc.ca/">Green College</a></li>
            </ul>
          </div>

          <!-- Middle: Contact Us-->
          <div style="flex: 1; min-width: 250px;">
            <h3>Contact US</h3>
            <p>Yankai Cao<br>
             Associate Professor<br> 
             Tel: 1 604 822 1346<br>
            Email: <a href="mailto:yankai.cao@ubc.ca">yankai.cao@ubc.ca</a><br>
            Office: CHBE 237<br>
            2360 East Mall<br>
            Vancouver, BC, Canada<br>
            </p>
          </div>
  
        </div>
    design:
      columns: '2'
      background:
        color: '#f5f5f5'
      spacing:
        padding: ['20px', '40px', '10px', '0']

  
  
  - block: contact 
    content: 
      title: "" 
      text:   
      coordinates:
        latitude: '49.26262'
        longitude: '-123.24766'
      #directions: Enter Building and take the stairs to Floor 2 (CHBE 237)
      #office_hours:
       # - 'Monday 10:00 to 13:00'
       # - 'Wednesday 09:00 to 10:00'
      #appointment_url: 'https://calendly.com'
      #contact_links:
      #  - icon: comments
      #    icon_pack: fas
      #    name: Discuss on Forum
      #    link: 'https://discourse.gohugo.io'
    design:
      columns: '3'
      background:
        color: '#f5f5f5'
      spacing:
        padding: ['40px', '40px', '10px', '0']


 
---
