import * as React from "react";

import ButtonInterface from '../interfaces/ButtonInterface'

export default class UserComponent extends React.Component<ButtonInterface, {}> {
  constructor (props: ButtonInterface){
  super(props);
  }

  render() {
    const {disabled, func, title } = this.props
    return (  <div>
          <button disabled={disabled}className="button" onClick={() => {func(title)}} >{title}</button>
            </div>

            )
  }
}