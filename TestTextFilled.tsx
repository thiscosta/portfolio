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

import { styled } from '@mui/material/styles';
import TestTxt from './TestTxt';

 
const TestTextFilled1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `220px`,  
  height: `56px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const ImageUploadTestTrueM: any = styled(TestTxt)(({ theme }: any) =>({  
  width: `220px`,  
  position: `absolute`,  
  left: `15px`,  
  top: `14px`,  
}));
 
function TestTextFilled(): JSX.Element {
  return (
    <TestTextFilled1 >
       <ImageUploadTestTrueM   />
     </TestTextFilled1>
   );
}

export default TestTextFilled;
