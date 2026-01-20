const binary = [
    [0,0,1,0,1],
    [0,0,1,0,1],
    [0,0,1,0,1],
    [0,0,1,0,1],
    [0,0,1,0,1],
  ]
  
  //0 -> A,B,C
  //1-> a,b,c
  
  
  function convert2dNumToAlphabet(arr){
    let alphabetCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphabetSmall = 'abcdefghijklpmnopqrstuvwxyz';
    alphabetSmall= alphabetSmall.split('');
    alphabetCapital = alphabetCapital.split('');
    let capitalIndex = 0;
    let smallIndex = 0
    let result =[];
    for(let i=0;i<arr.length;i++){
      let miniResult = [];
      let nestArr  = arr[0];
      for(let a=0;a<nestArr.length;a++){
        if(nestArr[a] === 0){
          miniResult[a] = alphabetCapital[capitalIndex]
          capitalIndex+=1
        }else{
          miniResult[a] = alphabetSmall[smallIndex];
          smallIndex+=1
        }
      }
      result.push(miniResult)
    }
    return result;
  }
  const output =convert2dNumToAlphabet(binary);
  console.log(output);
  