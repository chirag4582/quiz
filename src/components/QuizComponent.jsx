import React, { Component } from "react";

class QuizComponent extends Component {
  render() {
    return (
      <div>
        <h1>Question</h1>
        <h6>This is a random question</h6>
        <div style={{width:"90vh",margin:'5vh'}}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button style={{ width: "50vh",margin:'5px',fontSize:'2.5em' }}>option a</button>
            <button style={{ width: "50vh",margin:'5px',fontSize:'2.5em' }}>option b</button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button style={{ width: "50vh",margin:'5px',fontSize:'2.5em' }}>option c</button>
            <button style={{ width: "50vh",margin:'5px',fontSize:'2.5em' }}>option d</button>
          </div>
          <div style={{marginTop:'10vh',display:'flex',justifyContent:'space-evenly'}}>
            <button style={{fontSize:'2em'}}>Previous</button>
            <button style={{fontSize:'2em'}}>Next</button>
            <button style={{fontSize:'2em'}}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
