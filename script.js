const input = document.getElementById("temp");
const button = document.getElementById("btn");

function clickBtn(){
    const tempValue = input.value;
    const numTempValue = Number(tempValue);

    if(tempValue === ""){
        alert("PLEASE ENTER 🌡️TEMPERATURE!🌡️");
        return;

    } else if(isNaN(numTempValue)){
        alert("NUMBERS 👀 ONLY PLEASE!");
        return;
    } else if(tempValue >= 25){
        alert("SUMMER ☀️ VIBES!");
        return;
    } else if(tempValue < 25){
        alert("WINTER ❄️ VIBES!");
        return;
    }
}
