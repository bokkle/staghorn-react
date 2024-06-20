const Button = ({ children }) => {
  return (
    <div className="button__wrapper">
      <button id="contact__submit" className="form__submit">
        <span>{children}</span>
        <div className="top"></div>
        <div className="left"></div>
        <div className="bottom"></div>
        <div className="right"></div>
      </button>
    </div>
  );
};

export default Button;
