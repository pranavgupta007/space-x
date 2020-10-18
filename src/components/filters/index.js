import React, { PureComponent } from "react";
import { Component } from "react";
import { availablefilters } from "./filters";
import style from "./index.module.css";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availablefilters: availablefilters
    };
  }

  onFilterClick = (filterkey, filterItem) => {
    const { availablefilters } = this.state;
    const { getLaunches } = this.props;
    const newFilters = [...availablefilters];
    const paramsObj = {};
    for (let i in newFilters) {
      for (let j in newFilters[i].filterItems) {
        if (newFilters[i].key === filterkey) {
          newFilters[i].filterItems[j].isSelected = false;
          if (newFilters[i].filterItems[j].value === filterItem.value) {
            newFilters[i].filterItems[j].isSelected = true;
          }
        }
        if (newFilters[i].filterItems[j].isSelected) {
          paramsObj[newFilters[i].key] = newFilters[i].filterItems[j].value;
        }
      }
    }
    getLaunches(paramsObj);
    this.setState({ availablefilters: newFilters });
  };

  render() {
    const { availablefilters } = this.state;
    return (
      <div className={`${style["filter-container"]}`}>
        
        <div className={`${style["filter-content"]}`}>
          <div className={`${style["filter-heading"]}`}>Filters</div>
          {availablefilters.map((filter) => {
            return (
              <section className={`${style["filter-section"]}`}>
                <div className={`${style["filter-section-heading"]}`}>
                  <div>{filter.heading}</div>
                </div>
                <div className={`${style["filter-section-item"]}`}>
                  {filter.filterItems.map((filterItem) => {
                    return (
                      <div
                        className={
                          filterItem.isSelected
                            ? style["filter-section-selected-item"]
                            : ""
                        }
                        onClick={this.onFilterClick.bind(
                          this,
                          filter.key,
                          filterItem
                        )}
                      >
                        {filterItem.displayName}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Filters;
