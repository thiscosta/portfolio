/**********************************************************************
*
*   Component hook generated by Quest
*
*   Code Logic for the component goes in this hook
*   To setup bindings that use the data here or call the functions here, use the Quest editor   
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

const useCard4 = () => {
  let data: any = {};
  const getScroll = (price: number, text: string,  param3: any): any => {
    console.log(price, text);
  };

  const newFunction = (param1:any): any => {
    alert('something')
  };
  const newFunction2 = (): any => {};
  let fns: any = {getScroll, newFunction, newFunction2};
  return {data, fns};
}

export default useCard4;
