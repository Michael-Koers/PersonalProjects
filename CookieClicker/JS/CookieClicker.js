/**
 * Created by developer on 15-9-16.
 */


function clickCookie() {
    var counter = document.getElementById("counter");
    counter.textContent++;
}

var cookie = document.getElementById("cookie");
cookie.addEventListener("click", clickCookie);