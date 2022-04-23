import React, { Component } from "react";
import { ModelListContext } from "../_Context/ModelListContext";

export default class ModelListProvider extends Component {
  state = {
    modelListState: [
      {
        id: 1,
        name: "Tao Thao",
        age: 65,
        img: "./img/model/model1.png",
        like: 0,
        active: false,
      },
      {
        id: 2,
        name: "Gia Cat Luong",
        age: 54,
        img: "./img/model/model2.png",
        like: 0,
        active: true,
      },
      {
        id: 3,
        name: "Joker",
        age: 35,
        img: "./img/model/model3.png",
        like: 0,
        active: false,
      },
      {
        id: 4,
        name: "Tram Anh",
        age: 18,
        img: "./img/model/model4.png",
        like: 0,
        active: false,
      },
    ],
  };
  setActiveModel= (model) => {
    // let newArr = [...this.state.modelListState];
    // let obj = newArr.find(item => item.active);
    // obj.active= false;
    // let index = newArr.findIndex(item => model.id === item.id)
    // if(index !== -1){
    //   newArr[index].active= true;
    //   newArr[index].like +=1;
    // }
    let newArr = this.state.modelListState.map(item =>{
      if(item.id === model.id){
        item.active = true;
        item.like +=1;
      }else{
        item.active= false;
      }
      return item;
    })
    this.setState({modelListState: newArr});
  };

  render() {
    return (
      <ModelListContext.Provider value={{modelListState: this.state.modelListState, setActiveModel: this.setActiveModel}}>
        {this.props.children}
      </ModelListContext.Provider>
    );
  }
}
