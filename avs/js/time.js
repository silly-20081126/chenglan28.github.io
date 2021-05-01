function time(effect,x){
    if(effect == "new"){edit("time","'" + Date() + "'",x)}
    if(effect == "del"){del("time",x)}
}