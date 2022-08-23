import React, { useState, useEffect } from "react";
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
const ScrollArea = styled.div`
height:100%;
overflow: auto;
text-align: justify;
// ::-webkit-scrollbar {
//     display:none;
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
                <ScrollArea>
                    <DataSearching searchDataList={searchDataList} />
                </ScrollArea>
            </Container>
        </MainContainer>
    );
};
export default SearchList;