import React, { useState, useEffect } from "react";
import styled from "styled-components";
import VideosTab from "Components/VideosTab";
import CompaniesTab from "Components/CompaniesTab";

const Container = styled.div``;

const TabBtnGroup = styled.ul`
  display: flex;
`;
const TabBtn = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 10px;
  background: #000;
  text-align: center;
  cursor: pointer;
`;
const TabContents = styled.div`
  padding: 30px;
  background: #000;
`;

function Tabs({ videos, companies, countries, seasons, episodes }) {
  const [tabs, setTabs] = useState([{ tabTitle: null, tabContent: null }]);
  const [tabIndex, setTabIndex] = useState(0);

  console.log(tabs)
  console.log(tabIndex)
  console.log(companies)
  console.log(countries)

  function clickTab(index) {
    setTabIndex(index)
  }

  useEffect(() => {
    setTabs([{ tabTitle: "Trailers", tabContent: <VideosTab videos={videos} /> }]);
    setTabs(prevTabs => [...prevTabs, {tabTitle: "Production Companies", tabContent: <CompaniesTab companies={companies} /> }]);
    setTabs(prevTabs => [...prevTabs, {tabTitle: "Production Countries", tabContent: 3 }]);
  }, [])

  return (
    <Container>
      <TabBtnGroup>
      <>
        {tabs.map((tab, index) => (
          <TabBtn key={index} onClick={() => clickTab(index)}>{tab.tabTitle}</TabBtn>
        ))}
      </>
      </TabBtnGroup>
      <TabContents>
        {tabs[tabIndex].tabContent}
      </TabContents>
    </Container>
  )
}

export default Tabs;