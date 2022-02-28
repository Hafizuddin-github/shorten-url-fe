import React, {useState} from "react";

const AddUrl = props => {

    const [enteredUrl, setEnteredUrl] = useState('');
    const [shortenUrl, setshortenUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const urlChangedHandler = (event) => {
        setEnteredUrl(event.target.value)
    };

    const addUrlHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
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
        fetch('https://shielded-castle-62695.herokuapp.com/api/shorten-service/v1/url', requestOptions)
            .then(response => response.json())
            .then(data => {
                setshortenUrl(data.shortenUrl);
                setIsLoading(false);
            });
    };

    return (
    <div>
        <form onSubmit={addUrlHandler}>
            <label htmlFor="url">Url to shorten: </label>
            <input type="text" id="url" value={enteredUrl} onChange={urlChangedHandler}/><br/>
            <input type="submit" value="Submit"/>
        </form>
        <br/>
        <div class="loading loading--full-height" style={isLoading ? {} : { display: 'none' }}></div>
        <div>
            <label htmlFor="url">Shorten URL: </label>
            <input htmlFor="shortenUrl" id="shortenUrl" value={shortenUrl} disabled></input>
        </div>
    </div>
    );
};

export default AddUrl;