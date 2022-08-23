import React, { useState } from "react";
import styled from "styled-components";
import SelectBox from "../Components/selectBox";
import DataCategory from "../Components/dataCategory";
import PlaceDetail from "./placeDetail";

const MainContainer = styled.div`
display:flex;
flex-direction:row;
`;
const Container = styled.div`
width:30vw;
height:91vh;
background-color:white;
float:right;
border-left:2px solid #ddd;
box-sizing:border-box;
`;
const ListTop = styled.div`
height:13.9vh;
border-bottom:2px solid #000055;
box-sizing:border-box;
display:flex;
justify-content: space-between;
margin: 0 1.5rem;
margin-bottom:1rem;
`;
const ListName = styled.h1`
margin: auto 0;
font-size:24px;
color:#000055;
@media screen and (max-width: 1400px) {
    font-size:20px;
    }
`;
const CategoryNav = styled.div`
height:6vh;
padding:0 1.5rem 1rem 1.5rem;
`;
const NavBtn = styled.button`
border:1px solid #444444;
border-radius:10px;
margin-right:0.2rem;
margin-bottom:0.2rem;
padding: 5px 5px;
cursor:pointer;
background-color:white;
font-size:13px;
&:hover{  
    font-weight:bold;
    background-color:#000055;
    color:white;
  }
@media screen and (max-width:1400px){
    font-size:14px;
}
`;
const ScrollArea =styled.div`
height:67.42vh;
overflow: auto;
text-align: justify;
::-webkit-scrollbar {
    display:none;
  }
`;

function NavButton ({Names,setCategoryId}){
    const onClick =()=>{
        setCategoryId(Names[0])
    }
    return(
        <NavBtn onClick={onClick}>
            {Names[1]}
        </NavBtn>
    )
}


const PlaceList = ({setCateId,setActiveTab,setKeyword,setSearchData}) => {
    const NAMES = {1:"한식/분식", 2:"돈까스/회/일식", 3:"중식", 4:"양식", 5:"아시안", 6:"고기/구이", 7:"닭/치킨", 8:"찜/탕/찌개", 9:"패스트푸드", 10:"카페/디저트", 11:"호프/주류"}
    const [categoryId,setCategoryId]=useState(1);
    const [isShowPlaceDetail,setIsShowPlaceDetail]=useState(false);
    const [PlaceDetailInfo, setPlaceDetailInfo]=useState('');
    setCateId(categoryId)
    
    return (
        <MainContainer>
            {isShowPlaceDetail && 
                <PlaceDetail PlaceDetailInfo={PlaceDetailInfo} setIsShowPlaceDetail={setIsShowPlaceDetail} setActiveTab={setActiveTab}>
                    {setActiveTab(2)},
                    {setKeyword(PlaceDetailInfo['restaurant_name'])},
                    {setSearchData(PlaceDetailInfo)}
                </PlaceDetail>
            }
            <Container>
                <ListTop>
                    <ListName>내 주변 맛집</ListName>
                    <SelectBox />
                </ListTop>
                <CategoryNav>
                    {Object.entries(NAMES).map((e)=><NavButton Names={e} setCategoryId={setCategoryId}></NavButton>)}
                </CategoryNav>
                <ScrollArea>
                    <DataCategory categoryId={categoryId} setIsShowPlaceDetail={setIsShowPlaceDetail} 
                    setPlaceDetailInfo={setPlaceDetailInfo}/>
                </ScrollArea>
            </Container>
        </MainContainer>
    )
}
export default PlaceList
