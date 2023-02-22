import React from 'react'
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
    <NavLink to="/">Home</NavLink>/ {title}

    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 10rem;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  a {
    font-size: 3.2rem;
  }
`;

export default PageNavigation