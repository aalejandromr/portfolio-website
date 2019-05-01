'use strict';

const e = React.createElement;

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMore: false,
      controller_class: "hide",
      small: "Show More!"
    };

    this.handleShow = this.handleShow.bind(this)
  }

  handleShow(){
    if(this.state.controller_class == "hide" || this.state.controller_class == "hide display-none"){
      this.setState({
        controller_class: "show",
        small: "Show Less"
      })
    } else {
      this.setState({
        controller_class: "hide",
        small: "Show More!"
      })
      setTimeout(() => {
        this.setState({
          controller_class: "hide display-none",
        })
      }, 500);
    }
    
  }

  render() {
    return (
      <section className="container">
            <h2> Work experience and babys I have made: </h2>
            <div className="dropdown-container">
                <div className="dropdown-item">
                  <Header p={"Telus International"}/>
                  <Small p={this.state.small} handleClick={this.handleShow}/>
                  <Paragraph controller_class={this.state.controller_class} p={"I worked at Telus International from 2017 to 2018" +
                  ", creating internal tools for the CAPEX/OPEX sectors, making them either lower their budget by making them more productive" +
                  " or, creating new ways to make money, worked in Ruby on Rails, Symfony and Boonex"}/>
                </div>
                <div className="dropdown-item">
                  <Header p={"Code Castle"}/>
                  <Small p={this.state.small} handleClick={this.handleShow}/>
                  <Paragraph controller_class={this.state.controller_class} p={"My very first job at a start-up! Here I worked closely with clients, meeting with them, translating all the requirements for the project they needed into code, here I learnt Ruby and Ruby on Rails, my favorite programming language/Framework and also I learnt how to work under pressure but at the same time having so much fun!"}/>
                </div>
            </div>
        </section>
    );
  }
}

const Paragraph = ({ p, controller_class }) => <p className={controller_class}> 
      {p}
    </p>

const Small = ({ p, handleClick }) => <small onClick={handleClick} className="show-more"> {p} </small>

const Header = ({ p }) => <h3> {p} </h3>

const domContainer = document.querySelector('#work-experience');
ReactDOM.render(e(WorkExperience), domContainer);