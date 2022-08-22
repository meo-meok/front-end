import React, { useState } from "react";
import styled from "styled-components";
import SelectBox from "../Components/selectBox";
import DataCategory from "../Components/dataCategory";

const MainContainer = styled.div`
`;
const Container = styled.div`
width:30vw;
height:87vh;
background-color:#ddd;
float:right;
border:1px solid black;
box-sizing:border-box;
`;
const ListTop = styled.div`
height:14.9vh;
border-bottom:1px solid black;
display:flex;
justify-content: space-between;
padding: 0 1.5rem;
`;
const ListName = styled.h1`
margin: auto 0;
@media screen and (max-width: 1400px) {
    font-size:26px;
    }
`;
const CategoryNav = styled.div`
height:6vh;
border-bottom:1px solid black;
display:flex;
justify-content: space-between;
`;
const NavBtn = styled.button`
border:none;
cursor:pointer;
width:100%;
background-color:transparent;
font-size:16px;
&:hover{  
    font-weight:bold;
    background-color:white;
  }
@media screen and (max-width:1400px){
    font-size:14px;
}
`;
const ScrollArea =styled.div`
height:63.42vh;
overflow: auto;
text-align: justify;
// ::-webkit-scrollbar {
//     display:none;
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

const PlaceList = () => {
    const NAMES = {1:"한식/분식",2:"돈까스/회/일식",3:"중식",4:"양식",5:"아시안"}
    const [categoryId,setCategoryId]=useState(1);
    return (
        <MainContainer>
            <Container>
                <ListTop>
                    <ListName>내 주변 맛집</ListName>
                    <SelectBox />
                </ListTop>
                <CategoryNav>
                    {Object.entries(NAMES).map((e,idx)=><NavButton Names={e} setCategoryId={setCategoryId}></NavButton>)}
                </CategoryNav>
                <ScrollArea>
                    <DataCategory categoryId={categoryId}/>
                </ScrollArea>
            </Container>
        </MainContainer>
    )
}
export default PlaceList
