// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div
            className={`home-container ${
              isDarkTheme ? 'dark-theme-container' : 'light-theme-container'
            }`}
          >
            {isDarkTheme ? (
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            ) : (
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            )}
            <h1 className={isDarkTheme ? 'dark-theme' : 'light-theme'}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
