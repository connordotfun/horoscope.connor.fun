// always loaded first

const mdconverter = new showdown.Converter();

let brandQuotes;
let horoscopeQuotes;

let loadedQuotes = false;
let currentSign = null;
let rng = null;

// Promise.all is used here to ensure that both requests are fetched before setting loadedQuotes
Promise.all([
    fetch('assets/brandquotes.txt').then(async (res) => {
        // res.text() returns a promise, so we use async/await to make the code cleaner
        brandQuotes = (await res.text()).split('\n');
    }),
    fetch('assets/horoscopes.txt').then(async (res) => {
        horoscopeQuotes = (await res.text()).split('\n');
    })
]).then(() => {
    loadedQuotes = true;
})


function getRandomQuote() {
    if (!loadedQuotes) {
        return mdconverter.makeHtml("Wow, [connor.fun](http://connor.fun) is _so_ cool!");
    }
    horoscope = horoscopeQuotes[Math.floor(rng()*horoscopeQuotes.length)] + " " + brandQuotes[Math.floor(rng()*brandQuotes.length)];
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
    return date;
}

function makeRNG(sign) {
    console.log(`${moment().format("dddd")}-${sign.name}`)
    if (Math.seedrandom) { // Check if seedable PRNG library loaded
        // Seed PRNG with current day and provided sign
        return new Math.seedrandom(`${moment().format("dddd")}-${sign.name}`);
    }
    return Math.random; // If good PRNG not available, gracefully fall back to Math.random
}

