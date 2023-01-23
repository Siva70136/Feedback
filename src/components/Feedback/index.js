// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {click: false}

  greeting = () => {
    this.setState({
      click: true,
    })
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {click} = this.state

    if (click) {
      return (
        <div className="app-container">
          <div className="card-container">
            <img src={loveEmojiUrl} alt="love emoji" className="img" />
            <h1 className="head">Thank You</h1>
            <p className="data">
              we will use your feedbackto imrove our customer care
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="head">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emojis-container">
            <li className="item">
              <img
                src={emojis[0].imageUrl}
                alt={emojis[0].name}
                className="img"
                onClick={this.greeting}
              />
              <p className="name">{emojis[0].name}</p>
            </li>
            <li className="item">
              <img
                src={emojis[1].imageUrl}
                alt={emojis[1].name}
                className="img"
                onClick={this.greeting}
              />
              <p className="name">{emojis[1].name}</p>
            </li>
            <li className="item">
              <img
                src={emojis[2].imageUrl}
                alt={emojis[2].name}
                className="img"
                onClick={this.greeting}
              />
              <p className="name">{emojis[2].name}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
