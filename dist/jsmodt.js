System.register("Test", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function foo() {
        console.log(Test);
    }
    exports_1("foo", foo);
    var Test;
    return {
        setters: [],
        execute: function () {
            exports_1("Test", Test = 'foo');
        }
    };
});
