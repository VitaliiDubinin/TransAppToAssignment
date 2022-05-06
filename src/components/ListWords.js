import axios from "axios";
// import { useEffect, useState } from "react";
import React, { Component } from "react";
// import VocabList from "./VocabList";

class ListWords extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8005/langtransapp/").then((res) => this.setState({ data: res.data }));
    // console.log("getWords  " + this.state.data);
  }
  render() {
    return (
      <div>
        <h1>My current vocab</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Original word</th>
              <th>Translated word</th>
              <th>Learned</th>
            </tr>
          </thead>
          <tbody>
            {/* <VocabList data={this.state.data} /> */}
            {/* <ol>
            {this.state.data.map((word) => (
              <li key={word.id}>
                {word.or_word} {word.tr_word} {word.learned}
              </li>
            ))}
          </ol> */}

            {this.state.data.map((word) => (
              <tr key={word.id}>
                <td>{word.id}</td>
                <td>{word.or_word}</td>
                <td>{word.tr_word}</td>
                <td>{word.learned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ListWords;
