function getTime(){
time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
log("已获取时间,存放在time变量中,值为" + time);
}