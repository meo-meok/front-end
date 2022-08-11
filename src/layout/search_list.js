import React,{useState} from "react";
import styled from "styled-components";
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
const PlaceInfo = styled.div`
height:34vh;
border-bottom:1px solid black;
display:flex;
flex-direction:column;
padding: 0 1.5rem;
`;
const ReviewWrite = styled.div`
height:50vh;
padding: 0 1.5rem;

`;
const SearchList = ({keyword}) => {
    return(
        <MainContainer>
            <Container>
                <h1>{keyword}</h1>
            </Container>
        </MainContainer>
    );
};
export default SearchList;