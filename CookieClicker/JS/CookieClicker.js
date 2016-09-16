'use strict';

var Game = {};
var Upgrades = {};

var Upgrade1 = {
    cookiesPerSecond: 0.1,
    cost: 10
};

Upgrades.getCookiesPerSecond = function () {
    return 0.1;
};

Game.init = function () {
    var cookie = document.getElementById("cookie");
    cookie.addEventListener("click", clickCookie);

    var upgrade1 = document.getElementById("upgrade1");
    upgrade1.addEventListener("click", clickUpgrade1);
};

Game.launch = function () {

    this.cookiePerClick = 1;
    this.cookies = 0;
    this.fps = 30;
    this.upgrade1 = 0;
    this.upgrade2 = 0;
    this.upgrade3 = 0;

    Game.loop();
};

Game.loop = function () {
    Game.logic();
    setTimeout(Game.loop, 1000 / Game.fps);
};

Game.add = function (amount) {
    this.cookies += amount;
};

Game.deduct = function (amount) {
    this.cookies -= amount;
};

Game.logic = function () {
    Game.add(Game.calculateCPS() / Game.fps);
    Game.updateCookieCounter();
};

Game.updateCookieCounter = function () {
    var counter = document.getElementById("cookieCounter");
    counter.innerHTML = Math.floor(Game.cookies);
    var cps = document.getElementById("cookiePerSecond");
    cps.innerHTML = Math.floor(Game.upgrade1 * Upgrade1.cookiesPerSecond * 100)/100;
};

Game.calculateCPS = function () {
    return this.upgrade1 * Upgrade1.cookiesPerSecond;
};

function clickCookie() {
    Game.add(Game.cookiePerClick);
    Game.updateCookieCounter();
}

function clickUpgrade1() {
    var upgrade1Counter = document.getElementById("upgrade1counter");
    if (Game.cookies >= Upgrade1.cost) {
        Game.cookies -= Upgrade1.cost;
        Game.upgrade1++;
        upgrade1Counter.innerHTML = Game.upgrade1;
    }
    else{
        var warning = document.createElement("li");
        var list = document.getElementById("upgradeList");
        warning.style.color = "red";
        warning.setAttribute("id", "upgrade1warning");
        warning.innerHTML = "You need " + Upgrade1.cost + " cookies for this upgrade";
        list.appendChild(warning);
        setTimeout(function(){
            var warning = document.getElementById("upgrade1warning");
            var list = document.getElementById("upgradeList");
            list.removeChild(warning);
        }, 3000);

    }
}


Game.init();
Game.launch();

