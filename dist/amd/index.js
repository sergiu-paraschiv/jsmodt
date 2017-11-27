define("sp/test/Test", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Test = 'foo';
    function foo() {
        console.log(exports.Test);
    }
    exports.foo = foo;
});
define("jsmodt", ["require", "exports", "sp/test/Test"], function (require, exports, Test_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(Test_1);
});
