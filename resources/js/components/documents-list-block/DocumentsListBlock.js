import React, {useEffect, useState} from "react";
import "./documents-list-block.scss";
import DocumentCard from "../document-card/DocumentCard";
import axiosInstance from "../../config/axios-instance";
import DeclarationCard from "../declaration-card/DeclarationCard";
import {Dropdown, Icon, Menu} from "antd";

const DocumentsListBlock = props => {
    const [pubs,setPubs] = useState([]);

    useEffect(() => {
        setPubs(props.publications);
    }, [props.publications]);
  return (
    <div className={"documents-list-block"} id={"publications-id"}>
      <div className="content-block-full-with">
        <div className="content-container">
          <h1 className={"blue-txt"}>Publications</h1>
          <h2 className={"blue-txt"}>Rapports de surveillance éléctorale</h2>
           <div className="margin-top-items">
               <Dropdown overlay={
                   <Menu onClick={()=>console.log("rapport")}>
                       <Menu.Item key="1">Rapports de surveillance éléctorale
                       </Menu.Item>
                   </Menu>
               }>
                   <a className="ant-dropdown-link drop-down-squared" onClick={e => e.preventDefault()}>
                       Rapports de surveillance éléctorale<Icon type="down" />
                   </a>
               </Dropdown>
               <Dropdown overlay={
                   <Menu onClick={()=>console.log("rapport")}>
                       <Menu.Item key="1">
                           2020
                       </Menu.Item> <Menu.Item key="2">
                       2019
                   </Menu.Item>
                       <Menu.Item key="2">
                           2018
                       </Menu.Item>

                   </Menu>
               }>
                   <a className="ant-dropdown-link drop-down-squared" onClick={e => e.preventDefault()}>
                       2020<Icon type="down" />
                   </a>
               </Dropdown>
           </div>
            <div className="list-documents">
                { props.publications.map(p => {
                    return <DocumentCard key={p.id} pub={p}/>
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsListBlock;
