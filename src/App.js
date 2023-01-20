import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import ProfilComponent from "./profilComponent/ProfilComponent";

export default class App extends Component {
  state = {
    isvisible: true,
    
  };

  showprofile = () => {
    this.setState({ isvisible: !this.state.isvisible });
  };
  //sil  existe des fonctions
  render() {
    return (
      <div className="App">
        {/* //le contenu du page
bouton feha {hide} le profil est affichee and show */}
        <Button
          style={{ margin: "20px", backgroundColor: "#d63447" }}
          onClick={() => this.showprofile()}
        >
          {this.state.isvisible ? "hight" : "show"}{" "}
        </Button>{" "}
        {this.state.isvisible ? <ProfilComponent  /> : null}
        <p> </p>
      </div>
    );
  }
}
