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
        <Tile image={images[this.props.tileOrder[1]  + '.jpg']} />

      </div>
    );
  }
}



const mapStateToProps = state => {
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
