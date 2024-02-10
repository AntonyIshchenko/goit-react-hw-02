import css from './Description.module.css';

function Description({ title, text }) {
  return (
    <>
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{text}</p>
    </>
  );
}

export default Description;
