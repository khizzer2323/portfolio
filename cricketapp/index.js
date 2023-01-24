'use strict';

let single = 0;
let out = 0;
let balls = 0;
let over = 0;
let nxt = "";
let score = () => {
    end()
    overComplete()
    overRemaining()
}
// function for adding runs
function addRuns(number) {
    score()
    document.getElementById("score"+nxt).innerHTML = single + number;
    single = single + number;
    document.getElementById("ball"+nxt).innerHTML = balls + 1;
    balls += 1;
}
// function for wkt
function outs() {
    score()
    document.getElementById("out"+nxt).innerHTML = out + 1;
    out += 1;
    document.getElementById("ball"+nxt).innerHTML = balls + 1;
    balls += 1;
}
// function for wide ball
function wide() {
    end()
    document.getElementById("score"+nxt).innerHTML = single + 1;
    single += 1;
}

// End of the T20 innings
function end() {
    if (over === 20 || out === 10) {
        document.getElementById("score").innerHTML = single;
        document.getElementById("out").innerHTML = out;
        document.getElementById("over").innerHTML = over;
        document.getElementById("ball").innerHTML = hidden;
        nxt = "1";
        single = 0;
        out = 0;
        over = 0;
    }
}
// this will check the balls if 6 balls are delivered then 1 over will be completed Note: ball is set to -1 so we don't get 20.1
function overComplete() {
    if (balls === 5) {
        balls = -1;
        document.getElementById("over"+nxt).innerHTML = (over + 1);
        over += 1;
    }
}
// function for overs remaining
function overRemaining() {
    let remainingOvers = 19 - over;
    let remainingBalls = 5 - balls;
    document.getElementById("overRemain"+nxt).innerHTML = remainingOvers;
    document.getElementById("ballRemain"+nxt).innerHTML = remainingBalls;
}






// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function changeTheme() {
    document.getElementById("navbar").classList.toggle("greenNav");
    document.getElementById("navbar").classList.toggle("dark");
    document.getElementById("themeBody").classList.toggle("containerScore");
    document.getElementById("single").classList.toggle("containerScoreDark");
    document.getElementById("themeBody").classList.toggle("containerScoreDark");
}

