// var Spooky = require('spooky/lib/spooky');

// // spooky.start(
// //     'https://www.fifa.com/worldcup/videos/goal-of-the-tournament/');
// // spooky.then(function () {
// //     // this.emit('hello', 'Hello, from ' + this.evaluate(function () {
// //     //     return document.title;
// //     // }));
// //     let test = document.querySelectorAll("div[data-slug='benjamin-pavard-goal-france-argentina']");
// //     console.log(test);
// //     console.log(this.getHtml("div[data-slug='benjamin-pavard-goal-france-argentina']"));

// // });

// var spooky = new Spooky({
//     child: {
//         command: 'casperjs.cmd',
//         transport: 'http'
//     },
//     casper: {
//         logLevel: 'debug',
//         verbose: true
//     }
// }, function (err) {
//     spooky.start(
//         'http://en.wikipedia.org/wiki/Spooky_the_Tuff_Little_Ghost');
//     spooky.then(function () {
//         this.emit('hello', 'Hello, from ' + this.evaluate(function () {
//             return document.title;
//         }));
//     });
//     spooky.run();
// });


// // spooky.run();

// let cheerio = require('cheerio')
// let fifa = cheerio.load('https://www.fifa.com/worldcup/videos/goal-of-the-tournament/')
// let test = fifa('div').attr('data-slug', 'benjamin-pavard-goal-france-argentina');


// fifa('div').each(function() {
//     console.log($(this).text());
// });

// console.log(test.html());

const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
const simulant = require('jsdom-simulant');
var i = 1000;

JSDOM.fromURL("https://www.fifa.com/worldcup/videos/goal-of-the-tournament/").then(dom => {
    var pavard = dom.window.document.querySelectorAll("div[data-slug='benjamin-pavard-goal-france-argentina']");
    var pavardBUtton = pavard[0].querySelector("div.btn-vote").querySelector("a");
    pavardBUtton.addEventListener('click', function (event) {
        console.log(event)
    })

    setInterval(() => {
        simulant.fire(pavardBUtton, "click");
        i = i + Math.random();
    }, i)
});