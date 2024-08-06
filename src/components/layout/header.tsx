import Logo from '@/assets/logo.svg';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-full">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul className="flex gap-12 text-lg font-medium">
          <li className="hover:text-primary cursor-pointer">
            <a href={'#about'}>About</a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href={'#services'}>Services</a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href={'#approach'}>Approach</a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href={'#values'}>Values</a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href={'#contact'}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
