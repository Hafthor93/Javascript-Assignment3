let counter = 0;
let max = 34;
let min = -34;


    document.getElementById("buttonPlus").onclick = (buttonPlus) => {
    counter += 5;
    document.getElementById("counter").innerHTML = counter;
    if (counter > max) {
        document.getElementById("boom").innerHTML = "!bOoMm!";
        document.getElementById("boom").style.color = "red";
        document.getElementById("boom").style.backgroundColor = "blue";
    }
    };

document.getElementById("buttonMinus").onclick = (buttonMinus) => {
    counter -= 5;
    document.getElementById("counter").innerHTML = counter;
    if (counter < min) {
        document.getElementById("boom").innerHTML = "!bOoMm!";
        document.getElementById("boom").style.color = "red";
        document.getElementById("boom").style.backgroundColor = "yellow";
    }
};
    document.getElementById("reset").onclick = () => {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    document.getElementsByTagName("h1")[1].style.display = "none";    
}; 

const inputCount = document.getElementById("inputCount");
const updateButton = document.getElementById("updateInput");

const inputLimit = document.getElementById("inputLimit");
const updateLimitButton = document.getElementById("updateLimit");

updateButton.onclick = () => {
    console.log(inputCount.value);
    inputCount
    counter = inputCount.value
    document.getElementById("counter").innerHTML = counter;
    if (counter > max || counter < min) {
        document.getElementById("boom").innerHTML = "!bOoMm!";
        document.getElementById("boom").style.color = "red";
    }
    inputCount
    localStorage.setItem(inputCount.value)
};

updateLimitButton.onclick = () => { 
    inputLimit

};






