addEventListener("keyup", function(e) {
    if (e.keyCode == 87) {//red前进
        info.red.X-=info.red.speed;
        document.getElementById("red").style.top = info.red.X * 20 + "px";
        info.red.collimation = "front";
    }
    if (e.keyCode == 65) {//red向左走
        info.red.Y-=info.red.speed;
        document.getElementById("red").style.left = info.red.Y * 20 + "px";
        info.red.collimation = "left";
    }
    if (e.keyCode == 83) {//red向后走
        info.red.X+=info.red.speed;
        document.getElementById("red").style.top = info.red.X * 20 + "px";
        info.red.collimation = "back";
    }
    if (e.keyCode == 68) {//red向右走
        info.red.Y+=info.red.speed;
        document.getElementById("red").style.left = info.red.Y * 20 + "px";
        info.red.collimation = "right";
    }
    if (e.keyCode == 38) {//blue前进
        info.blue.X-=info.blue.speed;
        document.getElementById("blue").style.top = info.blue.X * 20 + "px";
        info.blue.collimation = "front";
    }
    if (e.keyCode == 37) {//blue向左走
        info.blue.Y-=info.blue.speed;
        document.getElementById("blue").style.left = info.blue.Y * 20 + "px";
        info.blue.collimation = "left";
    }
    if (e.keyCode == 40) {//blue向后走
        info.blue.X+=info.blue.speed;
        document.getElementById("blue").style.top = info.blue.X * 20 + "px";
        info.blue.collimation = "back";
    }
    if (e.keyCode == 39) {//blue向右走
        info.blue.Y+=info.blue.speed;
        document.getElementById("blue").style.left = info.blue.Y * 20 + "px";
        info.blue.collimation = "right";
    }  
    turn();
});