import QUIZ_COMPLETED from '../assets/quiz-complete.png';
import QUSETIONS from '../questions.js';

function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer => answer === null).length;
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUSETIONS[index].answers[0]).length;
    const wrongAnswers = userAnswers.filter((answer, index) => answer !== null && answer !== QUSETIONS[index].answers[0]).length;
    const totalQuestions = userAnswers.length;
    const skippedPercentage = Math.round((skippedAnswers / totalQuestions) * 100);
    const correctPercentage = Math.round((correctAnswers / totalQuestions) * 100);
    const wrongPercentage = Math.round((wrongAnswers / totalQuestions) * 100);
    return (
        <div id="summary">
            <img src={QUIZ_COMPLETED} alt="Trophy image" />
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedPercentage}%</span>
                    <span className='text'>Skipped</span>
                </p>
                <p>
                    <span className='number'>{correctPercentage}%</span>
                    <span className='text'>Answered Correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongPercentage}%</span>
                    <span className='text'>Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';
                    let userAnswer = '';
                    if(answer === QUSETIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else if (answer === null) {
                        cssClass += ' skipped';
                    } else {
                        cssClass += ' wrong';
                    }
                    if(answer === null) {
                        userAnswer = 'This Question Is Skipped!';
                    } else {
                        userAnswer = `${answer === QUSETIONS[index].answers[0] ? 'This Question Is Correct ✓' : 'This Question Is Wrong ✗'}`;
                    }
                    return(
                    <li key={`summary-${index}`}>
                        <h3>{index + 1}</h3>
                        <div className='hint'>{userAnswer}</div>
                        <div className='question'>{QUSETIONS[index].text}</div>
                        <div className={cssClass}>{answer ?? 'This Question Is Skipped!'}</div>
                    </li>
                )})}
            </ol>
        </div>
    )
}

export default Summary