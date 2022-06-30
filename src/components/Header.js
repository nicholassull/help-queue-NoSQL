import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 24;
  text-align: center;
  color: grey;
`;

const StyledWrapper = styled.section`
  background-color: aliceblue;
`;

const StyledListItem = styled.li`
  display: inline;
  margin-right: 20px;
  
`;

function Header(){
  return (
    <StyledWrapper>
      <HelpQueueHeader>
        Help Queue
      </HelpQueueHeader>
      <ul>
        <StyledListItem>
          <Link to="/">Home</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/signin">Sign In</Link>
        </StyledListItem>
      </ul>
    </StyledWrapper>
  );
}

export default Header;