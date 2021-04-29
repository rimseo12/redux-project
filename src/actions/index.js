//Action Creator
export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
  
export const manageSong = (state = [], action) => {
  switch(action.type) {
    case 'ADD_SONG':
      return [...state, {
        title: action.title,
        duration: action.duration
      }];
    case 'REMOVE_SONG':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

