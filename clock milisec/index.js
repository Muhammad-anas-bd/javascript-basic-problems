function getMillisec() {
    let Today = new Date()
    let hours = Today.getHours()
    let minute = Today.getMinutes()
    let sec = Today.getSeconds()
    let millisec = Today.getMilliseconds()

    let totalMilisec = (hours*60*60*1000) + (minute*60*1000)+(sec*1000)+millisec;
     
    return totalMilisec;


    
    
}
console.log(getMillisec(50));