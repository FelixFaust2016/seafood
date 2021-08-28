const ChefCards = ({ img, name }) => {
  return (
    <div className="chef_card_container">
      <main>
        <img src={img} alt={""} />
      </main>
      <div className="chef_card_container_text">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export { ChefCards };
