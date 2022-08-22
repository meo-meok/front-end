import React from "react";
import styled from "styled-components";
import DataSearching from "../Components/dataSearching";
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
const ScrollArea =styled.div`
height:100%;
overflow: auto;
text-align: justify;
// ::-webkit-scrollbar {
//     display:none;
  }
`;
const SearchList = ({keyword}) => {
    return(
        <MainContainer>
            <Container>
                <ScrollArea>
                <DataSearching keyword={keyword}/>
                </ScrollArea>
            </Container>
        </MainContainer>
    );
};
export default SearchList;