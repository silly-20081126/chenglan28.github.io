function start(){//当执行指令时
    c = document.getElementById("command").value.split("|");
    if(c[0] == "help"){help(c[1])}
    else if(c[0] == "edit"){edit(c[1],c[2],c[3])}
    else if(c[0] == "del"){del(c[1],c[2],c[3])}
    else if(c[0] == "time"){time(c[1],c[2])}
    else if(c[0] == "save"){save(c[1],c[2])}
    else if(c[0] == "load"){load(c[1],c[2])}
    else if(c[0] == "list"){list(c[1],c[2])}
    else if(c[0] == "rename"){rename(c[1],c[2])}
    else{log(c[0] + "不是一个有效的命令")}
}
//version 0.5.2