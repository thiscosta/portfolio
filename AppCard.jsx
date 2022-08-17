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
import Click3DotsImage from './assets/images/click_3_dots.png';
import { styled } from '@mui/material/styles';
import useAppCard from './useAppCard';
 
const AppCard1 = styled("div", {
    shouldForwardProp: prop => !["props"].includes(prop.toString())
  })(({ props }) =>({  
  borderRadius: `4px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `210.6px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
  border: `${props.isSelected === true ? "2.5px solid rgba(107, 104, 255, 1)" : "2.5px solid transparent"}`,  
}));
  
const Container = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  borderRadius: `1.899999976158142px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px`,  
});
  
const Top = styled("div")({  
  backgroundColor: `rgba(233, 233, 233, 1)`,  
  border: `0.6330215334892273px solid rgba(233, 233, 233, 1)`,  
  borderRadius: `1.899064540863037px 1.899064540863037px 0px 0px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  height: `192.6px`,  
  margin: `0px`,  
});
  
const Thumbnail = styled("div", {
    shouldForwardProp: prop => !["props"].includes(prop.toString())
  })(({ props }) =>({  
  backgroundImage: `url(${ThumbnailImage})`,  
  backgroundPosition: `center`,  
  backgroundSize: `contain`,  
  backgroundRepeat: `no-repeat`,  
  mixBlendMode: `multiply`,  
  width: `126.6px`,  
  height: `126.6px`,  
  margin: `0px`,  
  backgroundImage: `url(${props.thumbnail})`,  
}));
  
const Btm = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `space-between`,  
  alignItems: `center`,  
  padding: `0px 10px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `2px 0px 0px 0px`,  
});
  
const Title = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `center`,  
  alignItems: `flex-start`,  
  padding: `6px 0px 8px 0px`,  
  boxSizing: `border-box`,  
});
  
const WorkspaceName = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(39, 39, 39, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `14px`,  
  textTransform: `none`,  
  margin: `0px`,  
});
  
const NumberOfApps = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(168, 168, 168, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `11px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `12px`,  
  textTransform: `none`,  
  margin: `3px 0px 0px 0px`,  
});
  
const ClickAreaForDots = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `3px 4px`,  
  boxSizing: `border-box`,  
  width: `12px`,  
  height: `18px`,  
  cursor: `pointer`,  
});
  
const Click3Dots = styled("img")({  
  height: `18px`,  
  width: `12.5px`,  
  margin: `0px`,  
});
 
function AppCard(props) {
  const {fns} = useAppCard();
  return (
    <AppCard1 props={props} >
       <Container >
         <Top >
           <Thumbnail props={props} >
           </Thumbnail>
         </Top>
         <Btm >
           <Title >
             <WorkspaceName >
               {props.appName}
                 </WorkspaceName>
             <NumberOfApps >
               {`${props.numberOfComponents} component${props.numberOfComponents !== 1 ? "s" : ""}`}
                 </NumberOfApps>
           </Title>
           <ClickAreaForDots onClick={(event) => { fns.handleDotsClick(event, props) }} >
             <Click3Dots  src={Click3DotsImage} alt={"click 3 dots"}/>
           </ClickAreaForDots>
         </Btm>
       </Container>
     </AppCard1>
   );
}

export default AppCard;