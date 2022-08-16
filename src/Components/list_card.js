import React from "react";
import styled from "styled-components";
import Data from "../layout/data";

const Card = styled.div`
height:18.7vh;
border-bottom:1px solid black;
display:flex;
padding: 0 1.5rem;
font-size:2rem;
font-weight:bold;

`;

function ListCard({keyword}){
    return(
        <div>
            <Card>{keyword}</Card>
            <Data keyword={keyword}/>
        </div>
    )
}
export default ListCard;