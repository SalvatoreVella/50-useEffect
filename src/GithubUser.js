import React, { useState, useEffect } from "react"

export default function GithubUser({ name }) {
    const [state, setState] = useState({
        name: "",
        id: "",
        followers: "",
        repos: ""
    });

    useEffect(() => {
        async function fetchData(username) {
            try {
                const fetchData = await fetch(`https://api.github.com/users/${username}`);
                const data = await fetchData.json();
                setState(() => {
                    return {
                        name: data.name,
                        id: data.id,
                        followers: data.followers,
                        repos: data.public_repos
                    }
                })
            } catch (err) {
                console.log(err);
            }
        }
        fetchData(name)
    }
        , [name]);
    return (
        <div>
            <h1>Github username is {state.name}</h1>
            <p>User id: {state.id}</p>
            <p>Followers: {state.followers}</p>
            <p>Repos: {state.repos}</p>
        </div>
    )
}