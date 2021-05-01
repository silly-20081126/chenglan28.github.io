addEventListener("keyup", function(e) {
    if (e.keyCode == 84 && info.red.skills[0].CD == 0) {//red释放1技能
        info.red.skills[0].CD = info.red.skills[0]._CD;
        info.red.HP+=info.red.skills[0].x;
        document.getElementById("redHP").value = info.red.HP;
    }
    if (e.keyCode == 89 && info.red.skills[1].CD == 0) {//red释放2技能
        info.red.skills[1].CD = info.red.skills[1]._CD;
        info.blue.X = info.red._X;
        info.blue.Y = info.red._Y;
        document.getElementById("blue").style.top = info.blue.X * 20 + "px";
        document.getElementById("blue").style.left = info.blue.Y * 20 + "px";
        turn();
    }
    if (e.keyCode == 222 && info.blue.skills[0].CD == 0) {//blue释放1技能
        info.blue.skills[0].CD = info.blue.skills[0]._CD;
        if(info.blue.collimation == "front"){
            if(info.red.X <= info.blue._X && info.red.Y == info.blue._Y){
                info.red.HP-=info.blue.skills[0].x;
                document.getElementById("redHP").value = info.red.HP;
                win();
            }
        }
        if(info.blue.collimation == "left"){
            if(info.red.X == info.blue._X && info.red.Y <= info.blue._Y){
                    info.red.HP-=5;
                    document.getElementById("redHP").value = info.red.HP;
                    win();
            }
        }
        if(info.blue.collimation == "back"){
            if(info.red.X >= info.blue._X && info.red.Y == info.blue._Y){
                    info.red.HP-=5;
                    document.getElementById("redHP").value = info.red.HP;
                    win();
            }
        }
        if(info.blue.collimation == "right"){
            if(info.red.X == info.blue._X && info.red.Y >= info.blue._Y){
                    info.red.HP-=5;
                    document.getElementById("redHP").value = info.red.HP;
                    win();
            }
        }
    }
});
setInterval(function(){//技能冷却
    document.getElementById("red_skills1").style.display = "block";
    document.getElementById("blue_skills1").style.display = "block";
    if(info.red.skills[0].CD > 0){//red1技能
        document.getElementById("red_skills1").style.display = "none";
        info.red.skills[0].CD--;
    }
    if(info.red.skills[1].CD > 0){//red2技能
        //document.getElementById("red_skills1").style.display = "none";
        info.red.skills[1].CD--;
    }
    if(info.blue.skills[0].CD > 0){//blue1技能
        document.getElementById("blue_skills1").style.display = "none";
        info.blue.skills[0].CD--;
    }
},100);