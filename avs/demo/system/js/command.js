function command(value1,value2,value3){
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
}