import React, { useState } from "react";

function Form() {

  const [name , setName]=useState("");
  const [email , setEmail]=useState("");
  const [showValue , setShowValue]=useState("")
  function showing (){
    if(name == "a" && email=="a@erp.com" ){
     setShowValue("succes")
      
    }else{
    
      setShowValue("fali")
    }
  }
  return (
    <div className="flex justify-center">
    <h1 className="text-3xl">Form</h1>

      <input type="text" placeholder="name will write here ...." value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder="email will write here ...." value={email} onChange={(e)=>setEmail(e.target.value)}/>

<button onClick={showing}> button </button>
   {showValue}

    </div>
  );
}

export default Form;
