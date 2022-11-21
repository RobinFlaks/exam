import {Link} from "react-router-dom";
import * as React from "react";

export function FrontPage() {
    let user = "guest";

    return <div>
        <h2>welcome {user}</h2>
        <div>
            <Link to={{pathname: "menu"}}>our menu</Link>
        </div>
    </div>
}