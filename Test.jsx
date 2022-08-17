/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import TypeTypescript from './TypeTypescript';

 
const Test1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const TypeTypescript1 = styled(TypeTypescript)(({ theme }) =>({  
  height: `46px`,  
  width: `100px`,  
  margin: `0px`,  
}));
 
function Test() {
  return (
    <Test1 >
       <TypeTypescript1   />
     </Test1>
   );
}

export default Test;