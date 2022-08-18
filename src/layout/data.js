import { useState, useEffect } from "react";
import styled from "styled-components";

const PlaceInfo = styled.div`
width:100%;
display:flex;
flex-direction:column;
`;
const Name = styled.h1`
margin-bottom:0rem;
@media screen and (max-width: 1400px) {
    font-size:26px;
    }
`;
const Info = styled.p`
@media screen and (max-width: 1400px) {
    font-size:14px;
    }
`;
function Data({keyword}) {
    const [data, setData] = useState("데이타")
    const [name, setName] = useState("이름"); 
    const [res,setRes] = useState("레스");
    var searchData = [];
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/meomeok/restaurants/')
      .then(results=>results.json())
      .then(results=>{
        setData(results)
        setName(keyword)
        let i=0;
        results.map((result)=>{
          let str = result.restaurant_name.replaceAll(/ /gi, "");
          if(str.indexOf(keyword.replaceAll(/ /gi, ""))!==-1) {
            setRes(result);
            searchData.push(result);
            console.log(i+ "/" +result.restaurant_name)
            console.log(i+ "/" +searchData[i].restaurant_name)
            console.log("------------------------------------------")
            i++
          }
        })
      });
  }, [keyword]);
  
    return (
      
    <div>
      <PlaceInfo>
        <Name>{res.restaurant_name}</Name>
        <Info>{res.address}</Info>
        <Info>{res.number}</Info>
        <Info>{res.category}</Info>
      </PlaceInfo>
    </div>
    )
}


export default Data