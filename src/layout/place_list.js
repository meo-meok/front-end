import React from "react";
import styled from "styled-components";
import SelectBox from "../Components/selectBox";
import ListCard from "../Components/list_card";

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

function NavButton ({Names}){
    return(
        <NavBtn>
            {Names}
        </NavBtn>
    )
}

const PlaceList = () => {
    const NAMES = ["한식","중식","양식","일식","디저트"]
    return (
        <MainContainer>
            <Container>
                <ListTop>
                    <ListName>내 주변 맛집</ListName>
                    <SelectBox />
                </ListTop>
                <CategoryNav>
                    {NAMES.map((name)=><NavButton Names={name}></NavButton>)}
                </CategoryNav>
                <ScrollArea>
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </ScrollArea>
            </Container>
        </MainContainer>
    )
}
export default PlaceList
