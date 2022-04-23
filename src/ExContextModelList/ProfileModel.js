import React, { Component } from "react";
import { ModelListContext } from "./_Context/ModelListContext";
//import re from '../Data/dataModel.json'
//import rd from '../../public/img/model/'



export default class ProfileModel extends Component {
  render() {
    return (
        <ModelListContext.Consumer>
            {value =>{
                let activeModel = value.modelListState.find(model => model.active)
               // console.log(activeModel)
                return  (
                    <div className="card text-left bg-light" style={{ height:350, width:350}} >
                      <img style={{ height:250, width:350}} className="card-img-top" src={activeModel.img} alt={activeModel.id} />
                      <div className="card-body">
                        <h4 className="card-title">Name: {activeModel.name}</h4>
                        <p className="card-text">Age: {activeModel.age}</p>
                        <p className="card-text">Like: {activeModel.like} <i className="fa fa-heart text-danger"></i> </p>
                      </div>
                    </div>
                )
            }}
        </ModelListContext.Consumer>
      
    );
  }
}
