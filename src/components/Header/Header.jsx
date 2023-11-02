const Header = props => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 50,
        alignItems: 'center',
      }}
    >
      <a href="/">Britlex</a>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          alignItems: 'center',
        }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Skills</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Contacts</a>
        </li>
      </ul>
      <button type="button">Let’s Talk</button>
    </header>
  );
};

export default Header;
