let exe= function(){
    let a="function up" ;
    return(a.trim());
}

let changetoLowerCase= function(){
    let b = exe();
return(b.toLowerCase());
}
let changeToUpperCase= function(){
    let c= exe();
    return(c.toUpperCase());
}
module.exports.exe= exe;
module.exports.changetoLowerCase=changetoLowerCase;
module.exports.changeToUpperCase=changeToUpperCase;