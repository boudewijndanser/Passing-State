import * as React from "react";

import ButtonInterface from './ButtonInterface'

export default class UserComponent extends React.Component<ButtonInterface, {}> {

constructor (props: ButtonInterface){
super(props);
}
  render() {
    return (  <div>
          <button className="button" onClick={() => {this.props.func(this.props.title)}} >{this.props.title}</button>
    
            </div>

                );
  }
}