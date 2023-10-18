let i1 = document.getElementById('calci');
let buttons = document.querySelectorAll('button');

let val = "";
let a1 = Array.from(buttons);
a1.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            val = eval(val);
            i1.value = val;
        }

        else if(e.target.innerHTML == 'AC'){
            val = "";
            i1.value = val;
           
        }

        else if(e.target.innerHTML == 'DEL'){
            val = val.substring(0, val.length-1);
            i1.value = val;
        }

        else{
            val = val + e.target.innerHTML;
            i1.value = val;
        }
        
    })
})
