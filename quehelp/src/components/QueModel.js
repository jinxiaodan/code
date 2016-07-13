import React from 'react';

export default class queModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ifshow: false};
  }

  clickFun(){
    this.setState({ifshow: !this.state.ifshow});
  }

  render() {
    let questate = this.state.ifshow==true?'show':'hide';

    return <div className={"QueModel "+questate}>
              <div className="queModel-ask" onClick={this.clickFun.bind(this)}>
                <p>{this.props['ask']}</p>
                <i></i>
              </div>
              <div className="queModel-que">{this.props['que']}</div>
              <div className="splitLine"></div>
           </div>;
  }
}
