const Jumbotron = ({ direction, children, img }) => {
  return (
    <div className="jumbotron_wrapper">
      <div className="general_container">
        <div
          data-aos="zoom-in"
          style={{ flexDirection: direction }}
          className="jumbotron_container"
        >
          <div className="jumbotron_text">{children}</div>
          <div data-aos="fade-down" className="jumbotron_img">
            <img src={img} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Jumbotron };
