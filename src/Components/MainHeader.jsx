import LOGO from '/quiz-logo.png';
function MainHeader() {
  return (
    <header >
        <img src={LOGO} alt="Quiz Logo" />
        <h1>React Quiz</h1>
    </header>
  )
}

export default MainHeader