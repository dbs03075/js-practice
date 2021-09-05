const pwEl = document.getElementById('pw');
const copyEl =  document.getElementById('copy');
const lenEl =  document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl =  document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklnmopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '~!@#$%^&*()_+=';

function getUpperCase(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getNumberCase(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbolsCase(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}


function generatePassword(){
    const len = lenEl.value;
    let password = '';
    
    if(upperEl.checked){
       password += getUpperCase();
    }
    if(lowerEl.checked){
       password += getLowerCase();
    }
    if(numberEl.checked){
        password += getNumberCase();    }

    if(symbolEl.checked){
        password += getSymbolsCase();    }


    for(let i= password.length; i<len; i++)
    {
        const x = generateX();
        console.log(x);
        password += x;
    }
    pwEl.innerText = password;

}

function generateX(){

    const xs =[];
    if(upperEl.checked){
        xs.push(getUpperCase())
    }
    if(lowerEl.checked){
        xs.push(getLowerCase())
    }
    if(numberEl.checked){
        xs.push(getNumberCase())
    }
    if(symbolEl.checked){
        xs.push(getSymbolsCase())
    }
    if(xs.length == 0) return "";
    return xs[Math.floor(Math.random() *xs.length)];
}



generateEl.addEventListener('click', generatePassword);


copyEl.addEventListener('click', ()=>{
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
})