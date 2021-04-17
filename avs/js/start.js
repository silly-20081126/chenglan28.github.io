function start(){//当执行指令时
var c = document.getElementById("command").value.split("/");
if(c[0] == "main"){
if(c[1] == "getTime"){getTime()}
if(c[1] == "notepad_write"){
notepad_write(c[2]);
c[2] = null;
}
}
if(c[0] == "file"){
if(c[1] == "list"){log(JSON.stringify(info))}
if(c[1] == "save"){localStorage.info = JSON.stringify(info)}
if(c[1] == "load"){info = JSON.parse(localStorage.info)}
}
}