import React, { useState } from "react";
import { useParams } from 'react-router-dom';

const RedirectUrlPage = props => {

    const {shortenUrl} = useParams();
    const apiCall = process.env.BE_URL + '/api/shorten-service/v1/url/'+ [shortenUrl];
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(false);
                return Promise.reject('Error 404')
            }
        })
        .then(data => {
            setIsLoading(false);
            window.location.href = data.url;
        })
        .catch(error => {
            console.log('Error is', error);
            setIsLoading(false);
            window.location.href = "/not-found";
        });

    return (
        <div class="loading loading--full-height" style={isLoading ? {} : { display: 'none' }}></div>
    );
}

export default RedirectUrlPage;