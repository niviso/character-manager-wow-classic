import React, { useState } from 'react';
const TalentContext = React.createContext([{}, () => {}]);

const TalentProvider = (props) => {
  const [state, setState] = useState(
    [
    {
      id: 1,
      name: 'Ancestral Knowledge',
      description: 'lorem lip',
      icon: 'talents/Spells/Spell_Shadow_GrimWard.png',
      level: 0,
      slot: 1,
      maxPoints: 5,
      currentPoints: 0,
      requiredPoints: 0,
      unlocksId: 3
    },
    {
      id: 2,
      name: 'Shield Specialization',
      description: 'lorem lip',
      icon: 'talents/Spells/Spell_Shadow_GrimWard.png',
      level: 0,
      slot: 2,
      maxPoints: 5,
      currentPoints: 0,
      requiredPoints: 0,
      unlocksId: null
    },
    {
      id: 3,
      name: 'Guaridan Totems',
      description: 'lorem lip',
      icon: 'talents/Spells/Spell_Shadow_GrimWard.png',
      level: 1,
      slot: 1,
      maxPoints: 5,
      currentPoints: 0,
      requiredPoints: 0,
      unlocksId: null
    },
    {
      id: 4,
      name: 'Thundering Strikes',
      description: 'lorem lip',
      icon: 'talents/Spells/Spell_Shadow_GrimWard.png',
      level: 1,
      slot: 2,
      maxPoints: 5,
      currentPoints: 0,
      requiredPoints: 0,
      unlocksId: null
    },
    {
      id: 5,
      name: 'Improved Ghost Wolf',
      description: 'lorem lip',
      icon: 'talents/Spells/Spell_Shadow_GrimWard.png',
      level: 1,
      slot: 3,
      maxPoints: 5,
      currentPoints: 0,
      requiredPoints: 0,
      unlocksId: null
    },
    {
      id: 6,
      name: 'Improved Lightning Shield',
      description: 'lorem lip',
      icon: 'talents/Spells/Spell_Shadow_GrimWard.png',
      level: 1,
      slot: 4,
      maxPoints: 5,
      currentPoints: 0,
      requiredPoints: 0,
      unlocksId: null
    }
  ]);

  return (
    <TalentContext.Provider value={[state, setState]}>
      {props.children}
    </TalentContext.Provider>
  );
}

export { TalentContext, TalentProvider };
