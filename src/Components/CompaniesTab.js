import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Item = styled.div`
`;

const Image = styled.div`
  position: relative;
  height: 200px;
  background: #fff;
`;

const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Name = styled.p`
  margin-top: 10px;
  font-weight: 300;
  text-align: center;
`;

const Message = styled.p``;

function Company({ companies }) {
  console.log(companies)
  return (
    <Container>
      {companies && companies.length > 0 ?
        companies.map(company => (
          <Item key={company.id}>
            {
              <Image>
                <Logo src={company.logo_path !== null ? `https://image.tmdb.org/t/p/w200${company.logo_path}` : require("../assets/noLogo.png").default}></Logo>
              </Image>
            }
            <Name>{company.name}</Name>
          </Item>
        ))
        : (<Message>No data😢</Message>)
      }
    </Container>
  )
}

Company.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      logo_path: PropTypes.string,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Company;