/**
 * Created by developer on 15-9-16.
 */

Game = {};
Upgrades = {};

Upgrades.upgrade1 = function(){
  this.cookiesPs = 1;
};

Game.init = function(){
    var cookie = document.getElementById("cookie");
    cookie.addEventListener("click", clickCookie);

    var upgrade1 = document.getElementById("upgrade1");
    upgrade1.addEventListener("click", clickUpgrade1);
};

Game.launch = function(){

    this.cookies = 0;
    this.fps = 30;
    this.upgrade1 = 0;
    this.upgrade2 = 0;
    this.upgrade3 = 0;

    Game.loop();
};

Game.loop = function(){

    Game.logic();

    setTimeout(Game.loop, 1000/Game.fps);
};

Game.add = function(amount){
    this.cookies+= amount;
};

Game.logic = function(){


};

function clickCookie() {
    var counter = document.getElementById("cookieCounter");
    Game.cookies++;
    counter.innerHTML = Game.cookies;
}

function clickUpgrade1(){
    var upgrade1Counter = document.getElementById("upgrade1counter");
    if(Game.cookies >= 10)
    {
        Game.cookies -= 10;
        document.getElementById("cookieCounter").innerHTML = Game.cookies;
        Game.upgrade1++;
        upgrade1Counter.innerHTML = Game.upgrade1;
    }
}


Game.init();
Game.launch();

