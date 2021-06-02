api("addNew",[40,"F11打开全屏"])
function o(x){return document.getElementById(x)}
function check(){
    if(o("password").value == info.password || info.password == null){
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
        api("addIcon",["img/clock.png","clock()","clockIcon"]);
    }
    else api("addNew",[20,"密码错误"]);
}