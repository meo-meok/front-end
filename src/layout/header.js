import React, { useState, useLocation } from "react";
import styled from "styled-components";
import Googlebutton from "../Components/GoogleButton";

const Head = styled.div`
width: 100vw;
height: 13vh;
background: #D9D9D9;
paddings:0px 10px 0px 10px;
flex-direction:row;
display:flex;
text-align:center;
align-items:center;
border:1px solid black;
box-sizing:border-box;
`;
const Logo = styled.button`
width:9.740vw;
border:none;
background-color:transparent;
cursor:pointer;
font-size:20px;
`;
const Search = styled.div`
width:30vw;
height:5vh;
margin-right:35vw;
border: 1px solid #000;
border-radius:4px;
flex-direction:row;
display:flex;
@media screen and (max-width: 1400px) {
    margin-right:29vw;
    }
`;
const ImageContainer = styled.div`
width:3.8vw;
`;
const Image = styled.img`
width:70%;
`;
const SearchBtn = styled.button`
background-color:transparent;
border:none;
cursor:pointer;
&:focus{
    outline:none;
}
`;
const SearchBar = styled.input`
background-color:transparent;
border:none;
border-right: 1px solid #000;
width:100%;
padding:10px 10px;
font-size:16px;
&:focus{
    outline:none;
}
@media screen and (max-width: 1400px) {
    font-size:14px;
    height:3.2vh;
    }
`;
const Tab = styled.button`
font-size: 20px;
border: none;
outline: none;
cursor: pointer;
padding: 14px 16px;
transition: 0.3s;
background-color:transparent;
&:hover{  
    font-weight:bold;
  }
&:focus{
    font-weight:bold;
}
@media screen and (max-width: 1400px) {
    font-size:18px;
    
    }
`;

const Header = ({setActiveTab, setKeyword}) => {
    const [keywordInput, setKeywordInput] = useState('')
    const onClick = (event) => {
        if (event.target.name === "list"){
            setActiveTab(1);
        }
    }
    const handleOnkeyPress = (event) => {
        if (event.key === 'Enter'){
            setKeyword(keywordInput);
            setActiveTab(3);
        }
    }
    const handleKeywordInput = (event) => {
        setKeywordInput(event.target.value)
    }
    const handleKeywordSubmit = (event) => {  
        event.preventDefault(); 
        setKeyword(keywordInput)
        setActiveTab(3);

    }
    return (
        <Head>
            <Logo onClick={()=>{window.location.reload();}}>
                <Image src="imgs/meomeokz_logo_trans.png" />
            </Logo>
            <Search>
                <SearchBar type="text" name="search" onChange={handleKeywordInput} onKeyPress={handleOnkeyPress} placeholder="지역/ 가게명/ 메뉴 등으로 검색해주세요."/>
                <ImageContainer>
                    <SearchBtn onClick={handleKeywordSubmit}>
                        <Image src="imgs/search_logo.png" alt=""/>
                    </SearchBtn>
                </ImageContainer>
            </Search>
            <Tab name="list" onClick={onClick}>맛집리스트</Tab>

            <Googlebutton/>
        </Head>
    )
}
export default Header