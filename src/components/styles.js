import styled from "styled-components";

export const ChartsHolder = styled.div`
    text-align: center;
    position: relative;
    background: rgb(240, 210, 155);
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 5rem 0;
    border: 0.2rem solid rgb(66, 127, 184);
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    width: 80%;
    z-index: -1;
    &:hover h2{
        margin-top: -0.3rem;
        padding: 1rem;
    }
`

export const ChartsTitle = styled.h2`
    background: rgb(66, 127, 184);
    color: rgb(240, 210, 155);
    margin-top: -0.4rem;
    right:1rem;
    padding: 0.1rem 0.5rem;
    border-radius: 0 0 1rem 1rem;
    cursor: default;
    position: absolute;
`

export const ChartTypeHolder = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: inherit;
`

export const Chart = styled.div`
    margin: 1rem;
    width: 28rem;
    height: 20rem;
    resize: both;
    padding-bottom: 5rem;
    overflow: hidden;
`
