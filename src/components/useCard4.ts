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
  const getScroll = (price: number, text: string): any => {
    console.log(price, text);
  };

  const newFunction = (): any => {
    alert('something')
  };
  let fns: any = {getScroll, newFunction};
  return {data, fns};
}

export default useCard4;
