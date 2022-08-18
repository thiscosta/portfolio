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

import SwitchDarkImage from '../assets/images/switch_dark_1.png';
import SwitchDark1Image from '../assets/images/switch_dark.png';
import { styled } from '@mui/material/styles';
import { ExportSwitchProps } from './types';

 
const PricingCode: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const SwitchDark: any = styled("img")({  
  height: `58px`,  
  width: `34px`,  
  margin: `0px`,  
});
  
const SwitchDark1: any = styled("img")({  
  height: `58px`,  
  width: `34px`,  
  margin: `0px 0px 0px 2px`,  
});
  
const Text: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 2px`,  
});
  
const Left: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,  
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,  
  margin: `0px`,  
}));
  
const Right: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,  
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,  
  opacity: `0.30000001192092896`,  
  margin: `-2px 0px 0px 0px`,  
}));
 
function ExportSwitch(props: ExportSwitchProps): JSX.Element {
  return (
    <PricingCode >
       <SwitchDark  src={SwitchDarkImage} alt={"switch_dark"}/>
       {false &&
           <SwitchDark1  src={SwitchDark1Image} alt={"switch_dark"}/>
       }
       <Text >
         <Left >
           {`Download Code`}
             </Left>
         <Right >
           {`Push to Repository`}
             </Right>
       </Text>
     </PricingCode>
   );
}

export default ExportSwitch;