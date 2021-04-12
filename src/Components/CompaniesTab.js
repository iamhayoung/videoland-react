import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

const Item = styled.div`
`;

const Name = styled.p`
  margin-top: 10px;
  font-weight: 300;
`;

const Message = styled.p``;

function Company({ companies }) {
  console.log(companies)
  return (
    <Container>
      {companies && companies.length > 0 ?
        companies.map(company => (
          <Item>
            <Name>{company.name}</Name>
          </Item>
        ))
        : (<Message>No data😢</Message>)
      }
    </Container>
  )
}

export default Company;