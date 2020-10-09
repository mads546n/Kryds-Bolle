function myFunction(clickedId) {
    document.calc.result.value+=clickedId;
}
function Clear() {
    document.calc.result.value="";
}

/* Metoden at bruge eval() fandt jeg ved nogle søgninger på nettet, eftersom jeg skulle bruge en kortere og nemmere metode.
At tage et argument, evaluere det og udføre det var den nemmeste løsning for mig */
function calculate() {
    try{
    var inp=eval(document.calc.result.value);
    document.calc.result.value=inp;
    }catch(err){
            document.calc.result.value="Dette input virker ikke :(";
    }
}