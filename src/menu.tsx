import * as React from 'react'
import ButtonComponent from './components/ButtonComponent'
import StateInterface from './interfaces/StateInterface'
import PropsInterface from './interfaces/PropsInterface'

export class Menu extends React.Component<PropsInterface, StateInterface> {
    constructor(props){
        super(props)
        this.state = {
        buttonTitle1: "Clicker1",
        buttonTitle2: "Clicker2",
        buttonTitle3: "Clicker3"
        }
    }
    
    parentFunction =(title: string) => {
        console.log('Button that clicked: ',title )
    }

    render() {
        // const buttonTitle1 = this.state.buttonTitle1
        // const buttonTitle2 = this.state.buttonTitle2
        const { buttonTitle1, buttonTitle2, buttonTitle3 } = this.state
        
        return (
            <div>
                <ButtonComponent title={buttonTitle1}func={this.parentFunction} disabled={false}/>
                <ButtonComponent title={buttonTitle2} func={this.parentFunction} disabled={false}/>
                <ButtonComponent title={buttonTitle3} func={this.parentFunction} disabled={false}/>
            </div>
        )
    }    
}