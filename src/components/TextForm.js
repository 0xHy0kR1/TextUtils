import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = (e) => {
        let newText = text.toUpperCase();
        setText(newText); // When you click on button then the value inside the textarea changed to setText value
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = (e) => {
        let newText = text.toLocaleLowerCase();
        setText(newText); // When you click on button then the value inside the textarea changed to setText value)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleOnChange = (e) => {
        setText(e.target.value); // Erase this line and after that we don't even able to write under the textarea
    }
    const handleCopyClick = (e) => {
        const textToCopy = document.querySelector('#myBox');
        const copyButton = document.querySelector('#copyButton');

        copyButton.addEventListener('click', function(e){
            // writeText --> method of navigator.clipboard
            // navigator.clipboard --> object
            // writeText write the specified text to the clipboard
            navigator.clipboard.writeText(textToCopy.value) // It returns a promise
            .then(() => {
                props.showAlert("Copied to clipboard", "success");
                console.log(`Copied to clipboard`);
              })
              .catch((error) => {
                console.error(`Could not copy text:`);
              });
        });
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    const [text, setText] = useState('Enter text here'); // Here text is a state and setText is a function which is used to update the text state
    // Note - text is a state not a variable we can't update/set it by assigning its a value[text = "updated text"]
    // text = "Enter text here new" // Wrong way
    // setText('Enter text here new'); // Right way
    return (
    <>
    <div className="container" style={{color : props.mode === 'light'?'black':'white'}} >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="12" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'?'white':'#08012b', color : props.mode === 'light'?'black':'white'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} id="copyButton" className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copied to Clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'light'?'black':'white'}}>
        <h2 >Your text summary</h2>
        <p >{text.split(" ").filter((element) =>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p >{0.008 * text.split(" ").filter((element) =>{return element.length !== 0}).length} Minutes to read</p>
        <h3 >Preview</h3>
        <p >{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
    
  )
}
