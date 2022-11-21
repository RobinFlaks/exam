import {Link} from "react-router-dom";
import * as React from "react";

export function FrontPage() {

    return <div>
        <h2>hello!</h2>
        <div>
            <Link to={{pathname: "login"}}>login?</Link>
        </div>
    </div>
}