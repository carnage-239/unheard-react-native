import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {Button} from 'react-native-elements';
import Recording from '../../compoenents/recording/Recording';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  OutputFormatAndroidType,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import RNFetchBlob from 'rn-fetch-blob';
import {connect} from 'react-redux';
import {fetchSongs} from './../../redux/actions/song';

import styles from './Home.styles';
import CustomCard from '../../compoenents/Card/CustomCard';

function Home({navigation, fetchSongs, songLoaded}) {
  const audioRecordPlayer = new AudioRecorderPlayer();
  audioRecordPlayer.setSubscriptionDuration(0.09);
  const dirs = RNFetchBlob.fs.dirs;

  const path = Platform.select({
    ios: 'hello.m4a',
    android: `${dirs.CacheDir}/hello.mp3`,
  });

  const [microphonePermission, setMicrophonePermission] = useState(false);
  const [responseUri, setResponseUri] = useState('');

  const audioSet = {
    AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    AudioSourceAndroid: AudioSourceAndroidType.MIC,
    AVEncoderAudioQualityIOS: AVEncoderAudioQualityIOSType.high,
    AVNumberOfChannelsKeyIOS: 2,
    OutputFormatAndroid: OutputFormatAndroidType.MPEG_4,
    AVFormatIDKeyIOS: AVEncodingOption.aac,
  };

  const onStartRecord = async () => {
    console.log('clickeddd');

    // console.log(audioSet);
    const result = await audioRecordPlayer.startRecorder(path, audioSet, false);
    setTimeout(() => {
      console.log('okayyy');
      onStopRecord();
    }, 5000);
    audioRecordPlayer.addRecordBackListener(e => {
      return;
    });

    console.log('result' + result);
  };

  const onStopRecord = async () => {
    const result = await audioRecordPlayer.stopRecorder();

    audioRecordPlayer.removeRecordBackListener();
    console.log('stopped');
    setResponseUri(result);

    await fetchFile();
  };

  const fetchFile = async () => {
    let formdata = [];
    const path = responseUri.replace('file://', '');
    formdata.push({
      name: 'file',
      filename: 'hello.mp3',
      data: RNFetchBlob.wrap(path),
    });

    fetchSongs(formdata);
  };

  const recordHelper = () => {
    requestMicrophonePermission();
    if (microphonePermission) {
      onStartRecord();
    } else {
      Alert.alert('Microphone Access not given');
    }
  };

  const requestMicrophonePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Unheard Microphone Permission',
          message:
            'Un heard needs to access your microphone so as to listen to what you are hearing',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'Ok',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permission granted');
        setMicrophonePermission(true);
      } else {
        console.log('Not granted');
        setMicrophonePermission(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <TouchableOpacity onPress={recordHelper} style={styles.roundButton1}>
        <Text style={styles.buttonText}>Start Listening</Text>
      </TouchableOpacity>
      {songLoaded && <CustomCard />}
      {songLoaded && (
        <Button title="share" buttonStyle={{backgroundColor: '#9D00FF'}} />
      )}
    </View>
  );
}
const mapStateToProps = state => ({
  songLoaded: state.song.songLoaded,
});
// const mapStateToProps = {};
export default connect(mapStateToProps, {fetchSongs})(Home);
