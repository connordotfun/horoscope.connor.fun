var app = new Vue({
    el: '#content-container',
    data: {
        text: 'Hello Vue!',
        selection_mode: true,
        page_title: "Horoscopes",
        signs: [
            {
                name: "Aquarius",
                start: "01-20",
                end: "02-18",
                image: "todo"
            },
            {
                name: "Pisces",
                start: "02-19",
                end: "03-20",
                image: "todo"
            },
            {
                name: "Aries",
                start: "03-21",
                end: "04-19",
                image: "todo"
            },
            {
                name: "Taurus",
                start: "04-20",
                end: "05-20",
                image: "todo"
            },
            {
                name: "Gemini",
                start: "05-21",
                end: "06-20",
                image: "todo"
            },
            {
                name: "Cancer",
                start: "06-21",
                end: "07-22",
                image: "todo"
            },
            {
                name: "Leo",
                start: "07-23",
                end: "08-22",
                image: "todo"
            },
            {
                name: "Virgo",
                start: "08-23",
                end: "09-22",
                image: "todo"
            },
            {
                name: "Libra",
                start: "09-23",
                end: "10-22",
                image: "todo"
            },
            {
                name: "Scorpio",
                start: "10-23",
                end: "11-21",
                image: "todo"
            },
            {
                name: "Sagittarius",
                start: "11-22",
                end: "12-21",
                image: "todo"
            },
            {
                name: "Capricorn",
                start: "12-22",
                end: "01-19",
                image: "todo"
            },
        ]
    },
    methods: {
        showSelection: function() {
            this.selection_mode = true;
            this.page_title = "Horoscopes";
        },

        showDetails: function(sign) {
            this.selection_mode = false;
            console.log(sign);
            currentSign = sign;
            this.page_title = sign.name;
            history.pushState({home: true}, "", window.location);
        },

        buildQuote: function() {
            return 'foo'
        }
    }
})

Vue.component('horoscope', {
    render: function (createElement) {
        this.template = Vue.compile(getRandomQuote());
        this.template.data = function() {
            return {
                sign: currentSign,
                date: makeDateUtility(),
            }
        };

        return createElement(this.template);
    },

    mounted: function() {
        console.log("mounted");
        this.template = Vue.compile(getRandomQuote()).render;
    }
});


window.onpopstate = function(state) {
    app.showSelection();
}