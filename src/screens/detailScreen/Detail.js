import React, {useEffect} from 'react';
import axios from 'axios';
import {View} from 'react-native';
import {Card, Text} from 'react-native-elements';
import CustomCard from '../../compoenents/Card/CustomCard';
import {ScrollView} from 'react-native-gesture-handler';

function Detail({navigation}) {
  var data;
  useEffect(async () => {
    try {
      const res = await axios.get('https://unheard-server.herokuapp.com/blog');
      data = res.data;
      console.log(data.users);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <ScrollView>
        <Card
          containerStyle={{
            width: 350,
            height: 120,
            borderColor: 'white',
            backgroundColor: 'black',
          }}>
          <View>
            <Text h4 h4Style={{color: '#9D00FF'}}>
              Ishan Shanware
            </Text>
            <Text h4 h4Style={{color: 'white'}}>
              Despacito
            </Text>
            <Text h4 h4 h4Style={{color: 'white'}}>
              Daddy Yankee, Luis Fonsi, Justin Beiber
            </Text>
          </View>
        </Card>
        <Card
          containerStyle={{
            width: 350,
            height: 120,
            borderColor: 'white',
            backgroundColor: 'black',
          }}>
          <View>
            <Text h4 h4Style={{color: '#9D00FF'}}>
              Ishan Shanware
            </Text>
            <Text h4 h4Style={{color: 'white'}}>
              Shake That
            </Text>
            <Text h4 h4 h4Style={{color: 'white'}}>
              Eminem
            </Text>
          </View>
        </Card>
        <Card
          containerStyle={{
            width: 350,
            height: 120,
            borderColor: 'white',
            backgroundColor: 'black',
          }}>
          <View>
            <Text h4 h4Style={{color: '#9D00FF'}}>
              Pranjal Walia
            </Text>
            <Text h4 h4Style={{color: 'white'}}>
              Give Me Everything
            </Text>
            <Text h4 h4 h4Style={{color: 'white'}}>
              PitBull, Ne-Yo, AfroJack
            </Text>
          </View>
        </Card>
        <Card
          containerStyle={{
            width: 350,
            height: 120,
            borderColor: 'white',
            backgroundColor: 'black',
          }}>
          <View>
            <Text h4 h4Style={{color: '#9D00FF'}}>
              Ishan Shanware
            </Text>
            <Text h4 h4Style={{color: 'white'}}>
              Hips Don't Lie
            </Text>
            <Text h4 h4 h4Style={{color: 'white'}}>
              Shakira, wyclef jean
            </Text>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

export default Detail;
