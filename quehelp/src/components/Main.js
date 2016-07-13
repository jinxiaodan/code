require('normalize.css/normalize.css');
//require('styles/App.css');
require('styles/index.css');

import React from 'react';
import QueModel from './QueModel.js';
//import reqwest from 'reqwest';
//import woquAjax from '../lib/woqu/woqu.ajax.js';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionArr: []
    };
  }

  componentWillMount(){
    // woquAjax.get('./', {}, function(result) {
    //
    // }.bind(this));
    let questionArr = [
      {
        ask:'啊实打实大苏打实打实大苏打实打实的',
        que:'啊实打实大苏打实打实大苏打卡死了角度考虑拉萨孔家店坷拉三季稻坷拉就是打开链接'
      },
      {
        ask:'啊实打实大苏打实打实大苏打实打实的',
        que:'啊实打实大苏打实打实大苏打卡死了角度考虑拉萨孔家店坷拉三季稻坷拉就是打开链接'
      }
    ];
    let len = questionArr.length;
    let queList = [];

    for (let i = 0; i < len; i++) {
      queList.push(<QueModel key={i} ask={questionArr[i].ask} que={questionArr[i].que}/>);
    }

    this.setState({
      questionArr: queList,
    });
  }

  render() {
    return (
      <div className="index">
        {this.state['questionArr']}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
