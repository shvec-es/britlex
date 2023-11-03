const SkillsItem = ({ heading, text, img }) => {
  return (
    <li>
      <h3>{heading}</h3>
      <p>
        {text}
        <button type="button">Learn more</button>
      </p>
      <img src={img} alt={heading} width={390} />
    </li>
  );
};

export default SkillsItem;
