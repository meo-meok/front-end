import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./header";
import MapArea from "./MapArea";
import PlaceList from "./place_list";
import Review from "./review";
import SearchList from "./search_list";
import Data from "./data";

const Container = styled.div`
padding:0;
display:flex;
flex-direction:column;
`;

const Body = styled.div`
display:flex;
flex-direction:row;
`;

function Meomeok() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [name, setName] = useState(null); 
    const [id, setId] = useState(null); 
  
    useEffect(() => {
        // setData({name: "111", bio: 222})
      setLoading(true)
      fetch('http://127.0.0.1:8000/meomeok/restaurants')
    .then(type=>type.json())
    .then(result=>{
      console.log(result[1].restaurant_name)
      //console.log(keyword)
      setName(result.restaurant_name)
      setId(result.id)
    });
  },[]);
  
    return (
      <div>
        <h1>{name}</h1>
        <p>{id}</p>
      </div>
    )
  }

const Layout = () => {
    const Tabs={1:<PlaceList />,2:<Review />}
    const [activeTab,setActiveTab]=useState(1);
    const [keyword, setKeyword] = useState('포항 양덕동 맛집')

    return (
        <Container>
            {/* <Data /> */}
            <Header setActiveTab={setActiveTab} setKeyword={setKeyword}/>
            <Body>

                <Data keyword={keyword}/>
                <MapArea keyword={keyword}/>
                {activeTab===3 ?<SearchList keyword={keyword}/>:Tabs[activeTab]}
            </Body>
            <Meomeok></Meomeok>
         </Container>
    )
}
export default Layout