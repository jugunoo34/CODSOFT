const display=document.querySelector('.display');
const buttons=document.querySelectorAll('button');
const operator=["+","=","-","*",".","/","(",")","%"];
let output = "";
const calculate= (bvalue) =>{
    if(bvalue=== "AC" ){
        output="";
    }
else if(bvalue === "="){
        try{
            output=eval(output);
        }catch(e){
            output="error";
        
        }
    
    }
    else if(bvalue ==="%")
    {
        output=(parseFloat(output)/100).toString();
    }
    else
    {
        if(output==="" && operator.includes(bvalue)) return;
        output +=bvalue;
    }
    display.value=output;
};
 buttons.forEach((button)=> {
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
 });

