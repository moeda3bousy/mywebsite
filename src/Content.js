import React, { Component } from "react"
import File from "./File"
import Contentitems from "./Contentitems"
class Content extends Component{
    constructor(){
    super()
this.state = {
   pa : File,
   ex:[],
   counter:0,
    };
    this.clickHandler=this.clickHandler.bind(this);
    };

    clickHandler()
    {
    if (this.state.counter<this.state.pa.length)
    {
    this.state.ex.push(this.state.pa[this.state.counter]);
    this.setState(function(d){
    return{counter:d.counter+1}
     } );
this.tools = this.state.ex.map(function (tool)
    {
    return(
        <Contentitems
    key={tool.id}
    link={tool.link}
    image={tool.image}
    name={tool.name}

    />
)
}
    
)
}
}
    render()
    { 
    return(
   
       <div id="f" className="container">
         <br/><br/><br/><br/>
           <h3 className='d-block' style={{textAlign:"center"}}>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Professional Skills | </h3>
             <div  className='row'>
        <div className='col-md-12'   >
        <button id="aa" className="btn col-md-12 btn-lg btn-success  m-5  text-warning rounded" onClick={this.clickHandler} >
        Click Here (Click 5 times )</button>
       </div>
       {this.tools}
    </div>
    <div>
    
    </div>
    </div>

    )
    }
    }
export default Content;