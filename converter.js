function FtoC (Fahrenheit) {
    var C =(Fahrenheit -32) * 5/9;
    return C.toFixed(3);
}
function CtoF (Celsius) {
    var F =(Celsius * 9/5)+ 32;
    return F.toFixed(3);
}
function MtoK (miles) {
    var K =miles * 1.6;
    return K.toFixed(3);
}
function OtoG (oz) {
    var g =oz * 28.35;
    return g.toFixed(3);
}
function FtoM (Foot) {
    var g =(Foot /3.281);
    return g.toFixed(3);
}
function isValid(val,floor){
    if (val < floor ) {
        return false;
    }
    return true;
}