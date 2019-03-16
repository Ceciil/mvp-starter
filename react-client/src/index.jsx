import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import data from "./components/data.js";

import Main from "./components/Main.jsx";
import Buttons from "./components/Buttons.jsx";
import Search from "./components/Search.jsx";
import Display from "./components/Display.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.businesses[0],
      search: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() { }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const search = this.state.search;
    axios
      .get(`/api/${search}`)
      .then(response => {
        this.setState({ data: response.data.businesses[0] });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container fade-in">
        <Main />
        <Buttons />
        <Search onChange={this.onChange} onSubmit={this.onSubmit} />
        <Display data={this.state.data} />
        <h1>Others</h1>
        <h1>Footer</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
