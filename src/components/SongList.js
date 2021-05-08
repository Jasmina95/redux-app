import React, { Component } from "react";
// our component needs to be wrapped in connect
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  render() {
    return (
      <div>
        <h2 className="list">SongList</h2>
        {this.props.songs.map(song => (
          <div className="item" key={song.title}>
            <div className="left">{song.title}</div>
            <div className="right">
              <button
                onClick={() => this.props.selectSong(song)}
                className="primary">Select</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

// ova funkcija se poziva kao argument connect-a
const mapStateToProps = state => {
  return { songs: state.songs };
};

// SongList ide u funkcije connect u okviru koje se poziva neka funkcija
// koja ce da uveze SongList
// da dodjemo do podataka za song listu -> funkcija koja ce da mapira state to props
export default connect(mapStateToProps, { selectSong })(SongList);
