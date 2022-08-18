import { useState, useEffect } from "react";

function Data({keyword}) {
    let [data, setData] = useState("데이타")
    const [name, setName] = useState("이름"); 
    const [res,setRes] = useState("레스");
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/meomeok/restaurants/')
      .then(results=>results.json())
      .then(results=>{
        setData(results)
        setName(keyword)
        
        results.map((result)=>{
          if(result.restaurant_name.indexOf(keyword) !== -1) 
          {
            setRes(result);
          }
          })

      });
  }, [keyword]);
  
    return (
    <div>{res.restaurant_name}
    </div>)
}


export default Data