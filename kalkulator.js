var tombol = document.querySelector(".container-tombol");
var layar = document.querySelector("#layar");
var resetLayar = false;
var bolehItung = false;
var tmpVal = '';
var operator = '';

tombol.addEventListener("click", function(e){
    var tombolclick = e.target;
    var nilaiTombol = tombolclick.innerText;

    if(nilaiTombol == "C"){
        layar.value="";
    }
    else if(nilaiTombol == "<="){
        layar.value = layar.value.slice(0, -1);
    }
    else if(nilaiTombol == "="){
        if(bolehItung == true){
            layar.value = eval(tmpVal + operator + layar.value);
            bolehItung = false;
        }
    }
    else if(tombolclick.classList.contains('operator')){
        if(bolehItung == true){
            layar.value = eval(tmpVal + operator + layar.value);
            bolehItung = false;
        }

        tmpVal = layar.value;
        operator = nilaiTombol;
        resetLayar = true;
    }
    else
    {
        if(resetLayar == true){
            layar.value = nilaiTombol;
            resetLayar = false;
            bolehItung = true;
        }
        else{
            layar.value = layar.value + nilaiTombol;
            }
    }
});