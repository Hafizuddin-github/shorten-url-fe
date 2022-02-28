import React, { useState } from "react";
import { useParams } from 'react-router-dom';

const RedirectUrlPage = props => {

    const {shortenUrl} = useParams();
    const apiCall = 'https://shielded-castle-62695.herokuapp.com/api/shorten-service/v1/url?url='+ [shortenUrl];
    console.log(apiCall);

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };
    fetch(apiCall, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else if(response.status === 404) {
                return Promise.reject('Error 404')
            }
        })
        .then(data => window.location.href = data.url)
        .catch(error => {
            console.log('Error is', error);
            window.location.href = "/not-found";
        });

    return (
        <div>
            {shortenUrl}
        </div>
    );
}

export default RedirectUrlPage;