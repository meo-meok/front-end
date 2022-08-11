import React from "react";
import styled from "styled-components";
import ReviewForm from "../Components/reviewFrom";
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
// const Name = styled.h1`
// margin: auto 0;
// `;


const Review = () => {
    return (
        <MainContainer>
            <Container>
                <PlaceInfo>
                    {/* <Name>까치식당</Name> */}
                    {/* <h1>{name}</h1>
                    <p>🏠 {address}</p>
                    <p>📢 {notice}</p>
                    <p>📞 {call}</p> */}
                    <h1>까치식당</h1>
                    <p>🏠 경북 포항시 북구 장량로 158번길 5-13</p>
                    <p>📢 영업 중 15:00 에 브레이크타임</p>
                    <p>📞 0507-1421-2367</p>
                </PlaceInfo>
                <ReviewWrite>
                  <h1>리뷰쓰기</h1>
                  <ReviewForm />
                </ReviewWrite>
                
            </Container>
        </MainContainer>
    )
}
export default Review
