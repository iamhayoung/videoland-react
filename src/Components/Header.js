import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 0 0 50px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.9);
  z-index: 10;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  height: 60px;
  margin-right: 40px;
  color: #e50914;
  font-size: 20px;
  font-weight: 900;
  font-style: italic;
  text-shadow: 2px 2px #fff;
  text-align: center;
`;

const NavList = styled.ul`
  display: flex;
  flex: none;
`;

const Item = styled.li`
  width: 90px;
  height: 60px;
  text-align: center;
  color: ${props => props.current ? "#fff" : "#797979"};
  font-weight: ${props => props.current ? 600 : 300};
  border-bottom: 3px solid ${props => props.current ? "#e50914" : "transparent"};
  transition: .3s ease-in-out;

  &:hover {
    color: #fff;
    border-bottom: 3px solid ${props => props.current ? "#e50914" : "#7d7d7d"};
  }
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

const Search = styled.div`
  flex: none;
  margin-left: auto;
  height: 60px;
`;

const SearchItem = styled.div`
  padding: 0 20px;
`;

const SearchLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 30px;
  font-size: 20px;
  color: #fff;
  font-weight: ${props => props.current ? 600 : 300};
  border-bottom: 3px solid ${props => props.current ? "#e50914" : "transparent"};
  transition: .3s ease-in-out;

  &:hover {
    border-bottom: 3px solid ${props => props.current ? "#e50914" : "#7d7d7d"};
  }
`;

function HeaderComponent({ location: { pathname } }) {
  return (
    <>
      <Header>
        <Logo to="/">Videoland</Logo>
        <NavList>
          <Item current={pathname === "/" ? 1 : 0}>
            <SLink to="/">Home</SLink>
          </Item>
          <Item current={pathname.includes("/movie") ? 1 : 0}>
            <SLink to="/movie">Movies</SLink>
          </Item>
          <Item current={pathname.includes("/tv") ? 1 : 0}>
            <SLink to="/tv">TV Shows</SLink>
          </Item>
        </NavList>
        <Search>
          <SearchItem>
            <SearchLink current={pathname === "/search" ? 1 : 0} to="/search">
              <FontAwesomeIcon icon={faSearch} />
            </SearchLink>
          </SearchItem>
        </Search>
      </Header>
    </>
  )
}

export default withRouter(HeaderComponent);