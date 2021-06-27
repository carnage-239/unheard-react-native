import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';
import styles from './Signup.styles';
import {connect} from 'react-redux';
import {signup} from './../../redux/actions/auth';

function Signup({signup, navigation, isRegistered}) {
  useEffect(() => {
    if (isRegistered) {
      console.log('okayy');
      navigation.navigate('Login');
    }
  }, [isRegistered]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {
    console.log(name);
    signup(name, email, password);
  };
  return (
    <View style={styles.container}>
      <Input
        style={{color: 'white'}}
        placeholder="Name"
        onChangeText={name => setName(name)}
      />
      <Input
        style={{color: 'white'}}
        placeholder="Email"
        onChangeText={email => setEmail(email)}
      />
      <Input
        style={{color: 'white'}}
        placeholder="Password"
        onChangeText={password => setPassword(password)}
        secureTextEntry
      />
      <View style={{alignItems: 'center'}}>
        <Button
          title="signUp"
          onPress={onRegister}
          buttonStyle={styles.loginSpotifyBtn}
          standard
          titleStyle={{fontSize: 15}}
        />
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
          buttonStyle={styles.loginSpotifyBtn}
          standard
          titleStyle={{fontSize: 15}}
        />
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  isRegistered: state.auth.isRegistered,
});
export default connect(mapStateToProps, {signup})(Signup);
