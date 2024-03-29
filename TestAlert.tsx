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

import { Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TestAlertProps } from './types';

 
const TestAlert1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `328px`,  
  height: `76px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const AlertFilled: any = styled(Alert)({  
  width: `320px`,  
  position: `absolute`,  
  left: `8px`,  
  top: `0px`,  
});
 
function TestAlert(props: TestAlertProps): JSX.Element {
  return (
    <TestAlert1 >
       <AlertFilled variant="filled" severity={"error"}   > {props.description} </AlertFilled>
       </TestAlert1>
   );
}

export default TestAlert;
