import {Component} from 'react'

import './index.css'

class Welcome extends Component {

  state = {click: true}

  onbutton = () => {

    const {click} = this.state
    if (click === true) {
       this.setState( prvt => {
      return {click:prvt.click = "Subscribe"}
    })
    } else {
      return "Subscribed"
    }
   
  }
  render() {
    const {click} = this.state
    return (
      <div className="background">
        <h1 className="heading"> Welcome </h1>
        <h1> Thank you! Happy Learning </h1>
        <div>
          <button className="button" onClick= {this.onbutton}> {click} </button>
        </div>
      </div>
    )
  }
}

export default Welcome
