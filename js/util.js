// always loaded first

var mdconverter = new showdown.Converter();
var brandQuotes;
var horoscopeQuotes;

var loadedCount = 0;

var currentSign = null;




fetch('assets/brandquotes.txt').then(async (res) => {
    brandQuotes = (await res.text()).split('\n');
    loadedCount++;
})

fetch('assets/horoscopes.txt').then(async (res) => {
    horoscopeQuotes = (await res.text()).split('\n');
    loadedCount++;
})


function getRandomQuote() {
    console.log("shit got called");
    if (loadedCount < 2) {
        return mdconverter.makeHtml("Wow, [connor.fun](http://connor.fun) is _so_ cool!");
    }
    horoscope = horoscopeQuotes[Math.floor(Math.random()*horoscopeQuotes.length)] + " " + brandQuotes[Math.floor(Math.random()*brandQuotes.length)];
    return mdconverter.makeHtml(horoscope);
}

function makeDateUtility() {
    date = {
        fullDate: moment().format("MM-DD-YYYY"),
        day: moment().format("dddd"),
        month: moment().format("MMMM"),
        dayOfMonth: moment().format("DD"),
        dayOfYear: moment().format("DDD"),
        quarter: moment().format("Q"),
        year: moment().format("YYYY"),
        monthNumber: moment().format("M")
    }
    console.log(date);
    return date;
}

