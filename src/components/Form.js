import React, { useState } from "react";

function Form(props) {
  return (
    <form>
      <input
       type ="text"
       onChange={props.handleFirstName}
       value={props.firstName}
       />

       <input
        type ="text"
        onChange={props.handleLastName}
        value={props.LasttName}
        
       />
       <button type = "submit"> Submit</button>
    </form>
  )

}

export default Form;
