function myFunction(clickedId) {
    document.calc.result.value+=clickedId;
}
function Clear() {
    document.calc.result.value="";
}
function calculate() {
    try{
    var inp=eval(document.calc.result.value);
    document.calc.result.value=inp;
    }catch(err){
            document.calc.result.value="Dette input virker ikke :(";
    }
}