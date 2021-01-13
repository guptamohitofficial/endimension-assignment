import { Component } from "react";
import { cookies } from "../non-components/easy";

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.do = () => {
            cookies.remove("token");
            if (cookies.get("token")) {
                cookies.remove("token");
            }
            window.location.href = "/";
        };
        this.do();
    }
    render() {
        return;
    }
}