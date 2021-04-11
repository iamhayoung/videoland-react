import React from "react";
import styled from "styled-components";

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

export default Message;