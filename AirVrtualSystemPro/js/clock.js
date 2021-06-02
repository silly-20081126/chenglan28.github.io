info.clock.d = 0;
function clock(){
    if(info.clock.d == 0){
        o("demo").innerHTML += "<div id='clock' onclick='clo(\"clock\")'></div>";//载入时钟
        o("clock").style.display = "block";
        o("clock").style.position = "absolute";
        o("clock").style.top = info.clock.top;
        o("clock").style.left = info.clock.left;
        o("clock").style.width = "300px";
        o("clock").style.height = "100px";
        o("clock").style.backgroundColor = info.clock.backgroundColor;
        o("clock").style.opacity = info.clock.opacity;
        o("clock").style.borderRadius = "10px";
        o("clock").style.color = info.clock.color;
        o("clock").style.fontSize = "60px";
        o("clock").style.textAlign = "center";
        setInterval(function(){o("clock").innerHTML = info.time[3] + ":" + info.time[4] + ":" + info.time[5]},1000)
    }
}
setInterval(function(){
    var x = new Date();
    info.time = [x.getFullYear(),x.getMonth(),x.getDate(),x.getHours(),x.getMinutes(),x.getSeconds(),x.getMilliseconds()]
},1)