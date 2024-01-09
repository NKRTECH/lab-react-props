import { Component } from "react";
import "./App.css"
export default class AppClass extends Component{
  constructor(props){
    super(props);
    this.state={
      data: props.imageData
    }
  }
  // code here
  render(){
    const getimg = this.state.data;
    console.log('class component',this.state)
    return(
      <>
      <h1>KALVIUM GALLERY</h1>
      <div className="app">
        {getimg.map((ele)=>{
          return <img key={ele.id} src={ele.img}  alt={ele.id} />
        })}
      </div>
      </>
    )
  }
}

