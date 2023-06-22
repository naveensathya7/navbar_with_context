// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div
            className={`about-container ${
              isDarkTheme ? 'dark-theme-container' : 'light-theme-container'
            }`}
          >
            {isDarkTheme ? (
              <img
                className="about-image"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            ) : (
              <img
                className="about-image"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            )}
            <h1 className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
              About
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
