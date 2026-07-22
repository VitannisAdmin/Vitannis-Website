import React, { useState, useEffect } from 'react';

export const ObfuscatedPhone: React.FC<{ className?: string }> = ({ className }) => {
  const [phone, setPhone] = useState('');
  
  useEffect(() => {
    // Reconstruct phone on client side
    const p1 = '843';
    const p2 = '628';
    const p3 = '6336';
    setPhone(`${p1}-${p2}-${p3}`);
  }, []);

  return (
    <a 
      href={phone ? `tel:${phone}` : '#'} 
      className={className}
      onClick={(e) => {
        if (!phone) e.preventDefault();
      }}
    >
      {phone || 'Loading...'}
    </a>
  );
};

export const ObfuscatedEmail: React.FC<{ className?: string }> = ({ className }) => {
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    // Reconstruct email on client side
    const user = 'info';
    const domain = 'vitannis.com';
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <a 
      href={email ? `mailto:${email}` : '#'} 
      className={className}
      onClick={(e) => {
        if (!email) e.preventDefault();
      }}
    >
      {email || 'Loading...'}
    </a>
  );
};
