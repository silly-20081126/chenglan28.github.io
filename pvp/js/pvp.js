var info = {
    "red":{
        "HP":20,
        "win_value":0,
        "skills":[
            {
                "CD":0,
                "_CD":200,
                "x":2
            },
            {
                "CD":0,
                "_CD":100
            }
        ],
        "collimation":"oneself",
        "X":20,
        "Y":20,
        "_X":20,
        "_Y":20,
        "speed":1
    },
    "blue":{
        "HP":20,
        "win_value":0,
        "skills":[
            {
                "CD":0,
                "_CD":50,
                "x":5
            }
        ],
        "collimation":"oneself",
        "X":10,
        "Y":10,
        "_X":10,
        "_Y":10,
        "speed":1
    }
}
addEventListener("keyup", function(event) {
    if(event.keyCode == 71 && info.red._X == info.blue.X && info.red._Y == info.blue.Y) {//red攻击
        info.blue.HP-=3;
        document.getElementById("blueHP").value = info.blue.HP;
        win();//判断有没有击败
    }
    if(event.keyCode == 191 && info.blue._X == info.red.X && info.blue._Y == info.red.Y) {//blue攻击
        info.red.HP-=3;
        document.getElementById("redHP").value = info.red.HP;
        win();//判断有没有击败
    }
});
function win(){
    if(info.red.HP <= 0){//red没血
        alert("蓝赢了");
        info.blue.win_value++;
        info.red.X = 20;
        info.red.Y = 20;
        info.red._X = 20;
        info.red._Y = 20;
        info.red.HP = 20;
        document.getElementById("red").style.top = info.red.X * 20 + "px";
        document.getElementById("red").style.left = info.red.Y * 20 + "px";
        document.getElementById("red_").style.top = info.red._X * 20 + "px";
        document.getElementById("red_").style.left = info.red._Y * 20 + "px";
        document.getElementById("redHP").value = info.red.HP;
        document.getElementById("bluewin_value").innerHTML = info.blue.win_value;
    }
    if(info.blue.HP <= 0){//blue没血
        alert("红赢了");
        info.red.win_value++;
        info.blue.X = 10;
        info.blue.Y = 10;
        info.blue._X = 10;
        info.blue._Y = 10;
        info.blue.HP = 20;
        document.getElementById("blue").style.top = info.blue.X * 20 + "px";
        document.getElementById("blue").style.left = info.blue.Y * 20 + "px";
        document.getElementById("blue_").style.top = info.blue._X * 20 + "px";
        document.getElementById("blue_").style.left = info.blue._Y * 20 + "px";
        document.getElementById("blueHP").value = info.blue.HP;
        document.getElementById("redwin_value").innerHTML = info.red.win_value;
    }
}
function turn(){//当玩家移动时的方向判断
    if(info.red.collimation == "oneself"){//red方向没有时
        info.red._X = info.red.X;
        info.red._Y = info.red.Y;
    }
    if(info.red.collimation == "front"){//red方向是前时
        info.red._X = info.red.X - 1;
        info.red._Y = info.red.Y;
    }
    if(info.red.collimation == "left"){//red方向是左时
        info.red._X = info.red.X;
        info.red._Y = info.red.Y - 1;
    }
    if(info.red.collimation == "back"){//red方向是后时
        info.red._X = info.red.X + 1;
        info.red._Y = info.red.Y;
    }
    if(info.red.collimation == "right"){//red方向是右时
        info.red._X = info.red.X;
        info.red._Y = info.red.Y + 1;
    }
    if(info.blue.collimation == "oneself"){//blue方向没有时
        info.blue._X = info.blue.X;
        info.blue._Y = info.blue.Y;
    }
    if(info.blue.collimation == "front"){//blue方向是前时
        info.blue._X = info.blue.X - 1;
        info.blue._Y = info.blue.Y;
    }
    if(info.blue.collimation == "left"){//blue方向是左时
        info.blue._X = info.blue.X;
        info.blue._Y = info.blue.Y - 1;
    }
    if(info.blue.collimation == "back"){//blue方向是后时
        info.blue._X = info.blue.X + 1;
        info.blue._Y = info.blue.Y;
    }
    if(info.blue.collimation == "right"){//blue方向是右时
        info.blue._X = info.blue.X;
        info.blue._Y = info.blue.Y + 1;
    }
    document.getElementById("red_").style.top = info.red._X * 20 + "px";
    document.getElementById("red_").style.left = info.red._Y * 20 + "px";
    document.getElementById("blue_").style.top = info.blue._X * 20 + "px";
    document.getElementById("blue_").style.left = info.blue._Y * 20 + "px";
}
