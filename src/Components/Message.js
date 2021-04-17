import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.p`
  margin: 40px 0;
  color: ${props => props.color};
  text-align: center;
`;

function Message({ text, color }) {
  return (
    <Text color={color}>{text}</Text>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Message;