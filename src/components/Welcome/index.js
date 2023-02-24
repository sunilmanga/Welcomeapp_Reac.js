import {Component} from 'react'

class Welcome extends Component {
  state = {st: true}

  bt = () => {
    this.setState(prev => {
      const {st} = this.state
      return {st: !prev.st}
    })
  }

  txt = () => {
    const {st} = this.state
    console.log(st)
    return st ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const k = this.txt()
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button onClick={this.bt}>{k}</button>
      </div>
    )
  }
}

export default Welcome
