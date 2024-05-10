const numStars = 100;

for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}

function getRandomPosition() {
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('star-field').style.display = 'none';
    document.getElementById('board').style.display = 'none';
    document.getElementById('audio').style.display = 'none';

    document.getElementById('confirm').style.display = 'flex';

    function showContent() {
        plausible("Yes");
        document.documentElement.requestFullscreen().catch(console.error);
        document.getElementById('star-field').style.display = 'block';
        document.getElementById('board').style.display = 'block';
        document.getElementById('audio').style.display = 'block';
        document.getElementById('confirm').style.display = 'none';
    }

    document.getElementById('confirm-yes').addEventListener('click', showContent);
    document.getElementById('confirm-no').addEventListener('click', showContent);
});

!function (e, o) { "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).BrowserDetector = o() }(this, (function () { "use strict"; function e(e, o) { for (var n = 0; n < o.length; n++) { var r = o[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } var o = { chrome: "Google Chrome", brave: "Brave", crios: "Google Chrome", edge: "Microsoft Edge", edg: "Microsoft Edge", fennec: "Mozilla Firefox", jsdom: "JsDOM", mozilla: "Mozilla Firefox", msie: "Microsoft Internet Explorer", opera: "Opera", opios: "Opera", opr: "Opera", rv: "Microsoft Internet Explorer", safari: "Safari", samsungbrowser: "Samsung Browser", electron: "Electron" }, n = { android: "Android", androidTablet: "Android Tablet", cros: "Chrome OS", fennec: "Android Tablet", ipad: "IPad", iphone: "IPhone", jsdom: "JsDOM", linux: "Linux", mac: "Macintosh", tablet: "Android Tablet", win: "Windows", "windows phone": "Windows Phone", xbox: "Microsoft Xbox" }, r = function (e) { var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, n = new RegExp("^-?\\d+(?:.\\d{0,".concat(o, "})?")), r = Number(e).toString().match(n); return r ? r[0] : null }, i = function () { return "undefined" != typeof window ? window.navigator : null }, t = function () { function t(e) { var o; !function (e, o) { if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function") }(this, t), this.userAgent = e || (null === (o = i()) || void 0 === o ? void 0 : o.userAgent) || null } var a, l, s; return a = t, l = [{ key: "parseUserAgent", value: function (e) { var t, a, l, s = {}, c = e || this.userAgent || "", d = c.toLowerCase().replace(/\s\s+/g, " "), u = /(edge)\/([\w.]+)/.exec(d) || /(edg)[/]([\w.]+)/.exec(d) || /(opr)[/]([\w.]+)/.exec(d) || /(jsdom)[/]([\w.]+)/.exec(d) || /(samsungbrowser)[/]([\w.]+)/.exec(d) || /(electron)[/]([\w.]+)/.exec(d) || /(chrome)[/]([\w.]+)/.exec(d) || /(crios)[/]([\w.]+)/.exec(d) || /(opios)[/]([\w.]+)/.exec(d) || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+)/.exec(d) || /(opera)(?:.*version|)[/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || /(fennec)[/]([\w.]+)/.exec(d) || d.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(d) || d.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d) || [], f = /(ipad)/.exec(d) || /(ipod)/.exec(d) || /(iphone)/.exec(d) || /(jsdom)/.exec(d) || /(windows phone)/.exec(d) || /(xbox)/.exec(d) || /(win)/.exec(d) || /(tablet)/.exec(d) || /(android)/.test(d) && !1 === /(mobile)/.test(d) && ["androidTablet"] || /(android)/.exec(d) || /(mac)/.exec(d) || /(linux)/.exec(d) || /(cros)/.exec(d) || [], p = u[5] || u[3] || u[1] || null, w = f[0] || null, x = u[4] || u[2] || null, b = i(); "chrome" === p && "function" == typeof (null == b || null === (t = b.brave) || void 0 === t ? void 0 : t.isBrave) && (p = "brave"), p && (s[p] = !0), w && (s[w] = !0); var m = Boolean(s.tablet || s.android || s.androidTablet), v = Boolean(s.ipad || s.tablet || s.androidTablet), g = Boolean(s.android || s.androidTablet || s.tablet || s.ipad || s.ipod || s.iphone || s["windows phone"]), h = Boolean(s.cros || s.mac || s.linux || s.win), y = Boolean(s.brave || s.chrome || s.crios || s.opr || s.safari || s.edg || s.electron), A = Boolean(s.msie || s.rv); return { name: null !== (a = o[p]) && void 0 !== a ? a : null, platform: null !== (l = n[w]) && void 0 !== l ? l : null, userAgent: c, version: x, shortVersion: x ? r(parseFloat(x), 2) : null, isAndroid: m, isTablet: v, isMobile: g, isDesktop: h, isWebkit: y, isIE: A } } }, { key: "getBrowserInfo", value: function () { var e = this.parseUserAgent(); return { name: e.name, platform: e.platform, userAgent: e.userAgent, version: e.version, shortVersion: e.shortVersion } } }], s = [{ key: "VERSION", get: function () { return "3.2.0" } }], l && e(a.prototype, l), s && e(a, s), Object.defineProperty(a, "prototype", { writable: !1 }), t }(); return t }));

