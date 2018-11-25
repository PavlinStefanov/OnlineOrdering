"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paginator = /** @class */ (function () {
    function Paginator(objectList) {
        this.start = 0;
        this.end = 4;
        this.step = 1;
        this._objectList = objectList;
    }
    Object.defineProperty(Paginator.prototype, "setObjectList", {
        set: function (objectList) {
            this._objectList = objectList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "getObjectList", {
        get: function () {
            return this._objectList;
        },
        enumerable: true,
        configurable: true
    });
    Paginator.prototype.GetPrev = function () {
        this.start -= 1;
        this.end -= 1;
    };
    Paginator.prototype.GetNext = function () {
        this.start += 1;
        this.end += 1;
    };
    Paginator.prototype.getOrderListSequence = function () {
        return this.range(this.start, this.end, this.step);
    };
    Paginator.prototype.checkForUndifined = function () {
        var undifinedOrder = false;
        this.getOrderListSequence().forEach(function (order) {
            if (order == undefined) {
                undifinedOrder = true;
            }
        });
        return undifinedOrder;
    };
    Paginator.prototype.range = function (start, edge, step) {
        // If only one number was passed in make it the edge and 0 the start.
        if (arguments.length == 1) {
            edge = start;
            start = 0;
        }
        // Validate the edge and step numbers.
        edge = edge || 0;
        step = step || 1;
        for (var ret = []; (edge - start) * step > 0; start += step) {
            ret.push(this._objectList[start]);
        }
        return ret;
    };
    return Paginator;
}());
exports.Paginator = Paginator;
//# sourceMappingURL=paginator.js.map