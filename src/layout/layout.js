import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import MapArea from "./MapArea";
import PlaceList from "./place_list";
import Review from "./review";
import SearchList from "./search_list";
import CategoryMap from "./CategoryMap";

const Container = styled.div`
padding:0;
display:flex;
flex-direction:column;
`;

const Body = styled.div`
display:flex;
flex-direction:row;
`;


const Layout = () => {
    const [activeTab,setActiveTab]=useState(1);
    const [keyword, setKeyword] = useState('포항시 북구 장량로 114번길 18')
    const [categoryId, setCateId] = useState(1);
    const Tabs={1:<PlaceList setCateId={setCateId}/>}

    const [searchData, setSearchData] = useState([]);
    // console.log("Layout1 : ", searchData)
    
    return (
        <Container>
            {console.log(activeTab)}
            <Header setActiveTab={setActiveTab} setKeyword={setKeyword}/>
            <Body>
                {activeTab===1 ? <CategoryMap categoryId={categoryId}/>:<MapArea keyword={keyword} activeTab={activeTab} searchData={searchData}/>}
                {activeTab===3 ?
                <SearchList keyword={keyword} ReturnData={setSearchData}/>:
                <PlaceList setCateId={setCateId} setActiveTab={setActiveTab} setKeyword={setKeyword} setSearchData={setSearchData}/>}
            </Body>
    
        </Container>
    )
}
export default Layout