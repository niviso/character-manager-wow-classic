import React from 'react';
import { TalentProvider } from "../../context/talentContext";
import Tree from './tree';
export default function TalentTree(props){

return(
  <>
  <TalentProvider>
  <Tree/>
  </TalentProvider>

  </>
)
}
