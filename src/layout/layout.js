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
    const [activeMap,setActiveMap]=useState(1);
    const [keyword, setKeyword] = useState('포항시 북구 장량로 114번길 18')
    const [categoryId, setCateId] = useState(1);
    const [isShowPlaceDetail,setIsShowPlaceDetail]=useState(false);
    const [PlaceDetailInfo, setPlaceDetailInfo]=useState('');
    // const Tabs={1:<PlaceList setCateId={setCateId}/>}

    const [searchData, setSearchData] = useState([]);
    // console.log("Layout1 : ", searchData)
    
    return (
        <Container>
            {/* {console.log(activeTab)} */}
            <Header setActiveTab={setActiveTab} setActiveMap={setActiveMap} setKeyword={setKeyword} setIsShowPlaceDetail={setIsShowPlaceDetail}/>
            <Body>
                {activeMap===1 ? 
                <CategoryMap categoryId={categoryId}/>:
                <MapArea 
                    activeTab={activeTab} 
                    searchData={searchData} 
                    activeMap={activeMap}/>}

                {activeTab===1 ?
                <PlaceList 
                    setCateId={setCateId} 
                    activeTab={activeTab}
                    setActiveMap={setActiveMap} 
                    setKeyword={setKeyword} 
                    setSearchData={setSearchData}
                    isShowPlaceDetail={isShowPlaceDetail}
                    setIsShowPlaceDetail={setIsShowPlaceDetail}
                    PlaceDetailInfo={PlaceDetailInfo}
                    setPlaceDetailInfo={setPlaceDetailInfo}/>:
                <SearchList 
                    keyword={keyword} 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setActiveMap={setActiveMap}
                    setKeyword={setKeyword}
                    setSearchData={setSearchData}
                    isShowPlaceDetail={isShowPlaceDetail}
                    setIsShowPlaceDetail={setIsShowPlaceDetail}
                    PlaceDetailInfo={PlaceDetailInfo}
                    setPlaceDetailInfo={setPlaceDetailInfo}/>}
                
            </Body>
    
        </Container>
    )
}
export default Layout