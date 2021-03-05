var redX = 20;
var redY = 20;
var red_X = 20;
var red_Y = 20;
var blueX = 10;
var blueY = 10;
var blue_X = 10;
var blue_Y = 10;
addEventListener("keyup", function(event) {
    if (event.keyCode == 87) {//red前进
        redX--;
        document.getElementById("red").style.top = redX * 20 + "px";
        red_collimation = "front";
    }
    if (event.keyCode == 65) {//red向左走
        redY--;
        document.getElementById("red").style.left = redY * 20 + "px";
        red_collimation = "left";
    }
    if (event.keyCode == 83) {//red向后走
        redX++;
        document.getElementById("red").style.top = redX * 20 + "px";
        red_collimation = "back";
    }
    if (event.keyCode == 68) {//red向右走
        redY++;
        document.getElementById("red").style.left = redY * 20 + "px";
        red_collimation = "right";
    }
    if (event.keyCode == 38) {//blue前进
        blueX--;
        document.getElementById("blue").style.top = blueX * 20 + "px";
        blue_collimation = "front";
    }
    if (event.keyCode == 37) {//blue向左走
        blueY--;
        document.getElementById("blue").style.left = blueY * 20 + "px";
        blue_collimation = "left";
    }
    if (event.keyCode == 40) {//blue向后走
        blueX++;
        document.getElementById("blue").style.top = blueX * 20 + "px";
        blue_collimation = "back";
    }
    if (event.keyCode == 39) {//blue向右走
        blueY++;
        document.getElementById("blue").style.left = blueY * 20 + "px";
        blue_collimation = "right";
    }  
    turn();
});