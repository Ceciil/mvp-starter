import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import data from "./components/data.js";
import { Link, animateScroll as scroll } from "react-scroll";

import Main from "./components/Main.jsx";
import Buttons from "./components/Buttons.jsx";
import Search from "./components/Search.jsx";
import Display from "./components/Display.jsx";
import Choice from "./components/Choice.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceBool: false,
      choice: data.businesses[1],
      dataBool: false,
      data: null,
      search: null
    };
    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onSelect(event) {
    console.log(event.target.innerHTML);
    const category = event.target.innerHTML;
    axios
      .get(`/api/category/${category}`)
      .then(response => {
        console.log("onSelect: ", response);
        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }
        const randomInt = getRandomInt(response.data.length);
        console.log(randomInt, response.data[randomInt]);
        this.setState({
          choiceBool: true,
          choice: response.data[randomInt]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const search = this.state.search;
    axios
      .get(`/api/${search}`)
      .then(response => {
        this.setState({
          dataBool: true,
          data: response.data.businesses
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onAdd(event) {
    // console.log(item)
    console.log(event);
    console.log(event.target);
  }

  render() {
    let display, choice;
    if (this.state.choiceBool) {
      choice = <Choice data={this.state.choice} />;
    } else {
      choice = <div />;
    }
    if (this.state.dataBool) {
      display = (
        <Display data={this.state.data} onAdd={this.onAdd} />
      );
    } else {
      display = <div id="choice" />;
    }

    return (
      <div className="container fade-in">
        <Main />
        <Link activeClass="active" to="pad" spy={true} smooth={true} duration={500}>
          <Buttons onClick={this.onSelect} />
        </Link>
        <Search onChange={this.onChange} onSubmit={this.onSubmit} />
        {display}
        {choice}
        <div id="pad" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
