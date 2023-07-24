import React, {useState} from "react";

export default function About(props) {

    // // Below we just make the state and set its initial state as the javascript object
    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     background : 'white'
    // })

    // Below we just make an object to set color and background properties of about
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#1e1631',
        backgroundColor: props.mode === 'dark' ? '#1e1631' : 'white',
        border: '1px solid',
        borderColor: props.mode === 'dark' ? 'white' : '#1e1631'
    }

return (
<div className="container my-3">
    <h2 style={{color: props.mode === 'dark' ? 'white' : '#1e1631'}}>About Us</h2>
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
                    <strong >Analyze Your text</strong>
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={myStyle}>
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is the
                    first item's accordion body.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
                    <strong>Free to use</strong>
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={myStyle}>
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is the
                    second item's accordion body. Let's imagine this being filled with
                    some actual content.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
                    <strong>Browser compatible</strong>
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={myStyle}>
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is the
                    third item's accordion body. Nothing more exciting happening here
                    in terms of content, but just filling up the space to make it
                    look, at least at first glance, a bit more representative of how
                    this would look in a real-world application.
                </div>
            </div>
        </div>
    </div>
</div>
);
}