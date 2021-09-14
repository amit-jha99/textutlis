// import userEvent from "@testing-library/user-event";
// import React,{useState} from "react";

export default function About(props) {
  //   const [myStyle, setMyStyle] = useState({
  //     color:'black',
  //     backgroundColor:'white',
      


  // });
  let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
    // border:'2px solid',
    // borderColor:props.mode==='dark'?'white':'#042743'
  }
  // const [btntext, setBtnText] = useState("Enalbe  Dark Mode")

  // const toggleStyle =()=>{
  //  if(myStyle.color ==='black') {
  //    setMyStyle(
  //      {
  //        color:'white',
  //        backgroundColor:'black',
  //        border:'1px solid white'
  //      }
  //    )
  //    setBtnText("Enable Light Mode");
  //  }
  //  else{
  //   setMyStyle(
  //     {
  //       color:'black',
  //       backgroundColor:'white',
        
  //     }

  //   )
  //   setBtnText("Enable Dark Mode");
  //  }
  // }
    
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives a you a way to analyze your text quickly and efficiently. Be it word cout, character cout or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             TextUtils is  a free character counter tool that provides instant character &word count statistics for a given text.TextUtils reoprts the number of words and characters. Thus it is suitalbe for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word coutner software works in any web browsers such as chromme, firefox,Internet Explorer, Safari,Opera. It suits to count characters in facbook, blog,books,excel document,pdf document,esssays etc.
            </div>
          </div>
        </div>
      </div>
      
      {/* $0 woh element hota hai jo apan ne select kiya hota hai */}

    </div>
  );
}
