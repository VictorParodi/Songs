import { combineReducers }  from 'redux';

const songsReducer = () => {
    return [
        {title: 'Song 1', duration: '1:20'},
        {title: 'Song 2', duration: '2:20'},
        {title: 'Song 3', duration: '3:20'},
        {title: 'Song 4', duration: '4:20'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});