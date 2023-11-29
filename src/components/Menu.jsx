import React, { useState, useRef } from "react";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  TabIndicator,
} from "@chakra-ui/react";
import CardMenu from "./CardMenu";
import Title from "./Title";

function Menu({ menus }) {
  const [listMenu, setListMenu] = useState("ALL MENU");
  const lists = ["ALL MENU", "FOOD", "DRINK"];
  return (
    <section className="w-full pt-28" id="menu">
      <div className="container">
        <Title title="menu" />
        <main className="w-full order={order} bg-primary rounded-xl mt-24 pt-6 pb-8">
          <Tabs variant="unstyled" align="center">
            <TabList>
              {lists?.map((list, i) => (
                <Tab
                  onClick={(e) => {
                    setListMenu(e.target.textContent);
                  }}
                  key={i}
                >
                  {list}
                </Tab>
              ))}
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="3px"
              bg="black"
              borderRadius="5px"
            />
            <TabPanels>
              <TabPanel>
                <CardMenu type={listMenu} menus={menus}/>
              </TabPanel>
              <TabPanel>
                <CardMenu type={listMenu} menus={menus}/>
              </TabPanel>
              <TabPanel>
                <CardMenu type={listMenu} menus={menus}/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </main>
      </div>
    </section>
  );
}

export default Menu;
