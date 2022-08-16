import React, { useState, useEffect } from "react";



function Data({keyword}) {
    let [data, setData] = useState(null)
    const [name, setName] = useState(null); 
    const [res,setRes]=useState(null);
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/meomeok/restaurants/')
      .then(result=>result.json())
      .then(result=>{
        setData(result)
        setName(keyword)
        setRes(
          data.find(e => {
            return e.restaurant_name === name;
          })
        )
      });
  },[keyword]);
  
    return (
        console.log(res)
    )
  }


export default Data