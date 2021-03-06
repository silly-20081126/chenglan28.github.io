var redHP = 20;
var blueHP = 20;
var redwin_value = 0;
var bluewin_value = 0;
var red_skills1CD = 0;
var blue_skills1CD = 0;
var red_collimation = "oneself";
var blue_collimation = "oneself";
addEventListener("keyup", function(event) {
    if(event.keyCode == 71 && red_X == blueX && red_Y == blueY) {//red攻击
        blueHP-=3;
        document.getElementById("blueHP").value = blueHP;
        win();//判断有没有击败
    }
    if(event.keyCode == 191 && blue_X == redX && blue_Y == redY) {//blue攻击
        redHP-=3;
        document.getElementById("redHP").value = redHP;
        win();//判断有没有击败
    }
});
function win(){
    if(redHP <= 0){//red没血
        alert("蓝赢了");
        bluewin_value++;
        redX = 20;
        redY = 20;
        red_X = 20;
        red_Y = 20;
        redHP = 20;
        document.getElementById("red").style.top = redX * 20 + "px";
        document.getElementById("red").style.left = redY * 20 + "px";
        document.getElementById("red_").style.top = red_X * 20 + "px";
        document.getElementById("red_").style.left = red_Y * 20 + "px";
        document.getElementById("redHP").value = redHP;
        document.getElementById("bluewin_value").innerHTML = bluewin_value;
    }
    if(blueHP <= 0){//blue没血
        alert("红赢了");
        redwin_value++;
        blueX = 10;
        blueY = 10;
        blue_X = 10;
        blue_Y = 10;
        blueHP = 20;
        document.getElementById("blue").style.top = blueX * 20 + "px";
        document.getElementById("blue").style.left = blueY * 20 + "px";
        document.getElementById("blue_").style.top = blue_X * 20 + "px";
        document.getElementById("blue_").style.left = blue_Y * 20 + "px";
        document.getElementById("blueHP").value = blueHP;
        document.getElementById("redwin_value").innerHTML = redwin_value;
    }
}
function turn(){//当玩家移动时的方向判断
    if(red_collimation == "front"){//red方向是前时
        red_X = redX - 1;
        red_Y = redY;
    }
    if(red_collimation == "left"){//red方向是左时
        red_X = redX;
        red_Y = redY - 1;
    }
    if(red_collimation == "back"){//red方向是后时
        red_X = redX + 1;
        red_Y = redY;
    }
    if(red_collimation == "right"){//red方向是右时
        red_X = redX;
        red_Y = redY + 1;
    }
    if(blue_collimation == "front"){//blue方向是前时
        blue_X = blueX - 1;
        blue_Y = blueY;
    }
    if(blue_collimation == "left"){//blue方向是左时
        blue_X = blueX;
        blue_Y = blueY - 1;
    }
    if(blue_collimation == "back"){//blue方向是后时
        blue_X = blueX + 1;
        blue_Y = blueY;
    }
    if(blue_collimation == "right"){//blue方向是右时
        blue_X = blueX;
        blue_Y = blueY + 1;
    }
    document.getElementById("red_").style.top = red_X * 20 + "px";
    document.getElementById("red_").style.left = red_Y * 20 + "px";
    document.getElementById("blue_").style.top = blue_X * 20 + "px";
    document.getElementById("blue_").style.left = blue_Y * 20 + "px";
}
