const Card = ({ name, info, img }) => {
  return (
    <div className="cards_container">
      <div className="card_img">
        <img src={img} alt={""} />
      </div>
      <div className="card_text">
        <h3>{name}</h3>
        <p className="normal_text">{info}</p>
      </div>
    </div>
  );
};

export { Card };
