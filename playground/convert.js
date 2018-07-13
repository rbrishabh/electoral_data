xlsxj = require("xlsx-to-json");
xlsxj({
    input: "chamoli.xlsx",
    output: "chamoli output 2.json"
}, function(err, result) {
    if(err) {
        console.error(err);
    }else {
        console.log(result);
    }
});