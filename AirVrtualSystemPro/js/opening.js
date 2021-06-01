function o(x){return document.getElementById(x)}
function check(){
    if(o("password").value == info.password){
        document.write("<div id='demo'></div>");//载入ui框架
        api("width",info.ui.width);//设置长度
        api("height",info.ui.height);//设置高度
        api("backgroundImage",info.ui.backgroundImage);//设置背景图片
        o("demo").innerHTML += "<div id='sidebar'></div>";//载入侧边栏
        o("sidebar").style.height = info.ui.height;//设置高度
        o("sidebar").style.display = "flex";//设置box
        o("sidebar").style.flexFlow = "column";
        api("sidebar_width",info.ui.sidebar.width);//设置侧边栏长度
        o("sidebar").style.height = info.ui.height;//设置高度
        api("sidebarBackgroundColor",info.ui.sidebar.color);//设置侧边栏背景颜色
        api("sidebarOpacity",info.ui.sidebar.opacity);//设置侧边栏api
        api("addSidebarIcon",["img/user.png","user()","user"]);
        o("demo").innerHTML += "<div id='icons'></div>";//载入图标组
        o("icons").style.position = "absolute";
        api("iconsWidth",info.ui.icons.width);
        api("iconsHeight",info.ui.icons.height);
        api("iconsTop",info.ui.icons.top);
        api("iconsLeft",info.ui.icons.left);
        api("addIcon",["img/clock.png","clock()","clock"]);
    }
    else api("addNew",[20,"密码错误"]);
}
function api(command,value){
    if(command == "width")o("demo").style.width = value;//设置长度api
    if(command == "height")o("demo").style.height = value;//设置高度api
    if(command == "backgroundImage")o("demo").style.backgroundImage = "url(" + value + ")";//设置背景图片api
    if(command == "sidebar_width")o("sidebar").style.width = value;//设置侧边栏长度api
    if(command == "sidebarBackgroundColor")o("sidebar").style.backgroundColor = value;//设置侧边栏背景颜色api
    if(command == "sidebarOpacity")o("sidebar").style.opacity = value;//设置侧边栏透明度api
    if(command == "addSidebarIcon")o("sidebar").innerHTML += "<img id='" + value[2] + "' src='" + value[0] + "' onclick='" + value[1] + "'>";
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
    if(command == "version")return "1.0.0";
}