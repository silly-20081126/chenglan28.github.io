addEventListener("keyup", function(event) {
    if (event.keyCode == 84 && red_skills1CD == 0) {//red释放1技能
        red_skills1CD = 200;
        redHP+=2;
        document.getElementById("redHP").value = redHP;
    }
    if (event.keyCode == 222 && blue_skills1CD == 0) {//blue释放1技能
        blue_skills1CD = 50;
        if(blue_collimation == "front"){
            if(redX <= blue_X && redY == blue_Y){
                redHP-=5;
                document.getElementById("redHP").value = redHP;
                win();
            }
        }
        if(blue_collimation == "left"){
            if(redX == blue_X && redY <= blue_Y){
                    redHP-=5;
                    document.getElementById("redHP").value = redHP;
                    win();
            }
        }
        if(blue_collimation == "back"){
            if(redX >= blue_X && redY == blue_Y){
                    redHP-=5;
                    document.getElementById("redHP").value = redHP;
                    win();
            }
        }
        if(blue_collimation == "right"){
            if(redX == blue_X && redY >= blue_Y){
                    redHP-=5;
                    document.getElementById("redHP").value = redHP;
                    win();
            }
        }
    }
});
setInterval(function(){//技能冷却
    document.getElementById("red_skills1").style.display = "block";
    document.getElementById("blue_skills1").style.display = "block";
    if(red_skills1CD > 0){//red1技能
        document.getElementById("red_skills1").style.display = "none";
        red_skills1CD--;
    }
    if(blue_skills1CD > 0){//blue1技能
        document.getElementById("blue_skills1").style.display = "none";
        blue_skills1CD--;
    }
},100);