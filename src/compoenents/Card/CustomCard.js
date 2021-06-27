import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Card, ListItem, Button, Icon, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
function CustomCard({songData}) {
  console.log(
    songData.artists.map(artist => {
      return artist.name;
    }),
  );
  var key = 1;
  return (
    <SafeAreaView>
      <View>
        <Card
          containerStyle={{
            width: 350,

            borderRadius: 10,
            backgroundColor: 'black',
            borderColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'column',
          }}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text h4 h4Style={{color: '#9D00FF'}}>
              Song:
            </Text>
            <Text h4 style={{marginLeft: 10}} h4Style={{color: 'white'}}>
              {songData['track']['name']}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <Text h4 h4Style={{color: '#9D00FF'}}>
              Album:
            </Text>
            <Text h4 style={{marginLeft: 10}} h4Style={{color: 'white'}}>
              {songData['album']['name']}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <Text h4 h4Style={{color: '#9D00FF'}}>
              Artists:{' '}
            </Text>
            {songData['artists'].map(artist => (
              <Text key={key++} h4 style={{marginLeft: 10, color: 'white'}}>
                {artist['name']},
              </Text>
            ))}
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  songData: state.song.songData,
});
export default connect(mapStateToProps)(CustomCard);
