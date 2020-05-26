let indhu = require("./node_modules/indhu-test/indhu");
let compare = require("./compare");

let result = compare(4, 2);
let expected = "greatest";

indhu.test(result).toBeEqualTo(expected);
indhu.test(compare(2, 8)).toBeEqualTo("smallest");
indhu.test(compare(7, 7)).toBeEqualTo("equal");

//fail case
indhu.test(compare(8, 6)).toBeEqualTo("smallest");
