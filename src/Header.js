import React, { Component } from "react";
class Header extends Component{
    render(){
        return(
      
      <div id="t" className=" container">
      
        <div className="navbar container bg-success rounded fixed-top my-2  px-5 navbar-expand-md ">
              <h1 className="text-warning" >Mohamed Omar El-Daabousy</h1>

       
       <div className="collapse navbar-collapse">
    
    <ul id="kk"className="navbar-nav ms-auto" >

     <         li className="nav-item dropdown"> 
          <a id='vvv' href="#u" class="nav-link dropdown-toggle text-warning" data-bs-toggle='dropdown'>
                     <span></span>
                             </a> 

<ul id="kk" className="dropdown-menu bg-success" >
        
        <li> <a id='vv' href="#f" className=" text-warning dropdown-item">Professional Skills </a> </li>
        <li> <a id='v' href="#zz" className=" text-warning dropdown-item">Familiar with </a> </li>
        <li> <a id='v' href="#q" className=" text-warning dropdown-item">Personal Skills &<br/>Work Experience </a> </li>
        <li> <a id='vvv' href="#t" className=" text-warning dropdown-item">Back </a> </li>

</ul>

</li>

</ul>

</div></div>
 <br/> <br/>
         
         <img id="o" src="mm.jpg" alt="m" className="img-fluid img-thumbnail  p-5 m-5 rounded "/>

        <p className="row text-warning bg-success m-5 p-5 d-inline-block rounded ">

        <h2> Front-end Engineer</h2><br/>
University: Misr University for Science and Technology <br/>
Major: Computer Science<br/>
Graduation Date: 2021<br/>
Phone: (+2) 01142511793<br/>
Email: elda3bousy@gmail.com<br/><br/>

        </p>

        </div>
      
    )

}
}
export default Header; 