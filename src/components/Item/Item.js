import React, { Component } from "react";
import style from "./Item.module.css";

export class Item extends Component {
  render() {
    const {
      name,
      flightNo,
      launchYear,
      successLaunch,
      launchLanding,
      imgURL,
      missionId
    } = this.props.missionDetails;
    return (
     
            <div className={style["section-sub-container"]}>
              <div className={style["img-style"]}>
                <img src={imgURL} alt="Mission" />
              </div>
<div className={style["outer-data-section"]}>
              <div className={style["data-section"]}>
                <div
                  className={`${style["img-heading"]} ${style["desc-color"]}`}
                >
                  {name} #{flightNo}
                </div>
                <div>
                  <span>
                    <b>Mission Ids</b>
                  </span>
                  <ul className={style["mission-list"]}>
                    {
                      missionId.map((value)=>{
                        return (<li>{value}</li>)
                      })
                    }
                    </ul>
                </div>

                <div>
                  <span>
                    <b>Launch Year: </b>
                    <span className={` ${style["desc-color"]}`}>
                      {launchYear}
                    </span>
                  </span>
                </div>
                <div>
                  <span>
                    <b>Successful Launch: </b>
                    <span className={` ${style["desc-color"]}`}>
                      {successLaunch?successLaunch.toString():'false'}
                    </span>
                  </span>
                </div>
                <div>
                  <span>
                    <b>Successful Landing: </b>
                    <span className={` ${style["desc-color"]}`}>{launchLanding?launchLanding.toString():'false'}</span>
                  </span>
                </div>
              </div></div>
            </div>
         
    );
  }
}

export default Item;
