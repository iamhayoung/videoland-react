import React, { useState, useEffect } from "react";
import styled from "styled-components";
import VideosTab from "Components/VideosTab";
import CompaniesTab from "Components/CompaniesTab";
import CountriesTab from "Components/CountriesTab";
import SeasonsTab from "Components/SeasonsTab";

const Container = styled.div``;

const TabBtnGroup = styled.ul`
  display: flex;
`;

const TabBtn = styled.li`
  height: 50px;
  flex: 1 1 0;
  width: 0;
  background: #000;
  text-align: center;
  cursor: pointer;
`;

const TabText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  text-transform: uppercase;
  color: ${props => props.active ? "#fff" : "#797979"};
  border-bottom: 3px solid ${props => props.active ? "#e50914" : "transparent"};
  transition: .3s ease-in-out;

  &:hover {
    color: #fff;
    border-bottom: 3px solid ${props => props.active ? "#e50914" : "#7d7d7d"};
  }
`;

const TabContents = styled.div`
  padding: 30px;
  background: rgba(0, 0, 0, 0.2);
`;

function Tabs({ videos, companies, countries, seasons }) {
  const [tabs, setTabs] = useState([{ tabTitle: null, tabContent: null }]);
  const [tabIndex, setTabIndex] = useState(0);

  console.log(tabs)
  console.log(tabIndex)
  console.log(seasons)

  function clickTab(index) {
    setTabIndex(index)
  }

  useEffect(() => {
    setTabs([{ tabTitle: "Trailers", tabContent: <VideosTab videos={videos} /> }]);
    setTabs(prevTabs => [...prevTabs, {tabTitle: "Companies", tabContent: <CompaniesTab companies={companies} /> }]);
    setTabs(prevTabs => [...prevTabs, { tabTitle: "Countries", tabContent: <CountriesTab countries={countries} /> }]);
    if (seasons !== undefined) {
      console.log("hoho")
      setTabs(prevTabs => [...prevTabs, { tabTitle: "Seasons", tabContent: <SeasonsTab seasons={seasons} /> }]);
    }
  }, [])

  return (
    <Container>
      <TabBtnGroup>
      <>
        {tabs.map((tab, index) => (
          <TabBtn key={index} onClick={() => clickTab(index)}>
            <TabText active={index === tabIndex}>
              {tab.tabTitle}
            </TabText>
          </TabBtn>
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