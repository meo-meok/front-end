import React,{useState} from "react";
import styled from "styled-components";
//import { ReactDOM } from "react-dom/client";

const Form = styled.form`
width:100%;
height:25vh;
border:1px solid black;
`;
const TextArea = styled.textarea`
width:100%;
height:100%;
resize:none;
font-size: 16px;
border: 10px solid transparent;
box-sizing:border-box;

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
const ReviewForm = () =>{
    const [textArea,setTextArea] =useState("");
    const handleChange = (event)=>{
        if(textArea.length<100){
            setTextArea(event.target.value);
        }else{
            event.target.value=textArea.substring(0,99);
            setTextArea(event.target.value);
        }
    }
    return(
        <div>
            <ReviewInfo>
                <UserInfo><p>👩 User12354865</p></UserInfo>
                <TextLimit>{textArea.length}/100</TextLimit>
            </ReviewInfo>
            <Form>
                <TextArea value={textArea} onChange={handleChange} placeholder="100자 이내로 리뷰를 작성해주세요."/>
            </Form>
        </div>
        
    );
};
export default ReviewForm;