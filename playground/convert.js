xlsxj = require("xlsx-to-json");
xlsxj({
    input: "123.xlsx",
    output: "newasasd.json"
}, function(err, result) {
    if(err) {
        console.error(err);
    }else {
        console.log(result);
    }
});