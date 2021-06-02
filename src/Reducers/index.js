import {combineReducer} from 'redux';

const songsReducer =()=>{
    return [
        {title:'No Scrubs', duration:'4:05'},
        {title:'Macarena', duration:'3:01'},
        {title:'Pinpinela', duration:'2:06'},
        {title:'I wanna be like you', duration:'5:00'},
    ];
};

const selectedSongReducer =(selectedSong=null, action)=>{
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
};


export default combineReducer({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});