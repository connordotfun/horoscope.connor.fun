// always loaded first

var mdconverter = new showdown.Converter();
var brandquotes;
var horoscopequotes;

var loadedCount = 0;


var currentSign = null;

$.ajax({
    url: 'assets/brandquotes.txt',
    success: function(data) {
        brandquotes = data.split('\n');
        loadedCount++;
    },
});

$.ajax({
    url: 'assets/horoscopes.txt',
    success: function(data) {
        horoscopequotes = data.split('\n');
        loadedCount++;
    },
});


function getRandomQuote() {
    console.log("shit got called");
    if (loadedCount < 2) {
        return mdconverter.makeHtml("Wow, [connor.fun](http://connor.fun) is _so_ cool!");
    }
    horoscope = horoscopequotes[Math.floor(Math.random()*horoscopequotes.length)] + " " + brandquotes[Math.floor(Math.random()*brandquotes.length)];
    return mdconverter.makeHtml(horoscope);
}