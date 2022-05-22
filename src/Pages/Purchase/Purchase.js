import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const{purchaseId}=useParams()
    const[parts,setParts]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/get-parts/${purchaseId}`)
        .then(res =>res.json())
        .then(data =>setParts(data))
    },[])
    return (
        <div>
            <h1>{parts.name}</h1>
            
        </div>
    );
};

export default Purchase;