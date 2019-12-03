import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const HeadingStyled = styled.h1`
    font-size:1rem;
`

const MenuNav = styled.ul`
    position: relative;
    left: -11rem;
    li {
        margin-left:.5rem;
    }
`
const HeaderStyled = styled.header`
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d6d5d5;
    li {
        display:inline-block;
    }
    li+li {
        margin-left: .5rem;
    }
    max-width: 1000px;
    border: 1px solid gray;
    background: #607D8B;
    color: #fff;
    box-sizing: border-box;
    padding: 1.2rem;
`;

const Header = () => {
    return (
        <HeaderStyled>
            <HeadingStyled>
                <NavLink to="/list">
                    뉴스스탠드
                </NavLink>
            </HeadingStyled>
            <MenuNav>
                <NavLink to="/hello">HelloWorld</NavLink>
            </MenuNav>
        </HeaderStyled>
    )
}

export default Header
