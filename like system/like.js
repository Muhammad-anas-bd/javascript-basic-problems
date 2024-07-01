function likeSystem(name) {
    if (name.length === 0) {
        return ("no one like this");
        
    } else if (name.length===1){
        return `${name[0]} like this`;
    }else if (name.length===2){
        return `${name[0] }and ${name[1]}like this`;
    }
    else if (name.length===3){
        return `${name[0]} and ${name[1]} ,${name[2]} like this`;
    } else{
        return`${name[0]} , ${name[1]} and ${name.length-2} other like this`
    }
    
};
console.log(likeSystem(["anis","zahid","nafee","towhid","toha","lovely"]));
