import React ,{useState} from 'react';


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)

  }
  const handleDownClick=()=>{
    console.log("Lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)

  }
  const handleclearClick=()=>{
    console.log("Clear Text was clicked");
    let newText='';
    setText(newText)

  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }
  const handleRemove=()=>{
     let newText=text.split(/[ ]+/)
     setText(newText.join(" "));
  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
    const [text,setText]=useState('');

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>    
        <h1>{props.heading}</h1>
  <div className="form-group">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary my-1 mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
  <button className="btn btn-primary my-1 mx-1" onClick={handleclearClick}>Clear Text</button>
  <button className='btn btn-primary my-1 mx-1' onClick={handleCopy}>Copy Text</button>
  <button className='btn btn-primary my-1 mx-1' onClick={handleRemove}>Remove Extra Space</button>
    </div>
  
  <div className='conatiner my-3 mx-2' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h3>Your text summary</h3>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{(1/125)*text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter text to preview"}</p>
  </div>
  </>
  );
}
