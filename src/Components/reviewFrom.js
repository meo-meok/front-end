import React,{useState} from "react";
import styled from "styled-components";

const Container = styled.div`
height:25vh;
`;

const Form = styled.form`
width:100%;
height:80%;
border:1px solid black;
`;
const TextArea = styled.textarea`
width:100%;
height:100%;
resize:none;
font-size: 14px;
border: 10px solid transparent;
box-sizing:border-box;
&:focus{
    outline:none;
}
@media screen and (max-width: 1400px) {
    font-size:12px;
    }
`;
const ReviewInfo = styled.div`
justify-content:space-between;
display:flex;
flex-direction:row;
width:100%;
`;
const UserInfo = styled.div`
font-size:12px;
`;
const TextLimit = styled.p`
font-size:12px;
`;
const SubmitContainer = styled.div`
margin-top:1rem;
text-align:center;
`;
const SubmitBtn = styled.button`
font-size:16px;
border-radius:5px;
border:1px solid black;
background-color:#fff;
cursor:pointer;
&:hover{
    background-color:#ddd;
}
@media screen and (max-width: 1400px) {
    font-size:14px;
    }
`;
const ReviewForm = ({setActiveReview,setReviewContent}) =>{
    const [textArea,setTextArea] =useState("");
    const handleChange = (event)=>{
        if(textArea.length<100){
            setTextArea(event.target.value);
        }else{
            event.target.value=textArea.substring(0,99);
            setTextArea(event.target.value);
        }
    }
    const SubmitClick = () =>{
        setReviewContent(textArea);
        setActiveReview(false);
    }
    return(
        <Container>
            <ReviewInfo>
                <UserInfo><p>👩 User12354865</p></UserInfo>
                <TextLimit>{textArea.length}/100</TextLimit>
            </ReviewInfo>
            <Form>
                <TextArea value={textArea} onChange={handleChange} placeholder="100자 이내로 리뷰를 작성해주세요."/>
            </Form>
            <SubmitContainer>
                <SubmitBtn onClick={SubmitClick}>등록</SubmitBtn>
            </SubmitContainer>
        </Container>
        
    );
};
export default ReviewForm;