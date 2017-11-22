import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, DropdownButton, MenuItem ,Tabs , Tab} from 'react-bootstrap';
import './Search.css';
import { searchByRequests } from '../../services/Service';
import Results from '../Results/Results';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchRqs: '',
      searchMediaType: 'all',
      searchRslt: null
    }
  }
  async search (media){
      let value = await searchByRequests(this.state.searchRqs, media)
        this.setState({
          searchMediaType:media,
          searchRslt: value
        })
  }
  render() {
    let searchRslt = this.state.searchRslt
    let searchMediaType = this.state.searchMediaType
    let self = this

    let tabs =
      <Tabs defaultActiveKey={searchMediaType} activeKey={searchMediaType} id="mediaTypesTabs" onSelect={(key) => self.search(key)}>
        <Tab eventKey={"all"} title="all" > < Results results = { searchRslt }/> </Tab>
        <Tab eventKey={"movie"} title="Movies"> < Results results = { searchRslt }/> </Tab>
        <Tab eventKey={"tvShow"} title="Tv Shows" > < Results results = { searchRslt }/> </Tab>
      </Tabs>

    return(
      < div id = "Search" >
        < FormGroup >
          < InputGroup bsSize="large">
            < FormControl type = "text"
              placeholder = "What are you looking for? e.g 'Friends', Or 'Aladdin' "
              value = { this.state.searchRqs }
              onChange = { (event) => { this.setState({ searchRqs: event.target.value }) } }
              onKeyPress = { (event) => { if(event.key === 'Enter') this.search("all"); }
              }/>
              < DropdownButton componentClass = { InputGroup.Button } id = "input-dropdown-addon"
                  title ="search">
                  < MenuItem key = "1" onClick = { () => this.search("movie") } > Movies < /MenuItem>
                  < MenuItem key = "2" onClick = { () => this.search("tvShow") } > Tv shows < /MenuItem>
              < /DropdownButton>
            < /InputGroup>
        < /FormGroup>
          { (searchRslt===null) ? '' : (((searchRslt.length > 0) && (this.state.searchRqs !== '')) ? tabs : <div className="msgNoRslts">Sorry, we couldn&#39;t find any results for this search :(</div>) }
      < /div>
      )
    }
  }
  export default Search;
