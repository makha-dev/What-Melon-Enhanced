import React, { Component } from "react";
import { Stage, Layer, Text, Circle } from "react-konva";
import AvatarCircle from "./avatarCircle";

class CanvasAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 30);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  getX = (centerX, orbitRadius, numberOfPeople, i) => {
    return (
      centerX +
      orbitRadius *
        Math.cos(
          ((2 * Math.PI) / numberOfPeople) * i +
            (Math.PI / 2160) * this.state.count
        )
    );
  };

  getY = (centerY, orbitRadius, numberOfPeople, i) => {
    return (
      centerY +
      orbitRadius *
        Math.sin(
          ((2 * Math.PI) / numberOfPeople) * i +
            (Math.PI / 2160) * this.state.count
        )
    );
  };

  getCircles = () => {
    let { orbitRadius, circleRadius, friends, onCall } = this.props;
    friends = friends.filter((friend) => friend.online);

    const centerX = window.innerWidth / 2;
    const centerY = window.innerWidth / 2;
    const circles = [];
    for (let i = 0; i < friends.length; i++) {
      const x = this.getX(centerX, orbitRadius, friends.length, i);
      const y = this.getY(centerY, orbitRadius, friends.length, i);

      const circle = (
        <AvatarCircle
          onClick={() => onCall(friends[i])}
          x={x}
          y={y}
          radius={circleRadius}
          avatar={friends[i]["avatar"]}
        />
      );

      const text = (
        <Text
          text={friends[i]["email"]}
          x={x - circleRadius / 2 - 5}
          y={y + 28}
          height={18}
          width={40}
          ellipsis={true}
          align="center"
          fontFamily="Dosis"
          fontStyle="bold"
        />
      );

      circles.push(
        <>
          {circle}
          {text}
        </>
      );
    }
    return circles;
  };

  getWatermelon = () => {
    return (
      <Text
        text={this.props.isLoading ? "Connecting..." : "Online"}
        x={window.innerWidth / 2 - 40}
        y={window.innerWidth / 2 - 4}
        height={18}
        width={80}
        fontSize={12}
        ellipsis={true}
        align="center"
        fontFamily="Dosis"
        fontStyle="bold"
      />
    );
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerWidth}>
        <Layer>
          <Circle
            x={window.innerWidth / 2}
            y={window.innerWidth / 2}
            radius={this.props.orbitRadius}
            fill={"#3b82f690"}
          />
          <Circle
            x={window.innerWidth / 2}
            y={window.innerWidth / 2}
            radius={this.props.orbitRadius - 3}
            fill={"#f9f7f3"}
          />
          {this.getCircles().map((circle) => circle)}
          {this.getWatermelon()}
        </Layer>
      </Stage>
    );
  }
}

export default CanvasAnimation;
