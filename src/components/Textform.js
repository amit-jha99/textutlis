import React,{useState} from 'react'



//The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.

//--------------

//React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global variable or object. We will learn about these in detail in this article. Passing and Accessing props. We can pass props to any component as we declare attributes for any HTML tag.

export default function Textform(props) {
    
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase !","success");
    }
    const handleLoClick =()=>{
        
        let newText=text.toLowerCase();
        setText(newText);
        
        props.showAlert("converted to lowercase !","success");
    }

    const clearText =()=>{
        
        let newText=""
        setText(newText);
        props.showAlert("Text has been cleared","success");
    }

    const sentenceCase =()=>{
        
        let newText=text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
        props.showAlert("converted to sentancecase!","success");
    }
    const handleCopy =()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();//selected text diselect ho jayega
        props.showAlert("text has been copied","success");
        

        

    }

    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleExtraSpaces =() =>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra space has been removed","success");
    }
    const [text,setText]=useState('');// state variable
    // text="new text"; //Wrong way to change the state
    // setText("new  text");//Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
             <h1 className= 'mb-2'> {props.heading}</h1>          
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{background:props.mode==='dark'? '#13466e':'white',color: props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={sentenceCase}>convert to sentencecase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'? 'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
        
    )
}
