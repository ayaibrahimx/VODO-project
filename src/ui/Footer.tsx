import React from 'react';

export default function Footer() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 ml-auto flex items-center bg-neutral-950 px-3 py-3 text-slate-100">
      | About Us | Contact Us | Privacy Policy | Terms of Service |{' '}
      <p className="ml-auto">
        Copyright © 2024 Your Movie Website.All rights reserved.{' '}
      </p>
    </div>
  );
}
