xlsxj = require("xlsx-to-json");
xlsxj({
    input: "ciil1.xlsx",
    output: "123456.json"
}, function(err, result) {
    if(err) {
        console.error(err);
    }else {
        console.log(result);
    }
});