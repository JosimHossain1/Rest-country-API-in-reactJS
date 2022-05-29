import React from 'react';
import {useEffect, useState } from 'react';
import './Countries.css'
import Country from './Country'

const Countries = () => {

     const [first, setfirst] = useState([])
     useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => setfirst(data))
     },[])
     
    return (
        <div className='container'>
            <h1 className='title'>Rest Country API using React JS</h1>
            <div className="flex-box">
            {
                first.map(dataRes => <Country 
                    all = {dataRes}>
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;