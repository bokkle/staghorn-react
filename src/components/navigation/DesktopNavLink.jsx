import { useState } from 'react';

const DesktopNavLink = ({ link, title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      key={link}
      href={link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <li
        className="text-xl capitalize hover:text-emerald-400"
        style={{
          textShadow:
            hovered && '0 0 1px rgb(52, 211, 153), 0 0 2px rgb(52, 211, 153)',
        }}
      >
        {title}
      </li>
    </a>
  );
};

export default DesktopNavLink;
