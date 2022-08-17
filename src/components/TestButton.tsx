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

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

 
const TestButton1: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `96px`,  
  height: `45px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const ButtonContained: any = styled(Button)({  
  position: `absolute`,  
  left: `1px`,  
  top: `1px`,  
});
 
function TestButton(): JSX.Element {
  return (
    <TestButton1 >
       <ButtonContained variant="contained" size="large" color="primary"    > Large </ButtonContained>
     </TestButton1>
   );
}

export default TestButton;
