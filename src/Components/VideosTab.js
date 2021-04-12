import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

const Item = styled.div`
`;

const Player = styled.iframe`
  width: 100%;
  max-width: 800px;
`;

const Name = styled.p`
  margin-top: 10px;
  font-weight: 300;
`;

const Message = styled.p``;

function Video({ videos }) {
  console.log(videos)
  return (
    <Container>
      {videos && videos.length > 0 ?
        videos.map(video => (
          <Item key={video.id}>
            <Player src={`https://www.youtube.com/embed/${video.key}`} height="220px" />
            <Name>{video.name}</Name>
          </Item>
        ))
        : (<Message>No data😢</Message>)
      }
    </Container>
  )
}

export default Video;