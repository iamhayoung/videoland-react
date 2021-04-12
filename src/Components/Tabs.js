import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

function Tabs({ videos, companies, countries }) {
  const [tabs, setTabs] = useState([{ tabTitle: null, tabContent: null }]);
  const [contents, setContents] = useState(null);
  console.log(tabs)
  console.log(videos)
  console.log(companies)
  console.log(countries)

  function tabClick(event) {
    console.log(event.target)
    console.log("click")
  }

  useEffect(() => {
    setTabs([{ tabTitle: "Trailers", tabContent: videos.map(video => video.key) }]);
    setTabs(prevTabs => [ ...prevTabs, {tabTitle: "Production Companies", tabContent: companies.map(company => company.name) }]);
    setTabs(prevTabs => [...prevTabs, {tabTitle: "Production Countries", tabContent: countries.map(country => country.name)}]);
  }, [])

  return (
    <Container>
      {tabs.map(tab => (
        <>
          <button onClick={tabClick}>{tab.tabTitle}</button>
          <div>
            {/* {tab.tabContent.map(cont => cont)} */}
          </div>
        </>
      ))}
    </Container>
  )
}

export default Tabs;