import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';

import * as Data from '../util/index';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          iphones: [],
          searchterm: ' ',
          isSearching: false
        };
    }

    doSearch = () => {
        var { searchterm } = this.state;
        const iphone =  Data.getIphones(searchterm)
        iphone.then(response =>  this.setState({ iphones: response }));
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({
            searchterm : e.target.value
        });
    }

    render() {
        const { iphones, searchterm } = this.state
        return (
          <div className="page my-3">
            <div className="content">
            <label>Search Iphones</label>
            <FormControl placeholder="Search" searchterm={ searchterm } onChange={this.onChange}/>
              <Button variant="primary" onClick={this.doSearch}>Search</Button>
              {iphones.length
              ? (
                <div>got {iphones.length} iphones</div>
              )
              : <div id="results">Do a search to find iphones</div>
              }
            </div>
          </div>
        );
      }
}

export default Search;