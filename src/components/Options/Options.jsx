import css from './Options.module.css';

export default Options;

function Options({ updateFeedback, totalFeedback = 0 }) {
  return (
    <ul className={css.list}>
      <li>
        <button
          onClick={() => {
            updateFeedback('good');
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            updateFeedback('neutral');
          }}
        >
          Neutlal
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            updateFeedback('bad');
          }}
        >
          Bad
        </button>
      </li>
      {totalFeedback !== 0 && (
        <li>
          <button
            onClick={() => {
              updateFeedback('');
            }}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
