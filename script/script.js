// pseudo-code
// create a button listner function and append it to hte p


let screenContent = document.querySelector('.screen-content');
let buttons =  document.querySelectorAll('.button');
let memory = []

buttons.forEach(button => button.addEventListener('click', function() {
    memory.push(button.textContent);
    console.log(memory);
    if (memory.includes("C")) {return clear()};
    if (memory.length === 5 || memory[3] == "=") {
        if (memory[1] === "+") {return screenContent.innerHTML = add(memory[0],memory[2])};
        if (memory[1] === "-") {return screenContent.innerHTML = subtract(memory[0],memory[2])};
        if (memory[1] === "X") {return screenContent.innerHTML = multiply(memory[0],memory[2])};
        if (memory[1] === "÷") {return screenContent.innerHTML = divide(memory[0],memory[2])};
    }
    return screenContent.innerHTML = button.textContent}));



     function add(a,b){
        a = Number(a);
        b = Number(b);
        return a+b;
     }

     function subtract(a,b){
        a = Number(a);
        b = Number(b);
        return a-b;
     }

     function multiply(a,b){
        a = Number(a);
        b = Number(b);
        return a*b;
     }

     function divide(a,b){
        a = Number(a);
        b = Number(b);
        return a/b;
     }

     function clear(){
        memory = [];
        return screenContent.innerHTML = "";
     }
