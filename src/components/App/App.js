import React, { Component } from 'react'

import raf from 'raf'
import random from 'random'

import FluidAnimation from 'react-fluid-animation'
import Typed from 'typed.js'

import SocialLinks from '../SocialLinks'

import styles from './styles.module.css'

export default class App extends Component {
  componentDidMount() {
    this._reset()
    this._tick()

    this._typed = new Typed(this._subtitle, {
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 2000,
      fadeOut: true,
      shuffle: true,
      loop: true,
      showCursor: false,
      strings: [
        'Travis Fischer',
        'Software Engineer',
        'Entrepreneur',
        'Automagical',
        'All the JavaScripts',
        'Open Source Software',
        'React Developer'
      ]
    })
  }

  componentWillUnmount() {
    if (this._tickRaf) {
      raf.cancel(this._tickRaf)
      this._tickRaf = null
    }

    this._typed.destroy()
  }

  render () {
    return (
      <div className={styles.container}>
        <FluidAnimation
          animationRef={this._animationRef}
        />

        <div className={styles.textOverlay}>
          <h1 className={styles.title}>
            Transitive Bullshit
          </h1>

          <h3
            className={styles.subtitle}
            ref={this._subtitleRef}
          >
          </h3>
        </div>

        <div className={styles.overlay}>
          <SocialLinks />
        </div>
      </div>
    )
  }

  _animationRef = (ref) => {
    this._animation = ref
    this._reset()
  }

  _subtitleRef = (ref) => {
    this._subtitle = ref
  }

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180))
    }
  }

  _tick = () => {
    if (this._animation) {
      const w = this._animation.width
      const h = this._animation.height
      const r = (w + h) / 6

      const splats = []
      for (let i = 0; i < 1; ++i) {
        const color = [ random.float(10), random.float(10), random.float(10) ]

        /*
        const w0 = w / 3.0
        const w1 = w * 2.0 / 3.0

        const h0 = h / 3.0
        const h1 = h * 2.0 / 3.0

        while (true) {
          const x = random.float(w)
          const y = random.float(h)
          if (x > w0 && x < w1 && y > h0 && y < h1) {
            continue
          }

          const dx = random.float(-1, 1) * random.float(50, 2000)
          const dy = random.float(-1, 1) * random.float(50, 2000)
          const splat = { x, y, dx, dy, color }
          splats.push(splat)
          break
        }
        */

        const t = random.float(2 * Math.PI)
        const cos = Math.cos(t)
        const sin = Math.sin(t)
        const x = w / 2 + r * cos
        const y = h / 2 + r * sin
        const k = random.float() > 0.98 ? random.float(3, 10) : 1
        const dx = k * random.float(-1, 1) * random.float(50, 300) * cos
        const dy = k * random.float(-1, 1) * random.float(50, 300) * sin
        const splat = { x, y, dx, dy, color }
        splats.push(splat)
      }

      // this._animation.addSplats(splats)
    }

    this._tickRaf = raf(this._tick)
  }
}