function append(text, parentElement) {
    const p = document.createElement('p');
    p.innerHTML = text;
    parentElement.appendChild(p);
}

window.onload = async () => {
    const browserDetector = new BrowserDetector();
    const browserInfo = browserDetector.getBrowserInfo();
    const ipData = await fetch('https://myip.wtf/json').then(res => res.json()).catch(() => alert('Disable your aggressive ad-blocker and refresh'));
    const { YourFuckingIPAddress, YourFuckingISP } = ipData;
    const locationData = await fetch('https://ipapi.co/json/').then(res => res.json()).catch(() => alert('Disable your aggressive ad-blocker and refresh'));
    const { country, region, city, postal, timezone, latitude, longitude, org, asn } = locationData;
    const fullLocation = `${city}, ${region}, ${country}`;
    const currentTime = new Date().toLocaleString();

    const screenSize = `${window.screen.width}px x ${window.screen.height}px`;
    const systemLanguages = navigator.languages.join(', ');
    const displayPixelDepth = window.screen.pixelDepth;
    const screenOrientation = window.screen.orientation.type || 'Unknown';
    const cpuThreads = navigator.hardwareConcurrency || 'Unknown';
    const availableMemory = navigator.deviceMemory ? `${navigator.deviceMemory}GB` : 'Unknown';
    const isMobile = browserInfo.isMobile ? 'Yes' : 'No';
    const browserVersion = browserInfo.shortVersion || 'Unknown';

    const board = document.createElement('div');

    append(`IP Address: ${YourFuckingIPAddress}`, board);
    append(`Country: ${country}`, board);
    append(`Region: ${region}`, board);
    append(`City: ${city}`, board);
    append(`ZIP Code: ${postal}`, board);
    append(`Full Location: ${fullLocation}`, board);
    append(`Latitude: ${latitude}`, board);
    append(`Longitude: ${longitude}`, board);
    append(`Timezone: ${timezone}`, board);
    append(`Current Time: ${currentTime}`, board);
    append(`ISP: ${YourFuckingISP}`, board);
    append(`Organization: ${org}`, board);
    append(`Autonomous System: ${asn}`, board);
    append(`Browser Name: ${browserInfo.name}`, board);
    append(`Platform Name: ${browserInfo.platform}`, board);
    append(`Browser Version: ${browserVersion}`, board);
    append(`Mobile/Tablet: ${isMobile}`, board);
    append(`System Languages: ${systemLanguages}`, board);
    append(`Screen Size: ${screenSize}`, board);
    append(`Display Pixel Depth: ${displayPixelDepth}`, board);
    append(`Screen Orientation: ${screenOrientation}`, board);
    append(`CPU Threads: ${cpuThreads}`, board);
    append(`Available Browser Memory: ${availableMemory}`, board);

    const userDataDiv = document.getElementById('user-data');
    userDataDiv.appendChild(board);
    plausible("Accepted the Opinion");
}

