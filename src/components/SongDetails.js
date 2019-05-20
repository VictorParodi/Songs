import React from 'react';
import {connect} from 'react-redux';

const SongDetails = (props) => {
    const song = (props && props.song) || {};

    return (
        <div>
            <h1>Details For:</h1>
            <p>Song: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetails);