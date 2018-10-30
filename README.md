lol


## Quote Formatting

Quotes can be formatted with full markdown support. Each quote should be exactly one line in the
appropriate txt file. Quotes can also run arbitrary JavaScript to ensure correctness of their
predictions. JS can be executed using double curly-braces: `{{ somejs.here }}`. Along with standard
JS 1.5 objects, a `sign` and `date` object are provided. 

`sign` provides the name and details of the correct astral sign:

```javascript
{
    name: "Aquarius",
    start: "01-20",
    end: "02-18"
},
```

`date` provides the date in several useful formats:

```javascript
{
    day: "Sunday",
    dayOfMonth: "10",
    dayOfYear: "161",
    fullDate: "06-10-2018",
    month: "June",
    monthNumber: "6",
    quarter: "2",
    year: "2018"
}
```

`rng` provides a pseudorandom number generator that is seeded with the current date and selected sign. `rng()` returns values between 0 and 1.

Example quote:

```
_{{ sign.name }}_: Today, {{ date.day }}, the {{ date.dayOfMonth }}th of the month, Mercury runs in retrograde. You wonder whether this effects your love life. Since it's quarter {{ date.quarter }} of the year, it very well may. The question is: *what will you do about it?*
```

Which is displayed as:

_Aquarius_: Today, Sunday, the 10th of the month, Mercury runs in retrograde. You wonder whether this effects your love life. Since it's quarter 2 of the year, it very well may. The question is: **what will you do about it?**


Currently, horoscope quotes are combined with a random brand quote, so make sure it'll make sense.