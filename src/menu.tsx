import * as React from 'react'
import ButtonComponent from './components/ButtonComponent'

export class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    parentFunction =(title: string) => {
        console.log('Button that clicked: ',title )
    }

    render() {
        return (
            <div>
                <ButtonComponent title="Action1" func={this.parentFunction}/>
                <ButtonComponent title="Action2" func={this.parentFunction}/>
            </div>
        )
    }    
}