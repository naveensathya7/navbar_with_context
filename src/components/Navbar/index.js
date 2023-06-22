// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const toggleThemeInApp = () => {
        toggleTheme()
      }
      return (
        <div
          className={
            isDarkTheme ? 'dark-theme-nav navbar' : 'light-theme-nav navbar'
          }
        >
          {isDarkTheme ? (
            <img
              className="logo-image"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
            />
          ) : (
            <img
              className="logo-image"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
            />
          )}
          <div
            className={
              isDarkTheme
                ? 'dark-theme content-container'
                : 'light-theme content-container'
            }
          >
            <ul className="buttons-list">
              <Link className="list-item" to="/">
                <li className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
                  Home
                </li>
              </Link>
              <Link className="list-item" to="/about">
                <li className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
                  {' '}
                  About
                </li>
              </Link>
            </ul>
          </div>
          <button
            className="theme-button"
            type="button"
            onClick={toggleThemeInApp}
            data-testid="theme"
          >
            {isDarkTheme ? (
              <img
                className="theme-icon"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            ) : (
              <img
                className="theme-icon"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
