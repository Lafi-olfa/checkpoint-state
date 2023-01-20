import React, { Component } from "react";
import DescriptionDescription from "../descriptionComponent/DescriptionDescription";
import FullnameComponent from "../fullnameComponent/FullnameComponent";
import LogoComponent from "../logoComponent/LogoComponent";
// import DescriptionComponent from "../descriptionComponent/DescriptionComponent";
// import NameComponent from "../nameComponent/NameComponent";

export default class ProfilComponent extends Component {
  //*utiliser pour initialiser les objets utilise
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      memory: null,
      data: "   Mark Zuckerberg est le créateur du réseau social Facebook. En 2012, Facebook est le deuxième site internet le plus visité au monde derrière Google, et il revendique plus d’un milliard de membres actifs à travers la planète. En créant cet immense service de réseautage,Mark Zuckerberg est devenu célèbre mais aussi très riche. ",
      name: "Mark Zuckerberg",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCPQV_uBG1C-6Hu1XmQOFMjJlTLAU-X-fOnm1x49P&s",
    };
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    this.setState({
      memory: setInterval(() => {
        this.inc();
      }, 1000),
    });
    console.log(this.setState);
  }

  render() {
    const { data } = this.state;
    const { name } = this.state;
    const {logo}= this.state;
    return (
      <div
        style={{
          backgroundColor: "#d1cebd",
          width: "700px",
          borderRadius: "20px",
          border: "5px solid #f6eedf",
          height: "550px",
          // marginRight:'200px',
          marginLeft: "240px",
          marginBottom: "10px",
          padding: "20px",
        }}
      >
        {/* full name */}
        <h1>Welcome </h1>
        <div style={{ display: "flex",justifyContent:'space-between' }}>
          <FullnameComponent fullname={name} />
          <LogoComponent logo={logo} />
        </div>

        <DescriptionDescription description={data} />
     

        <h2> count: {this.state.count} </h2>
      </div>
    );
  }
}
