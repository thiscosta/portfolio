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

import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

 
const TestTextFieldOutline: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const TextFieldOutlined: any = styled(TextField)({  
  width: `220px`,  
  margin: `0px`,  
});
 
function TestTextFieldOutlined(): JSX.Element {
  return (
    <TestTextFieldOutline >
       <TextFieldOutlined variant="outlined" size="medium"  label={`Test another label`} helperText="Helper text"   />
     </TestTextFieldOutline>
   );
}

export default TestTextFieldOutlined;
