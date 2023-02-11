import React from "react";

const useCreateAuthToken = (response: any): Boolean => {
    document.cookie = "LoggedIn='true';expires=" + 365 * 24 * 60 * 60 * 1000 + ";path=/"
    document.cookie = "access=" + response.data.token + ";expires=" + 365 * 24 * 60 * 60 * 1000 + ";path=/"
    sessionStorage.setItem('fullName', response.data.first_name);
    sessionStorage.setItem('email', response.data.email);
    sessionStorage.setItem('LoggedIn', 'true');
    sessionStorage.setItem('id', response.data.id)
    sessionStorage.setItem('access', response.data.token)

    return true
}

export const useDestroyAuthToken = (): boolean => {
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
    return true
}

export default useCreateAuthToken