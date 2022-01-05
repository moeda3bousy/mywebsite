import React, { Component } from "react";
class Contentitems extends Component{
    render(){
    return(
        <div className="col-md-6 col-lg-4 "> 
        <div className="card  m-5">
        <div className="card-header ">
        <img className='rounded img-thumbnail' id='j'style={{maxWidth:"100%"}}  src={this.props.image} alt={this.props.name} />
        </div>
        <div className="card-body ">
        <h1 ><a className="p-3 text-warning nav-link " href={this.props.link}>{this.props.name}</a></h1>
        </div>
        </div> 
       </div>
    )

    }
}
export default Contentitems;