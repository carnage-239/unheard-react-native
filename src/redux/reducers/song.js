import {SONG_FAILED, SONG_IDENTIFIED} from './../actions/types';

const initialState = {songLoaded: false, songData: {}};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SONG_IDENTIFIED:
      console.log(payload);
      console.log(state);
      return {...state, songData: payload, songLoaded: true};
    default:
      return state;
  }
}
