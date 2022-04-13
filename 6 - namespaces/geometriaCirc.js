"use strict";
var Geometria2;
(function (Geometria2) {
    const PI = 3.14;
    let Area;
    (function (Area) {
        function areaCircurefencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.areaCircurefencia = areaCircurefencia;
    })(Area = Geometria2.Area || (Geometria2.Area = {}));
})(Geometria2 || (Geometria2 = {}));
//# sourceMappingURL=geometriaCirc.js.map