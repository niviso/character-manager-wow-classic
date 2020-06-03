import React,{useContext} from 'react';
import Icon from '../icon/icon';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './styles.scss';

export default function Talent(props){
  const {data,onclick} = props;
return(
  <TouchableOpacity style={Styles.Talent} onPress={() => onclick(data.id)}>
  <Icon fill={false} name={data.icon}/>
  <Text style={{fontSize: 10,textAlign: 'center'}}>{data.name}{"\n"}{data.currentPoints}/{data.maxPoints}</Text>
  </TouchableOpacity>
)
}
