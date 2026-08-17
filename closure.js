function init(){
    var name = "Mozilla"; // name is local variable created by init
    function displayName(){
        //displayname() is the inner function, a closure
        console.log(name); // use variable declared in parent function
    }
    name = "Aman"
    return displayName;
}
 let c =init();
 c();