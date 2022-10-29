import React, { Component } from "react";
import MainNavbar from "../components/home/mainNavbar";
import Navigation from "../components/common/navigation";
import CustomMap from "../components/common/customMap";

class Home extends Component {
  componentDidMount = () => {
    
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    
  }

  render() {
    return (
      <div className="h-full w-full">
        <MainNavbar title={"Grab it!"} />
        <CustomMap />
        <Navigation  />
      </div>
    );
  }
}



export default Home;
