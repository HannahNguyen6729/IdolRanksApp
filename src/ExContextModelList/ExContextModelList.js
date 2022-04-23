import React, { Component } from "react";
import ModelList from "./ModelList";
import ProfileModel from "./ProfileModel";
import ModelListProvider from "./_Provider/ModelListProvider";

export default class ExContextModelList extends Component {
  render() {
    return (
      <ModelListProvider>
        <div className='container-fluid'>
          <ProfileModel />
          <ModelList />
        </div>
      </ModelListProvider>
    );
  }
}
