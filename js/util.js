// always loaded first

const mdconverter = new showdown.Converter();

let brandQuotes;
let horoscopeQuotes;

let loadedQuotes = false;
let currentSign = null;

Promise.all([
    fetch('assets/brandquotes.txt').then(async (res) => {
        brandQuotes = (await res.text()).split('\n');
    }),
    fetch('assets/horoscopes.txt').then(async (res) => {
        horoscopeQuotes = (await res.text()).split('\n');
    })
]).then(() => {
    loadedQuotes = true;
})


function getRandomQuote() {
    console.log("shit got called");
    if (!loadedQuotes) {
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

