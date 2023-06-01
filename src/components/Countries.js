import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Countries = () => {
    const [data, setData] = useState([]);

    // Le useEffect se joue lorsque le composant est monté + get l'API THEN montre le moi et je fais un console log
    useEffect(() => {
        axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data));
    }, [])

    return (
        <div>
            <h1>Countries</h1>
            <ul>
                {data.map((country, index) => (
                    <li key={index}>{country.translations.fra.common}</li>
                ))}
            </ul>
        </div>
    );
};

export default Countries;