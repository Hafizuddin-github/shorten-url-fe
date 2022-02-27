import React, { useState } from "react";
import { useParams } from 'react-router-dom';

const RedirectUrlPage = props => {

    const {shortenUrl} = useParams();
    const apiCall = 'http://localhost:8080/api/shorten-service/v1/url?url='+ [shortenUrl];
    console.log(apiCall);

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };
    fetch(apiCall, requestOptions)
        .then(response => response.json())
        .then(data => window.location.href = data.url);

    return (
        <div>
            {shortenUrl}
        </div>
    );
}

export default RedirectUrlPage;