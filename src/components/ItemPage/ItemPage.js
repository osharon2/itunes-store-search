import React, { Component } from "react";
import "./ItemPage.css";
import { lookUpById } from "../../services/Service";
class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      kind: "",
      artist: "",
      img: "",
      ViewUrl: "",
      genre: "",
      description: "",
      country: ""
    };
  }
  async componentWillMount() {
    let value = await lookUpById(this.props.match.params.id);
      let resizeImg = value.artworkUrl100.replace("100x100", "500x500");
      this.setState({
        name: value.trackName,
        img: resizeImg,
        artist: value.artistName,
        ViewUrl: value.trackViewUrl,
        kind: value.kind,
        genre: value.primaryGenreName,
        description: value.longDescription,
        country: value.country,
        date: value.releaseDate
    })
  }
  render() {
    var date = new Date(this.state.date);
    var year = date.getFullYear();
    return (
      <div className="card">
        <div className="card-left">
          <img src={this.state.img} alt="preview img"/>
        </div>
        <div className="card-right">
          <span>{this.state.name} </span>
          <span className="artist"> {this.state.artist}</span>
          <div className="details">
            <ul>
              <li>{this.state.kind}</li>
              <li>{this.state.country}</li>
              <li>{year}</li>
              <li>{this.state.genre}</li>
            </ul>
            <div className="review">
              <p>{this.state.description}</p>
              <a href={this.state.ViewUrl}>Read more</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPage;
