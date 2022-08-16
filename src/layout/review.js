import React, { useState } from "react";
import styled from "styled-components";
import ReviewForm from "../Components/reviewFrom";
import StarTating from "../Components/StarRating";
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
// const Name = styled.h1`
// margin: auto 0;
// `;


const Review = () => {
    // const ReviewTabs = {0:null,1:<ReviewForm />}
    const [activeReview,setActiveReview]=useState(true);
    const [reviewcontent,setReviewContent]= useState("");
    return (
        <MainContainer>
            <Container>
                <PlaceInfo>
                    {/* <Name>까치식당</Name> */}
                    {/* <h1>{name}</h1>
                    <p>🏠 {address}</p>
                    <p>📢 {notice}</p>
                    <p>📞 {call}</p> */}
                    <Name>까치식당</Name>
                    <Info>🏠 경북 포항시 북구 장량로 158번길 5-13</Info>
                    <Info>📢 영업 중 15:00 에 브레이크타임</Info>
                    <Info>📞 0507-1421-2367</Info>
                </PlaceInfo>
                <ReviewWrite>
                  <Name>리뷰쓰기</Name>
                  <StarTating />
                  {activeReview && <ReviewForm setActiveReview={setActiveReview} setReviewContent={setReviewContent}/>}
                  {reviewcontent}
                </ReviewWrite>
            </Container>
        </MainContainer>
    )
}
export default Review
