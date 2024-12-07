// frontend/src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="p-4 text-center"
      style={{
        backgroundColor: "var(--footer-bg-color)",
        color: "var(--text-color)",
      }}
    >
      <p>&copy; {new Date().getFullYear()} REMarket. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
