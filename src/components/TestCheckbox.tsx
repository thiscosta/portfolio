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

import { Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

 
const TestCheckbox1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `121px`,  
  height: `63px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Checkbox1: any = styled(Checkbox)({  
  position: `absolute`,  
  left: `10px`,  
  top: `13px`,  
});
 
function TestCheckbox(): JSX.Element {
  return (
    <TestCheckbox1 >
       <FormControlLabel  control={<Checkbox1 defaultChecked={true}  size="medium" color="primary"/>} label={"Label"} />
           </TestCheckbox1>
   );
}

export default TestCheckbox;