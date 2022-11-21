import {Link} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";

async function fetchJSON(url) {
    const res = await fetch(url);
    return await res.json();
}

function useLoader(loadingFn) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState();

    useEffect(async () => {
        setLoading(true);
        try{
            setData(await loadingFn());
        } catch (error){
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);
    return {loading, error, data}
}

export function FrontPage() {
    const {loading, error, data } = useLoader(
        async () => await fetchJSON("/api/login")
    );

    const user = data;

    if(loading){
        return <div>Loading...</div>
    } else if(error){
        return (
            <div style={{border: "1px solid red", background: "Pink"}}>
                An error occurred: {error.toString()}
            </div>
        );
    }



    return <div>
        <h2>welcome {" "}
        {user ? (
            user.username
        ) : (
            guest
        )} </h2>
        <div>
            <Link to={{pathname: "menu"}}>our menu</Link>
        </div>
    </div>
}