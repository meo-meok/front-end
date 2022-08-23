
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataSearching from "../Components/dataSearching";
const MainContainer = styled.div`
`;
const Container = styled.div`
width:30vw;
height:91vh;
background-color:#white;
float:right;
border-left:2px solid #ddd;
box-sizing:border-box;
`;
const ListTop = styled.div`
height:13.9vh;
border-bottom:2px solid #000055;
box-sizing:border-box;
display:flex;
justify-content: space-between;
margin: 0 1.5rem;
margin-bottom:1rem;
`;
const ListName = styled.h1`
margin: auto 0;
font-size:24px;
color:#000055;
@media screen and (max-width: 1400px) {
    font-size:20px;
    }
`;
const ScrollArea = styled.div`
height:72.42vh;
overflow: auto;
text-align: justify;
::-webkit-scrollbar {
    display:none;
  }
`;
const SearchList = ({ keyword, ReturnData }) => {
    const [searchDataList, setSearchDataList] = useState('');
    var searchData = [];

    useEffect(() => {
        fetch('http://127.0.0.1:8000/meomeok/restaurants/')
            .then(results => results.json())
            .then(results => {
                results.map((result) => {
                    // 검색내용과 일치하는 배열 찾기
                    let str = result.restaurant_name.replaceAll(/ /gi, "");
                    if (str.indexOf(keyword.replaceAll(/ /gi, "")) !== -1) {
                        searchData.push(result);
                    }
                })
                // 데이터리스트 중복 제거

                searchData = searchData.filter((arr, index, callback) =>
                    index === callback.findIndex((d) => d.restaurant_id === arr.restaurant_id))

                setSearchDataList(searchData)
                
            });
    }, [keyword]);
    console.log("search List : ", searchDataList)
    ReturnData(searchDataList)


    return (
        <MainContainer>
            <Container>
                <ListTop>
                    <ListName>검색 결과</ListName>
                </ListTop>
                <ScrollArea>
                    <DataSearching searchDataList={searchDataList} />
                </ScrollArea>
            </Container>
        </MainContainer>
    );
};
export default SearchList;