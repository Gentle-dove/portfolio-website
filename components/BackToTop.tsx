// components/BackToTop.tsx
'use client';
import React, { useEffect, useState } from 'react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      id="back-to-top"
      onClick={handleClick}
      style={{ display: visible ? 'block' : 'none' }}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
