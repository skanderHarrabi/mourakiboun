import React, {useEffect} from "react";
import "./processio-tabs-block.scss";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import momnet from "moment";

const ProcessionTabsBlock = props => {

  return (
    <div className={"procession-tabs"}>
        <h1 className={"blue-txt custom-h1"}>Historique de
            Mourakiboun</h1>
      <Tabs defaultActiveKey="4" animated={true} tabPosition={"left"}>
          {props.processions.map(p => {
            {console.log(p.starting_period)}
             return <TabPane tab={<h3 className={"blue-txt tabpane-title"}>{momnet(p.starting_period).format("Y") + " - " + momnet(p.ending_period).format("Y")}</h3>} key={p.id}>
                  <div className="tab-proc-content">
                      <p className="year">année</p>
                      <h2 className={"blue-txt"}>{ momnet(p.starting_period).format("Y") + " - " + momnet(p.ending_period).format("Y")}</h2>
                      <p>{p.description}</p>
                  </div>
              </TabPane>
          })}
      </Tabs>
    </div>
  );
};

export default ProcessionTabsBlock;
