import React, { useState } from "react";
import "./App.css";
import InputGroup from "./input-group";
function App() {
  const [newColor, setNewColor] = useState("");
  const [newWidth, setWidth] = useState("");
  const [newHeight, setHeight] = useState("");
  const [boxes, setBoxes] = useState([]);
  function newBox(e) {
    e.preventDefault();
    // setBoxes([...boxes, newColor]);
    setBoxes([...boxes,{color:newColor,width:newWidth,height:newHeight}])
    e.target.value = "";
  }

  return (
    <div className="App">
      <h1 style={{ marginTop: "20px" }}>Box Generator</h1>
      <form onSubmit={(e) => newBox(e)} style={{ margin: "10px" }}>
        <InputGroup
          style={{ marginRight: "10px" }}
          label={"Color "}
          value={newColor}
          onChange={(e) => {
            setNewColor(e.target.value);
          }}
        />
        <InputGroup
          style={{ marginRight: "10px" }}
          label={"Height "}
          value={newHeight}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <InputGroup
          style={{ marginRight: "10px" }}
          label={"Width "}
          value={newWidth}
          onChange={(e) => {
            setWidth(e.target.value);
          }}
        />
        <div style={{marginTop: "10px"}}>
          <center>
            <button className="btn btn-primary" style={{padding:"10px 100px"}}><span className="h3">Add</span></button>
          </center>
        </div>
      </form>
      <div style={{ display: "flex" }}>
        {boxes.map(({color,width,height}, i) => {
          return (
            <div
              key={i}
              onClick={()=>{
                // this is my Delete Statement
                setBoxes (boxes.filter((box,index)=>{ 
                  return index !== i
                }))
              }}
              style={{
                backgroundColor: color,
                width: width,
                height: height,
                marginRight: 10,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
