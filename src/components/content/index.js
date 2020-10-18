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
                flightNo:v.flight_number,
                launchYear: v.launch_year,
                successLaunch: v.launch_success,
                launchLanding:v.rocket.first_stage.cores[0].land_success,
                imgURL: v.links.mission_patch_small,
                missionId:v.mission_id
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
