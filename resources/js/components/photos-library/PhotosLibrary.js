import React from "react";
import "./photos-library.scss";
import {Tabs} from "antd";
const {TabPane} = Tabs;

const PhotosLibrary = props => {
  console.log(props.photos)
  return (
    <div className={"photos-library"} id={"photos-id"}>
      <div className="content-block-full-with">
        <div className="content-container">
          <div className={"marger-top"}/>
          <h1 className={"blue-txt"}>Photos</h1>
          <div className="photos-list">
            <Tabs defaultActiveKey="1" tabPosition={"top"}>
              {Object.keys(props.photos).map((p, q) => {
                return <TabPane tab={p} key={p}>
                  <Tabs className={"custom-tab"} tabPosition={"bottom"}>
                    {props.photos[p].map(v => {
                      return <TabPane
                        tab={
                          <div className="tab-img">
                            <img
                              src={("storage/" + v.file)}
                              alt=""
                            />
                          </div>
                        }
                        key={v.id}
                      >
                        <div className="image-view">
                          <img
                            src={("storage/" + v.file)}
                            alt=""
                          />
                        </div>
                      </TabPane>
                    })}
                  </Tabs>
                </TabPane>

              })}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosLibrary;
