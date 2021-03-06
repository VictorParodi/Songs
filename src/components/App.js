import React from 'react';
import SongList from './SongList.js';
import SongDetails from './SongDetails.js';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="row">
                <div className="column eight wide">
                    <SongList />
                </div>

                <div className="column eight wide">
                    <SongDetails />
                </div>
            </div>
        </div>
    );
}

export default App;