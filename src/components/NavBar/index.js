import './index.css'

const NavBar = props => {
  const {score, limitTime} = props
  return (
    <nav className="nav-bar-container">
      <div className="nav-bar-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
          alt="website logo"
          className="website-logo"
        />
        <div className="score-and-timer">
          <li className="score-container">
            <p className="score">Score:</p>
            <p className="score-count">{score}</p>
          </li>
          <li className="score-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            <p className="score-count">{limitTime} sec</p>
          </li>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
