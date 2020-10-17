import React, { PureComponent } from "react";
import Item from "../Item/Item";
import style from "./index.module.css";

class Content extends PureComponent {
  render() {
    const { launchesData } = this.props;
    return (
      <div className={style["content-container"]}>
        {launchesData.map((v) => {
          return (
            <Item
              missionDetails={{
                name: v.mission_name,
                launchYear: v.launch_year,
                successLaunch: v.launch_success,
                imgURL: v.links.mission_patch,
              }}
            />
          );
        })}

        {/* {launchesData.map((v) => {
          return <div>{v.mission_name} {v.launch_year}</div>  ;
        })}
       */}
      </div>
    );
  }
}

export default Content;
