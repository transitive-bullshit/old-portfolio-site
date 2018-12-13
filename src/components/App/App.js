import React, { Component } from 'react'

import FluidAnimation from 'react-fluid-animation'
import styles from './styles.module.css'

export default class App extends Component {
  componentDidMount() {
    this._reset()
  }

  render () {
    return (
      <div className={styles.container}>
        <FluidAnimation
          animationRef={this._animationRef}
        />

        <div className={styles.overlay}>
          <h1 className={styles.title}>
            Transitive Bullshit
          </h1>
        </div>
      </div>
    )
  }

  _animationRef = (ref) => {
    this._animation = ref
    this._reset()
  }

  _reset() {
    if (this._animation) {
      this._animation.addSplats(100 + Math.random() * 80 | 0)
    }
  }
}
