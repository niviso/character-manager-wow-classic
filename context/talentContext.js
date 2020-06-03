import React, { useState } from 'react';
const TalentsContext = React.createContext([{}, () => {}]);

const TalentsProvider = (props) => {
  const [appState, setTalentsState] = useState(
    {
      id: 1,
      name: 'Test 1',
      description: 'lorem lip',
      level: 0,
      slot: 1,
      maxPoints: 5,
      currentPoints: 0,
      requiredPoints: 0,
      unlocksId: 3
    },
    {
      id: 2,
      name: 'Test 2',
      description: 'lorem lip',
      level: 0,
      slot: 4,
      maxPoints: 5,
      currentPoints: 0,
      requiredPoints: 0,
      unlocksId: null
    },
    {
      id: 3,
      name: 'Test 3',
      description: 'lorem lip',
      level: 1,
      slot: 4,
      maxPoints: 5,
      currentPoints: 0,
      requiredPoints: 0,
      unlocksId: null
    }

  );

  return (
    <TalentsContext.Provider value={[appState, setTalentsState]}>
      {props.children}
    </TalentsContext.Provider>
  );
}

export { TalentsContext, TalentsProvider };
