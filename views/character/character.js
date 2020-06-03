import React from 'react';
import { Text, View,Image } from 'react-native';
import Styles from './styles.scss';
import ProffesionPicker from '../../components/proffesionPicker/proffesionPicker';
import TalentTree from '../../components/talentTree/talentTree';

export default function Character() {
  return (
    <View style={Styles.Container}>
      <View style={Styles.Header}>
      <Image style={Styles.HeaderBackground}         source={{
                uri: 'https://classicdb.ch/models/3986.gif',
              }}/>
      <Text style={Styles.Name}>Petmycat</Text>
      <Text style={Styles.Class}> {'<'}Troll Hunter{'>'} </Text>
      </View>
      <View>
      <TalentTree/>
      </View>

    </View>
  );
}
