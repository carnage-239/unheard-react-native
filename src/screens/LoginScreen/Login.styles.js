import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 14,
    backgroundColor: 'black',
  },

  welcomeText: {
    flex: 1,
    paddingTop: 60,
    color: '#9D00FF',
  },

  inputFields: {
    flex: 3,
    paddingTop: 10,
    justifyContent: 'flex-start',
  },

  buttonsView: {
    flex: 1,
    paddingTop: 30,
  },

  loginBtn: {
    marginBottom: 10,
    borderRadius: 10,
  },
  loginSpotifyBtn: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#9D00FF',
    width: 125,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  inputText: {
    color: 'red',
  },

  inputBox: {
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10,
  },
});
