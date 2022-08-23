import React, { useState } from "react";
import styled from "styled-components";
import ReviewForm from "../Components/reviewForm";
import StarTating from "../Components/StarRating";
const Container = styled.div`
width:23vw;
height:91vh;
background-color:#white;
float:right;
border-left:2px solid #ddd;
box-sizing:border-box;
padding: 0 1.2rem 0.5rem 1.2rem;
`;
const CloseButton = styled.button`
cursor:pointer;
text-align:right;
font-size:1.5rem;
margin-top:0.5rem;
background-color: transparent;
border: none;
`;
const PlaceInfo = styled.div`
height:28vh;
border-bottom:1px solid black;
display:flex;
flex-direction:column;
padding: 0 0.5rem;
`;
const ReviewWrite = styled.div`
height:56vh;
// padding: 0 1.5rem;

`;
const Name = styled.h1`
margin-bottom:1.3rem;
color:#000055;
font-size:24px;
@media screen and (max-width: 1400px) {
    font-size:20px;
    }
`;
const Info = styled.p`
font-size:14px;
margin-bottom:0;
@media screen and (max-width: 1400px) {
    font-size:14px;
    }
`;

const PlaceDetail = ({PlaceDetailInfo,setIsShowPlaceDetail,setActiveTab}) => {
    const [activeReview,setActiveReview]=useState(true);
    const [reviewcontent,setReviewContent]= useState("");
    const handlePlaceDetailView = ()=>{
        return (
            setIsShowPlaceDetail(false),
            setActiveTab(1)
        )
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
                <ReviewForm />
            </ReviewWrite>
        </Container>
    )
}
export default PlaceDetail
