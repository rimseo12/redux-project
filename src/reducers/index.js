import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'Baby Shark', duration: '3:01'},
    { title: 'Drive', duration: '3:25'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
  
export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
  });