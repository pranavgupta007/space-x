import React, { Component } from "react";
import style from "./Item.module.css";

export class Item extends Component {
  render() {
    const {
      name,
      launchYear,
      successLaunch,
      imgURL,
    } = this.props.missionDetails;
    return (
     
            <div className={style["section-sub-container"]}>
              <div className={style["img-style"]}>
                <img src={imgURL} alt="Mission" />
              </div>

              <div className={style["data-section"]}>
                <div
                  className={`${style["img-heading"]} ${style["desc-color"]}`}
                >
                  {name}
                </div>
                <div>
                  <span>
                    <b>Mission Ids</b>
                  </span>
                  <ul className={style["mission-list"]}>
                    <li>Mission id 1</li>
                    <li>Mission id 2</li>
                    <li>Mission id 3</li>
                    <li>Mission id 4</li>
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
                      {successLaunch}
                    </span>
                  </span>
                </div>
                <div>
                  <span>
                    <b>Successful Landing: </b>
                    <span className={` ${style["desc-color"]}`}>False</span>
                  </span>
                </div>
              </div>
            </div>
         
    );
  }
}

export default Item;
