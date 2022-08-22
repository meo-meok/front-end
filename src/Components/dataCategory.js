import { useState, useEffect } from "react";
import styled from "styled-components";

const PlaceInfo = styled.div`
width:100%;
display:flex;
flex-direction:column;
border-bottom:1px solid black;
`;
const Name = styled.h1`
margin-bottom:0rem;
font-size:26px;
@media screen and (max-width: 1400px) {
    font-size:20px;
    }
`;
const Info = styled.p`
@media screen and (max-width: 1400px) {
    font-size:14px;
    }
`;
function ShowList(props){
  const list = props.searchDataList.map((datalist)=>
    <PlaceInfo key={datalist.id}>
      <Name>{datalist.restaurant_name}</Name>
      <Info>{datalist.address}</Info>
      <Info>{datalist.number}</Info>
    </PlaceInfo>
  )
  return(
    <div>{list}</div>
  )
}
function DataCategory({categoryId}) {
    const [searchDataList,setSearchDataList]=useState('');
    var searchData = [];
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/meomeok/restaurants/')
      .then(results=>results.json())
      .then(results=>{
        results.map((result)=>{
            if(result.category==categoryId){
                searchData.push(result)
            }
        })
        // 데이터리스트 중복 제거
        {
            searchData=searchData.filter((arr,index,callback)=>
            index=== callback.findIndex((d)=>d.restaurant_id === arr.restaurant_id))
            
        }
        setSearchDataList(searchData)
      });
  }, [categoryId]);
  
    return (
      <div>
        
        {searchDataList &&<ShowList searchDataList={searchDataList}/>}
      </div>
    )
}


export default DataCategory