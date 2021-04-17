import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

function Country({ countries }) {
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

Country.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Country;