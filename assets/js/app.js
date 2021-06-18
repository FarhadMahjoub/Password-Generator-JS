//DOM
const numberEl = document.getElementById("Number");
const upperEl = document.getElementById("Uppercase");
const lowerEl = document.getElementById("Lowercase");
const symbolEl = document.getElementById("Symbol");
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("Length");
const submitEl = document.getElementById("Submit");


//object 
const randomFunc = {
    number : getRandomNumber,
    lower : getRandomLower,
    upper : getRandomUpper,
    symbol : getRandomSymbol
};

// Event
submitEl.addEventListener("click" , ()=>{
    const length = +lengthEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasSymbol = symbolEl.checked;
    const hasNumber = numberEl.checked;

    resultEl.innerHTML = GeneratePassword(hasUpper , hasLower , hasSymbol , hasNumber , length);
})

//generated Password
function GeneratePassword(upper , lower , symbol , number , length){
    // 1. init pw var
    // 2.filter checked types
    // 3.loop over length
    // 4.add final pw and return
    let generatedPassword = '';
    const typeCount = upper + lower + symbol + number;
    const typeArr = [{upper} , {lower} , {symbol} , {number}].filter
    (
        item => Object.values(item)[0]
    );
    //console.log("Arr" , typeCount);
    if(typeCount === 0)
    {
        return '';
    }

    for(let i=0; i < length ; i += typeCount){
        
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            //console.log(funcName);

            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0 , length);
    return finalPassword;
}

//func randomgenerate
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
}
function getRandomSymbol(){
    const Symbols = '!@#$%^&*()_-+=:;?/>.<,';
    return Symbols[Math.floor(Math.random() * Symbols.length)];
}