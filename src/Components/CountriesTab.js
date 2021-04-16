import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-gap: 40px;
`;

const Item = styled.div`
`;

const Name = styled.p`
  font-weight: 300;
`;

const Message = styled.p``;

function Company({ countries }) {
  console.log(countries)
  return (
    <Container>
      {countries && countries.length > 0 ?
        countries.map(company => (
          <Item key={company.iso_3166_1}>
            <Name>{company.name}</Name>
          </Item>
        ))
        : (<Message>No data😢</Message>)
      }
    </Container>
  )
}

export default Company;