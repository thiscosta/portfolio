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
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import useDeleteApi from './useDeleteApi';
 
const Property1Default = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.25)`,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: `462px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `40px 30px`,  
  boxSizing: `border-box`,  
});
  
const Top = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const Top1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const DeleteTop = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const DeleteApiKey = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(39, 39, 39, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
});
  
const AreYouSureYouWantToD = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(39, 39, 39, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  alignSelf: `stretch`,  
  margin: `20px 0px 0px 0px`,  
});
  
const ApiUsed = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `20px 0px 0px 0px`,  
});
  
const ThisApiKeyIsBeingUse = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const AppNumber1AppNumber2 = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  alignSelf: `stretch`,  
  margin: `4px 0px 0px 0px`,  
}));
  
const ApiNotUsed = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `20px 0px 0px 0px`,  
});
  
const ThisApiKeyIsNotBeing = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Btns = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-end`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `30px 0px 0px 0px`,  
});
  
const ButtonContained = styled(Button)({  
  margin: `0px`,  
});
  
const ButtonText = styled(Button)({  
  margin: `0px 0px 0px 40px`,  
});
 
function DeleteApi(props) {
  const {fns} = useDeleteApi();
  return (
    <Property1Default >
       <Top >
         <Top1 >
           <DeleteTop >
             <DeleteApiKey >
               {`Delete API Key?`}
                 </DeleteApiKey>
           </DeleteTop>
           <AreYouSureYouWantToD >
             {`Are you sure you want to delete this API Key? This cannot be undone.`}
               </AreYouSureYouWantToD>
           {(props.keyInApps.length > 0) &&
               <ApiUsed >
               <ThisApiKeyIsBeingUse >
                 {`This API Key is being used in the following Apps:`}
                   </ThisApiKeyIsBeingUse>
               <AppNumber1AppNumber2 >
                 {props.keyInApps.join(', ')}
                   </AppNumber1AppNumber2>
             </ApiUsed>
           }
           {(props.keyInApps.length  === 0) &&
               <ApiNotUsed >
               <ThisApiKeyIsNotBeing >
                 {`This API Key is not being used by any Apps`}
                   </ThisApiKeyIsNotBeing>
             </ApiNotUsed>
           }
         </Top1>
       </Top>
       <Btns >
         <ButtonContained variant="contained" size="medium" color="primary"  onClick={() => fns.deleteAPIKey(props.curKey)}  > Delete </ButtonContained>
         <ButtonText variant="text" size="medium" color="info"  onClick={props.onClose}  > Cancel </ButtonText>
       </Btns>
     </Property1Default>
   );
}

export default DeleteApi;
