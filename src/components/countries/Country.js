import React from 'react';
import style from './Country.css'

const Country = (props) => {

   const {name, flag, capital} = props.all
   
    return (
        <div className='country'>
            <img className='image' src={flag} alt="" />
            <h3>{name}</h3>
            <h5>{capital}</h5>
        </div>
    );
};

export default Country;