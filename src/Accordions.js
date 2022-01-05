import React, { Component } from "react";
export class Acordions extends Component {
    render() {
    return (
<div id="faq" className="py-3">
<div className=" container" >
<h2 className="py-5 d-block">
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
| Familiar with |
</h2>
<div id="ll" className="accordion  rounded">
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item rounded">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed   bg-warning" type="button " data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
   <h4> One</h4>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body bg-warning">
      <h5>
          1- Python <br/><br/>
          2- Django <br/><br/>
          3- MySQL <br/><br/>
          4- C++ <br/><br/>
          5- Git & GitHub <br/><br/>
       </h5>
       </div>
    </div>
  </div>
  <div class="accordion-item rounded">
    <h2 class="accordion-header " id="flush-headingTwo">
      <button class="accordion-button collapsed text-warning  bg-success " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <h4>Two</h4>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body bg-warning">
        <h5>
         1- Principles of Graphic Design <br/><br/>
         2- Photoshop <br/><br/>
       </h5>
       </div>
    </div>
  </div>
</div>
</div>
</div>
<br/><br/><br/><br/>
</div>
);
}
}

export default Acordions;
    