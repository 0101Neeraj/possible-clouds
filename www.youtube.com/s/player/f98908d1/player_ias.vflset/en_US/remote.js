(function(g) {
    var window = this;
    'use strict';
    var a8 = function(a) {
            g.bm(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.eb()).toString(36));
            return a
        },
        b8 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Gga(a.u, b, c)
        },
        crb = function(a) {
            if (a instanceof g.gp) return a;
            if ("function" == typeof a.Ik) return a.Ik(!1);
            if (g.Wa(a)) {
                var b = 0,
                    c = new g.gp;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.s3;
                        if (b in a) return g.hp(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        drb = function(a, b, c) {
            if (g.Wa(a)) g.Zb(a, b, c);
            else
                for (a = crb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        erb = function(a, b) {
            var c = [];
            drb(b, function(d) {
                try {
                    var e = g.Sr.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.xla(e) && c.push(d)
            }, a);
            return c
        },
        frb = function(a, b) {
            erb(a, b).forEach(function(c) {
                g.Sr.prototype.remove.call(this, c)
            }, a)
        },
        grb = function(a) {
            if (a.oa) {
                if (a.oa.locationOverrideToken) return {
                    locationOverrideToken: a.oa.locationOverrideToken
                };
                if (null != a.oa.latitudeE7 && null != a.oa.longitudeE7) return {
                    latitudeE7: a.oa.latitudeE7,
                    longitudeE7: a.oa.longitudeE7
                }
            }
            return null
        },
        hrb = function(a, b) {
            g.Fb(a, b) || a.push(b)
        },
        irb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        jrb = function(a, b) {
            return g.cd(a, b)
        },
        krb = function(a) {
            try {
                return g.Qa.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        c8 = function(a) {
            if (g.Qa.JSON) try {
                return g.Qa.JSON.parse(a)
            } catch (b) {}
            return krb(a)
        },
        lrb = function(a, b, c, d) {
            var e = new g.Ul(null);
            a && g.Vl(e, a);
            b && g.Wl(e, b);
            c && g.Xl(e, c);
            d && (e.B = d);
            return e
        },
        mrb = function() {
            this.j = d8();
            this.j.Qj("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Zd: 3,
                Yd: "channel_type"
            })
        },
        nrb = function(a, b) {
            a.j.Gk("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        orb = function() {
            this.j = d8();
            this.j.Qj("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Zd: 3,
                Yd: "channel_type"
            })
        },
        prb = function(a, b) {
            a.j.Gk("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        qrb = function() {
            this.j = d8();
            this.j.Qj("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Zd: 3,
                Yd: "channel_type"
            })
        },
        rrb = function(a, b) {
            a.j.Gk("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        srb = function() {
            this.j = d8();
            this.j.Qj("/client_streamz/youtube/living_room/mdx/channel/error", {
                Zd: 3,
                Yd: "channel_type"
            })
        },
        trb = function(a, b) {
            a.j.Gk("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        urb = function() {
            this.j = d8();
            this.j.Qj("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        vrb = function() {
            this.j = d8();
            this.j.Qj("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        e8 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.lr;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", wrb(this, a.capabilities || ""), xrb(this, a.compatibleSenderThemes || ""), yrb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        wrb = function(a, b) {
            a.capabilities.clear();
            g.lp(b.split(","), g.cb(jrb, zrb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        xrb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.lp(b.split(","), g.cb(jrb, Arb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        yrb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        f8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        g8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        Brb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        Crb = function(a) {
            return new f8(a)
        },
        Drb = function(a) {
            return Array.isArray(a) ? g.vn(a, Crb) : []
        },
        h8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        Erb = function(a) {
            return Array.isArray(a) ? "[" + g.vn(a, h8).join(",") + "]" : "null"
        },
        Frb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        Grb = function(a) {
            return g.vn(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Hrb = function(a, b) {
            return g.Cb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        i8 = function(a, b) {
            return g.Cb(a, function(c) {
                return g8(c, b)
            })
        },
        Irb = function() {
            var a = (0, g.yB)();
            a && frb(a, a.j.Ik(!0))
        },
        j8 = function() {
            var a = g.BB("yt-remote-connected-devices") || [];
            g.Vb(a);
            return a
        },
        Jrb = function(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.vn(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        Krb = function(a) {
            g.AB("yt-remote-connected-devices", a, 86400)
        },
        k8 = function() {
            if (Lrb) return Lrb;
            var a = g.BB("yt-remote-device-id");
            a || (a = Frb(), g.AB("yt-remote-device-id", a, 31536E3));
            for (var b = j8(), c = 1, d = a; g.Fb(b, d);) c++, d = a + "#" + c;
            return Lrb = d
        },
        Mrb = function() {
            var a = j8(),
                b = k8();
            g.DB() && g.Yb(a, b);
            a = Jrb(a);
            if (0 == a.length) try {
                g.CA("remote_sid")
            } catch (c) {} else try {
                g.AA("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        Nrb = function() {
            return g.BB("yt-remote-session-browser-channel")
        },
        Orb = function() {
            return g.BB("yt-remote-local-screens") || []
        },
        Prb = function() {
            g.AB("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Qrb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.vn(Orb(), function(d) {
                    return d.loungeToken
                }),
                c = g.vn(a, function(d) {
                    return d.loungeToken
                });
            g.wn(c, function(d) {
                return !g.Fb(b, d)
            }) && Prb();
            g.AB("yt-remote-local-screens", a, 31536E3)
        },
        l8 = function(a) {
            a || (g.CB("yt-remote-session-screen-id"), g.CB("yt-remote-session-video-id"));
            Mrb();
            a = j8();
            g.Hb(a, k8());
            Krb(a)
        },
        Rrb = function() {
            if (!m8) {
                var a = g.as();
                a && (m8 = new g.Pr(a))
            }
        },
        Srb = function() {
            Rrb();
            return m8 ? !!m8.get("yt-remote-use-staging-server") : !1
        },
        n8 = function(a, b) {
            g.UD[a] = !0;
            var c = g.SD();
            c && c.publish.apply(c, arguments);
            g.UD[a] = !1
        },
        Trb = function() {},
        d8 = function() {
            if (!o8) {
                o8 = new g.cg(new Trb);
                var a = g.Rz("client_streamz_web_flush_count", -1); - 1 !== a && (o8.C = a)
            }
            return o8
        },
        Urb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        Vrb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        Wrb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        p8 = function(a) {
            a.length ? Xrb(a.shift(), function() {
                p8(a)
            }) : Yrb()
        },
        Zrb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        Xrb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.ll(d, g.Os(a));
            (document.head || document.documentElement).appendChild(d)
        },
        $rb = function() {
            var a = Urb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        Yrb = function() {
            var a = Wrb();
            a && a(!1, "No cast extension found")
        },
        bsb = function() {
            if (asb) {
                var a = 2,
                    b = Wrb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                Xrb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Yrb, c)
            }
        },
        csb = function() {
            bsb();
            var a = $rb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            p8(a)
        },
        esb = function() {
            bsb();
            var a = $rb();
            a.push.apply(a, g.pa(dsb.map(Zrb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            p8(a)
        },
        q8 = function(a, b, c) {
            g.G.call(this);
            this.J = null != c ? (0, g.bb)(a, c) : a;
            this.Ri = b;
            this.D = (0, g.bb)(this.K0, this);
            this.j = !1;
            this.u = 0;
            this.B = this.Lc = null;
            this.C = []
        },
        r8 = function(a, b, c) {
            g.G.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Ri = b;
            this.B = null;
            this.j = !1;
            this.u = 0;
            this.Lc = null
        },
        fsb = function(a) {
            a.Lc = g.ag(function() {
                a.Lc = null;
                a.j && !a.u && (a.j = !1, fsb(a))
            }, a.Ri);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        s8 = function() {},
        gsb = function() {
            g.wb.call(this, "p")
        },
        hsb = function() {
            g.wb.call(this, "o")
        },
        jsb = function() {
            return isb = isb || new g.Dd
        },
        ksb = function(a) {
            g.wb.call(this, "serverreachability", a)
        },
        t8 = function(a) {
            var b = jsb();
            b.dispatchEvent(new ksb(b, a))
        },
        lsb = function(a) {
            g.wb.call(this, "statevent", a)
        },
        u8 = function(a) {
            var b = jsb();
            b.dispatchEvent(new lsb(b, a))
        },
        msb = function(a, b, c, d) {
            g.wb.call(this, "timingevent", a);
            this.size = b;
            this.wA = d
        },
        v8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Qa.setTimeout(function() {
                a()
            }, b)
        },
        nsb = function() {},
        w8 = function(a, b, c, d) {
            this.D = a;
            this.C = b;
            this.wd = c;
            this.Qc = d || 1;
            this.ob = new g.gm(this);
            this.Cb = 45E3;
            a = g.PM ? 125 : void 0;
            this.sb = new g.Uf(a);
            this.Oa = null;
            this.B = !1;
            this.V = this.kb = this.K = this.Va = this.Ba = this.Wb = this.ea = null;
            this.qa = [];
            this.j = null;
            this.oa = 0;
            this.J = this.Ga = null;
            this.hc = -1;
            this.Na = !1;
            this.wb = 0;
            this.eb = null;
            this.xc = this.Ya = this.Ec = this.Fa = !1;
            this.u = new osb
        },
        osb = function() {
            this.B = null;
            this.j = "";
            this.u = !1
        },
        qsb = function(a, b, c) {
            a.Va = 1;
            a.K = a8(b.clone());
            a.V = c;
            a.Fa = !0;
            psb(a, null)
        },
        psb = function(a, b) {
            a.Ba = Date.now();
            x8(a);
            a.kb = a.K.clone();
            b8(a.kb, "t", a.Qc);
            a.oa = 0;
            var c = a.D.Va;
            a.u = new osb;
            a.j = rsb(a.D, c ? b : null, !a.V);
            0 < a.wb && (a.eb = new r8((0, g.bb)(a.WR, a, a.j), a.wb));
            a.ob.Ta(a.j, "readystatechange", a.N0);
            b = a.Oa ? g.ld(a.Oa) : {};
            a.V ? (a.Ga || (a.Ga = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.kb, a.Ga, a.V, b)) : (a.Ga = "GET", a.j.send(a.kb, a.Ga, null, b));
            t8(1)
        },
        ssb = function(a) {
            return a.j ? "GET" == a.Ga && 2 != a.Va && a.D.Te : !1
        },
        wsb = function(a, b, c) {
            for (var d = !0, e; !a.Na && a.oa < c.length;)
                if (e = tsb(a, c), e == y8) {
                    4 ==
                        b && (a.J = 4, u8(14), d = !1);
                    break
                } else if (e == usb) {
                a.J = 4;
                u8(15);
                d = !1;
                break
            } else vsb(a, e);
            ssb(a) && e != y8 && e != usb && (a.u.j = "", a.oa = 0);
            4 != b || 0 != c.length || a.u.u || (a.J = 1, u8(16), d = !1);
            a.B = a.B && d;
            d ? 0 < c.length && !a.xc && (a.xc = !0, a.D.QO(a)) : (z8(a), A8(a))
        },
        tsb = function(a, b) {
            var c = a.oa,
                d = b.indexOf("\n", c);
            if (-1 == d) return y8;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return usb;
            d += 1;
            if (d + c > b.length) return y8;
            b = b.slice(d, d + c);
            a.oa = d + c;
            return b
        },
        x8 = function(a) {
            a.Wb = Date.now() + a.Cb;
            xsb(a, a.Cb)
        },
        xsb = function(a, b) {
            if (null != a.ea) throw Error("WatchDog timer not null");
            a.ea = v8((0, g.bb)(a.L0, a), b)
        },
        B8 = function(a) {
            a.ea && (g.Qa.clearTimeout(a.ea), a.ea = null)
        },
        A8 = function(a) {
            a.D.gh() || a.Na || ysb(a.D, a)
        },
        z8 = function(a) {
            B8(a);
            g.qb(a.eb);
            a.eb = null;
            a.sb.stop();
            a.ob.Rf();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        vsb = function(a, b) {
            try {
                var c = a.D;
                if (0 != c.Dh && (c.j == a || zsb(c.u, a)))
                    if (!a.Ya && zsb(c.u, a) && 3 == c.Dh) {
                        try {
                            var d = c.Ff.j.parse(b)
                        } catch (A) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.V) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) C8(c), D8(c);
                                        else break a;
                                    Asb(c);
                                    u8(18)
                                }
                            }
                            else c.Wd = e[1], 0 < c.Wd - c.eb && 37500 > e[2] && c.Ya && 0 == c.qa && !c.oa && (c.oa = v8((0, g.bb)(c.O0, c), 6E3));
                            if (1 >= Bsb(c.u) && c.md) {
                                try {
                                    c.md()
                                } catch (A) {}
                                c.md = void 0
                            }
                        } else E8(c, 11)
                    } else if ((a.Ya || c.j == a) && C8(c), !g.dc(b))
                    for (e = c.Ff.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.eb = f[0];
                        f = f[1];
                        if (2 == c.Dh)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.xc = f[2];
                                var h = f[3];
                                null != h && (c.XR = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.ob = 1.5 * l);
                                d = c;
                                var m = a.gN();
                                if (m) {
                                    var n = g.pk(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.fc(n, "spdy") || g.fc(n, "quic") || g.fc(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (Csb(p, p.u), p.u = null))
                                    }
                                    if (d.Fa) {
                                        var q = g.pk(m, "X-HTTP-Session-Id");
                                        q && (d.Ie = q, g.bm(d.Oa, d.Fa, q))
                                    }
                                }
                                c.Dh = 3;
                                c.D && c.D.dS();
                                c.kd && (c.od = Date.now() - a.Ba);
                                d = c;
                                var t = a;
                                d.Fd = Dsb(d, d.Va ? d.xc : null, d.Qc);
                                if (t.Ya) {
                                    Esb(d.u,
                                        t);
                                    var u = t,
                                        y = d.ob;
                                    y && u.setTimeout(y);
                                    u.ea && (B8(u), x8(u));
                                    d.j = t
                                } else Fsb(d);
                                0 < c.B.length && F8(c)
                            } else "stop" != f[0] && "close" != f[0] || E8(c, 7);
                        else 3 == c.Dh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? E8(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.cS(f), c.qa = 0)
                    }
                t8(4)
            } catch (A) {}
        },
        Gsb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Hsb = function(a) {
            this.D = a || 10;
            g.Qa.PerformanceNavigationTiming ? (a = g.Qa.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Qa.chrome && g.Qa.chrome.loadTimes && g.Qa.chrome.loadTimes() && g.Qa.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = a ? this.D : 1;
            this.j = null;
            1 < this.C && (this.j = new Set);
            this.u = null;
            this.B = []
        },
        Isb = function(a) {
            return a.u ? !0 : a.j ? a.j.size >= a.C : !1
        },
        Bsb = function(a) {
            return a.u ? 1 : a.j ? a.j.size : 0
        },
        zsb = function(a, b) {
            return a.u ? a.u == b : a.j ? a.j.has(b) : !1
        },
        Csb =
        function(a, b) {
            a.j ? a.j.add(b) : a.u = b
        },
        Esb = function(a, b) {
            a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        Jsb = function(a) {
            if (null != a.u) return a.B.concat(a.u.qa);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.B;
                a = g.v(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.qa);
                return b
            }
            return g.Kb(a.B)
        },
        Ksb = function(a, b) {
            var c = new nsb;
            if (g.Qa.Image) {
                var d = new Image;
                d.onload = g.cb(G8, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.cb(G8, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.cb(G8, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.cb(G8, c, d, "TestLoadImage: timeout", !1, b);
                g.Qa.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        G8 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        Lsb = function() {
            this.j = new s8
        },
        Msb = function(a, b, c) {
            var d = c || "";
            try {
                g.Tl(a, function(e, f) {
                    var h = e;
                    g.Xa(e) && (h = g.Jj(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        H8 = function(a, b, c) {
            return c && c.M5 ? c.M5[a] || b : b
        },
        Nsb = function(a) {
            this.B = [];
            this.xc = this.Fd = this.Oa = this.Qc = this.j = this.Ie = this.Fa = this.Na = this.K = this.Wb = this.ea = null;
            this.hg = this.kb = 0;
            this.Vf = H8("failFast", !1, a);
            this.Ya = this.oa = this.V = this.J = this.D = null;
            this.wd = !0;
            this.Wd = this.eb = -1;
            this.Ec = this.qa = this.Ba = 0;
            this.Uf = H8("baseRetryDelayMs", 5E3, a);
            this.jg = H8("retryDelaySeedMs", 1E4, a);
            this.Wf = H8("forwardChannelMaxRetries", 2, a);
            this.Qd = H8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.He = a && a.Mdb || void 0;
            this.Te = a && a.Jdb || !1;
            this.ob = void 0;
            this.Va = a && a.G$ || !1;
            this.C = "";
            this.u =
                new Hsb(a && a.nbb);
            this.Ff = new Lsb;
            this.Cb = a && a.Dbb || !1;
            this.wb = a && a.sbb || !1;
            this.Cb && this.wb && (this.wb = !1);
            this.og = a && a.gbb || !1;
            a && a.Fbb && (this.wd = !1);
            this.kd = !this.Cb && this.wd && a && a.qbb || !1;
            this.pd = void 0;
            a && a.YW && 0 < a.YW && (this.pd = a.YW);
            this.md = void 0;
            this.od = 0;
            this.sb = !1;
            this.hc = this.Ga = null
        },
        D8 = function(a) {
            a.j && (Osb(a), a.j.cancel(), a.j = null)
        },
        Psb = function(a) {
            D8(a);
            a.V && (g.Qa.clearTimeout(a.V), a.V = null);
            C8(a);
            a.u.cancel();
            a.J && ("number" === typeof a.J && g.Qa.clearTimeout(a.J), a.J = null)
        },
        F8 = function(a) {
            Isb(a.u) || a.J || (a.J = !0, g.Lf(a.ZR, a), a.Ba = 0)
        },
        Rsb = function(a, b) {
            if (Bsb(a.u) >= a.u.C - (a.J ? 1 : 0)) return !1;
            if (a.J) return a.B = b.qa.concat(a.B), !0;
            if (1 == a.Dh || 2 == a.Dh || a.Ba >= (a.Vf ? 0 : a.Wf)) return !1;
            a.J = v8((0, g.bb)(a.ZR, a, b), Qsb(a, a.Ba));
            a.Ba++;
            return !0
        },
        Tsb = function(a, b) {
            var c;
            b ? c = b.wd : c = a.kb++;
            var d = a.Oa.clone();
            g.bm(d, "SID", a.C);
            g.bm(d, "RID", c);
            g.bm(d, "AID", a.eb);
            I8(a, d);
            a.K && a.ea && g.fm(d, a.K, a.ea);
            c = new w8(a, a.C, c, a.Ba + 1);
            null === a.K && (c.Oa = a.ea);
            b && (a.B = b.qa.concat(a.B));
            b = Ssb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Qd) + Math.round(.5 * a.Qd * Math.random()));
            Csb(a.u, c);
            qsb(c, d, b)
        },
        I8 = function(a, b) {
            a.Na && g.Vc(a.Na, function(c, d) {
                g.bm(b, d, c)
            });
            a.D && g.Tl({}, function(c, d) {
                g.bm(b, d, c)
            })
        },
        Ssb = function(a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.bb)(a.D.P0, a.D, a) : null;
            a: for (var e = a.B, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        Msb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.B.splice(0, c);
            b.qa = a;
            return d
        },
        Fsb = function(a) {
            a.j || a.V || (a.Ec = 1, g.Lf(a.YR, a), a.qa = 0)
        },
        Asb = function(a) {
            if (a.j || a.V || 3 <= a.qa) return !1;
            a.Ec++;
            a.V = v8((0, g.bb)(a.YR, a), Qsb(a, a.qa));
            a.qa++;
            return !0
        },
        Osb = function(a) {
            null != a.Ga && (g.Qa.clearTimeout(a.Ga), a.Ga = null)
        },
        Usb = function(a) {
            a.j = new w8(a, a.C, "rpc", a.Ec);
            null === a.K && (a.j.Oa = a.ea);
            a.j.wb = 0;
            var b = a.Fd.clone();
            g.bm(b, "RID", "rpc");
            g.bm(b, "SID", a.C);
            g.bm(b, "AID", a.eb);
            g.bm(b, "CI", a.Ya ? "0" : "1");
            !a.Ya && a.pd && g.bm(b, "TO", a.pd);
            g.bm(b, "TYPE", "xmlhttp");
            I8(a, b);
            a.K && a.ea && g.fm(b, a.K, a.ea);
            a.ob && a.j.setTimeout(a.ob);
            var c = a.j;
            a = a.xc;
            c.Va = 1;
            c.K = a8(b.clone());
            c.V = null;
            c.Fa = !0;
            psb(c, a)
        },
        C8 = function(a) {
            null != a.oa && (g.Qa.clearTimeout(a.oa), a.oa = null)
        },
        ysb = function(a, b) {
            var c = null;
            if (a.j == b) {
                C8(a);
                Osb(a);
                a.j = null;
                var d = 2
            } else if (zsb(a.u, b)) c = b.qa, Esb(a.u, b), d = 1;
            else return;
            if (0 != a.Dh)
                if (b.B)
                    if (1 == d) {
                        c = b.V ? b.V.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = jsb();
                        d.dispatchEvent(new msb(d, c, b, e));
                        F8(a)
                    } else Fsb(a);
            else {
                var f = b.hc;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && Rsb(a, b) || 2 == d && Asb(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) {
                    case 1:
                        E8(a, 5);
                        break;
                    case 4:
                        E8(a, 10);
                        break;
                    case 3:
                        E8(a, 6);
                        break;
                    default:
                        E8(a, 2)
                }
            }
        },
        Qsb = function(a, b) {
            var c = a.Uf + Math.floor(Math.random() *
                a.jg);
            a.isActive() || (c *= 2);
            return c * b
        },
        E8 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null);
                var d = (0, g.bb)(a.M$, a);
                c || (c = new g.Ul("//www.google.com/images/cleardot.gif"), g.Qa.location && "http" == g.Qa.location.protocol || g.Vl(c, "https"), a8(c));
                Ksb(c.toString(), d)
            } else u8(2);
            a.Dh = 0;
            a.D && a.D.bS(b);
            Vsb(a);
            Psb(a)
        },
        Vsb = function(a) {
            a.Dh = 0;
            a.hc = [];
            if (a.D) {
                var b = Jsb(a.u);
                if (0 != b.length || 0 != a.B.length) g.Mb(a.hc, b), g.Mb(a.hc, a.B), a.u.B.length = 0, g.Kb(a.B), a.B.length = 0;
                a.D.aS()
            }
        },
        Wsb = function(a) {
            if (0 == a.Dh) return a.hc;
            var b = [];
            g.Mb(b, Jsb(a.u));
            g.Mb(b, a.B);
            return b
        },
        Dsb = function(a, b, c) {
            var d = g.cm(c);
            "" != d.j ? (b && g.Wl(d, b + "." + d.j), g.Xl(d, d.C)) : (d = g.Qa.location, d = lrb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Fa;
            c = a.Ie;
            b && c && g.bm(d, b, c);
            g.bm(d, "VER", a.XR);
            I8(a, d);
            return d
        },
        rsb = function(a, b, c) {
            if (b && !a.Va) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.Te && !a.He ? new g.ik(new g.Pl({
                CZ: !0
            })) : new g.ik(a.He);
            b.J = a.Va;
            return b
        },
        Xsb = function() {},
        Ysb = function() {
            if (g.Pe && !g.Nc(10)) throw Error("Environmental error: no available transport.");
        },
        K8 = function(a, b) {
            g.Dd.call(this);
            this.j = new Nsb(b);
            this.D = a;
            this.u = b && b.t6 || null;
            a = b && b.s6 || null;
            b && b.mbb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.ea = a;
            a = b && b.ycb || null;
            b && b.fX && (a ? a["X-WebChannel-Content-Type"] = b.fX : a = {
                "X-WebChannel-Content-Type": b.fX
            });
            b && b.uU && (a ? a["X-WebChannel-Client-Profile"] = b.uU : a = {
                "X-WebChannel-Client-Profile": b.uU
            });
            this.j.Wb = a;
            (a = b && b.xcb) && !g.dc(a) && (this.j.K = a);
            this.J = b && b.G$ || !1;
            this.C = b && b.jdb || !1;
            (b = b && b.I5) && !g.dc(b) && (this.j.Fa = b, g.bd(this.u, b) && g.id(this.u,
                b));
            this.B = new J8(this)
        },
        Zsb = function(a) {
            gsb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.Zc(b)) ? g.jd(b, this.j) : b : this.data = a
        },
        $sb = function(a) {
            hsb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        J8 = function(a) {
            this.j = a
        },
        atb = function(a, b) {
            this.u = a;
            this.j = b
        },
        btb = function(a) {
            return Wsb(a.j).map(function(b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.C ? krb(b) : b);
                return b
            })
        },
        L8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Qa.setTimeout(function() {
                a()
            }, b)
        },
        N8 = function(a) {
            M8.dispatchEvent(new ctb(M8, a))
        },
        ctb = function(a) {
            g.wb.call(this, "statevent", a)
        },
        O8 = function(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.K = c;
            this.J = d || 1;
            this.u = 45E3;
            this.B = new g.gm(this);
            this.D = new g.Uf;
            this.D.setInterval(250)
        },
        etb = function(a, b, c) {
            a.wx = 1;
            a.Zr = a8(b.clone());
            a.Iu = c;
            a.Fa = !0;
            dtb(a, null)
        },
        ftb = function(a, b, c, d, e) {
            a.wx = 1;
            a.Zr = a8(b.clone());
            a.Iu = null;
            a.Fa = c;
            e && (a.eZ = !1);
            dtb(a, d)
        },
        dtb = function(a, b) {
            a.vx = Date.now();
            P8(a);
            a.hs = a.Zr.clone();
            b8(a.hs, "t", a.J);
            a.BF = 0;
            a.cj = a.j.pK(a.j.tB() ? b : null);
            0 < a.nK && (a.zF = new r8((0, g.bb)(a.eS, a, a.cj), a.nK));
            a.B.Ta(a.cj, "readystatechange", a.R0);
            b = a.Hu ? g.ld(a.Hu) : {};
            a.Iu ? (a.AF = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.cj.send(a.hs, a.AF, a.Iu, b)) : (a.AF = "GET", a.eZ && !g.Oc && (b.Connection = "close"), a.cj.send(a.hs, a.AF, null, b));
            a.j.In(1)
        },
        itb = function(a, b) {
            var c = a.BF,
                d = b.indexOf("\n", c);
            if (-1 == d) return gtb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return htb;
            d += 1;
            if (d + c > b.length) return gtb;
            b = b.slice(d, d + c);
            a.BF = d + c;
            return b
        },
        ktb = function(a, b) {
            a.vx = Date.now();
            P8(a);
            var c = b ? window.location.hostname : "";
            a.hs = a.Zr.clone();
            g.bm(a.hs, "DOMAIN", c);
            g.bm(a.hs, "t", a.J);
            try {
                a.Zn = new ActiveXObject("htmlfile")
            } catch (m) {
                Q8(a);
                a.gs = 7;
                N8(22);
                R8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in S8) f = S8[f];
                        else if (f in jtb) f = S8[f] = jtb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                S8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            g.Rd("b/12014412");
            c = g.me(d);
            a.Zn.open();
            a.Zn.write(g.le(c));
            a.Zn.close();
            a.Zn.parentWindow.m = (0, g.bb)(a.m9, a);
            a.Zn.parentWindow.d = (0, g.bb)(a.fY, a, !0);
            a.Zn.parentWindow.rpcClose = (0, g.bb)(a.fY, a, !1);
            c = a.Zn.createElement("DIV");
            a.Zn.parentWindow.document.body.appendChild(c);
            d = g.ae(a.hs.toString()) || g.je;
            d = g.Ce(g.Zd(d));
            g.Rd("b/12014412");
            d = g.me('<iframe src="' + d + '"></iframe>');
            g.fca(c, d);
            a.j.In(1)
        },
        P8 = function(a) {
            a.oK =
                Date.now() + a.u;
            ltb(a, a.u)
        },
        ltb = function(a, b) {
            if (null != a.xx) throw Error("WatchDog timer not null");
            a.xx = L8((0, g.bb)(a.Q0, a), b)
        },
        mtb = function(a) {
            a.xx && (g.Qa.clearTimeout(a.xx), a.xx = null)
        },
        R8 = function(a) {
            a.j.gh() || a.Gu || a.j.CF(a)
        },
        Q8 = function(a) {
            mtb(a);
            g.qb(a.zF);
            a.zF = null;
            a.D.stop();
            a.B.Rf();
            if (a.cj) {
                var b = a.cj;
                a.cj = null;
                b.abort();
                b.dispose()
            }
            a.Zn && (a.Zn = null)
        },
        ntb = function(a, b) {
            try {
                a.j.fS(a, b), a.j.In(4)
            } catch (c) {}
        },
        ptb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                otb(a, b, function(h) {
                    h ? c(!0) : g.Qa.setTimeout(function() {
                        ptb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        otb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    T8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    T8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    T8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    T8(d), c(!1)
                } catch (e) {}
            };
            g.Qa.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        T8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        qtb = function(a) {
            this.j = a;
            this.u = new s8
        },
        rtb = function(a) {
            var b = U8(a.j, a.TB, "/mail/images/cleardot.gif");
            a8(b);
            ptb(b.toString(), 5E3, (0, g.bb)(a.M3, a), 3, 2E3);
            a.In(1)
        },
        stb = function(a) {
            var b = a.j.J;
            if (null != b) N8(5), b ? (N8(11), V8(a.j, a, !1)) : (N8(12), V8(a.j, a, !0));
            else if (a.Nj = new O8(a), a.Nj.Hu = a.qK, b = a.j, b = U8(b, b.tB() ? a.sB : null, a.rK), N8(5), !g.Pe || g.Nc(10)) b8(b, "TYPE", "xmlhttp"), ftb(a.Nj, b, !1, a.sB, !1);
            else {
                b8(b, "TYPE", "html");
                var c = a.Nj;
                a = !!a.sB;
                c.wx = 3;
                c.Zr = a8(b.clone());
                ktb(c, a)
            }
        },
        ttb = function(a, b, c) {
            this.j = 1;
            this.u = [];
            this.B = [];
            this.D = new s8;
            this.ea = a || null;
            this.J = null != b ? b : null;
            this.V = c || !1
        },
        utb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        vtb = function(a, b, c, d) {
            g.wb.call(this, "timingevent", a);
            this.size = b;
            this.wA = d
        },
        wtb = function(a) {
            g.wb.call(this, "serverreachability", a)
        },
        ytb = function(a) {
            a.S0(1, 0);
            a.DF = U8(a, null, a.sK);
            xtb(a)
        },
        ztb = function(a) {
            a.Hs && (a.Hs.abort(), a.Hs = null);
            a.Rg && (a.Rg.cancel(), a.Rg = null);
            a.Zp && (g.Qa.clearTimeout(a.Zp), a.Zp = null);
            W8(a);
            a.Yj && (a.Yj.cancel(), a.Yj = null);
            a.ls && (g.Qa.clearTimeout(a.ls), a.ls = null)
        },
        Atb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new utb(a.T0++, b));
            2 != a.j && 3 != a.j || xtb(a)
        },
        Btb = function(a) {
            var b = 0;
            a.Rg && b++;
            a.Yj && b++;
            return b
        },
        xtb = function(a) {
            a.Yj || a.ls || (a.ls = L8((0, g.bb)(a.jS, a), 0), a.zx = 0)
        },
        Etb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.vB = Math.floor(1E5 * Math.random());
                    b = a.vB++;
                    var c = new O8(a, "", b);
                    c.Hu = a.zo;
                    var d = Ctb(a),
                        e = a.DF.clone();
                    g.bm(e, "RID", b);
                    g.bm(e, "CVER", "1");
                    X8(a, e);
                    etb(c, e, d);
                    a.Yj = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? Dtb(a, b) : 0 == a.u.length || a.Yj || Dtb(a))
        },
        Dtb = function(a, b) {
            if (b)
                if (6 < a.Ju) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0;
                    var c = a.vB - 1;
                    b = Ctb(a)
                } else c = b.K, b = b.Iu;
            else c = a.vB++, b = Ctb(a);
            var d = a.DF.clone();
            g.bm(d, "SID", a.C);
            g.bm(d, "RID", c);
            g.bm(d, "AID", a.Ax);
            X8(a, d);
            c = new O8(a, a.C, c, a.zx + 1);
            c.Hu = a.zo;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Yj = c;
            etb(c, d, b)
        },
        X8 = function(a, b) {
            a.Gi && (a = a.Gi.nS()) && g.Vc(a, function(c, d) {
                g.bm(b, d, c)
            })
        },
        Ctb = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Ju && 0 < b) {
                var d = a.u[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Mz: e.Mz
                }, f++) {
                e.Mz = a.u[f].j;
                var h = a.u[f].map;
                e.Mz = 6 >= a.Ju ? f : e.Mz - d;
                try {
                    g.Vc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Mz + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Mz + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        },
        Ftb = function(a) {
            a.Rg || a.Zp || (a.K = 1, a.Zp = L8((0, g.bb)(a.iS, a), 0), a.yx = 0)
        },
        Htb = function(a) {
            if (a.Rg || a.Zp || 3 <= a.yx) return !1;
            a.K++;
            a.Zp = L8((0, g.bb)(a.iS, a), Gtb(a, a.yx));
            a.yx++;
            return !0
        },
        V8 = function(a, b, c) {
            a.SJ = null == a.J ? c : !a.J;
            a.Ao = b.Yp;
            a.V || ytb(a)
        },
        W8 = function(a) {
            null != a.Ku && (g.Qa.clearTimeout(a.Ku), a.Ku = null)
        },
        Gtb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        Y8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Gi && (c = null);
                var d = (0, g.bb)(a.L$, a);
                c || (c = new g.Ul("//www.google.com/images/cleardot.gif"), a8(c));
                otb(c.toString(), 1E4, d)
            } else N8(2);
            Itb(a, b)
        },
        Itb = function(a, b) {
            a.j = 0;
            a.Gi && a.Gi.kS(b);
            Jtb(a);
            ztb(a)
        },
        Jtb = function(a) {
            a.j = 0;
            a.Ao = -1;
            if (a.Gi)
                if (0 == a.B.length && 0 == a.u.length) a.Gi.tK();
                else {
                    var b = g.Kb(a.B),
                        c = g.Kb(a.u);
                    a.B.length = 0;
                    a.u.length = 0;
                    a.Gi.tK(b, c)
                }
        },
        U8 = function(a, b, c) {
            var d = g.cm(c);
            if ("" != d.j) b && g.Wl(d, b + "." + d.j), g.Xl(d, d.C);
            else {
                var e = window.location;
                d = lrb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.uB && g.Vc(a.uB, function(f, h) {
                g.bm(d, h, f)
            });
            g.bm(d, "VER", a.Ju);
            X8(a, d);
            return d
        },
        Ktb = function() {},
        Ltb = function() {
            this.j = [];
            this.u = []
        },
        Mtb = function(a) {
            g.wb.call(this, "channelMessage");
            this.message = a
        },
        Ntb = function(a) {
            g.wb.call(this, "channelError");
            this.error = a
        },
        Otb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Z8 = function(a, b) {
            g.G.call(this);
            this.j = new g.Vq(this.e9, 0, this);
            g.H(this, this.j);
            this.Ri = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.bb)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.bb)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        Ptb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Ba = a;
            this.K = b;
            this.B = new g.Or;
            this.u = new Z8(this.i$, this);
            this.j = null;
            this.oa = !1;
            this.J = null;
            this.ea = "";
            this.V = this.D = 0;
            this.C = [];
            this.Va = c;
            this.qa = d;
            this.Ya = e;
            this.Oa = new mrb;
            this.Ga = new orb;
            this.Na = new qrb;
            this.Fa = new srb;
            this.eb = new urb;
            this.kb = new vrb
        },
        Qtb = function(a) {
            if (a.j) {
                var b = a.qa(),
                    c = a.j.zo || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.zo = c
            }
        },
        $8 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.Xj(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Yj(a) || "";
            a = g.mc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.lc(a, "10.0") && (this.u = !1))
        },
        a9 = function(a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j);
            return g.ek(c + b, {})
        },
        Rtb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.cb(a.C, d, !0),
                onError: g.cb(a.B, e),
                onTimeout: g.cb(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.qA(b, a)
        },
        Stb = function(a, b) {
            g.Dd.call(this);
            var c = this;
            this.Bd = a();
            this.Bd.subscribe("handlerOpened", this.X0, this);
            this.Bd.subscribe("handlerClosed", this.V0, this);
            this.Bd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Bd.subscribe("handlerMessage", this.W0, this);
            this.j = b
        },
        Ttb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new Ysb : e;
            var f = void 0 === f ? new g.Or : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.D = f;
            this.V = null;
            this.ea = this.K = 0;
            this.channel = null;
            this.J = 0;
            this.B = new Z8(function() {
                d.B.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : Bsb((new atb(h, h.j)).j.u)) && d.connect(d.V, d.K)
            });
            this.C = {};
            this.u = {};
            this.oa = !1;
            this.logger = null;
            this.qa = [];
            this.Vg = void 0;
            this.Oa = new mrb;
            this.Ga = new orb;
            this.Na = new qrb;
            this.Fa = new srb
        },
        Utb = function(a) {
            g.td(a.channel, "m", function() {
                a.J = 3;
                a.B.reset();
                a.V = null;
                a.K = 0;
                for (var b = g.v(a.qa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.qa = [];
                a.ra("webChannelOpened");
                nrb(a.Oa, "WEB_CHANNEL")
            });
            g.td(a.channel, "n", function() {
                a.J = 0;
                a.B.isActive() || a.ra("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : btb(new atb(b, b.j));
                c && (a.qa = [].concat(g.pa(c)));
                prb(a.Ga, "WEB_CHANNEL")
            });
            g.td(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.ra("webChannelMessage", new Otb(c[0], c[1]));
                a.Vg = b.statusCode;
                rrb(a.Na, "WEB_CHANNEL")
            });
            g.td(a.channel, "o", function() {
                401 === a.Vg || a.B.start();
                a.ra("webChannelError");
                trb(a.Fa, "WEB_CHANNEL")
            })
        },
        Vtb = function(a) {
            var b = a.Ba();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        },
        Wtb = function(a) {
            g.Dd.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.b1, this);
            this.j.subscribe("webChannelClosed", this.Y0, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.Z0, this)
        },
        Xtb = function(a, b, c, d, e) {
            function f() {
                return new Ptb(a9(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.Qz("enable_mdx_web_channel_desktop") ? new Wtb(function() {
                return new Ttb(a9(a, "/wc"), b, c)
            }) : new Stb(f, e)
        },
        aub = function() {
            var a = Ytb;
            Ztb();
            b9.push(a);
            $tb()
        },
        c9 = function(a, b) {
            Ztb();
            var c = bub(a, String(b));
            0 == b9.length ? cub(c) : ($tb(), g.Zb(b9, function(d) {
                d(c)
            }))
        },
        d9 = function(a) {
            c9("CP", a)
        },
        Ztb = function() {
            b9 || (b9 = g.Sa("yt.mdx.remote.debug.handlers_") || [], g.Ra("yt.mdx.remote.debug.handlers_", b9))
        },
        cub = function(a) {
            var b = (e9 + 1) % 50;
            e9 = b;
            f9[b] = a;
            g9 || (g9 = 49 == b)
        },
        $tb = function() {
            var a = b9;
            if (f9[0]) {
                var b = g9 ? e9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = f9[b];
                    g.Zb(a, function(d) {
                        d(c)
                    })
                } while (b != e9);
                f9 = Array(50);
                e9 = -1;
                g9 = !1
            }
        },
        bub = function(a, b) {
            var c = (Date.now() - dub) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        h9 = function(a) {
            g.bH.call(this);
            this.J = a;
            this.screens = []
        },
        eub = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        fub = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.lp(a.screens, function(f) {
                return !!Hrb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = eub(a, b[d]) || c;
            return c
        },
        gub = function(a, b) {
            var c = a.screens.length;
            a.screens = g.lp(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        hub = function(a, b, c, d, e) {
            g.bH.call(this);
            this.B = a;
            this.K = b;
            this.C = c;
            this.J = d;
            this.D = e;
            this.u = 0;
            this.j = null;
            this.Lc = NaN
        },
        j9 = function(a) {
            h9.call(this, "LocalScreenService");
            this.u = a;
            this.j = NaN;
            i9(this);
            this.info("Initializing with " + Erb(this.screens))
        },
        iub = function(a) {
            if (a.screens.length) {
                var b = g.vn(a.screens, function(d) {
                        return d.id
                    }),
                    c = a9(a.u, "/pairing/get_lounge_token_batch");
                Rtb(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.bb)(a.i5, a), (0, g.bb)(a.h5, a))
            }
        },
        i9 = function(a) {
            if (g.Qz("deprecate_pair_servlet_enabled")) return fub(a, []);
            var b = Drb(Orb());
            b = g.lp(b, function(c) {
                return !c.uuid
            });
            return fub(a, b)
        },
        k9 = function(a, b) {
            Qrb(g.vn(a.screens, Brb));
            b && Prb()
        },
        kub = function(a, b) {
            g.bH.call(this);
            this.J = b;
            b = (b = g.BB("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.J(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Fb(b, h)
            }
            this.j = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            jub("Initialized with " + g.Jj(this.j))
        },
        lub = function(a, b, c) {
            var d = a9(a.D, "/pairing/get_screen_availability");
            Rtb(a.D, d, {
                lounge_token: b.token
            }, (0, g.bb)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.bb)(function() {
                c(!1)
            }, a))
        },
        nub = function(a, b) {
            a: if (irb(b) != irb(a.j)) var c = !1;
                else {
                    c = g.ad(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (jub("Updated online screens: " + g.Jj(a.j)), a.j = b, a.ra("screenChange"));mub(a)
        },
        l9 = function(a) {
            isNaN(a.B) || g.mA(a.B);
            a.B = g.kA((0, g.bb)(a.fQ, a), 0 < a.C && a.C < g.eb() ? 2E4 : 1E4)
        },
        jub = function(a) {
            c9("OnlineScreenService", a)
        },
        oub = function(a) {
            var b = {};
            g.Zb(a.J(), function(c) {
                c.token ? b[c.token] = c.id : this.gg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        mub = function(a) {
            a = g.ad(g.Wc(a.j, function(b) {
                return b
            }));
            g.Vb(a);
            a.length ? g.AB("yt-remote-online-screen-ids", a.join(","), 60) : g.CB("yt-remote-online-screen-ids")
        },
        m9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            h9.call(this, "ScreenService");
            this.C = a;
            this.K = b;
            this.j = this.u = null;
            this.B = [];
            this.D = {};
            pub(this)
        },
        rub = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.Sk(),
                l = c ? i8(h, c) : null;
            c && (a.K || l) || (l = i8(h, b));
            if (l) {
                l.uuid = b;
                var m = n9(a, l);
                lub(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? qub(a, c, (0, g.bb)(function(n) {
                var p = n9(this, new f8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                lub(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        sub = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        tub = function(a, b, c) {
            lub(a.j, b, c)
        },
        qub = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.qA(a9(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        uub = function(a) {
            a.screens = a.u.Sk();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + Erb(a.screens))
        },
        pub = function(a) {
            vub(a);
            a.u = new j9(a.C);
            a.u.subscribe("screenChange", (0, g.bb)(a.r5, a));
            uub(a);
            a.K || (a.B = Drb(g.BB("yt-remote-automatic-screen-cache") || []));
            vub(a);
            a.info("Initializing automatic screens: " + Erb(a.B));
            a.j = new kub(a.C, (0, g.bb)(a.Sk, a, !0));
            a.j.subscribe("screenChange", (0, g.bb)(function() {
                this.ra("onlineScreenChange")
            }, a))
        },
        n9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = i8(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.K || wub(a));
            vub(a);
            a.D[b.uuid] = b.id;
            g.AB("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        wub = function(a) {
            a = g.lp(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.AB("yt-remote-automatic-screen-cache", g.vn(a, Brb))
        },
        vub = function(a) {
            a.D = g.BB("yt-remote-device-id-map") || {}
        },
        o9 = function(a, b, c) {
            g.bH.call(this);
            this.Fa = c;
            this.C = a;
            this.u = b;
            this.j = null
        },
        p9 = function(a, b) {
            a.j = b;
            a.ra("sessionScreen", a.j)
        },
        xub = function(a, b) {
            a.j && (a.j.token = b, n9(a.C, a.j));
            a.ra("sessionScreen", a.j)
        },
        q9 = function(a, b) {
            c9(a.Fa, b)
        },
        r9 = function(a, b, c) {
            o9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.B = null;
            this.qa = (0, g.bb)(this.h1, this);
            this.Ga = (0, g.bb)(this.t9, this);
            this.oa = g.kA(function() {
                yub(d, null)
            }, 12E4);
            this.K = this.D = this.J = this.V = 0;
            this.Ba = !1;
            this.ea = "unknown"
        },
        Aub = function(a, b) {
            g.mA(a.K);
            a.K = 0;
            0 == b ? zub(a) : a.K = g.kA(function() {
                zub(a)
            }, b)
        },
        zub = function(a) {
            Bub(a, "getLoungeToken");
            g.mA(a.D);
            a.D = g.kA(function() {
                Cub(a, null)
            }, 3E4)
        },
        Bub = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Jj());
            var c = {};
            c.type = b;
            a.B ? a.B.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.bb)(function() {
                q9(this, "Failed to send message: " + b + ".")
            }, a)) : q9(a, "Sending yt message without session: " + g.Jj(c))
        },
        Dub = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.yV(b, function(c) {
                p9(a, c)
            }, function() {
                return a.Aj()
            }, 5)) : a.Aj(Error("Waiting for session status timed out."))
        },
        Fub = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new f8(b);
            Eub(a, d, function(e) {
                e ? (a.Ba = !0, n9(a.C, d), p9(a, d), a.ea = "unknown", Aub(a, c)) : (g.Vz(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Aj())
            }, 5)
        },
        yub = function(a, b) {
            g.mA(a.oa);
            a.oa = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? Fub(a, {
                    name: a.u.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.Vz(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Dub(a, b.screenId))) : (g.Vz(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Dub(a, b.screenId)) :
                Dub(a, b.screenId) : a.Aj(Error("Waiting for session status timed out."))
        },
        Cub = function(a, b) {
            g.mA(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.ea = c, Aub(a, 3E4)) : (xub(a, b.loungeToken), a.Ba = !1, a.ea = "unknown", Aub(a, b.loungeTokenRefreshIntervalMs))
        },
        Eub = function(a, b, c, d) {
            g.mA(a.J);
            a.J = 0;
            tub(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.kA(function() {
                    Eub(a, b, c, d - 1)
                }, 300)
            })
        },
        Gub = function(a) {
            g.mA(a.V);
            a.V = 0;
            g.mA(a.J);
            a.J = 0;
            g.mA(a.oa);
            a.oa = 0;
            g.mA(a.D);
            a.D = 0;
            g.mA(a.K);
            a.K = 0
        },
        s9 = function(a, b, c, d) {
            o9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.B = this.V = null;
            this.Ga = "";
            this.Va = c;
            this.Oa = null;
            this.oa = function() {};
            this.ea = NaN;
            this.Na = (0, g.bb)(this.j1, this);
            this.D = function() {};
            this.K = this.J = 0;
            this.qa = !1;
            this.Ba = "unknown"
        },
        t9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.B) ? 0 : b.getDialAppInfo))
        },
        Hub = function(a) {
            a.D = a.C.pS(a.Ga, a.u.label, a.u.friendlyName, t9(a), function(b, c) {
                a.D = function() {};
                a.qa = !0;
                p9(a, b);
                "shortLived" == b.idType && 0 < c && u9(a, c)
            }, function(b) {
                a.D = function() {};
                a.Aj(b)
            })
        },
        Iub = function(a) {
            var b = {};
            b.pairingCode = a.Ga;
            b.theme = a.Va;
            Srb() && (b.env_useStageMdx = 1);
            return g.dk(b)
        },
        Jub = function(a) {
            return new Promise(function(b) {
                a.Ga = Frb();
                if (a.Oa) {
                    var c = new chrome.cast.DialLaunchResponse(!0, Iub(a));
                    b(c);
                    Hub(a)
                } else a.oa = function() {
                    g.mA(a.ea);
                    a.oa = function() {};
                    a.ea = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, Iub(a));
                    b(d);
                    Hub(a)
                }, a.ea = g.kA(function() {
                    a.oa()
                }, 100)
            })
        },
        Lub = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new f8(b);
            return (new Promise(function(e) {
                Kub(a, d, function(f) {
                    f ? (a.qa = !0, n9(a.C, d), p9(a, d), u9(a, c)) : g.Vz(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : Jub(a)
            })
        },
        Mub = function(a, b) {
            var c = a.V.receiver.label,
                d = a.u.friendlyName;
            return (new Promise(function(e) {
                rub(a.C, c, b, d, function(f) {
                    f && f.token && p9(a, f);
                    e(f)
                }, function(f) {
                    q9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Jub(a)
            })
        },
        Kub = function(a, b, c, d) {
            g.mA(a.J);
            a.J = 0;
            tub(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.kA(function() {
                    Kub(a, b, c, d - 1)
                }, 300)
            })
        },
        u9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            t9(a) && (g.mA(a.K), a.K = 0, 0 == b ? Nub(a) : a.K = g.kA(function() {
                Nub(a)
            }, b))
        },
        Nub = function(a) {
            t9(a) && a.B.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, u9(a, 3E4)) : (a.qa = !1, a.Ba = "unknown", xub(a, b.loungeToken), u9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                u9(a, 3E4)
            })
        },
        Oub = function(a) {
            g.mA(a.J);
            a.J = 0;
            g.mA(a.K);
            a.K = 0;
            a.D();
            a.D = function() {};
            g.mA(a.ea)
        },
        v9 = function(a, b) {
            o9.call(this, a, b, "ManualSession");
            this.B = g.kA((0, g.bb)(this.Fz, this, null), 150)
        },
        w9 = function(a, b) {
            g.bH.call(this);
            this.config_ = b;
            this.u = a;
            this.V = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.ea = b.disableCastApi || !1;
            this.J = b.forceMirroring || !1;
            this.j = null;
            this.K = !1;
            this.B = [];
            this.D = (0, g.bb)(this.q8, this)
        },
        Pub = function(a, b) {
            return b ? g.Cb(a.B, function(c) {
                return g8(b, c.label)
            }, a) : null
        },
        x9 = function(a) {
            c9("Controller", a)
        },
        Ytb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        y9 = function(a) {
            return a.K || !!a.B.length || !!a.j
        },
        z9 = function(a, b, c) {
            b != a.j && (g.qb(a.j), (a.j = b) ? (c ? a.ra("yt-remote-cast2-receiver-resumed",
                b.u) : a.ra("yt-remote-cast2-receiver-selected", b.u), b.subscribe("sessionScreen", (0, g.bb)(a.dY, a, b)), b.subscribe("sessionFailed", function() {
                return Qub(a, b)
            }), b.j ? a.ra("yt-remote-cast2-session-change", b.j) : c && a.j.Fz(null)) : a.ra("yt-remote-cast2-session-change", null))
        },
        Qub = function(a, b) {
            a.j == b && a.ra("yt-remote-cast2-session-failed")
        },
        Rub = function(a) {
            var b = a.u.oS(),
                c = a.j && a.j.u;
            a = g.vn(b, function(d) {
                c && g8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = Pub(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        Yub = function(a, b, c, d) {
            d.disableCastApi ? A9("Cannot initialize because disabled by Mdx config.") : Sub() ? Tub(b, d) && (Uub(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Vub(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? Vub(a, c) : (B9("Failed to load cast API: " + f), Wub(!1), Uub(!1), g.CB("yt-remote-cast-available"), g.CB("yt-remote-cast-receiver"),
                    Xub(), c(!1))
            }, d.loadCastApiSetupScript ? g.ZD("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= Urb() && csb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? Yrb() : 89 <= Urb() ? esb() : (bsb(), p8(dsb.map(Zrb))))) : A9("Cannot initialize because not running Chrome")
        },
        Xub = function() {
            A9("dispose");
            var a = C9();
            a && a.dispose();
            g.Ra("yt.mdx.remote.cloudview.instance_", null);
            Zub(!1);
            g.XD($ub);
            $ub.length = 0
        },
        D9 = function() {
            return !!g.BB("yt-remote-cast-installed")
        },
        avb = function() {
            var a = g.BB("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        bvb = function() {
            A9("clearCurrentReceiver");
            g.CB("yt-remote-cast-receiver")
        },
        cvb = function() {
            return D9() ? C9() ? C9().getCastSession() : (B9("getCastSelector: Cast is not initialized."), null) : (B9("getCastSelector: Cast API is not installed!"), null)
        },
        dvb = function() {
            D9() ? C9() ? E9() ? (A9("Requesting cast selector."), C9().requestSession()) : (A9("Wait for cast API to be ready to request the session."), $ub.push(g.WD("yt-remote-cast2-api-ready", dvb))) : B9("requestCastSelector: Cast is not initialized.") : B9("requestCastSelector: Cast API is not installed!")
        },
        F9 = function(a, b) {
            E9() ? C9().setConnectedScreenStatus(a, b) : B9("setConnectedScreenStatus called before ready.")
        },
        Sub = function() {
            var a = 0 <= g.mc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.LK || a
        },
        evb = function(a, b) {
            C9().init(a, b)
        },
        Tub = function(a, b) {
            var c = !1;
            C9() || (a = new w9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.AB("yt-remote-cast-available", d);
                n8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                A9("onReceiverSelected: " + d.friendlyName);
                g.AB("yt-remote-cast-receiver", d);
                n8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                A9("onReceiverResumed: " + d.friendlyName);
                g.AB("yt-remote-cast-receiver", d);
                n8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                A9("onSessionChange: " + h8(d));
                d || g.CB("yt-remote-cast-receiver");
                n8("yt-remote-cast2-session-change", d)
            }), g.Ra("yt.mdx.remote.cloudview.instance_", a), c = !0);
            A9("cloudview.createSingleton_: " + c);
            return c
        },
        C9 = function() {
            return g.Sa("yt.mdx.remote.cloudview.instance_")
        },
        Vub = function(a, b) {
            Wub(!0);
            Uub(!1);
            evb(a, function(c) {
                c ? (Zub(!0), g.YD("yt-remote-cast2-api-ready")) : (B9("Failed to initialize cast API."), Wub(!1), g.CB("yt-remote-cast-available"), g.CB("yt-remote-cast-receiver"), Xub());
                b(c)
            })
        },
        A9 = function(a) {
            c9("cloudview", a)
        },
        B9 = function(a) {
            c9("cloudview", a)
        },
        Wub = function(a) {
            A9("setCastInstalled_ " + a);
            g.AB("yt-remote-cast-installed", a)
        },
        E9 = function() {
            return !!g.Sa("yt.mdx.remote.cloudview.apiReady_")
        },
        Zub = function(a) {
            A9("setApiReady_ " + a);
            g.Ra("yt.mdx.remote.cloudview.apiReady_", a)
        },
        Uub = function(a) {
            g.Ra("yt.mdx.remote.cloudview.initializing_", a)
        },
        G9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.J = this.K = 0;
            this.trackData = null;
            this.Wk = this.rp = !1;
            this.V = this.D = this.j = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        fvb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.rp = !1;
            a.Wk = !1;
            a.K = 0;
            a.J = g.eb();
            a.C = 0;
            a.j = 0;
            a.D = 0;
            a.V = 0;
            a.B = NaN;
            a.u = !1
        },
        H9 = function(a) {
            return a.isPlaying() ? (g.eb() - a.J) / 1E3 : 0
        },
        I9 = function(a, b) {
            a.K = b;
            a.J = g.eb()
        },
        J9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.eb() - a.J) / 1E3 + a.K;
                case -1E3:
                    return 0
            }
            return a.K
        },
        K9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && fvb(a)
        },
        gvb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.md(a.trackData);
            b.hasPrevious = a.rp;
            b.hasNext = a.Wk;
            b.playerTime = a.K;
            b.playerTimeAt = a.J;
            b.seekableStart = a.C;
            b.seekableEnd = a.j;
            b.duration = a.D;
            b.loadedTime = a.V;
            b.liveIngestionTime = a.B;
            return b
        },
        M9 = function(a, b) {
            g.bH.call(this);
            this.B = 0;
            this.C = a;
            this.J = [];
            this.D = new Ltb;
            this.u = this.j = null;
            this.ea = (0, g.bb)(this.j7, this);
            this.K = (0, g.bb)(this.ND, this);
            this.V = (0, g.bb)(this.i7, this);
            this.oa = (0, g.bb)(this.m7, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.yQ, this), hvb(this))) : c = 3;
            0 != c && (b ? this.yQ(c) : g.kA((0, g.bb)(function() {
                this.yQ(c)
            }, this), 0));
            (a = cvb()) && L9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.oa)
        },
        N9 = function(a) {
            return new G9(a.C.getPlayerContextData())
        },
        hvb = function(a) {
            g.Zb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.J.push(this.C.subscribe(b, g.cb(this.o8, b), this))
            }, a)
        },
        ivb = function(a) {
            g.Zb(a.J, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.J.length = 0
        },
        O9 = function(a) {
            return 1 == a.getState()
        },
        P9 = function(a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.u.push(b)
        },
        jvb = function(a, b, c) {
            var d = N9(a);
            I9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            Q9(a, d)
        },
        R9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        Q9 = function(a, b) {
            ivb(a);
            a.C.setPlayerContextData(gvb(b));
            hvb(a)
        },
        L9 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.ea), a.u.removeMediaListener(a.K), a.ND(null));
            a.u = b;
            a.u && (d9("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.ea), a.u.addMediaListener(a.K), a.u.media.length && a.ND(a.u.media[0]))
        },
        kvb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = N9(a);
                b.contentId != d.videoId && d9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                I9(d, a.j.getEstimatedTime());
                Q9(a, d)
            } else d9("No cast media video. Ignoring state update.")
        },
        S9 = function(a, b, c) {
            return (0, g.bb)(function(d) {
                this.gg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.gg("Retrying " + b + " using MDx browser channel."), R9(this, b, c))
            }, a)
        },
        V9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.bH.call(this);
            var e = this;
            this.J = NaN;
            this.Ga = !1;
            this.ea = this.V = this.qa = this.Ba = NaN;
            this.oa = [];
            this.D = this.K = this.C = this.j = this.u = null;
            this.Oa = a;
            this.Na = d;
            this.oa.push(g.oB(window, "beforeunload", function() {
                e.Py(2)
            }));
            this.B = [];
            this.j = new G9;
            this.Va = b.id;
            this.Fa = b.idType;
            this.u = Xtb(this.Oa, c, this.tS, "shortLived" == this.Fa, this.Va);
            this.u.Ta("channelOpened", function() {
                lvb(e)
            });
            this.u.Ta("channelClosed", function() {
                T9("Channel closed");
                isNaN(e.J) ? l8(!0) : l8();
                e.dispose()
            });
            this.u.Ta("channelError", function(f) {
                l8();
                isNaN(e.NC()) ? (1 == f && "shortLived" == e.Fa && e.ra("browserChannelAuthError", f), T9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ga = !0, T9("Channel error: " + f + " with reconnection in " + e.NC() + " ms"), U9(e, 2))
            });
            this.u.Ta("channelMessage", function(f) {
                mvb(e, f)
            });
            this.u.Hr(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.DB() && g.AB("yt-remote-session-video-id", f)
            })
        },
        nvb = function(a) {
            return g.Cb(a.B, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        T9 = function(a) {
            c9("conn", a)
        },
        U9 = function(a, b) {
            a.ra("proxyStateChange", b)
        },
        ovb = function(a) {
            a.J = g.kA(function() {
                T9("Connecting timeout");
                a.Py(1)
            }, 2E4)
        },
        pvb = function(a) {
            g.mA(a.J);
            a.J = NaN
        },
        qvb = function(a) {
            g.mA(a.Ba);
            a.Ba = NaN
        },
        svb = function(a) {
            rvb(a);
            a.qa = g.kA(function() {
                W9(a, "getNowPlaying")
            }, 2E4)
        },
        rvb = function(a) {
            g.mA(a.qa);
            a.qa = NaN
        },
        lvb = function(a) {
            T9("Channel opened");
            a.Ga && (a.Ga = !1, qvb(a), a.Ba = g.kA(function() {
                T9("Timing out waiting for a screen.");
                a.Py(1)
            }, 15E3))
        },
        uvb = function(a, b) {
            var c = null;
            if (b) {
                var d = nvb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ra("yt.mdx.remote.remoteClient_", c);
            b && (pvb(a), qvb(a));
            c = a.u.sz() && isNaN(a.J);
            b == c ? b && (U9(a, 1), W9(a, "getSubtitlesTrack")) : b ? (a.uV() && a.j.reset(), U9(a, 1), W9(a, "getNowPlaying"), tvb(a)) : a.Py(1)
        },
        vvb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.ed(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.ra("remotePlayerChange"))
        },
        wvb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            K9(a.j, d, e);
            a.ra("remoteQueueChange", c)
        },
        yvb = function(a, b) {
            b.params = b.params || {};
            wvb(a, b, "NOW_PLAYING_MAY_CHANGE");
            xvb(a, b);
            a.ra("autoplayDismissed")
        },
        xvb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            I9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.V = isNaN(c) ? 0 : c;
            a.j.ul(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? svb(a) : rvb(a);
            a.ra("remotePlayerChange")
        },
        zvb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                I9(a.j, isNaN(b) ? 0 : b);
                a.ra("remotePlayerChange")
            }
        },
        Avb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.ra("remotePlayerChange")
        },
        Bvb = function(a, b) {
            a.K = b.params.videoId;
            a.ra("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        Cvb = function(a, b) {
            a.K = b.params.videoId || null;
            a.ra("autoplayUpNext", a.K)
        },
        Dvb = function(a, b) {
            a.D = b.params.autoplayMode;
            a.ra("autoplayModeChange", a.D);
            "DISABLED" == a.D && a.ra("autoplayDismissed")
        },
        Evb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.rp = "true" == b.params.hasPrevious;
            a.j.Wk = c;
            a.ra("previousNextChange")
        },
        mvb = function(a, b) {
            b = b.message;
            b.params ? T9("Received: action=" + b.action + ", params=" + g.Jj(b.params)) : T9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = c8(b.params.devices);
                    a.B = g.vn(b, function(d) {
                        return new e8(d)
                    });
                    b = !!g.Cb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    uvb(a, b);
                    b = a.tW("mlm");
                    a.ra("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Ib(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    uvb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new e8(c8(b.params.device));
                    g.Cb(a.B, function(d) {
                        return d.equals(c)
                    }) || hrb(a.B, c);
                    break;
                case "remoteDisconnected":
                    c = new e8(c8(b.params.device));
                    g.Ib(a.B, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    wvb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    yvb(a, b);
                    break;
                case "onStateChange":
                    xvb(a, b);
                    break;
                case "onAdStateChange":
                    zvb(a, b);
                    break;
                case "onVolumeChanged":
                    Avb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    vvb(a, b);
                    break;
                case "nowAutoplaying":
                    Bvb(a, b);
                    break;
                case "autoplayDismissed":
                    a.ra("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    Cvb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    Dvb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    Evb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.ra("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.ra("loopModeChange", b.params.loopMode);
                    break;
                default:
                    T9("Unrecognized action: " + b.action)
            }
        },
        tvb = function(a) {
            g.mA(a.ea);
            a.ea = g.kA(function() {
                a.Py(1)
            }, 864E5)
        },
        W9 = function(a, b, c) {
            c ? T9("Sending: action=" + b + ", params=" + g.Jj(c)) : T9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        },
        Fvb = function(a) {
            h9.call(this, "ScreenServiceProxy");
            this.fh = a;
            this.j = [];
            this.j.push(this.fh.$_s("screenChange", (0, g.bb)(this.o1, this)));
            this.j.push(this.fh.$_s("onlineScreenChange", (0, g.bb)(this.X7, this)))
        },
        Kvb = function(a, b) {
            Rrb();
            if (!m8 || !m8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.Oz("MDX_CONFIG") || b;
                Irb();
                Mrb();
                X9 || (X9 = new $8(b ? b.loungeApiHost : void 0), Srb() && (X9.j = "/api/loungedev"));
                Y9 || (Y9 = g.Sa("yt.mdx.remote.deferredProxies_") || [], g.Ra("yt.mdx.remote.deferredProxies_", Y9));
                Gvb();
                var c = Z9();
                if (!c) {
                    var d = new m9(X9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ra("yt.mdx.remote.screenService_", d);
                    c = Z9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ra("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    Yub(a, d, function(f) {
                        f ? $9() && F9($9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            n8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Sa("yt.mdx.remote.initialized_") && (g.Ra("yt.mdx.remote.initialized_", !0), a$("Initializing: " + g.Jj(b)),
                    b$.push(g.WD("yt-remote-cast2-api-ready", function() {
                        n8("yt-remote-api-ready")
                    })), b$.push(g.WD("yt-remote-cast2-availability-change", function() {
                        n8("yt-remote-receiver-availability-change")
                    })), b$.push(g.WD("yt-remote-cast2-receiver-selected", function() {
                        c$(null);
                        n8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), b$.push(g.WD("yt-remote-cast2-receiver-resumed", function() {
                        n8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), b$.push(g.WD("yt-remote-cast2-session-change", Hvb)), b$.push(g.WD("yt-remote-connection-change", function(f) {
                        f ? F9($9(), "YouTube TV") : d$() || (F9(null, null), bvb())
                    })), b$.push(g.WD("yt-remote-cast2-session-failed", function() {
                        n8("yt-remote-connection-failed")
                    })), a = Ivb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Qz("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), a$(" -- with channel params: " + g.Jj(a)), a ? (g.AB("yt-remote-session-app", a.app), g.AB("yt-remote-session-name", a.name)) : (g.CB("yt-remote-session-app"), g.CB("yt-remote-session-name")), g.Ra("yt.mdx.remote.channelParams_", a), c.start(), $9() || Jvb())
            }
        },
        Lvb = function() {
            var a = Z9().fh.$_gos();
            var b = e$();
            b && f$() && (Hrb(a, b) || a.push(b));
            return Grb(a)
        },
        Nvb = function() {
            var a = Mvb();
            !a && D9() && avb() && (a = {
                key: "cast-selector-receiver",
                name: avb()
            });
            return a
        },
        Mvb = function() {
            var a = Lvb(),
                b = e$();
            b || (b = d$());
            return g.Cb(a, function(c) {
                return b && g8(b, c.key) ? !0 : !1
            })
        },
        e$ = function() {
            var a = $9();
            if (!a) return null;
            var b = Z9().Sk();
            return i8(b, a)
        },
        Hvb = function(a) {
            a$("remote.onCastSessionChange_: " + h8(a));
            if (a) {
                var b = e$();
                if (b && b.id == a.id) {
                    if (F9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) g$ && (g$.token = a), (b = f$()) && b.Hr(a)
                } else b && h$(), i$(a, 1)
            } else f$() && h$()
        },
        h$ = function() {
            E9() ? C9().stopSession() : B9("stopSession called before API ready.");
            var a = f$();
            a && (a.disconnect(1), Ovb(null))
        },
        Pvb = function() {
            var a = f$();
            return !!a && 3 != a.getProxyState()
        },
        a$ = function(a) {
            c9("remote", a)
        },
        Z9 = function() {
            if (!Qvb) {
                var a = g.Sa("yt.mdx.remote.screenService_");
                Qvb = a ? new Fvb(a) : null
            }
            return Qvb
        },
        $9 = function() {
            return g.Sa("yt.mdx.remote.currentScreenId_")
        },
        Rvb = function(a) {
            g.Ra("yt.mdx.remote.currentScreenId_", a)
        },
        Svb = function() {
            return g.Sa("yt.mdx.remote.connectData_")
        },
        c$ = function(a) {
            g.Ra("yt.mdx.remote.connectData_", a)
        },
        f$ = function() {
            return g.Sa("yt.mdx.remote.connection_")
        },
        Ovb = function(a) {
            var b = f$();
            c$(null);
            a || Rvb("");
            g.Ra("yt.mdx.remote.connection_", a);
            Y9 && (g.Zb(Y9, function(c) {
                c(a)
            }), Y9.length = 0);
            b && !a ? n8("yt-remote-connection-change", !1) : !b && a && n8("yt-remote-connection-change", !0)
        },
        d$ = function() {
            var a = g.DB();
            if (!a) return null;
            var b = Z9();
            if (!b) return null;
            b = b.Sk();
            return i8(b, a)
        },
        i$ = function(a, b) {
            $9();
            e$() && e$();
            if (j$) g$ = a;
            else {
                Rvb(a.id);
                var c = g.Sa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new V9(X9, a, Ivb(), c);
                a.connect(b, Svb());
                a.subscribe("beforeDisconnect", function(d) {
                    n8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    f$() && (f$(), Ovb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = e$();
                    d && "shortLived" == d.idType && (E9() ? C9().handleBrowserChannelAuthError() : B9("refreshLoungeToken called before API ready."))
                });
                Ovb(a)
            }
        },
        Jvb = function() {
            var a = d$();
            a ? (a$("Resume connection to: " + h8(a)), i$(a, 0)) : (l8(), bvb(), a$("Skipping connecting because no session screen found."))
        },
        Gvb = function() {
            var a = Ivb();
            if (g.ed(a)) {
                a = k8();
                var b = g.BB("yt-remote-session-name") || "",
                    c = g.BB("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.Oz("SESSION_INDEX", "0"));
                (b = g.Oz("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ra("yt.mdx.remote.channelParams_", a)
            }
        },
        Ivb = function() {
            return g.Sa("yt.mdx.remote.channelParams_") || {}
        },
        Vvb = function(a, b, c) {
            g.G.call(this);
            var d = this;
            this.module = a;
            this.I = b;
            this.Dc = c;
            this.events = new g.IK(this);
            this.ea = this.events.T(this.I, "onVolumeChange", function(e) {
                Tvb(d, e)
            });
            this.C = !1;
            this.D = new g.UP(64);
            this.j = new g.Vq(this.xZ, 500, this);
            this.u = new g.Vq(this.zZ, 1E3, this);
            this.K = new q8(this.haa, 0, this);
            this.B = {};
            this.V = new g.Vq(this.m_, 1E3, this);
            this.J = new r8(this.seekTo, 1E3, this);
            g.H(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.I7);
            this.events.T(b, "captionschanged", this.g7);
            this.events.T(b, "captionssettingschanged", this.IZ);
            this.events.T(b, "videoplayerreset", this.CI);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Dc.IU()
            });
            b.N("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                Uvb(d.module) || k$(d) || l$(d, 0)
            });
            a = this.Dc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.aY, this);
            a.subscribe("remotePlayerChange", this.UD, this);
            a.subscribe("remoteQueueChange", this.CI, this);
            a.subscribe("previousNextChange", this.XX, this);
            a.subscribe("nowAutoplaying", this.SX, this);
            a.subscribe("autoplayDismissed", this.wX, this);
            g.H(this, this.j);
            g.H(this, this.u);
            g.H(this, this.K);
            g.H(this, this.V);
            g.H(this, this.J);
            this.IZ();
            this.CI();
            this.UD()
        },
        Tvb = function(a, b) {
            if (k$(a)) {
                a.Dc.unsubscribe("remotePlayerChange", a.UD, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = N9(a.Dc);
                if (c !== d.volume || b !== d.muted) a.Dc.setVolume(c, b), a.V.start();
                a.Dc.subscribe("remotePlayerChange", a.UD, a)
            }
        },
        Wvb = function(a) {
            a.Bc(0);
            a.j.stop();
            a.vc(new g.UP(64))
        },
        Xvb = function(a, b) {
            if (k$(a) && !a.C) {
                var c = null;
                b && (c = {
                    style: a.I.getSubtitlesUserSettings()
                }, g.od(c, b));
                a.Dc.sS(a.I.getVideoData(1).videoId, c);
                a.B = N9(a.Dc).trackData
            }
        },
        l$ = function(a, b) {
            var c = a.I.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.I.getVideoData(1);
            a.Dc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ba, grb(c));
            a.vc(new g.UP(1))
        },
        Yvb = function(a, b) {
            if (b) {
                var c = a.I.getOption("captions", "tracklist", {
                    iW: 1
                });
                c && c.length ? (a.I.setOption("captions", "track", b), a.C = !1) : (a.I.loadModule("captions"), a.C = !0)
            } else a.I.setOption("captions", "track", {})
        },
        k$ = function(a) {
            return N9(a.Dc).videoId === a.I.getVideoData(1).videoId
        },
        m$ = function() {
            g.Y.call(this, {
                G: "div",
                S: "ytp-mdx-popup-dialog",
                Y: {
                    role: "dialog"
                },
                X: [{
                    G: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    X: [{
                        G: "div",
                        S: "ytp-mdx-popup-title",
                        Aa: "You're signed out"
                    }, {
                        G: "div",
                        S: "ytp-mdx-popup-description",
                        Aa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        G: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        X: [{
                            G: "button",
                            Ma: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            Aa: "Cancel"
                        }, {
                            G: "button",
                            Ma: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            Aa: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.uR(this, 250);
            this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
            g.H(this, this.j);
            this.T(this.cancelButton, "click", this.u);
            this.T(this.confirmButton, "click", this.B)
        },
        n$ = function(a) {
            g.Y.call(this, {
                G: "div",
                S: "ytp-remote",
                X: [{
                    G: "div",
                    S: "ytp-remote-display-status",
                    X: [{
                        G: "div",
                        S: "ytp-remote-display-status-icon",
                        X: [g.bFa()]
                    }, {
                        G: "div",
                        S: "ytp-remote-display-status-text",
                        Aa: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.uR(this, 250);
            g.H(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.Ac(a.Nb())
        },
        o$ = function(a, b) {
            g.dW.call(this, "Play on", 1, a, b);
            this.I = a;
            this.Yt = {};
            this.T(a, "onMdxReceiversChange", this.C);
            this.T(a, "presentingplayerstatechange", this.C);
            this.C()
        },
        Zvb = function(a) {
            g.ST.call(this, a);
            this.Fp = {
                key: Frb(),
                name: "This computer"
            };
            this.Ql = null;
            this.subscriptions = [];
            this.FP = this.Dc = null;
            this.Yt = [this.Fp];
            this.Js = this.Fp;
            this.kf = new g.UP(64);
            this.HW = 0;
            this.Mh = -1;
            this.pE = !1;
            this.nE = this.oA = null;
            if (!g.xM(this.player.W()) && !g.yM(this.player.W())) {
                a = this.player;
                var b = g.CS(a);
                b && (b = b.hn()) && (b = new o$(a, b), g.H(this, b));
                b = new n$(a);
                g.H(this, b);
                g.TS(a, b.element, 4);
                this.oA = new m$;
                g.H(this, this.oA);
                g.TS(a, this.oA.element, 4);
                this.pE = !!d$()
            }
        },
        p$ = function(a) {
            a.nE && (a.player.removeEventListener("presentingplayerstatechange",
                a.nE), a.nE = null)
        },
        $vb = function(a, b, c) {
            a.kf = c;
            a.player.ra("presentingplayerstatechange", new g.AP(c, b))
        },
        q$ = function(a, b) {
            if (b.key !== a.Js.key)
                if (b.key === a.Fp.key) h$();
                else if (Uvb(a) && awb(a), a.Js = b, !a.player.W().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.yM(a.player.W())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.W().N("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.PT(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ba,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = grb(d)) && (a.locationInfo = d);
                    d = a
                }
                a$("Connecting to: " + g.Jj(b));
                "cast-selector-receiver" == b.key ? (c$(d || null), b = d || null, E9() ? C9().setLaunchParams(b) : B9("setLaunchParams called before ready.")) : !d && Pvb() && $9() == b.key ? n8("yt-remote-connection-change", !0) : (h$(), c$(d || null), d = Z9().Sk(), (b = i8(d, b.key)) && i$(b, 1))
            }
        },
        Uvb = function(a) {
            var b;
            (b = !a.player.W().N("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.Oz("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.Oz("SESSION_INDEX") && !g.Oz("LOGGED_IN"))) || a.pE || !a.oA);
            return b ? !1 : g.LM(a.player.W()) || g.OM(a.player.W())
        },
        awb = function(a) {
            a.player.Nb().isPlaying() ? a.player.pauseVideo() : (a.nE = function(b) {
                !a.pE && g.CP(b, 8) && (a.player.pauseVideo(), p$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.nE));
            a.oA && a.oA.xd();
            f$() || (j$ = !0)
        };
    g.Nu.prototype.Us = g.ea(0, function() {
        return g.Ni(this, 6)
    });
    var jtb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        S8 = {
            "'": "\\'"
        },
        zrb = {
            Dka: "atp",
            OYa: "ska",
            aWa: "que",
            dOa: "mus",
            NYa: "sus",
            Vza: "dsp",
            gXa: "seq",
            GMa: "mic",
            mra: "dpa",
            Ola: "cds",
            TNa: "mlm",
            Yqa: "dsdtr",
            DOa: "ntb",
            M8a: "vsp",
            csa: "scn",
            oWa: "rpe"
        },
        Arb = {
            X2: "u",
            CLASSIC: "cl",
            E2: "k",
            m0: "i",
            U_: "cr",
            K2: "m",
            j0: "g",
            BT: "up"
        };
    e8.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var m8, Lrb = "";
    Trb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.Qz("enable_client_streamz_web")) {
            a = g.v(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Zea(c.value), c = {
                serializedIncrementBatch: g.fg(c.j())
            }, g.cC("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var o8, asb = Vrb("loadCastFramework") || Vrb("loadCastApplicationFramework"),
        dsb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.jb(q8, g.G);
    g.k = q8.prototype;
    g.k.J0 = function(a) {
        this.C = arguments;
        this.j = !1;
        this.Lc ? this.B = g.eb() + this.Ri : this.Lc = g.ag(this.D, this.Ri)
    };
    g.k.stop = function() {
        this.Lc && (g.Qa.clearTimeout(this.Lc), this.Lc = null);
        this.B = null;
        this.j = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.j && (this.j = !1, this.J.apply(null, this.C)))
    };
    g.k.xa = function() {
        this.stop();
        q8.Tf.xa.call(this)
    };
    g.k.K0 = function() {
        this.Lc && (g.Qa.clearTimeout(this.Lc), this.Lc = null);
        this.B ? (this.Lc = g.ag(this.D, this.B - g.eb()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.J.apply(null, this.C))
    };
    g.x(r8, g.G);
    g.k = r8.prototype;
    g.k.mK = function(a) {
        this.B = arguments;
        this.Lc || this.u ? this.j = !0 : fsb(this)
    };
    g.k.stop = function() {
        this.Lc && (g.Qa.clearTimeout(this.Lc), this.Lc = null, this.j = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.j || this.Lc || (this.j = !1, fsb(this))
    };
    g.k.xa = function() {
        g.G.prototype.xa.call(this);
        this.stop()
    };
    s8.prototype.stringify = function(a) {
        return g.Qa.JSON.stringify(a, void 0)
    };
    s8.prototype.parse = function(a) {
        return g.Qa.JSON.parse(a, void 0)
    };
    g.jb(gsb, g.wb);
    g.jb(hsb, g.wb);
    var isb = null;
    g.jb(ksb, g.wb);
    g.jb(lsb, g.wb);
    g.jb(msb, g.wb);
    nsb.prototype.info = function() {};
    nsb.prototype.warning = function() {};
    var usb = {},
        y8 = {};
    g.k = w8.prototype;
    g.k.setTimeout = function(a) {
        this.Cb = a
    };
    g.k.N0 = function(a) {
        a = a.target;
        var b = this.eb;
        b && 3 == g.lk(a) ? b.mK() : this.WR(a)
    };
    g.k.WR = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.lk(this.j),
                    c = this.j.u,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.PM || this.j && (this.u.u || g.nk(this.j) || g.ok(this.j)))) {
                    this.Na || 4 != b || 7 == c || (8 == c || 0 >= d ? t8(3) : t8(2));
                    B8(this);
                    var e = this.j.getStatus();
                    this.hc = e;
                    b: if (ssb(this)) {
                        var f = g.ok(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.lk(this.j);
                        if (!this.u.B) {
                            if ("undefined" === typeof TextDecoder) {
                                z8(this);
                                A8(this);
                                var m = "";
                                break b
                            }
                            this.u.B = new g.Qa.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.splice(0, h);
                        this.u.j += a;
                        this.oa = 0;
                        m = this.u.j
                    } else m = g.nk(this.j);
                    if (this.B = 200 == e) {
                        if (this.Ec && !this.Ya) {
                            b: {
                                if (this.j) {
                                    var n = g.pk(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.dc(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Ya = !0,
                            vsb(this, e);
                            else {
                                this.B = !1;
                                this.J = 3;
                                u8(12);
                                z8(this);
                                A8(this);
                                break a
                            }
                        }
                        this.Fa ? (wsb(this, b, m), g.PM && this.B && 3 == b && (this.ob.Ta(this.sb, "tick", this.M0), this.sb.start())) : vsb(this, m);
                        4 == b && z8(this);
                        this.B && !this.Na && (4 == b ? ysb(this.D, this) : (this.B = !1, x8(this)))
                    } else g.Efa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.J = 3, u8(12)) : (this.J = 0, u8(13)), z8(this), A8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.M0 = function() {
        if (this.j) {
            var a = g.lk(this.j),
                b = g.nk(this.j);
            this.oa < b.length && (B8(this), wsb(this, a, b), this.B && 4 != a && x8(this))
        }
    };
    g.k.cancel = function() {
        this.Na = !0;
        z8(this)
    };
    g.k.L0 = function() {
        this.ea = null;
        var a = Date.now();
        0 <= a - this.Wb ? (2 != this.Va && (t8(3), u8(17)), z8(this), this.J = 2, A8(this)) : xsb(this, this.Wb - a)
    };
    g.k.getLastError = function() {
        return this.J
    };
    g.k.gN = function() {
        return this.j
    };
    Hsb.prototype.cancel = function() {
        this.B = Jsb(this);
        if (this.u) this.u.cancel(), this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = Nsb.prototype;
    g.k.XR = 8;
    g.k.Dh = 1;
    g.k.connect = function(a, b, c, d) {
        u8(0);
        this.Qc = a;
        this.Na = b || {};
        c && void 0 !== d && (this.Na.OSID = c, this.Na.OAID = d);
        this.Ya = this.wd;
        this.Oa = Dsb(this, null, this.Qc);
        F8(this)
    };
    g.k.disconnect = function() {
        Psb(this);
        if (3 == this.Dh) {
            var a = this.kb++,
                b = this.Oa.clone();
            g.bm(b, "SID", this.C);
            g.bm(b, "RID", a);
            g.bm(b, "TYPE", "terminate");
            I8(this, b);
            a = new w8(this, this.C, a);
            a.Va = 2;
            a.K = a8(b.clone());
            b = !1;
            if (g.Qa.navigator && g.Qa.navigator.sendBeacon) try {
                b = g.Qa.navigator.sendBeacon(a.K.toString(), "")
            } catch (c) {}!b && g.Qa.Image && ((new Image).src = a.K, b = !0);
            b || (a.j = rsb(a.D, null), a.j.send(a.K));
            a.Ba = Date.now();
            x8(a)
        }
        Vsb(this)
    };
    g.k.gh = function() {
        return 0 == this.Dh
    };
    g.k.getState = function() {
        return this.Dh
    };
    g.k.ZR = function(a) {
        if (this.J)
            if (this.J = null, 1 == this.Dh) {
                if (!a) {
                    this.kb = Math.floor(1E5 * Math.random());
                    a = this.kb++;
                    var b = new w8(this, "", a),
                        c = this.ea;
                    this.Wb && (c ? (c = g.ld(c), g.od(c, this.Wb)) : c = this.Wb);
                    null !== this.K || this.wb || (b.Oa = c, c = null);
                    var d;
                    if (this.Cb) a: {
                        for (var e = d = 0; e < this.B.length; e++) {
                            b: {
                                var f = this.B[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.B.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = Ssb(this, b, d);
                    e = this.Oa.clone();
                    g.bm(e, "RID", a);
                    g.bm(e, "CVER", 22);
                    this.Fa && g.bm(e, "X-HTTP-Session-Id", this.Fa);
                    I8(this, e);
                    c && (this.wb ? d = "headers=" + g.Ae(g.Hga(c)) + "&" + d : this.K && g.fm(e, this.K, c));
                    Csb(this.u, b);
                    this.og && g.bm(e, "TYPE", "init");
                    this.Cb ? (g.bm(e, "$req", d), g.bm(e, "SID", "null"), b.Ec = !0, qsb(b, e, null)) : qsb(b, e, d);
                    this.Dh = 2
                }
            } else 3 == this.Dh && (a ? Tsb(this, a) : 0 == this.B.length || Isb(this.u) || Tsb(this))
    };
    g.k.YR = function() {
        this.V = null;
        Usb(this);
        if (this.kd && !(this.sb || null == this.j || 0 >= this.od)) {
            var a = 2 * this.od;
            this.Ga = v8((0, g.bb)(this.f7, this), a)
        }
    };
    g.k.f7 = function() {
        this.Ga && (this.Ga = null, this.Ya = !1, this.sb = !0, u8(10), D8(this), Usb(this))
    };
    g.k.QO = function(a) {
        this.j == a && this.kd && !this.sb && (Osb(this), this.sb = !0, u8(11))
    };
    g.k.O0 = function() {
        null != this.oa && (this.oa = null, D8(this), Asb(this), u8(19))
    };
    g.k.M$ = function(a) {
        a ? u8(2) : u8(1)
    };
    g.k.isActive = function() {
        return !!this.D && this.D.isActive(this)
    };
    g.k = Xsb.prototype;
    g.k.dS = function() {};
    g.k.cS = function() {};
    g.k.bS = function() {};
    g.k.aS = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.P0 = function() {};
    g.jb(K8, g.Dd);
    K8.prototype.open = function() {
        this.j.D = this.B;
        this.J && (this.j.Va = !0);
        this.j.connect(this.D, this.u || void 0)
    };
    K8.prototype.close = function() {
        this.j.disconnect()
    };
    K8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.C && (c = {}, c.__data__ = g.Jj(a), a = c);
        b.B.push(new Gsb(b.hg++, a));
        3 == b.Dh && F8(b)
    };
    K8.prototype.xa = function() {
        this.j.D = null;
        delete this.B;
        this.j.disconnect();
        delete this.j;
        K8.Tf.xa.call(this)
    };
    g.jb(Zsb, gsb);
    g.jb($sb, hsb);
    g.jb(J8, Xsb);
    J8.prototype.dS = function() {
        this.j.dispatchEvent("m")
    };
    J8.prototype.cS = function(a) {
        this.j.dispatchEvent(new Zsb(a))
    };
    J8.prototype.bS = function(a) {
        this.j.dispatchEvent(new $sb(a))
    };
    J8.prototype.aS = function() {
        this.j.dispatchEvent("n")
    };
    var M8 = new g.Dd;
    g.x(ctb, g.wb);
    g.k = O8.prototype;
    g.k.Hu = null;
    g.k.Xp = !1;
    g.k.xx = null;
    g.k.oK = null;
    g.k.vx = null;
    g.k.wx = null;
    g.k.Zr = null;
    g.k.hs = null;
    g.k.Iu = null;
    g.k.cj = null;
    g.k.BF = 0;
    g.k.Zn = null;
    g.k.AF = null;
    g.k.gs = null;
    g.k.rB = -1;
    g.k.eZ = !0;
    g.k.Gu = !1;
    g.k.nK = 0;
    g.k.zF = null;
    var htb = {},
        gtb = {};
    g.k = O8.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.R0 = function(a) {
        a = a.target;
        var b = this.zF;
        b && 3 == g.lk(a) ? b.mK() : this.eS(a)
    };
    g.k.eS = function(a) {
        try {
            if (a == this.cj) a: {
                var b = g.lk(this.cj),
                    c = this.cj.u,
                    d = this.cj.getStatus();
                if (g.Pe && !g.Nc(10) || g.Oc && !g.Mc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.nk(this.cj)) break a;this.Gu || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.In(3) : this.j.In(2));mtb(this);
                var e = this.cj.getStatus();this.rB = e;
                var f = g.nk(this.cj);
                if (this.Xp = 200 == e) {
                    4 == b && Q8(this);
                    if (this.Fa) {
                        for (a = !0; !this.Gu && this.BF < f.length;) {
                            var h = itb(this, f);
                            if (h == gtb) {
                                4 == b && (this.gs = 4, N8(15), a = !1);
                                break
                            } else if (h == htb) {
                                this.gs = 4;
                                N8(16);
                                a = !1;
                                break
                            } else ntb(this, h)
                        }
                        4 == b && 0 == f.length && (this.gs = 1, N8(17), a = !1);
                        this.Xp = this.Xp && a;
                        a || (Q8(this), R8(this))
                    } else ntb(this, f);
                    this.Xp && !this.Gu && (4 == b ? this.j.CF(this) : (this.Xp = !1, P8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.gs = 3, N8(13)) : (this.gs = 0, N8(14)),
                Q8(this),
                R8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.m9 = function(a) {
        L8((0, g.bb)(this.l9, this, a), 0)
    };
    g.k.l9 = function(a) {
        this.Gu || (mtb(this), ntb(this, a), P8(this))
    };
    g.k.fY = function(a) {
        L8((0, g.bb)(this.k9, this, a), 0)
    };
    g.k.k9 = function(a) {
        this.Gu || (Q8(this), this.Xp = a, this.j.CF(this), this.j.In(4))
    };
    g.k.cancel = function() {
        this.Gu = !0;
        Q8(this)
    };
    g.k.Q0 = function() {
        this.xx = null;
        var a = Date.now();
        0 <= a - this.oK ? (2 != this.wx && this.j.In(3), Q8(this), this.gs = 2, N8(18), R8(this)) : ltb(this, this.oK - a)
    };
    g.k.getLastError = function() {
        return this.gs
    };
    g.k = qtb.prototype;
    g.k.qK = null;
    g.k.Nj = null;
    g.k.cJ = !1;
    g.k.AZ = null;
    g.k.HG = null;
    g.k.dO = null;
    g.k.rK = null;
    g.k.Ml = null;
    g.k.Yp = -1;
    g.k.sB = null;
    g.k.TB = null;
    g.k.connect = function(a) {
        this.rK = a;
        a = U8(this.j, null, this.rK);
        N8(3);
        this.AZ = Date.now();
        var b = this.j.ea;
        null != b ? (this.sB = b[0], (this.TB = b[1]) ? (this.Ml = 1, rtb(this)) : (this.Ml = 2, stb(this))) : (b8(a, "MODE", "init"), this.Nj = new O8(this), this.Nj.Hu = this.qK, ftb(this.Nj, a, !1, null, !0), this.Ml = 0)
    };
    g.k.M3 = function(a) {
        if (a) this.Ml = 2, stb(this);
        else {
            N8(4);
            var b = this.j;
            b.Ao = b.Hs.Yp;
            Y8(b, 9)
        }
        a && this.In(2)
    };
    g.k.pK = function(a) {
        return this.j.pK(a)
    };
    g.k.abort = function() {
        this.Nj && (this.Nj.cancel(), this.Nj = null);
        this.Yp = -1
    };
    g.k.gh = function() {
        return !1
    };
    g.k.fS = function(a, b) {
        this.Yp = a.rB;
        if (0 == this.Ml)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Ao = this.Yp;
                    Y8(a, 2);
                    return
                }
                this.sB = c[0];
                this.TB = c[1]
            } else a = this.j, a.Ao = this.Yp, Y8(a, 2);
        else if (2 == this.Ml)
            if (this.cJ) N8(7), this.dO = Date.now();
            else if ("11111" == b) {
            if (N8(6), this.cJ = !0, this.HG = Date.now(), a = this.HG - this.AZ, !g.Pe || g.Nc(10) || 500 > a) this.Yp = 200, this.Nj.cancel(), N8(12), V8(this.j, this, !0)
        } else N8(8), this.HG = this.dO = Date.now(), this.cJ = !1
    };
    g.k.CF = function() {
        this.Yp = this.Nj.rB;
        if (this.Nj.Xp) 0 == this.Ml ? this.TB ? (this.Ml = 1, rtb(this)) : (this.Ml = 2, stb(this)) : 2 == this.Ml && ((!g.Pe || g.Nc(10) ? !this.cJ : 200 > this.dO - this.HG) ? (N8(11), V8(this.j, this, !1)) : (N8(12), V8(this.j, this, !0)));
        else {
            0 == this.Ml ? N8(9) : 2 == this.Ml && N8(10);
            var a = this.j;
            this.Nj.getLastError();
            a.Ao = this.Yp;
            Y8(a, 2)
        }
    };
    g.k.tB = function() {
        return this.j.tB()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.In = function(a) {
        this.j.In(a)
    };
    g.k = ttb.prototype;
    g.k.zo = null;
    g.k.uB = null;
    g.k.Yj = null;
    g.k.Rg = null;
    g.k.sK = null;
    g.k.DF = null;
    g.k.gS = null;
    g.k.EF = null;
    g.k.vB = 0;
    g.k.T0 = 0;
    g.k.Gi = null;
    g.k.ls = null;
    g.k.Zp = null;
    g.k.Ku = null;
    g.k.Hs = null;
    g.k.SJ = null;
    g.k.Ax = -1;
    g.k.hS = -1;
    g.k.Ao = -1;
    g.k.zx = 0;
    g.k.yx = 0;
    g.k.Ju = 8;
    g.jb(vtb, g.wb);
    g.jb(wtb, g.wb);
    g.k = ttb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        N8(0);
        this.sK = b;
        this.uB = c || {};
        d && void 0 !== e && (this.uB.OSID = d, this.uB.OAID = e);
        this.V ? (L8((0, g.bb)(this.vU, this, a), 100), ytb(this)) : this.vU(a)
    };
    g.k.disconnect = function() {
        ztb(this);
        if (3 == this.j) {
            var a = this.vB++,
                b = this.DF.clone();
            g.bm(b, "SID", this.C);
            g.bm(b, "RID", a);
            g.bm(b, "TYPE", "terminate");
            X8(this, b);
            a = new O8(this, this.C, a);
            a.wx = 2;
            a.Zr = a8(b.clone());
            (new Image).src = a.Zr.toString();
            a.vx = Date.now();
            P8(a)
        }
        Jtb(this)
    };
    g.k.vU = function(a) {
        this.Hs = new qtb(this);
        this.Hs.qK = this.zo;
        this.Hs.u = this.D;
        this.Hs.connect(a)
    };
    g.k.gh = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.jS = function(a) {
        this.ls = null;
        Etb(this, a)
    };
    g.k.iS = function() {
        this.Zp = null;
        this.Rg = new O8(this, this.C, "rpc", this.K);
        this.Rg.Hu = this.zo;
        this.Rg.nK = 0;
        var a = this.gS.clone();
        g.bm(a, "RID", "rpc");
        g.bm(a, "SID", this.C);
        g.bm(a, "CI", this.SJ ? "0" : "1");
        g.bm(a, "AID", this.Ax);
        X8(this, a);
        if (!g.Pe || g.Nc(10)) g.bm(a, "TYPE", "xmlhttp"), ftb(this.Rg, a, !0, this.EF, !1);
        else {
            g.bm(a, "TYPE", "html");
            var b = this.Rg,
                c = !!this.EF;
            b.wx = 3;
            b.Zr = a8(a.clone());
            ktb(b, c)
        }
    };
    g.k.fS = function(a, b) {
        if (0 != this.j && (this.Rg == a || this.Yj == a))
            if (this.Ao = a.rB, this.Yj == a && 3 == this.j)
                if (7 < this.Ju) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Zp) {
                                if (this.Rg)
                                    if (this.Rg.vx + 3E3 < this.Yj.vx) W8(this), this.Rg.cancel(), this.Rg = null;
                                    else break a;
                                Htb(this);
                                N8(19)
                            }
                        }
                    else this.hS = a[1], 0 < this.hS - this.Ax && 37500 > a[2] && this.SJ && 0 == this.yx && !this.Ku && (this.Ku = L8((0, g.bb)(this.U0, this), 6E3));
                    else Y8(this, 11)
                } else null != b && Y8(this, 11);
        else if (this.Rg ==
            a && W8(this), !g.dc(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.Ax = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.EF = c[2], c = c[3], null != c ? this.Ju = c : this.Ju = 6, this.j = 3, this.Gi && this.Gi.mS(), this.gS = U8(this, this.tB() ? this.EF : null, this.sK), Ftb(this)) : "stop" == c[0] && Y8(this, 7) : 3 == this.j && ("stop" == c[0] ? Y8(this, 7) : "noop" != c[0] && this.Gi && this.Gi.lS(c), this.yx = 0)
    };
    g.k.U0 = function() {
        null != this.Ku && (this.Ku = null, this.Rg.cancel(), this.Rg = null, Htb(this), N8(20))
    };
    g.k.CF = function(a) {
        if (this.Rg == a) {
            W8(this);
            this.Rg = null;
            var b = 2
        } else if (this.Yj == a) this.Yj = null, b = 1;
        else return;
        this.Ao = a.rB;
        if (0 != this.j)
            if (a.Xp)
                if (1 == b) {
                    b = Date.now() - a.vx;
                    var c = M8;
                    c.dispatchEvent(new vtb(c, a.Iu ? a.Iu.length : 0, b, this.zx));
                    xtb(this);
                    this.B.length = 0
                } else Ftb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Ao)) {
                if (d = 1 == b) this.Yj || this.ls || 1 == this.j || 2 <= this.zx ? d = !1 : (this.ls = L8((0, g.bb)(this.jS, this, a), Gtb(this, this.zx)), this.zx++, d = !0);
                d = !(d || 2 == b && Htb(this))
            }
            if (d) switch (c) {
                case 1:
                    Y8(this,
                        5);
                    break;
                case 4:
                    Y8(this, 10);
                    break;
                case 3:
                    Y8(this, 6);
                    break;
                case 7:
                    Y8(this, 12);
                    break;
                default:
                    Y8(this, 2)
            }
        }
    };
    g.k.S0 = function(a) {
        if (!g.Fb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.L$ = function(a) {
        a ? N8(2) : (N8(1), Itb(this, 8))
    };
    g.k.pK = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.ik;
        a.J = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Gi && this.Gi.isActive(this)
    };
    g.k.In = function(a) {
        var b = M8;
        b.dispatchEvent(new wtb(b, a))
    };
    g.k.tB = function() {
        return !(!g.Pe || g.Nc(10))
    };
    g.k = Ktb.prototype;
    g.k.mS = function() {};
    g.k.lS = function() {};
    g.k.kS = function() {};
    g.k.tK = function() {};
    g.k.nS = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = Ltb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.j = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.Fb(this.j, a) || g.Fb(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.Aab)(b, a);
        0 <= c ? (g.Gb(b, c), b = !0) : b = !1;
        return b || g.Hb(this.u, a)
    };
    g.k.lm = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.x(Mtb, g.wb);
    g.x(Ntb, g.wb);
    g.jb(Z8, g.G);
    g.k = Z8.prototype;
    g.k.e9 = function() {
        this.Ri = Math.min(3E5, 2 * this.Ri);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.Ri + 15E3 * Math.random();
        g.Wq(this.j, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Ri = 5E3
    };
    g.jb(Ptb, Ktb);
    g.k = Ptb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.Sh = function(a) {
        return this.B.Sh(a)
    };
    g.k.ra = function(a, b) {
        return this.B.ra.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.oa || (this.oa = !0, g.qb(this.B), this.disconnect(), g.qb(this.u), this.u = null, this.qa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.oa
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.ea = "";
            this.u.stop();
            this.J = a || null;
            this.D = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new ttb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Va),
                e = this.j;
            e && (e.Gi = null);
            d.Gi = this;
            this.j = d;
            Qtb(this);
            if (this.j) {
                d = g.Oz("ID_TOKEN");
                var f = this.j.zo || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.zo = f
            }
            e ? (3 != e.getState() && 0 == Btb(e) || e.getState(), this.j.connect(a, b, this.K, e.C, e.Ax)) : c ? this.j.connect(a,
                b, this.K, c.sessionId, c.arrayId) : this.j.connect(a, b, this.K)
        }
    };
    g.k.disconnect = function(a) {
        this.V = a || 0;
        this.u.stop();
        Qtb(this);
        this.j && (3 == this.j.getState() && Etb(this.j), this.j.disconnect());
        this.V = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.od(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.sz() && (Qtb(this), Atb(this.j, a))
    };
    g.k.mS = function() {
        this.u.reset();
        this.J = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) Atb(this.j, a[b])
        }
        this.ra("handlerOpened");
        nrb(this.Oa, "BROWSER_CHANNEL")
    };
    g.k.kS = function(a) {
        var b = 2 == a && 401 == this.j.Ao;
        4 == a || b || this.u.start();
        this.ra("handlerError", a, b);
        trb(this.Fa, "BROWSER_CHANNEL")
    };
    g.k.tK = function(a, b) {
        if (!this.u.isActive()) this.ra("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        prb(this.Ga, "BROWSER_CHANNEL");
        a && this.eb.j.uK("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.kb.j.uK("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.nS = function() {
        var a = {
            v: 2
        };
        this.ea && (a.gsessionid = this.ea);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.V && (a.ui = "" + this.V);
        this.J && g.od(a, this.J);
        return a
    };
    g.k.lS = function(a) {
        "S" == a[0] ? this.ea = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.ra("handlerMessage", new Otb(a[0], a[1]));
        rrb(this.Na, "BROWSER_CHANNEL")
    };
    g.k.sz = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.Hr = function(a) {
        (this.K.loungeIdToken = a) || this.u.stop();
        if (this.Ya && this.j) {
            var b = this.j.zo || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.zo = b
        }
    };
    g.k.Us = function() {
        return this.K.id
    };
    g.k.kt = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    };
    g.k.Hw = function() {
        var a = this.u;
        g.Xq(a.j);
        a.start()
    };
    g.k.i$ = function() {
        this.u.isActive();
        0 == Btb(this.j) && this.connect(this.J, this.D)
    };
    $8.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    $8.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    $8.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    g.x(Stb, g.Dd);
    g.k = Stb.prototype;
    g.k.connect = function(a, b, c) {
        this.Bd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Bd.disconnect(a)
    };
    g.k.Hw = function() {
        this.Bd.Hw()
    };
    g.k.Us = function() {
        return this.Bd.Us()
    };
    g.k.kt = function() {
        return this.Bd.kt()
    };
    g.k.sz = function() {
        return this.Bd.sz()
    };
    g.k.X0 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Bd,
            b = this.j;
        g.AB("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.SJ,
            sessionId: a.j.C,
            arrayId: a.j.Ax
        });
        g.AB("yt-remote-session-screen-id", b);
        a = j8();
        b = k8();
        g.Fb(a, b) || a.push(b);
        Krb(a);
        Mrb()
    };
    g.k.V0 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.W0 = function(a) {
        this.dispatchEvent(new Mtb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new Ntb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Bd.sendMessage(a, b)
    };
    g.k.Hr = function(a) {
        this.Bd.Hr(a)
    };
    g.k.dispose = function() {
        this.Bd.dispose()
    };
    g.k = Ttb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.J && (this.B.stop(), this.V = a, this.K = b, Vtb(this), (a = g.Oz("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.o6 && (this.u.mdxVersion = "" + this.j.o6), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities), this.j.e4 && (this.u.cst = this.j.e4),
            this.j.authuser && (this.u.authuser = this.j.authuser), this.j.pageId && (this.u.pageId = this.j.pageId)), 0 !== this.K ? this.u.ui = "" + this.K : delete this.u.ui, Object.assign(this.u, this.V), this.channel = new K8(this.pathPrefix, {
            I5: "gsessionid",
            s6: this.C,
            t6: this.u
        }), this.channel.open(), this.J = 2, Utb(this))
    };
    g.k.disconnect = function(a) {
        this.ea = void 0 === a ? 0 : a;
        this.B.stop();
        Vtb(this);
        this.channel && (0 !== this.ea ? this.u.ui = "" + this.ea : delete this.u.ui, this.channel.close());
        this.ea = 0
    };
    g.k.kt = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    };
    g.k.Hw = function() {
        var a = this.B;
        g.Xq(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (Vtb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Hr = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.k.Us = function() {
        return this.j ? this.j.id : ""
    };
    g.k.ra = function(a) {
        return this.D.ra.apply(this.D, [a].concat(g.pa(g.Ia.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    };
    g.k.Sh = function(a) {
        return this.D.Sh(a)
    };
    g.k.dispose = function() {
        this.oa || (this.oa = !0, g.qb(this.D), this.disconnect(), g.qb(this.B), this.Ba = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.oa
    };
    g.x(Wtb, g.Dd);
    g.k = Wtb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Hw = function() {
        this.j.Hw()
    };
    g.k.Us = function() {
        return this.j.Us()
    };
    g.k.kt = function() {
        return this.j.kt()
    };
    g.k.sz = function() {
        return 3 === this.j.J
    };
    g.k.b1 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.Y0 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.Z0 = function(a) {
        this.dispatchEvent(new Mtb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new Ntb(401 === this.j.Vg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Hr = function(a) {
        this.j.Hr(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var dub = Date.now(),
        b9 = null,
        f9 = Array(50),
        e9 = -1,
        g9 = !1;
    g.jb(h9, g.bH);
    h9.prototype.Sk = function() {
        return this.screens
    };
    h9.prototype.contains = function(a) {
        return !!Hrb(this.screens, a)
    };
    h9.prototype.get = function(a) {
        return a ? i8(this.screens, a) : null
    };
    h9.prototype.info = function(a) {
        c9(this.J, a)
    };
    g.x(hub, g.bH);
    g.k = hub.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.Lc) && this.sY()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.Lc) || (g.mA(this.Lc), this.Lc = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.bH.prototype.xa.call(this)
    };
    g.k.sY = function() {
        this.Lc = NaN;
        this.j = g.qA(a9(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0, g.bb)(this.e1, this),
            onError: (0, g.bb)(this.d1, this),
            onTimeout: (0, g.bb)(this.f1, this)
        })
    };
    g.k.e1 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ra("pairingComplete", new f8(a), b)
    };
    g.k.d1 = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= bwb.length ? this.ra("pairingFailed", Error("DIAL polling timed out")) : (a = bwb[this.u], this.Lc = g.kA((0, g.bb)(this.sY, this), a), this.u++) : this.ra("pairingFailed", Error("Server error " + a.status))
    };
    g.k.f1 = function() {
        this.j = null;
        this.ra("pairingFailed", Error("Server not responding"))
    };
    var bwb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.jb(j9, h9);
    g.k = j9.prototype;
    g.k.start = function() {
        i9(this) && this.ra("screenChange");
        !g.BB("yt-remote-lounge-token-expiration") && iub(this);
        g.mA(this.j);
        this.j = g.kA((0, g.bb)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        i9(this);
        eub(this, a);
        k9(this, !1);
        this.ra("screenChange");
        b(a);
        a.token || iub(this)
    };
    g.k.remove = function(a, b) {
        var c = i9(this);
        gub(this, a) && (k9(this, !1), c = !0);
        b(a);
        c && this.ra("screenChange")
    };
    g.k.RJ = function(a, b, c, d) {
        var e = i9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, k9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.ra("screenChange")
    };
    g.k.xa = function() {
        g.mA(this.j);
        j9.Tf.xa.call(this)
    };
    g.k.i5 = function(a) {
        i9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        k9(this, !b);
        b && c9(this.J, "Missed " + b + " lounge tokens.")
    };
    g.k.h5 = function(a) {
        c9(this.J, "Requesting lounge tokens failed: " + a)
    };
    g.x(kub, g.bH);
    g.k = kub.prototype;
    g.k.start = function() {
        var a = parseInt(g.BB("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.eb() - 144E5 < a ? 0 : a) ? l9(this): (this.C = g.eb() + 3E5, g.AB("yt-remote-fast-check-period", this.C), this.fQ())
    };
    g.k.isEmpty = function() {
        return g.ed(this.j)
    };
    g.k.update = function() {
        jub("Updating availability on schedule.");
        var a = this.J(),
            b = g.Wc(this.j, function(c, d) {
                return c && !!i8(a, d)
            }, this);
        nub(this, b)
    };
    g.k.xa = function() {
        g.mA(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.bH.prototype.xa.call(this)
    };
    g.k.fQ = function() {
        g.mA(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = oub(this);
        if (irb(a)) {
            var b = a9(this.D, "/pairing/get_screen_availability");
            this.u = Rtb(this.D, b, {
                lounge_token: g.ad(a).join(",")
            }, (0, g.bb)(this.J8, this, a), (0, g.bb)(this.I8, this))
        } else nub(this, {}), l9(this)
    };
    g.k.J8 = function(a, b) {
        this.u = null;
        var c = g.ad(oub(this));
        if (g.Wb(c, g.ad(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            nub(this, c);
            l9(this)
        } else this.gg("Changing Screen set during request."), this.fQ()
    };
    g.k.I8 = function(a) {
        this.gg("Screen availability failed: " + a);
        this.u = null;
        l9(this)
    };
    g.k.gg = function(a) {
        c9("OnlineScreenService", a)
    };
    g.jb(m9, h9);
    g.k = m9.prototype;
    g.k.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.ra("screenChange"), this.j.isEmpty() || this.ra("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    };
    g.k.RJ = function(a, b, c, d) {
        this.u.contains(a) ? this.u.RJ(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, c9(this.J, a), d(Error(a)))
    };
    g.k.Sk = function(a) {
        return a ? this.screens : g.Jb(this.screens, g.lp(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.oS = function() {
        return g.lp(this.Sk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.pS = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new hub(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.qb(l);
            e(n9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.qb(l);
            f(m)
        });
        l.start();
        return (0, g.bb)(l.stop, l)
    };
    g.k.g1 = function(a, b, c, d) {
        g.qA(a9(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.bb)(function(e, f) {
                e = new f8(f.screen || {});
                if (!e.name || sub(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); sub(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(n9(this, e))
            }, this),
            onError: (0, g.bb)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.bb)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.qb(this.u);
        g.qb(this.j);
        m9.Tf.xa.call(this)
    };
    g.k.r5 = function() {
        uub(this);
        this.ra("screenChange");
        this.j.update()
    };
    m9.prototype.dispose = m9.prototype.dispose;
    g.jb(o9, g.bH);
    g.k = o9.prototype;
    g.k.Aj = function(a) {
        this.isDisposed() || (a && (q9(this, "" + a), this.ra("sessionFailed")), this.j = null, this.ra("sessionScreen", null))
    };
    g.k.info = function(a) {
        c9(this.Fa, a)
    };
    g.k.qS = function() {
        return null
    };
    g.k.vQ = function(a) {
        var b = this.u;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.bb)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.bb)(function() {
            q9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.vQ("");
        o9.Tf.xa.call(this)
    };
    g.x(r9, o9);
    g.k = r9.prototype;
    g.k.uQ = function(a) {
        if (this.B) {
            if (this.B == a) return;
            q9(this, "Overriding cast session with new session object");
            Gub(this);
            this.Ba = !1;
            this.ea = "unknown";
            this.B.removeUpdateListener(this.qa);
            this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga)
        }
        this.B = a;
        this.B.addUpdateListener(this.qa);
        this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga);
        Bub(this, "getMdxSessionStatus")
    };
    g.k.Fz = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Jj(a))
    };
    g.k.stop = function() {
        this.B ? this.B.stop((0, g.bb)(function() {
            this.Aj()
        }, this), (0, g.bb)(function() {
            this.Aj(Error("Failed to stop receiver app."))
        }, this)) : this.Aj(Error("Stopping cast device without session."))
    };
    g.k.vQ = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        Gub(this);
        this.B && (this.B.removeUpdateListener(this.qa), this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga));
        this.B = null;
        o9.prototype.xa.call(this)
    };
    g.k.t9 = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = c8(b), g.Xa(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Jj(b)), a) {
                    case "mdxSessionStatus":
                        yub(this, b);
                        break;
                    case "loungeToken":
                        Cub(this, b);
                        break;
                    default:
                        q9(this, "Unknown youtube message: " + a)
                } else q9(this, "Unable to parse message.");
                else q9(this, "No data in message.")
    };
    g.k.yV = function(a, b, c, d) {
        g.mA(this.V);
        this.V = 0;
        rub(this.C, this.u.label, a, this.u.friendlyName, (0, g.bb)(function(e) {
            e ? b(e) : 0 <= d ? (q9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.V = g.kA((0, g.bb)(this.yV, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.qS = function() {
        return this.B
    };
    g.k.h1 = function(a) {
        this.isDisposed() || a || (q9(this, "Cast session died."), this.Aj())
    };
    g.x(s9, o9);
    g.k = s9.prototype;
    g.k.uQ = function(a) {
        this.B = a;
        this.B.addUpdateListener(this.Na)
    };
    g.k.Fz = function(a) {
        this.Oa = a;
        this.oa()
    };
    g.k.stop = function() {
        Oub(this);
        this.B ? this.B.stop((0, g.bb)(this.Aj, this, null), (0, g.bb)(this.Aj, this, "Failed to stop DIAL device.")) : this.Aj()
    };
    g.k.xa = function() {
        Oub(this);
        this.B && this.B.removeUpdateListener(this.Na);
        this.B = null;
        o9.prototype.xa.call(this)
    };
    g.k.j1 = function(a) {
        this.isDisposed() || a || (q9(this, "DIAL session died."), this.D(), this.D = function() {}, this.Aj())
    };
    g.x(v9, o9);
    v9.prototype.stop = function() {
        this.Aj()
    };
    v9.prototype.uQ = function() {};
    v9.prototype.Fz = function() {
        g.mA(this.B);
        this.B = NaN;
        var a = i8(this.C.Sk(), this.u.label);
        a ? p9(this, a) : this.Aj(Error("No such screen"))
    };
    v9.prototype.xa = function() {
        g.mA(this.B);
        this.B = NaN;
        o9.prototype.xa.call(this)
    };
    g.x(w9, g.bH);
    g.k = w9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.V, [chrome.cast.Capability.AUDIO_OUT]);
        this.ea || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.bb)(this.t8, this);
        c = new chrome.cast.ApiConfig(c, (0, g.bb)(this.bY, this), e, d, a);
        c.customDialLaunchCallback = (0, g.bb)(this.t7, this);
        chrome.cast.initialize(c, (0, g.bb)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), aub(), this.u.subscribe("onlineScreenChange", (0, g.bb)(this.rS, this)), this.B = Rub(this), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.bb)(function(f) {
                this.gg("Failed to set initial custom receivers: " + g.Jj(f))
            }, this)), this.ra("yt-remote-cast2-availability-change", y9(this)), b(!0))
        }, this), (0, g.bb)(function(f) {
            this.gg("Failed to initialize API: " + g.Jj(f));
            b(!1)
        }, this))
    };
    g.k.n$ = function(a, b) {
        x9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) x9("Unsetting old screen status: " + this.j.u.friendlyName), z9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = i8(this.u.Sk(), a);
                if (!c) {
                    x9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    x9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = Pub(this, c);
                a || (x9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.bb)(function(d) {
                    this.gg("Failed to set initial custom receivers: " + g.Jj(d))
                }, this)));
                x9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                z9(this, new v9(this.u, a), !0)
            }
            this.j.vQ(b)
        } else x9("setConnectedScreenStatus: no screen.")
    };
    g.k.p$ = function(a) {
        this.isDisposed() ? this.gg("Setting connection data on disposed cast v2") : this.j ? this.j.Fz(a) : this.gg("Setting connection data without a session")
    };
    g.k.m1 = function() {
        this.isDisposed() ? this.gg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), z9(this, null)) : x9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.bb)(this.bY, this), (0, g.bb)(this.M8, this))
    };
    g.k.xa = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.bb)(this.rS, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = Ytb,
            b = g.Sa("yt.mdx.remote.debug.handlers_");
        g.Hb(b || [], a);
        g.qb(this.j);
        g.bH.prototype.xa.call(this)
    };
    g.k.gg = function(a) {
        c9("Controller", a)
    };
    g.k.dY = function(a, b) {
        this.j == a && (b || z9(this, null), this.ra("yt-remote-cast2-session-change", b))
    };
    g.k.q8 = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), x9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.u.label != a.label) x9("onReceiverAction_: Stopping active receiver: " + this.j.u.friendlyName), this.j.stop();
                        else {
                            x9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.ra("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            z9(this,
                                new v9(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            z9(this, new s9(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            z9(this, new r9(this.u, a, this.config_));
                            break;
                        default:
                            this.gg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.u.label == a.label ? this.j.stop() : this.gg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.gg("onReceiverAction_ called without receiver.")
    };
    g.k.t7 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.gg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.u : null;
        if (!c || c.label != b.label) return this.gg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return x9("Reselecting dial screen."),
                this.ra("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.gg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            z9(this, new s9(this.u, b, this.C, this.config_))
        }
        b = this.j;
        b.V = a;
        b.V.appState == chrome.cast.DialAppState.RUNNING ? (a = b.V.extraData || {}, c = a.screenId || null, t9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = Lub(b, {
                name: b.u.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.V.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.Vz(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = Mub(b, c)) : a = Mub(b, c)) : a = Jub(b);
        return a
    };
    g.k.bY = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            x9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) x9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), z9(this, new r9(this.u, c, this.config_), !0);
                    else {
                        this.gg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.u,
                    e = i8(this.u.Sk(),
                        d.label);
                e && g8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (x9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.qb(this.j), this.j = new r9(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.bb)(this.dY, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return Qub(b, b.j)
                }), this.j.Fz(null));
                this.j.uQ(a)
            }
        }
    };
    g.k.l1 = function() {
        return this.j ? this.j.qS() : null
    };
    g.k.M8 = function(a) {
        this.isDisposed() || (this.gg("Failed to estabilish a session: " + g.Jj(a)), a.code != chrome.cast.ErrorCode.CANCEL && z9(this, null), this.ra("yt-remote-cast2-session-failed"))
    };
    g.k.t8 = function(a) {
        x9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = y9(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            y9(this) != b && this.ra("yt-remote-cast2-availability-change", y9(this))
        }
    };
    g.k.rS = function() {
        this.isDisposed() || (this.B = Rub(this), x9("Updating custom receivers: " + g.Jj(this.B)), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.bb)(function() {
            this.gg("Failed to set custom receivers.")
        }, this)), this.ra("yt-remote-cast2-availability-change", y9(this)))
    };
    w9.prototype.setLaunchParams = w9.prototype.p$;
    w9.prototype.setConnectedScreenStatus = w9.prototype.n$;
    w9.prototype.stopSession = w9.prototype.m1;
    w9.prototype.getCastSession = w9.prototype.l1;
    w9.prototype.requestSession = w9.prototype.requestSession;
    w9.prototype.init = w9.prototype.init;
    w9.prototype.dispose = w9.prototype.dispose;
    var $ub = [];
    g.k = G9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        fvb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.rp = a.hasPrevious, this.Wk = a.hasNext, this.K = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.V = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.isPlaying = function() {
        return 1 == this.playerState
    };
    g.k.ul = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + H9(this) : this.D
    };
    g.k.clone = function() {
        return new G9(gvb(this))
    };
    g.x(M9, g.bH);
    g.k = M9.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.kt = function() {
        return this.C.getReconnectTimeout()
    };
    g.k.Hw = function() {
        this.C.reconnect()
    };
    g.k.play = function() {
        O9(this) ? (this.j ? this.j.play(null, g.Kd, S9(this, "play")) : R9(this, "play"), jvb(this, 1, J9(N9(this))), this.ra("remotePlayerChange")) : P9(this, this.play)
    };
    g.k.pause = function() {
        O9(this) ? (this.j ? this.j.pause(null, g.Kd, S9(this, "pause")) : R9(this, "pause"), jvb(this, 2, J9(N9(this))), this.ra("remotePlayerChange")) : P9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (O9(this)) {
            if (this.j) {
                var b = N9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Kd, S9(this, "seekTo", {
                    newTime: a
                }))
            } else R9(this, "seekTo", {
                newTime: a
            });
            jvb(this, 3, a);
            this.ra("remotePlayerChange")
        } else P9(this, g.cb(this.seekTo, a))
    };
    g.k.stop = function() {
        if (O9(this)) {
            this.j ? this.j.stop(null, g.Kd, S9(this, "stopVideo")) : R9(this, "stopVideo");
            var a = N9(this);
            a.index = -1;
            a.videoId = "";
            fvb(a);
            Q9(this, a);
            this.ra("remotePlayerChange")
        } else P9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (O9(this)) {
            var c = N9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.bb)(function() {
                        d9("set receiver volume: " + d)
                    }, this), (0, g.bb)(function() {
                        this.gg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.bb)(function() {
                    d9("set receiver muted: " + b)
                }, this), (0, g.bb)(function() {
                    this.gg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                R9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            Q9(this, c)
        } else P9(this, g.cb(this.setVolume, a, b))
    };
    g.k.sS = function(a, b) {
        if (O9(this)) {
            var c = N9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Jj(b.style), g.od(a, c.trackData));
            R9(this, "setSubtitlesTrack", a);
            Q9(this, c)
        } else P9(this, g.cb(this.sS, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        O9(this) ? (b = b.getLanguageInfo().getId(), R9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = N9(this), a.audioTrackId = b, Q9(this, a)) : P9(this, g.cb(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = N9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        K9(l, a, c || 0);
        void 0 !== b && (I9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Jj(h));
        R9(this, "setPlaylist", m);
        d || Q9(this, l)
    };
    g.k.UI = function(a, b) {
        if (O9(this)) {
            if (a && b) {
                var c = N9(this);
                K9(c, a, b);
                Q9(this, c)
            }
            R9(this, "previous")
        } else P9(this, g.cb(this.UI, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (O9(this)) {
            if (a && b) {
                var c = N9(this);
                K9(c, a, b);
                Q9(this, c)
            }
            R9(this, "next")
        } else P9(this, g.cb(this.nextVideo, a, b))
    };
    g.k.gG = function() {
        if (O9(this)) {
            R9(this, "clearPlaylist");
            var a = N9(this);
            a.reset();
            Q9(this, a);
            this.ra("remotePlayerChange")
        } else P9(this, this.gG)
    };
    g.k.IU = function() {
        O9(this) ? R9(this, "dismissAutoplay") : P9(this, this.IU)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.ra("proxyStateChange", a, this.B)
        }
        g.bH.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        ivb(this);
        this.C = null;
        this.D.clear();
        L9(this, null);
        g.bH.prototype.xa.call(this)
    };
    g.k.yQ = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.ra("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.o8 = function(a, b) {
        this.ra(a, b)
    };
    g.k.j7 = function(a) {
        if (!a) this.ND(null), L9(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = N9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) d9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, Q9(this, b)
        }
    };
    g.k.ND = function(a) {
        d9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.V);
        if (this.j = a) this.j.addUpdateListener(this.V), kvb(this), this.ra("remotePlayerChange")
    };
    g.k.i7 = function(a) {
        a ? (kvb(this), this.ra("remotePlayerChange")) : this.ND(null)
    };
    g.k.VQ = function() {
        R9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.m7 = function() {
        var a = cvb();
        a && L9(this, a)
    };
    g.k.gg = function(a) {
        c9("CP", a)
    };
    g.x(V9, g.bH);
    g.k = V9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Na && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            I9(this.j,
                n);
            this.D = "UNSUPPORTED";
            c = this.Na ? "setInitialState" : "setPlaylist";
            T9("Connecting with " + c + " and params: " + g.Jj(m));
            this.u.connect({
                method: c,
                params: g.Jj(m)
            }, a, Nrb())
        } else T9("Connecting without params"), this.u.connect({}, a, Nrb());
        ovb(this)
    };
    g.k.Hr = function(a) {
        this.u.Hr(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ra("yt.mdx.remote.remoteClient_", null), this.ra("beforeDispose"), U9(this, 3));
        g.bH.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        pvb(this);
        rvb(this);
        qvb(this);
        g.mA(this.V);
        this.V = NaN;
        g.mA(this.ea);
        this.ea = NaN;
        this.C = null;
        g.pB(this.oa);
        this.oa.length = 0;
        this.u.dispose();
        g.bH.prototype.xa.call(this);
        this.D = this.K = this.B = this.j = this.u = null
    };
    g.k.tW = function(a) {
        if (!this.B || 0 === this.B.length) return !1;
        for (var b = g.v(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.X4 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.NC()) ? this.u.sz() && isNaN(this.J) && (a = 1) : a = 2);
        return a
    };
    g.k.Py = function(a) {
        T9("Disconnecting with " + a);
        g.Ra("yt.mdx.remote.remoteClient_", null);
        pvb(this);
        this.ra("beforeDisconnect", a);
        1 == a && l8();
        this.u.disconnect(a);
        this.dispose()
    };
    g.k.V4 = function() {
        var a = this.j;
        this.C && (a = this.j.clone(), K9(a, this.C, a.index));
        return gvb(a)
    };
    g.k.q$ = function(a) {
        var b = this,
            c = new G9(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.mA(this.V), this.V = g.kA(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && W9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && J9(this.j) == J9(c) && g.Jj(this.j.trackData) == g.Jj(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.Zb(d, function(e) {
            this.ra(e)
        }, this)
    };
    g.k.uV = function() {
        var a = this.u.Us(),
            b = g.Cb(this.B, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.NC = function() {
        return this.u.kt()
    };
    g.k.Q4 = function() {
        return this.D || "UNSUPPORTED"
    };
    g.k.R4 = function() {
        return this.K || ""
    };
    g.k.n1 = function() {
        !isNaN(this.NC()) && this.u.Hw()
    };
    g.k.m$ = function(a, b) {
        W9(this, a, b);
        tvb(this)
    };
    g.k.tS = function() {
        var a = g.BA("SID", "") || "",
            b = g.BA("SAPISID", "") || "",
            c = g.BA("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.fg(g.eg(a), 2);
        b = g.fg(g.eg(b), 2);
        c = g.fg(g.eg(c), 2);
        return g.fg(g.eg(a + "," + b + "," + c), 2)
    };
    V9.prototype.subscribe = V9.prototype.subscribe;
    V9.prototype.unsubscribeByKey = V9.prototype.Sh;
    V9.prototype.getProxyState = V9.prototype.X4;
    V9.prototype.disconnect = V9.prototype.Py;
    V9.prototype.getPlayerContextData = V9.prototype.V4;
    V9.prototype.setPlayerContextData = V9.prototype.q$;
    V9.prototype.getOtherConnectedRemoteId = V9.prototype.uV;
    V9.prototype.getReconnectTimeout = V9.prototype.NC;
    V9.prototype.getAutoplayMode = V9.prototype.Q4;
    V9.prototype.getAutoplayVideoId = V9.prototype.R4;
    V9.prototype.reconnect = V9.prototype.n1;
    V9.prototype.sendMessage = V9.prototype.m$;
    V9.prototype.getXsrfToken = V9.prototype.tS;
    V9.prototype.isCapabilitySupportedOnConnectedDevices = V9.prototype.tW;
    g.x(Fvb, h9);
    g.k = Fvb.prototype;
    g.k.Sk = function(a) {
        return this.fh.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.fh.$_c(a)
    };
    g.k.get = function(a) {
        return this.fh.$_g(a)
    };
    g.k.start = function() {
        this.fh.$_st()
    };
    g.k.add = function(a, b, c) {
        this.fh.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.fh.$_r(a, b, c)
    };
    g.k.RJ = function(a, b, c, d) {
        this.fh.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.fh.$_ubk(this.j[a]);
        this.j.length = 0;
        this.fh = null;
        h9.prototype.xa.call(this)
    };
    g.k.o1 = function() {
        this.ra("screenChange")
    };
    g.k.X7 = function() {
        this.ra("onlineScreenChange")
    };
    m9.prototype.$_st = m9.prototype.start;
    m9.prototype.$_gspc = m9.prototype.g1;
    m9.prototype.$_gsppc = m9.prototype.pS;
    m9.prototype.$_c = m9.prototype.contains;
    m9.prototype.$_g = m9.prototype.get;
    m9.prototype.$_a = m9.prototype.add;
    m9.prototype.$_un = m9.prototype.RJ;
    m9.prototype.$_r = m9.prototype.remove;
    m9.prototype.$_gs = m9.prototype.Sk;
    m9.prototype.$_gos = m9.prototype.oS;
    m9.prototype.$_s = m9.prototype.subscribe;
    m9.prototype.$_ubk = m9.prototype.Sh;
    var g$ = null,
        j$ = !1,
        X9 = null,
        Y9 = null,
        Qvb = null,
        b$ = [];
    g.x(Vvb, g.G);
    g.k = Vvb.prototype;
    g.k.xa = function() {
        g.G.prototype.xa.call(this);
        this.j.stop();
        this.u.stop();
        this.K.stop();
        var a = this.Dc;
        a.unsubscribe("proxyStateChange", this.aY, this);
        a.unsubscribe("remotePlayerChange", this.UD, this);
        a.unsubscribe("remoteQueueChange", this.CI, this);
        a.unsubscribe("previousNextChange", this.XX, this);
        a.unsubscribe("nowAutoplaying", this.SX, this);
        a.unsubscribe("autoplayDismissed", this.wX, this);
        this.Dc = this.module = null
    };
    g.k.Vk = function(a) {
        var b = g.Ia.apply(1, arguments);
        if (2 != this.Dc.B)
            if (k$(this)) {
                if (1081 != N9(this.Dc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        N9(this.Dc).isPlaying() ? this.Dc.pause() : this.Dc.play();
                        break;
                    case "control_play":
                        this.Dc.play();
                        break;
                    case "control_pause":
                        this.Dc.pause();
                        break;
                    case "control_seek":
                        this.J.mK(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        Xvb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.I.getCurrentTime();
                    l$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    l$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    Xvb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.g7 = function(a) {
        this.K.J0(a)
    };
    g.k.haa = function(a) {
        this.Vk("control_subtitles_set_track", g.ed(a) ? null : a)
    };
    g.k.IZ = function() {
        var a = this.I.getOption("captions", "track");
        g.ed(a) || Xvb(this, a)
    };
    g.k.Bc = function(a) {
        this.module.Bc(a, this.I.getVideoData().lengthSeconds)
    };
    g.k.I7 = function() {
        g.ed(this.B) || Yvb(this, this.B);
        this.C = !1
    };
    g.k.aY = function(a, b) {
        this.u.stop();
        2 === b && this.zZ()
    };
    g.k.UD = function() {
        if (k$(this)) {
            this.j.stop();
            var a = N9(this.Dc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Mh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Mh = 0;
                    break;
                default:
                    this.module.Mh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.vc(new g.UP(8));
                    this.xZ();
                    break;
                case 1085:
                case 3:
                    this.vc(new g.UP(9));
                    break;
                case 1083:
                case 0:
                    this.vc(new g.UP(2));
                    this.J.stop();
                    this.Bc(this.I.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.vc(new g.UP(4));
                    break;
                case 2:
                    this.vc(new g.UP(4));
                    this.Bc(J9(a));
                    break;
                case -1:
                    this.vc(new g.UP(64));
                    break;
                case -1E3:
                    this.vc(new g.UP(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        DG: 2
                    }))
            }
            a = N9(this.Dc).trackData;
            var b = this.B;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a, Yvb(this, a));
            a = N9(this.Dc); - 1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.V.isActive() || this.m_()
        } else Wvb(this)
    };
    g.k.XX = function() {
        this.I.ra("mdxpreviousnextchange")
    };
    g.k.CI = function() {
        k$(this) || Wvb(this)
    };
    g.k.SX = function(a) {
        isNaN(a) || this.I.ra("mdxnowautoplaying", a)
    };
    g.k.wX = function() {
        this.I.ra("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        k$(this) && this.Dc.setAudioTrack(this.I.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === N9(this.Dc).playerState ? l$(this, a) : b && this.Dc.seekTo(a)
    };
    g.k.m_ = function() {
        var a = this;
        if (k$(this)) {
            var b = N9(this.Dc);
            this.events.Mc(this.ea);
            b.muted ? this.I.mute() : this.I.unMute();
            this.I.setVolume(b.volume);
            this.ea = this.events.T(this.I, "onVolumeChange", function(c) {
                Tvb(a, c)
            })
        }
    };
    g.k.xZ = function() {
        this.j.stop();
        if (!this.Dc.isDisposed()) {
            var a = N9(this.Dc);
            a.isPlaying() && this.vc(new g.UP(8));
            this.Bc(J9(a));
            this.j.start()
        }
    };
    g.k.zZ = function() {
        this.u.stop();
        this.j.stop();
        var a = this.Dc.kt();
        2 == this.Dc.B && !isNaN(a) && this.u.start()
    };
    g.k.vc = function(a) {
        this.u.stop();
        var b = this.D;
        if (!g.iCa(b, a)) {
            var c = g.uP(a, 2);
            c !== g.uP(this.D, 2) && this.I.FA(c);
            this.D = a;
            $vb(this.module, b, a)
        }
    };
    g.x(m$, g.Y);
    m$.prototype.xd = function() {
        this.j.show()
    };
    m$.prototype.Mb = function() {
        this.j.hide()
    };
    m$.prototype.u = function() {
        n8("mdx-privacy-popup-cancel");
        this.Mb()
    };
    m$.prototype.B = function() {
        n8("mdx-privacy-popup-confirm");
        this.Mb()
    };
    g.x(n$, g.Y);
    n$.prototype.onStateChange = function(a) {
        this.Ac(a.state)
    };
    n$.prototype.Ac = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.uP(a, 128) ? g.IP("Error on $RECEIVER_NAME", b) : a.isPlaying() || g.ZP(a) ? g.IP("Playing on $RECEIVER_NAME", b) : g.IP("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.x(o$, g.dW);
    o$.prototype.C = function() {
        var a = this.I.getOption("remote", "receivers");
        a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.Yt = g.ac(a, this.j, this), g.eW(this, g.vn(a, this.j)), a = this.I.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Pj(a), this.enable(!0)) : this.enable(!1)
    };
    o$.prototype.j = function(a) {
        return a.key
    };
    o$.prototype.Hk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Yt[a].name
    };
    o$.prototype.ph = function(a) {
        g.dW.prototype.ph.call(this, a);
        this.I.setOption("remote", "currentReceiver", this.Yt[a]);
        this.Lb.Mb()
    };
    g.x(Zvb, g.ST);
    g.k = Zvb.prototype;
    g.k.create = function() {
        var a = this.player.W(),
            b = g.wM(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        Kvb(b, a);
        this.subscriptions.push(g.WD("yt-remote-before-disconnect", this.e7, this));
        this.subscriptions.push(g.WD("yt-remote-connection-change", this.u8, this));
        this.subscriptions.push(g.WD("yt-remote-receiver-availability-change", this.ZX,
            this));
        this.subscriptions.push(g.WD("yt-remote-auto-connect", this.s8, this));
        this.subscriptions.push(g.WD("yt-remote-receiver-resumed", this.r8, this));
        this.subscriptions.push(g.WD("mdx-privacy-popup-confirm", this.K9, this));
        this.subscriptions.push(g.WD("mdx-privacy-popup-cancel", this.J9, this));
        this.ZX()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.ST.prototype.load.call(this);
        this.Ql = new Vvb(this, this.player, this.Dc);
        var a = (a = Svb()) ? a.currentTime : 0;
        var b = Pvb() ? new M9(f$(), void 0) : null;
        0 == a && b && (a = J9(N9(b)));
        0 !== a && this.Bc(a);
        $vb(this, this.kf, this.kf);
        this.player.Pp(6)
    };
    g.k.unload = function() {
        this.player.ra("mdxautoplaycanceled");
        this.Js = this.Fp;
        g.rb(this.Ql, this.Dc);
        this.Dc = this.Ql = null;
        g.ST.prototype.unload.call(this);
        this.player.Pp(5);
        p$(this)
    };
    g.k.xa = function() {
        g.XD(this.subscriptions);
        g.ST.prototype.xa.call(this)
    };
    g.k.PD = function(a) {
        var b = g.Ia.apply(1, arguments);
        this.loaded && this.Ql.Vk.apply(this.Ql, [a].concat(g.pa(b)))
    };
    g.k.getAdState = function() {
        return this.Mh
    };
    g.k.rp = function() {
        return this.Dc ? N9(this.Dc).rp : !1
    };
    g.k.Wk = function() {
        return this.Dc ? N9(this.Dc).Wk : !1
    };
    g.k.Bc = function(a, b) {
        this.HW = a || 0;
        this.player.ra("progresssync", a, b);
        this.player.Qa("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.HW
    };
    g.k.getProgressState = function() {
        var a = N9(this.Dc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Lh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + H9(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + H9(a) : a.j) - this.getCurrentTime(),
            loaded: a.V,
            seekableEnd: a.u ? a.j + H9(a) : a.j,
            seekableStart: 0 < a.C ? a.C + H9(a) : a.C,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Dc && this.Dc.nextVideo()
    };
    g.k.UI = function() {
        this.Dc && this.Dc.UI()
    };
    g.k.e7 = function(a) {
        1 === a && (this.FP = this.Dc ? N9(this.Dc) : null)
    };
    g.k.u8 = function() {
        var a = Pvb() ? new M9(f$(), void 0) : null;
        if (a) {
            var b = this.Js;
            this.loaded && this.unload();
            this.Dc = a;
            this.FP = null;
            b.key !== this.Fp.key && (this.Js = b, this.load())
        } else g.qb(this.Dc), this.Dc = null, this.loaded && (this.unload(), (a = this.FP) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, J9(a)));
        this.player.ra("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.ZX = function() {
        var a = [this.Fp],
            b = a.concat,
            c = Lvb();
        D9() && g.BB("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Yt = b.call(a, c);
        a = Nvb() || this.Fp;
        q$(this, a);
        this.player.Qa("onMdxReceiversChange")
    };
    g.k.s8 = function() {
        var a = Nvb();
        q$(this, a)
    };
    g.k.r8 = function() {
        this.Js = Nvb()
    };
    g.k.K9 = function() {
        this.pE = !0;
        p$(this);
        j$ = !1;
        g$ && i$(g$, 1);
        g$ = null
    };
    g.k.J9 = function() {
        this.pE = !1;
        p$(this);
        q$(this, this.Fp);
        this.Js = this.Fp;
        j$ = !1;
        g$ = null;
        this.player.playVideo()
    };
    g.k.Gh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Yt;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? dvb() : q$(this, b)), this.loaded ? this.Js : this.Fp;
            case "quickCast":
                return 2 === this.Yt.length && "cast-selector-receiver" === this.Yt[1].key ? (b && dvb(), !0) : !1
        }
    };
    g.k.VQ = function() {
        this.Dc.VQ()
    };
    g.k.vl = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.RT("remote", Zvb);
})(_yt_player);