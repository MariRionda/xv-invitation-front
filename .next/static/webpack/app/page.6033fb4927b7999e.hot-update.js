"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/usefulFunctions/encryptar.js":
/*!*************************************************!*\
  !*** ./components/usefulFunctions/encryptar.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compare\": function() { return /* binding */ compare; },\n/* harmony export */   \"encrypted\": function() { return /* binding */ encrypted; }\n/* harmony export */ });\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"(app-client)/./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n// Importar la biblioteca 'crypto' para generar una clave aleatoria\nconst crypto = __webpack_require__(/*! crypto */ \"(app-client)/./node_modules/next/dist/compiled/crypto-browserify/index.js\");\n// Función para cifrar una cadena utilizando XOR\nfunction xorEncrypt(text, key) {\n    let result = \"\";\n    for(let i = 0; i < text.length; i++){\n        // Aplicar la operación XOR a cada carácter del texto utilizando la clave\n        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));\n    }\n    return result;\n}\n// Función para cifrar una cadena y devolverla en hexadecimal\nconst encrypted = (text, key)=>{\n    // Convertir la cadena y la clave a bytes utilizando Buffer\n    const textBytes = Buffer.from(text, \"utf8\");\n    const keyBytes = Buffer.from(key, \"utf8\");\n    // Cifrar los bytes utilizando la función de cifrado XOR\n    const encryptedBytes = xorEncrypt(textBytes, keyBytes);\n    // Convertir los bytes cifrados a hexadecimal\n    const encryptedHex = encryptedBytes.toString(\"hex\");\n    // Devolver el resultado\n    return encryptedHex;\n};\n// Función para descifrar una cadena cifrada en hexadecimal utilizando XOR\nconst compare = (encryptedHex, key)=>{\n    // Convertir la cadena cifrada en hexadecimal a bytes utilizando Buffer\n    const encryptedBytes = Buffer.from(encryptedHex, \"hex\");\n    // Descifrar los bytes utilizando la función de cifrado XOR\n    const decryptedBytes = xorEncrypt(encryptedBytes, Buffer.from(key, \"utf8\"));\n    // Convertir los bytes descifrados a texto\n    const decryptedText = decryptedBytes.toString(\"utf8\");\n    // Devolver el resultado\n    return decryptedText;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy91c2VmdWxGdW5jdGlvbnMvZW5jcnlwdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1FQUFtRTtBQUNuRSxNQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUV2QixnREFBZ0Q7QUFDaEQsU0FBU0MsV0FBV0MsSUFBSSxFQUFFQyxHQUFHLEVBQUU7SUFDN0IsSUFBSUMsU0FBUztJQUNiLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxLQUFLSSxNQUFNLEVBQUVELElBQUs7UUFDcEMseUVBQXlFO1FBQ3pFRCxVQUFVRyxPQUFPQyxZQUFZLENBQUNOLEtBQUtPLFVBQVUsQ0FBQ0osS0FBS0YsSUFBSU0sVUFBVSxDQUFDSixJQUFJRixJQUFJRyxNQUFNO0lBQ2xGO0lBQ0EsT0FBT0Y7QUFDVDtBQUVBLDZEQUE2RDtBQUN0RCxNQUFNTSxZQUFZLENBQUNSLE1BQU1DLE1BQVE7SUFDdEMsMkRBQTJEO0lBQzNELE1BQU1RLFlBQVlDLE1BQU1BLENBQUNDLElBQUksQ0FBQ1gsTUFBTTtJQUNwQyxNQUFNWSxXQUFXRixNQUFNQSxDQUFDQyxJQUFJLENBQUNWLEtBQUs7SUFFbEMsd0RBQXdEO0lBQ3hELE1BQU1ZLGlCQUFpQmQsV0FBV1UsV0FBV0c7SUFFN0MsNkNBQTZDO0lBQzdDLE1BQU1FLGVBQWVELGVBQWVFLFFBQVEsQ0FBQztJQUU3Qyx3QkFBd0I7SUFDeEIsT0FBT0Q7QUFDVCxFQUFDO0FBRUQsMEVBQTBFO0FBQ25FLE1BQU1FLFVBQVUsQ0FBQ0YsY0FBY2IsTUFBUTtJQUM1Qyx1RUFBdUU7SUFDdkUsTUFBTVksaUJBQWlCSCxNQUFNQSxDQUFDQyxJQUFJLENBQUNHLGNBQWM7SUFFakQsMkRBQTJEO0lBQzNELE1BQU1HLGlCQUFpQmxCLFdBQVdjLGdCQUFnQkgsTUFBTUEsQ0FBQ0MsSUFBSSxDQUFDVixLQUFLO0lBRW5FLDBDQUEwQztJQUMxQyxNQUFNaUIsZ0JBQWdCRCxlQUFlRixRQUFRLENBQUM7SUFFOUMsd0JBQXdCO0lBQ3hCLE9BQU9HO0FBQ1QsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZWZ1bEZ1bmN0aW9ucy9lbmNyeXB0YXIuanM/YTRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRhciBsYSBiaWJsaW90ZWNhICdjcnlwdG8nIHBhcmEgZ2VuZXJhciB1bmEgY2xhdmUgYWxlYXRvcmlhXHJcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xyXG5cclxuLy8gRnVuY2nDs24gcGFyYSBjaWZyYXIgdW5hIGNhZGVuYSB1dGlsaXphbmRvIFhPUlxyXG5mdW5jdGlvbiB4b3JFbmNyeXB0KHRleHQsIGtleSkge1xyXG4gIGxldCByZXN1bHQgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vIEFwbGljYXIgbGEgb3BlcmFjacOzbiBYT1IgYSBjYWRhIGNhcsOhY3RlciBkZWwgdGV4dG8gdXRpbGl6YW5kbyBsYSBjbGF2ZVxyXG4gICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodGV4dC5jaGFyQ29kZUF0KGkpIF4ga2V5LmNoYXJDb2RlQXQoaSAlIGtleS5sZW5ndGgpKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gRnVuY2nDs24gcGFyYSBjaWZyYXIgdW5hIGNhZGVuYSB5IGRldm9sdmVybGEgZW4gaGV4YWRlY2ltYWxcclxuZXhwb3J0IGNvbnN0IGVuY3J5cHRlZCA9ICh0ZXh0LCBrZXkpID0+IHtcclxuICAvLyBDb252ZXJ0aXIgbGEgY2FkZW5hIHkgbGEgY2xhdmUgYSBieXRlcyB1dGlsaXphbmRvIEJ1ZmZlclxyXG4gIGNvbnN0IHRleHRCeXRlcyA9IEJ1ZmZlci5mcm9tKHRleHQsICd1dGY4Jyk7XHJcbiAgY29uc3Qga2V5Qnl0ZXMgPSBCdWZmZXIuZnJvbShrZXksICd1dGY4Jyk7XHJcblxyXG4gIC8vIENpZnJhciBsb3MgYnl0ZXMgdXRpbGl6YW5kbyBsYSBmdW5jacOzbiBkZSBjaWZyYWRvIFhPUlxyXG4gIGNvbnN0IGVuY3J5cHRlZEJ5dGVzID0geG9yRW5jcnlwdCh0ZXh0Qnl0ZXMsIGtleUJ5dGVzKTtcclxuXHJcbiAgLy8gQ29udmVydGlyIGxvcyBieXRlcyBjaWZyYWRvcyBhIGhleGFkZWNpbWFsXHJcbiAgY29uc3QgZW5jcnlwdGVkSGV4ID0gZW5jcnlwdGVkQnl0ZXMudG9TdHJpbmcoJ2hleCcpO1xyXG5cclxuICAvLyBEZXZvbHZlciBlbCByZXN1bHRhZG9cclxuICByZXR1cm4gZW5jcnlwdGVkSGV4O1xyXG59XHJcblxyXG4vLyBGdW5jacOzbiBwYXJhIGRlc2NpZnJhciB1bmEgY2FkZW5hIGNpZnJhZGEgZW4gaGV4YWRlY2ltYWwgdXRpbGl6YW5kbyBYT1JcclxuZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoZW5jcnlwdGVkSGV4LCBrZXkpID0+IHtcclxuICAvLyBDb252ZXJ0aXIgbGEgY2FkZW5hIGNpZnJhZGEgZW4gaGV4YWRlY2ltYWwgYSBieXRlcyB1dGlsaXphbmRvIEJ1ZmZlclxyXG4gIGNvbnN0IGVuY3J5cHRlZEJ5dGVzID0gQnVmZmVyLmZyb20oZW5jcnlwdGVkSGV4LCAnaGV4Jyk7XHJcblxyXG4gIC8vIERlc2NpZnJhciBsb3MgYnl0ZXMgdXRpbGl6YW5kbyBsYSBmdW5jacOzbiBkZSBjaWZyYWRvIFhPUlxyXG4gIGNvbnN0IGRlY3J5cHRlZEJ5dGVzID0geG9yRW5jcnlwdChlbmNyeXB0ZWRCeXRlcywgQnVmZmVyLmZyb20oa2V5LCAndXRmOCcpKTtcclxuXHJcbiAgLy8gQ29udmVydGlyIGxvcyBieXRlcyBkZXNjaWZyYWRvcyBhIHRleHRvXHJcbiAgY29uc3QgZGVjcnlwdGVkVGV4dCA9IGRlY3J5cHRlZEJ5dGVzLnRvU3RyaW5nKCd1dGY4Jyk7XHJcblxyXG4gIC8vIERldm9sdmVyIGVsIHJlc3VsdGFkb1xyXG4gIHJldHVybiBkZWNyeXB0ZWRUZXh0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcnlwdG8iLCJyZXF1aXJlIiwieG9yRW5jcnlwdCIsInRleHQiLCJrZXkiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiY2hhckNvZGVBdCIsImVuY3J5cHRlZCIsInRleHRCeXRlcyIsIkJ1ZmZlciIsImZyb20iLCJrZXlCeXRlcyIsImVuY3J5cHRlZEJ5dGVzIiwiZW5jcnlwdGVkSGV4IiwidG9TdHJpbmciLCJjb21wYXJlIiwiZGVjcnlwdGVkQnl0ZXMiLCJkZWNyeXB0ZWRUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/usefulFunctions/encryptar.js\n"));

/***/ })

});