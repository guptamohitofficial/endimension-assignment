import { Cookies } from "react-cookie";
import axios from "axios";

export const cookies = new Cookies();

export function apiDomain() {
    if (window.location.hostname === "localhost") return "http://localhost:8000/";
    else return "http://endi.easify.xyz:8000/";
}

export function mediaDomain() {
    if (window.location.hostname === "localhost") return "http://localhost:8000/media/";
    else return "http://endi.easify.xyz:8000/media/";
}

export function siteDomain() {
    if (window.location.hostname === "localhost") return "http://localhost:3000/";
    else return "http://endi.easify.xyz/";
}

export function websocketDomain() {
    if (window.location.hostname === "localhost") return "ws://localhost:8000/";
    else return "ws://endi.easify.xyz:8000/";
}

export default class ApiCalls {
    static login(body) {
        return axios.post(`${apiDomain()}login`, body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    static postCall(url, body = {}) {
        return axios.post(`${apiDomain()}${url}`, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${cookies.get("token")}`
            }
        });
    }

    static postCallFormData(url, body = {}) {
        return axios.post(`${apiDomain()}${url}`, body, {
            headers: {
                'accept': 'application/json',
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${cookies.get("token")}`
            }
        });
    }

    static getCall(url) {
        return axios.get(`${apiDomain()}${url}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${cookies.get("token")}`
            }
        });
    }
}

export class ErrorsPops {
    static createAlert(message) {
        return window.alert(message);
    }
}