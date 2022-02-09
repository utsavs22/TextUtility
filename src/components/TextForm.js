import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClClick=()=>
    {
        setText('');
    }
    const handleRevClick=()=>
    {
        let newText=text;
        let neww="";
        for (let i=text.length-1;i>=0;i--)
        {
            neww += newText[i];
        }
        setText(neww);
    }
    const handleOnChange=(event)=>
    {
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleRevClick}>Reverse Case</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.trim().split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
