import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import styles from './styles.module.css'

const actions = [
  {
    name: 'github',
    title: 'GitHub',
    href: 'https://github.com/transitive-bullshit',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    )
  },
  {
    name: 'twitter',
    title: 'Twitter',
    href: 'https://twitter.com/transitive_bs',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' /></svg>
    )
  },
  {
    name: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fisch2',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' /></svg>
    )
  },
  {
    name: 'medium',
    title: 'Medium',
    href: 'https://medium.com/@transitive_bs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"></path></svg>
    )
  },
  {
    name: 'facebook',
    title: 'Facebook',
    href: 'https://www.facebook.com/nysesh',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' /></svg>
    )
  }
]

export default class App extends Component {
  static propTypes = {
    classsName: PropTypes.string
  }

  render() {
    const {
      className,
      ...rest
    } = this.props

    return (
      <div
        className={cs(styles.links, className)}
        {...rest}
      >
        {actions.map((action) => (
          <a
            className={cs(styles.action, styles[action.name])}
            href={action.href}
            key={action.name}
            title={action.title}
          >
            <div className={styles.actionBg}>
              <div className={styles.actionBgPane} />
            </div>

            <div className={styles.actionBg}>
              {action.icon}
            </div>
          </a>
        ))}
      </div>
    )
  }
}
