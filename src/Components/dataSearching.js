import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
height:100%;
display:flex;
flex-direction:column;
padding: 0 1.2rem 0.5rem 1.2rem;
`;
const PlaceInfo = styled.div`
padding: 0 1.2rem;
`;
const SelectPlace = styled.a`
cursor:pointer;
text-align:left;
background-color:white;
border-radius:10px;
box-sizing:border-box;
border:0.5px solid #000055;
&:hover{  
  border:2.5px solid #000055;
}
`;
const Name = styled.h1`
margin-bottom:0rem;
color:#444444;
font-size:20px;
@media screen and (max-width: 1400px) {
    font-size:20px;
    }
`;
const Info = styled.p`
font-size:14px;
@media screen and (max-width: 1400px) {
    font-size:14px;
    }
`;
function ShowList(props) {
  const list = props.searchDataList.map((datalist) =>
    <Container>
      <SelectPlace>
        <PlaceInfo key={datalist.id}>
          <Name>{datalist.restaurant_name}</Name>
          <Info>{datalist.address}</Info>
          <Info>{datalist.number}</Info>
        </PlaceInfo>
      </SelectPlace>
    </Container>
  )
  return (
    <div>{list}</div>
  )
}
function DataSearching({ searchDataList }) {
  return (
    <div>
      {searchDataList.length === 0
        ? <PlaceInfo>검색 결과가 없습니다.</PlaceInfo>
        : <ShowList searchDataList={searchDataList} />
      }
    </div>
  )
}


export default DataSearching