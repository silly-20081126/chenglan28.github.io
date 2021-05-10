function c(command){
    if(typeof command == "string")command = JSON.parse(command);
    if(typeof command == "object"){
        if(command.write.text != undefined)document.getElementById("demo").innerHTML += command.write.text + "<br/>";
    }
}