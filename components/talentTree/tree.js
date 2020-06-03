import React,{useContext} from 'react';
import { TalentContext } from "../../context/talentContext";
import Talent from './talent';
import { Text, View,Image,Dimensions } from 'react-native';
import Styles from './styles.scss';

export default function Tree(props){
  const [state,setState] = useContext(TalentContext);
  const window = Dimensions.get("window");

  const addPoint = (id) => {
    let tmp = JSON.parse(JSON.stringify(state));
    if(tmp[id-1].currentPoints < tmp[id-1].maxPoints){
    tmp[id-1].currentPoints++;
    }

    if(tmp[id-1].currentPoints == tmp[id-1].maxPoints){
      //Unlock
    }


    setState(tmp);
  }

  const talents = state.map((talent,index) =>
  <View key={index} style={{position: 'absolute', left: (talent.slot * (window.width/4)-75),top: talent.level * 100,width:(window.width/4)}}>
  <Talent data={talent} onclick={addPoint}/>
  </View>
  );
return(

  <View style={Styles.Tree}>
  {talents}
  </View>
)
}
