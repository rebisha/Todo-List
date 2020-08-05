import React from "react";
import * as Data from "../../util/index";
import { Button, FormControl } from "react-bootstrap";

import ResultFound from "./resultFound";
import ResultNotFound from "./resultNotFound";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iphones: [],
      searchterm: "",
      isSearching: false
    };
  }

  doSearch = () => {
    var { searchterm } = this.state;
    const iphone = Data.getIphones(searchterm);
    iphone.then(response =>
      this.setState({
        iphones: response,
        isSearching: true
      })
    );
  };

  onChange = e => {
    this.setState({
      searchterm: e.target.value
    });
  };

  render() {
    const { iphones, searchterm, isSearching } = this.state;
    return (
      <div>
        <div className="mt-3">
          <h2> Search Iphone </h2>
          <FormControl
            placeholder="Search"
            onChange={this.onChange}
            searchterm={searchterm}
          />
          <Button className="my-3" variant="primary" onClick={this.doSearch}>
            {" "}
            Search{" "}
          </Button>
        </div>
        {isSearching ? (
          iphones.length ? (
            <div className="result-found">
              <ResultFound iphones={iphones} />
            </div>
          ) : (
            <div className="result-not-found">
              <ResultNotFound />
            </div>
          )
        ) : (
          <span>Loading...</span>
        )}
      </div>
    );
  }
}

export default Search;
