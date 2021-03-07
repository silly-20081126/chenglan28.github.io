function command(value1,value2,value3,value4){
    if(value1 == "demo"){
        if(value2 == "width"){
            document.getElementById("demo").style.width = value3;
        }
        if(value2 == "height"){
            document.getElementById("demo").style.height = value3;
        }
        if(value2 == "backgroundImage"){
            document.getElementById("demo").style.backgroundImage = value3;
        }
    }
    if(value1 == "icon"){
        demo = document.getElementById("demo").innerHTML;
        document.getElementById("demo").innerHTML = "<a onclick='" + value4 + "'><img class='icon' title='" + value2 + "' src='" + value3 + "'></a>";
    }
    //if(value1 == )
}