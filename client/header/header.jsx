import {Link} from "react-router-dom";


export function Header(){
    return(<div>
        <h4>Header:</h4>
        <Link to={{pathname: ""}}>back to front page</Link>
        <div>
        <Link to={{pathname: "login"}}>Login?</Link> or <Link to={{pathname: "register"}}>Register?</Link>
        </div>
        <h4>Header end</h4>
    </div>)
}