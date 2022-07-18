const fs = require("fs");

fs.readFile("text.txt", (err, data) => {
    if(err) throw err; // throw - error를 던지는 것

    console.log(data);
    console.log(data.toString());
});