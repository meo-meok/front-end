import React, { useState } from "react";
import styled from "styled-components";
import ReviewForm from "../Components/reviewFrom";
import StarTating from "../Components/StarRating";
const Container = styled.div`
width:24vw;
height:87vh;
background-color:#ddd;
float:right;
border:1px solid black;
box-sizing:border-box;
`;
const CloseButton = styled.button`
cursor:pointer;
text-align:right;
font-size:2rem;
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

const PlaceDetail = ({PlaceDetailInfo,setIsShowPlaceDetail}) => {
    const [activeReview,setActiveReview]=useState(true);
    const [reviewcontent,setReviewContent]= useState("");
    const handlePlaceDetailView = ()=>{
        return setIsShowPlaceDetail(false)
      }
    return (
        <Container>
            <PlaceInfo>
                <CloseButton onClick={handlePlaceDetailView}>x</CloseButton>
                <Name>{PlaceDetailInfo['restaurant_name']}</Name>
                <Info>🏠 {PlaceDetailInfo['address']}</Info>
                <Info>📢 영업 중 15:00 에 브레이크타임</Info>
                <Info>📞 {PlaceDetailInfo['number']}</Info>
            </PlaceInfo>
            <ReviewWrite>
                리뷰리뷰리뷰
            </ReviewWrite>
        </Container>
    )
}
export default PlaceDetail
