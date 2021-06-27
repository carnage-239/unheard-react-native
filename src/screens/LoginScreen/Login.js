import React, {createRef, useState, useEffect} from 'react';
import {Alert, View, TextInput} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Login.styles';
import {login} from './../../redux/actions/auth';

const Login = ({navigation, login}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(isFocused);
  }, [isFocused]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const onLogin = () => {
    login(email, password);
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginText}>
        <Text h2 style={{color: '#9D00FF'}}>
          Welcome,
        </Text>
        <Text h4 style={{color: 'grey', marginTop: 5, marginBottom: 70}}>
          Login to continue
        </Text>
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
            title="Login"
            onPress={onLogin}
            buttonStyle={styles.loginSpotifyBtn}
            standard
            titleStyle={{fontSize: 15}}
          />
          <Button
            title="signUp"
            onPress={() => navigation.navigate('Signup')}
            buttonStyle={styles.loginSpotifyBtn}
            standard
            titleStyle={{fontSize: 15}}
          />
        </View>
      </View>
    </View>
  );
};

export default connect(null, {login})(Login);
