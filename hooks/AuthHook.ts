import React from "react";
import axios from 'axios'
import { useRouter } from "next/router";

export const useAuth = () => {
    const router = useRouter()
    React.useEffect(() => {

        if ("LoggedIn" in window['sessionStorage']) {
            if (router.route == '/login' || router.route == '/register'
                || router.route == '/verify') {
                    router.push('/')
            }
        } else {
            sessionStorage.clear();
            var cookies = document.cookie.split("; ");
            for (var c = 0; c < cookies.length; c++) {
                var d = window.location.hostname.split(".");
                while (d.length > 0) {
                    var cookieBase =
                        encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) +
                        "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" +
                        d.join(".") +
                        " ;path=";
                    var p = location.pathname.split("/");
                    document.cookie = cookieBase + "/";
                    while (p.length > 0) {
                        document.cookie = cookieBase + p.join("/");
                        p.pop();
                    }
                    d.shift();
                }
            }

            if (router.route == '/login' || router.route == '/register' || router.route == '/verify') {
                return
            }

            router.push('/login')
        }
    })

}