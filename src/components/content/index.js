import React, { PureComponent } from "react";
class Content extends PureComponent {
  render() {
    const { launchesData } = this.props;
    return (
      <div>
        {launchesData.map((v) => {
          return <div>{v.mission_name} {v.launch_year}</div>  ;
        })}
      </div>
    );
  }
}

export default Content;
