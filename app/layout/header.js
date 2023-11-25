// components/Header.js

import Link from 'next/link';
//import { useAuth } from '../_utils/auth-context'; // Assuming you have an AuthContext

const Header = () => {
  //const { user, logout } = useAuth(); // Access user information and logout function from your authentication context

  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">
            ChapterPulse
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/reading-list">
              Reading List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
