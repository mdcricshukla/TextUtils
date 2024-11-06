import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
    //    console.log("Upper Case Clicked"+ text);
       let newText=text.toUpperCase();
       setText(newText) 
       props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick=()=>{
        //    console.log("Upper Case Clicked"+ text);
           let newText=text.toLowerCase();
           setText(newText)
           props.showAlert("Converted to LowerCase","success"); 
        }
        const handleClearClick=()=>{
            //    console.log("Upper Case Clicked"+ text);
               let newText=" ";
               setText(newText)
               props.showAlert("Text Clear","success"); 
            }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value); 
     }
     const handleCopy=()=>{
        var text = document.getElementById("mybox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To clipboard","success");
     }
     const handleExtraSpaces =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Remove","success");
     }
    const [text, setText] = useState(' ');
    // setText("new text");
    return (
        <>
    <div className="container" style ={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        
        
    </div>
    <div className="container my-3" style ={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text To Privew Here"}</p>
    </div>

    </>
  )
}
