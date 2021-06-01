function api(command,value){
    if(command == "width")o("demo").style.width = value;//设置长度api
    if(command == "height")o("demo").style.height = value;//设置高度api
    if(command == "backgroundImage")o("demo").style.backgroundImage = "url(" + value + ")";//设置背景图片api
    if(command == "sidebar_width")o("sidebar").style.width = value;//设置侧边栏长度api
    if(command == "sidebarBackgroundColor")o("sidebar").style.backgroundColor = value;//设置侧边栏背景颜色api
    if(command == "sidebarOpacity")o("sidebar").style.opacity = value;//设置侧边栏透明度api
    if(command == "addSidebarIcon")o("sidebar").innerHTML += "<img id='" + value[2] + "' src='" + value[0] + "' onclick='" + value[1] + "' style='height:" + info.ui.sidebar.width + "px'>";//增加侧边栏图标
    if(command == "iconsWidth")o("icons").style.width = value;//设置图标组长度api
    if(command == "iconsHeight")o("icons").style.height = value;//设置图标组高度api
    if(command == "iconsTop")o("icons").style.top = value;//设置图标组上间隔api
    if(command == "iconsLeft")o("icons").style.left = value;//设置图标组左间隔api
    if(command == "addIcon")o("icons").innerHTML += "<img id='" + value[2] + "' src='" + value[0] + "' onclick='" + value[1] + "' class='icon'>";//新增一个图标
    if(command == "addNew"){
        o("news").innerHTML += "<div class='new'>" + value[1] + "</div>";
        o("news").style.display = "flex";
        setTimeout(function(){
            o("news").style.display = "none";
        },value[0] * 100)
    }//新增一条信息
}