import React, { Component } from "react";
import { connect } from "react-redux";

import { tileClick } from "../actions/actionCreator";
import { bindActionCreators } from "redux";

class Tile extends Component {
  render() {
    return (
      <div className="tile">
        <img src={this.props.image}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
