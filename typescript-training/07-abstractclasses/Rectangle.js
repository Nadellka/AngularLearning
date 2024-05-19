"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(_x, _y, _l, _w) {
        var _this = _super.call(this, _x, _y) || this;
        _this._l = _l;
        _this._w = _w;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "l", {
        get: function () {
            return this._l;
        },
        set: function (value) {
            this._l = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "w", {
        get: function () {
            return this._w;
        },
        set: function (value) {
            this._w = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ", length = ".concat(this._l, " , width = ").concat(this._w);
    };
    Rectangle.prototype.calculateArea = function () {
        return this._l * this._w;
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
