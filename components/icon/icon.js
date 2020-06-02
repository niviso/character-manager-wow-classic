import React from 'react';
import { Image } from 'react-native';
export default function Icon(props){
  const {name,size=50,fill=true} = props;
  return(
    <>
    <Image source={require('../../assets/Abilities/Ability_Ambush.png')} style={{width: fill ? '100%' : size, height: fill ? '100%' : size}}/>
    </>
  )
}
