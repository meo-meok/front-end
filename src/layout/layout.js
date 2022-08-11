import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import MapArea from "./MapArea";
import PlaceList from "./place_list";
import Review from "./review";

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
    const [keyword, setKeyword] = useState('포항 양덕동 맛집')

    return (
        <Container>
            <Header setActiveTab={setActiveTab} setKeyword={setKeyword}/>
            <Body>
                <MapArea keyword={keyword}/>
                {Tabs[activeTab]}                
            </Body>
        </Container>
    )
}
export default Layout