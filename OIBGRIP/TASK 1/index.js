let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ''; 

for(item of buttons)
{    
    item.addEventListener('click',(e)=>{ 
        buttonText = e.target.innerText;      
        console.log('Button text is ', buttonText); 
        if(buttonText=='x')
        {
            buttonText = '*';
            screenValue += buttonText;            
            screen.value += screenValue;
        }
        
         else if (buttonText =='AC')
         {
            screen.value += "=";
            screen.value += " "; 
         } 
                    
        else  if (buttonText =='='){
            screen.value = eval(screenValue);
        } 
     

    })}
