import React from 'react'
import { setTimeout } from 'timers'

class DelayedButton extends React.Component {
    handleClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
        
    render() {
        return <button onClick={this.handleClick}></button>
    }
}

export default DelayedButton
