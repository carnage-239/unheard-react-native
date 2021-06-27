import {SONG_FAILED, SONG_IDENTIFIED} from './types';
import RNFetchBlob from 'rn-fetch-blob';
import {parse} from '@babel/core';
export const fetchSongs = formData => async dispatch => {
  let res = await RNFetchBlob.fetch(
    'POST',
    'https://unheard-server.herokuapp.com/files',
    {
      // Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    formData,
  );

  const parsedData = JSON.parse(res.data);
  console.log(parsedData['engine']['music']);
  if (parsedData['engine']) {
    console.log('\n whityy');

    dispatch({
      type: SONG_IDENTIFIED,
      payload: parsedData['engine']['music'][0]['external_metadata']['spotify'],
    });
  }
};
