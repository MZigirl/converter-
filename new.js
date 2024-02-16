
const checkbox1=document.getElementById("cb1");
const checkbox2=document.getElementById("cb2");
const button= document.getElementById("button");
const resalt=document.getElementById("final");
let content=document.getElementById("input");
let temp;
function convert( ){
    if(checkbox1.checked){
temp= Number(content.value);
        temp= 9/5*temp -32;
        resalt.textContent=temp +"f"

    }
    else if(checkbox2.checked){
        temp= Number(content.value);
        temp=temp*9/5+32;
        resalt.textContent=temp +"c"

    }
    else{
        resalt.textContent="select unit";
    }
}


  
