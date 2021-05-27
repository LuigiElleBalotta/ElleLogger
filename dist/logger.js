import * as moment from 'moment';
export class ElleLogger {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
        this._context = (_a = options === null || options === void 0 ? void 0 : options.context) !== null && _a !== void 0 ? _a : '';
        this._useDate = (_c = (_b = options === null || options === void 0 ? void 0 : options.date) === null || _b === void 0 ? void 0 : _b.useDate) !== null && _c !== void 0 ? _c : false;
        if (!this._useDate) {
            this._dateFormat = (_e = (_d = options === null || options === void 0 ? void 0 : options.date) === null || _d === void 0 ? void 0 : _d.dateFormat) !== null && _e !== void 0 ? _e : '';
        }
        else {
            this._dateFormat = (_g = (_f = options === null || options === void 0 ? void 0 : options.date) === null || _f === void 0 ? void 0 : _f.dateFormat) !== null && _g !== void 0 ? _g : 'YYYY-MM-DD HH:mm:ss';
        }
        this._logConfig = {
            debug: {
                background: (_k = (_j = (_h = options === null || options === void 0 ? void 0 : options.logConfiguration) === null || _h === void 0 ? void 0 : _h.debug) === null || _j === void 0 ? void 0 : _j.background) !== null && _k !== void 0 ? _k : '#e83086',
                color: (_o = (_m = (_l = options === null || options === void 0 ? void 0 : options.logConfiguration) === null || _l === void 0 ? void 0 : _l.debug) === null || _m === void 0 ? void 0 : _m.color) !== null && _o !== void 0 ? _o : '#000',
            },
            info: {
                background: (_r = (_q = (_p = options === null || options === void 0 ? void 0 : options.logConfiguration) === null || _p === void 0 ? void 0 : _p.info) === null || _q === void 0 ? void 0 : _q.background) !== null && _r !== void 0 ? _r : '#27e6f7',
                color: (_u = (_t = (_s = options === null || options === void 0 ? void 0 : options.logConfiguration) === null || _s === void 0 ? void 0 : _s.info) === null || _t === void 0 ? void 0 : _t.color) !== null && _u !== void 0 ? _u : '#000',
            },
            error: {
                background: (_x = (_w = (_v = options === null || options === void 0 ? void 0 : options.logConfiguration) === null || _v === void 0 ? void 0 : _v.error) === null || _w === void 0 ? void 0 : _w.background) !== null && _x !== void 0 ? _x : '#e02626',
                color: (_0 = (_z = (_y = options === null || options === void 0 ? void 0 : options.logConfiguration) === null || _y === void 0 ? void 0 : _y.error) === null || _z === void 0 ? void 0 : _z.color) !== null && _0 !== void 0 ? _0 : '#000',
            },
            success: {
                background: (_3 = (_2 = (_1 = options === null || options === void 0 ? void 0 : options.logConfiguration) === null || _1 === void 0 ? void 0 : _1.success) === null || _2 === void 0 ? void 0 : _2.background) !== null && _3 !== void 0 ? _3 : '#1af230',
                color: (_6 = (_5 = (_4 = options === null || options === void 0 ? void 0 : options.logConfiguration) === null || _4 === void 0 ? void 0 : _4.success) === null || _5 === void 0 ? void 0 : _5.color) !== null && _6 !== void 0 ? _6 : '#000',
            },
            warn: {
                background: (_9 = (_8 = (_7 = options === null || options === void 0 ? void 0 : options.logConfiguration) === null || _7 === void 0 ? void 0 : _7.warn) === null || _8 === void 0 ? void 0 : _8.background) !== null && _9 !== void 0 ? _9 : '#ffac1e',
                color: (_12 = (_11 = (_10 = options === null || options === void 0 ? void 0 : options.logConfiguration) === null || _10 === void 0 ? void 0 : _10.warn) === null || _11 === void 0 ? void 0 : _11.color) !== null && _12 !== void 0 ? _12 : '#000',
            }
        };
    }
    _formatMessage(message) {
        let ret = '';
        let useContext = this._context && !this._isNullOrWhitespace(this._context);
        if (useContext) {
            ret += `[${this._context}]`;
        }
        if (this._useDate) {
            if (useContext) {
                ret += ` - ${moment().format(this._dateFormat)} ➡️`;
            }
            else {
                ret += `[${moment().format(this._dateFormat)}] ➡️`;
            }
        }
        return `${ret} ${message}`;
    }
    _isNullOrWhitespace(str) {
        return str === null || str === '' || str === undefined || !str;
    }
    info(message, ...args) {
        console.log(`%c ${this._formatMessage(message)}`, `background: ${this._logConfig.info.background}; color: ${this._logConfig.info.color}`, args);
    }
    debug(message, ...args) {
        console.log(`%c ${this._formatMessage(message)}`, `background: ${this._logConfig.debug.background}; color: ${this._logConfig.debug.color}`, args);
    }
    error(message, ...args) {
        console.log(`%c ${this._formatMessage(message)}`, `background: ${this._logConfig.error.background}; color: ${this._logConfig.error.color}`, args);
    }
    success(message, ...args) {
        console.log(`%c ${this._formatMessage(message)}`, `background: ${this._logConfig.success.background}; color: ${this._logConfig.success.color}`, args);
    }
    warn(message, ...args) {
        console.log(`%c ${this._formatMessage(message)}`, `background: ${this._logConfig.warn.background}; color: ${this._logConfig.warn.color}`, args);
    }
}
//# sourceMappingURL=logger.js.map