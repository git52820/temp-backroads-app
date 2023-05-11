const Title = (props) => {
  const { word1, word2 } = props;
  return (
    <div className="section-title">
      <h2>
        {word1} <span>{word2}</span>
      </h2>
    </div>
  );
};
export default Title;
