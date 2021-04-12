import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 40px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Image = styled.div`
  margin-bottom: 10px;
  align-self: end;
`;

const Logo = styled.img`
`;

const Name = styled.p`
  margin-top: 5px;
  font-weight: 300;
  text-align: center;
  align-self: end;
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

export default Company;