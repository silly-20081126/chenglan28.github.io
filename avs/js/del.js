function del(object,x){
    eval("delete info." + object);
    log("info." + object + " = " + eval("info."+ object),x);
}