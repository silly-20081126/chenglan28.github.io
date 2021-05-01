var info = {
    "version":"0.9.2"
}
function save(object,x){
    if(object == undefined){localStorage.info = JSON.stringify(info)}
    else{
        eval("localStorage.info." + object + " = " + "JSON.stringify(info." + object + ")");
    }
    log("保存成功",x);
}
function load(object,x){
    if(object == undefined){info = localStorage.info}
    else{
        eval("info." + object + " = localStorage.info." + object);
    }
    log("加载成功",x);
}
function list(object,x){
    if(object == undefined){log(info,x)}
    else{eval("log(info." + object + "," + x + ")")}
}