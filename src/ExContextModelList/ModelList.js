import React, { Component } from "react";
import ModelItem from "./ModelItem";
import { ModelListContext } from "./_Context/ModelListContext";

export default class ModelList extends Component {
  render() {
    return (
      <ModelListContext.Consumer>
        {(value) => {
          //console.log(value))
          return (
            <div>
              <h2>Idol List</h2>
              <div className="row">
                {value.modelListState.map((item, index) => (
                  <div className="col-3" key={index}>
                    <ModelItem item={item}/>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </ModelListContext.Consumer>
    );
  }
}
