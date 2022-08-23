import React from "react";
import styled from "styled-components";

const Select = styled.select`
margin: auto 0;
padding: 0.3rem 0.5rem;
border-radius:10px;
border:1px solid #000055;
font-size: 13px;
`;
const OPITIONS = [
    {value:"star", name: "별점 순"},
    {value:"distance", name: "거리 순"},
    {value:"review", name: "후기 순"},
]
const SelectBox = ()=>{
    return (
        <Select>
            {OPITIONS.map((option) => (
                <option
                    value={option.value}
                    defaultValue="별점 순"
                >
                    {option.name}
                </option>
            ))}
        </Select>
    );
};
export default SelectBox;