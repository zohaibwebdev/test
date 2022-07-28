import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(() =>{
        let authenticated = true;
        if(!authenticated){
            navigate('login')
        }
    })
  return (
    <div>
        <Component />
    </div>
  )
}

export default Protected