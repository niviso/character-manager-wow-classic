import React,{useContext,useState} from 'react';
import { TalentContext } from "../../context/talentContext";
import Talent from './talent';
import { Text, View,Image,Dimensions } from 'react-native';
import Styles from './styles.scss';

export default function Tree(props){
  const [state,setState] = useContext(TalentContext);
  const [totalTalentPoints,setTotalTalentPoints] = useState(1);
  const window = Dimensions.get("window");

  const addPoint = (id) => {
    let tmp = JSON.parse(JSON.stringify(state));
    let talent = tmp[id];
    if(!talent){
      return;
    }

    if(totalTalentPoints < talent.requiredPoints) {
      return;
    }
    if(talent.currentPoints < talent.maxPoints){
    talent.currentPoints++;
    talent.active = true;
    setTotalTalentPoints(totalTalentPoints+1);
    }

    if(talent.currentPoints == talent.maxPoints && talent.unlocksId){
      tmp[talent.unlocksId].active = true
    }


    setState(tmp);
  }

  const talents = state.map((talent,index) =>
  <View key={index} id={index} style={{position: 'absolute', left: (talent.slot * (window.width/4)-75),top: talent.level * 100,width:(window.width/4)}}>
  <Talent data={talent} onclick={addPoint}/>
  </View>
  );
return(

  <View style={Styles.Tree}>
  {talents}
  <Text>{totalTalentPoints}</Text>

  </View>
)
}
