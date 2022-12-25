import React, { Component } from 'react'

 class ResultComponent extends Component {
  render() {
    return (
      <div>
        <h1 style={{marginBottom:"-100px"}}>Result</h1>
        <div className='container' style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:'80vh',backgroundColor:'purple'}}>
                <h6>You need more practice</h6>
                <h1>Your Score id 20%</h1>
                <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'violet'}}>
                    <p>Total Number of Questions</p>
                    <p>15</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'violet'}}>
                    <p>Number of attempted Questions</p>
                    <p>15</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'violet'}}>
                    <p>Number of correct answers</p>
                    <p>15</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'violet'}}>
                    <p>Number of wrong answers</p>
                    <p>15</p>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default ResultComponent
