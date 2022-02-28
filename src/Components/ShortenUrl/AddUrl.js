import React, {useState} from "react";

const AddUrl = props => {

    const [enteredUrl, setEnteredUrl] = useState('');
    const [shortenUrl, setshortenUrl] = useState('');

    const urlChangedHandler = (event) => {
        setEnteredUrl(event.target.value)
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        const resquestBody = {
            url: enteredUrl
        }
        console.log(JSON.stringify(resquestBody));

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(resquestBody),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        fetch('http://localhost:8080/api/shorten-service/v1/url', requestOptions)
            .then(response => response.json())
            .then(data => setshortenUrl(data.shortenUrl));
    };

    return (
    <div>
        <form onSubmit={addUserHandler}>
            <label htmlFor="url">Url to shorten: </label>
            <input type="text" id="url" value={enteredUrl} onChange={urlChangedHandler}/><br/>
            <input type="submit" value="Submit"/>
        </form>
        <br/>
        <div>
            <label htmlFor="url">Shorten URL: </label>
            <input htmlFor="shortenUrl" id="shortenUrl" value={shortenUrl} disabled></input>
        </div>
    </div>
    );
};

export default AddUrl;