import React from "react";
import styled from "styled-components";
import Data from "../layout/data";

const Card = styled.div`
height:20vh;
display:flex;
padding: 1rem 1.5rem;

`;

function ListCard({keyword}){
    return(
        <Card>
                <Data keyword={keyword}/>   
        </Card>
    )
}
export default ListCard;