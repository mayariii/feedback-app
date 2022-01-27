interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  const headerStyle = {
    backgroundColor: "black",
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "FeedbackUI",
};

export default Header;
