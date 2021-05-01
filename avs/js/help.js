function help(command_name){
    if(command_name == undefined){
        log("help|[command]");
        log("提供指定命令的帮助");
        log("所有命令清单");
        log("edit 编辑/写入");
        log("del 删除");
        log("time 获取时间");
    }
    if(command_name == "edit"){
        log("edit [object] [text]");
        log("编辑[object]变量");
        log("将[text]写入[object]");
        log("如果不存在此[object],则新建此变量");
    }
    if(command_name == "del"){
        log("del [object]");
        log("删除[object]变量");
    }
    if(command_name == "time"){
        log("time [effect]");
        log("[object] = new");
        log("获取最新时间到info.time变量");
        log("[object] = del");
        log("删除info.time变量");
    }
}