import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Filters from "./components/filters/index";
import Content from "./components/content";
import { getFn } from "./utils/httpWrapperUtil";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchesData: [],
    };
  }

  componentDidMount() {
    this.getLaunches();
  }

  getLaunches = (params) => {
    getFn("launches", { limit: 100,...params}).then(
      (response) => {
        this.setState({ launchesData: response.data });
      },
      (error) => {}
    );
  };

  render() {
    const { launchesData } = this.state;
    return (
      <>
      <div className="outer-initial-container">
      <div className="initial-container">
      <h3 className="title">SpaceX Launch Programs</h3>
        <div className="container-div">
          <Filters getLaunches={this.getLaunches}></Filters>
          <Content launchesData={launchesData}></Content>
        </div>
        </div>
        </div>
      </>
    );
  }
}

export default App;
