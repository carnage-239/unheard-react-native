import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';

function Recording() {
  const [recordSecs, setRecordSecs] = useState(0);
  const [recorTime, setRecorTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');

  const audioRecordPlayer = new AudioRecorderPlayer();
  audioRecordPlayer.setSubscriptionDuration(0.09);

  return <View></View>;
}

export default Recording;
