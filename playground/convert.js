xlsxj = require("xlsx-to-json");
xlsxj({
    input: "data2.xlsx",
    output: "DATA-2.json"
}, function(err, result) {
    if(err) {
        console.error(err);
    }else {
        console.log(result);
    }
});