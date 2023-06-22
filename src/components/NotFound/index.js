// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div
            className={`not-found-container ${
              isDarkTheme ? 'dark-theme-container' : 'light-theme-container'
            }`}
          >
            <img
              className="not-found-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
            />

            <h1 className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
              Lost Your Way?
            </h1>
            <p className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
