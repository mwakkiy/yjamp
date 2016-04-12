/* YAHOO JP AMP JS */
var Yahoojp;
! function(i) {
    var e;
    ! function(i) {
        function e(i, e) {
            return e[i]
        }
        i.toEnumValue = e
    }(e = i.AMP || (i.AMP = {}))
}(Yahoojp || (Yahoojp = {}));
var Yahoojp;
! function(i) {
    var e;
    ! function(e) {
        var a;
        ! function(i) {
            i[i.banner = 0] = "banner",
            i[i.icon = 1] = "icon", 
            i[i["native"] = 2] = "native", 
            i[i.ssp = 3] = "ssp"
        }(a || (a = {}));
        var o = function() {
            function o(o) {
                var t = this;
                this.global = o, this.CreateScriptByAdType = function() {
                    var o = t.global.yahoojpParam;
                    switch (e.toEnumValue(o.adtype.toLowerCase(), a)) {
                        case a.banner:
                            t.global.imobile_tag_ver = "0.3", t.global.imobile_pid = o.pid, t.global.imobile_asid = o.asid, t.global.imobile_type = "inline", t.global.imobile_amp = !0, t.global.document.write('<script src="https://spad.i-mobile.co.jp/script/adssp.js"></script>');
                            break;
                        case a.icon:
                            t.global.imobile_tag_ver = "0.3", t.global.imobile_pid = o.pid, t.global.imobile_asid = o.asid, t.global.imobile_type = "icon_inline", t.global.imobile_amp = !0, t.global.imobile_style = {
                                align: o.align || "left"
                            }, t.global.imobile_icon = {
                                num: o.num,
                                show_title: o.showtitle
                            }, t.global.document.write('<script src="https://spad.i-mobile.co.jp/script/adssp.js"></script>');
                            break;
                        case a["native"]:
                            t.global.document.write('<script src="https://spad.i-mobile.co.jp/script/adsnativesp.js"></script>'), t.global.addEventListener("load", function() {
                                i.Native.SP.showAds({
                                    pid: parseInt(o.pid),
                                    asid: parseInt(o.asid),
                                    amp: !0
                                })
                            }, !1);
                            break;
                        case a.ssp:
                            if (!o.mid) break;
                            t.global.document.write('<script src="https://ssp-adedge.i-mobile.co.jp/script/ssp_spot_define.js?20150827"></script>'), t.global.addEventListener("load", function() {
                                i.SSP.showSpot({
                                    pid: parseInt(o.pid),
                                    mid: parseInt(o.mid),
                                    asid: parseInt(o.asid),
                                    amp: !0,
                                    display: "inline"
                                })
                            }, !1)
                    }
                }
            }
            return o
        }();
        e.AMPScriptFactory = o, new o(window).CreateScriptByAdType()
    }(e = i.AMP || (i.AMP = {}))
}(Yahoojp || (Yahoojp = {}));