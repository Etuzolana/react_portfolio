import React from 'react';

export default function About() {
  return (
<body>
    <nav class="d-flex navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand pl-3" href="index.html">Eddy "Kubiki" Tuzolana</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        
      </div>
    </nav>

    <div class="container pb-5">
      <div>
        <h1 class="ml-1">Let talk little About Me</h1>
        <img
          class="square_image mt-3"
          src="\Eddy Portfolio img.jpg"  
          alt="Eddy Tuzolana"
          width="200px"
        />
        <div class="paragraph mt-4">
            This is Eddy Tuzolana, currently I am living at Washington State in the seattle area. I am a kinda like traveling person.<br/> I recently graduated from university of Washington with coding bootcamp.
            During the course we learned creating a beautiful web and designed, professional websites using best practice accessibility and the latest W3 web standard guidelines resulting in semantic and seo friendly HTML and CSS.<br/> All my sites are lovingly hand code.<br/>
            I design websites that convert visitors into customers and help your business grow. Given links to some of my websites to showcase my potential to fit for a given position.<br/>
            All the Websites linked below are designed, built according to latest web standards.
        </div>
      </div>
    </div>

    <div class="card fixed-bottom mt-5">
      <div class="card-header text-center"></div>
    </div>
  </body>
  );
}

