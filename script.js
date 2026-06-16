binInput = document.getElementById("binInput");
button = document.getElementById("button");
decimal = document.getElementById("decimal");

function convertdec(){
  let binaryValue = binInput.value;

  let dec = 0;

  if(binaryValue.length>8){
    decimal.textContent="Invalid Input";
  }  else{

    let isValid=true;
    for(let i of binaryValue){
      if(i !== "0" && i !== "1"){
        isValid=false;
      }
    }
    if(isValid){
      for(let i=binaryValue.length-1;i>=0;i--){
      
      dec= dec+binaryValue[i]*Math.pow(2,binaryValue.length-1-i);
      

    }
    decimal.textContent=dec;
    }else{
      decimal.textContent="Invalid Input";

    }
    
      

    }
    
}




