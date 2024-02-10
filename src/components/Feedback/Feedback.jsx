import css from './Feedback.module.css';

export default Feedback;

function Feedback({ good = 0, neutral = 0, bad = 0, totalFeedback = 0 }) {
  return (
    <div>
      <p className={css.text}>{`Good: ${good}`}</p>
      <p className={css.text}>{`Neutral: ${neutral}`}</p>
      <p className={css.text}>{`Bad: ${bad}`}</p>
      {totalFeedback && <p className={css.text}>{`Total: ${totalFeedback}`}</p>}
      {totalFeedback && (
        <p className={css.text}>{`Positive: ${Math.round(
          ((good + neutral) / totalFeedback) * 100
        )}%`}</p>
      )}
    </div>
  );
}
