import React, { Component } from "react";
import { ModelListContext } from "./_Context/ModelListContext";

export default class ModelItem extends Component {
  render() {
      let {item} = this.props;
      //console.log(item)
    return (
      <ModelListContext.Consumer>
        {value =>{
          return (
        <div className="card text-left bg-light" style={{ height:350, width:350}} >
          <img style={{ height:250, width:350}} className="card-img-top" src={item.img} alt={item.id} />
          <div className="card-body">
            <h4 className="card-title">Name: {item.name}</h4>
            <p className="card-text">Age: {item.age}</p>
            <button 
              onClick={()=>{value.setActiveModel(item)}}
              className=" btn btn-success"> 
              {item.like}  
              <i className="fa fa-heart text-danger"></i>
            </button>
          </div>
        </div>
          )
        }}
      </ModelListContext.Consumer>
      
    );
  }
}
