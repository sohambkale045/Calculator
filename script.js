let input = document.getElementById('inputBox');
let string = "";
let buttons = document.querySelectorAll('button');
let arr = Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(ele)=>{
        if(ele.target.innerHTML=='='){
            string = eval(string);
            input.value = string;
        }else if(ele.target.innerHTML=='AC'){
            string = "";
            input.value = string;
        }else if(ele.target.innerHTML=='DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;  
        }else{
            string += ele.target.innerHTML;
            input.value = string;
        }
    })
})