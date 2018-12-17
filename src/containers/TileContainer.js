import React, { Component } from "react";
import './style.css'
import { connect } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  setVisibilityFilter
} from "../actions/actionCreator";

import Tile from "./Tile.js"
import { tileClick } from "../actions/actionCreator";
import { TILE_CLICK } from "../actions/actionsTypes";

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../imgs', false, /\.(png|jpe?g|svg)$/));

// <img src={images['doggy.png']} />

class TileContainer extends Component {
  render() {
    return (
      <div className="tileContainer">
        <div className="tileSpace" onClick={() => this.props.tileClick([0],[0])}>
          <Tile image={images[this.props.tileOrder[0][0]  + '.jpg']}/>
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([0],[1])}>
          <Tile image={images[this.props.tileOrder[0][1]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([0],[2])}>
          <Tile image={images[this.props.tileOrder[0][2]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([0],[3])}>
          <Tile image={images[this.props.tileOrder[0][3]  + '.jpg']} />
        </div>

        <div className="tileSpace" onClick={() => this.props.tileClick([1],[0])}>
          <Tile image={images[this.props.tileOrder[1][0]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([1],[1])}>
          <Tile image={images[this.props.tileOrder[1][1]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([1],[2])}>
          <Tile image={images[this.props.tileOrder[1][2]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([1],[3])}>
          <Tile image={images[this.props.tileOrder[1][3]  + '.jpg']} />
        </div>

        <div className="tileSpace" onClick={() => this.props.tileClick([2],[0])}>
          <Tile image={images[this.props.tileOrder[2][0]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([2],[1])}>
          <Tile image={images[this.props.tileOrder[2][1]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([2],[2])}>
          <Tile image={images[this.props.tileOrder[2][2]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([2],[3])}>
          <Tile image={images[this.props.tileOrder[2][3]  + '.jpg']} />
        </div>

        <div className="tileSpace" onClick={() => this.props.tileClick([3],[0])}>
          <Tile image={images[this.props.tileOrder[3][0]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([3],[1])}>
          <Tile image={images[this.props.tileOrder[3][1]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([3],[2])}>
          <Tile image={images[this.props.tileOrder[3][2]  + '.jpg']} />
        </div>
        <div className="tileSpace" onClick={() => this.props.tileClick([3],[3])}>
          <Tile image={images[this.props.tileOrder[3][3]  + '.jpg']} />
        </div>
      </div>
    );
  }
}





function mapStateToProps(state) {
  return {tileOrder: state.tileMover}
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      tileClick
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TileContainer);
