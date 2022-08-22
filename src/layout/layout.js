import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import MapArea from "./MapArea";
import PlaceList from "./place_list";
import Review from "./review";
import SearchList from "./search_list";

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
    const Tabs={1:<PlaceList />,2:<Review />}
    const [activeTab,setActiveTab]=useState(1);
    const [keyword, setKeyword] = useState('포항시 북구 장량로 114번길 18')

    return (
        <Container>
            <Header setActiveTab={setActiveTab} setKeyword={setKeyword}/>
            <Body>
                <MapArea keyword={keyword}/>
                {activeTab===3 ?<SearchList keyword={keyword}/>:Tabs[activeTab]}
            </Body>
    
        </Container>
    )
}
export default Layout