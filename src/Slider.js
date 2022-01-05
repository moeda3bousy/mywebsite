import React, { Component } from 'react';
import 'react-slideshow-image/dist/styles.css'
class Slideshow extends Component{
render()
{
return(
  <div className="container py-5 my-5"><br/><br/><br/><br/><br/><br/><br/><br/>


<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">


                <div class="d-none carousel-indicators">    

<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
    

             <div class="carousel-inner">
    
      <div class="carousel-item active" data-bs-interval="4000">
<img id="lll" src="never.png" class="d-block" alt="1"/>
    
      <div class=" carousel-caption d-md-block">
<h5><span></span></h5>
<p></p>
              </div>
              </div>
         
    
          <div class="carousel-item" data-bs-interval="4000">

<img id="lll" src="life.png" class="d-block" alt="2"/>
         
          <div class=" carousel-caption d-md-block">
<h5><span></span></h5>
<p></p>
              </div>
               </div>              
       </div>


<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" id="l" >
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
</button>

<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
</button>

</div><br/><br/><br/><br id="zz" /></div>

)}}

export default Slideshow