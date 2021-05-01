function edit(object,text,x){
    eval("info." + object + " = " + text);
    log("info." + object + " = " + eval("info."+ object),x);
}
