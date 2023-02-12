import React, { Component } from "react";
import {FaInstagram} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
class Footer extends Component
{
render(){
return(
    <div id="mk" className="py-3 bg-danger">
    <div className="container text-success d-flex flex-row-reverse">

<h4><br/>
<a className="rounded" href="https://www.facebook.com/Mohamed.Omar.El.Daabousy/"><FaFacebook className="text-success"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a className="rounded" href="https://instagram.com/moeedaabousy?utm_medium=copy_link"><FaInstagram className="text-success"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a className="rounded" href="https://www.linkedin.com/in/mohamed-el-daabousy-a48a80224/"><FaLinkedin className="text-success"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
 </h4>
</div>
<footer className="container">
<p className="lead text-success text-center">
Copyright &copy;2021 Mohamed Omar
</p>
</footer>
</div>


)
}
}
export default Footer 