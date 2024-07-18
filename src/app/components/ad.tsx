"use client"

import React, { useState, useEffect } from 'react';

const NotificationBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isDismissed = localStorage.getItem('notificationDismissed');
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('notificationDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white p-4 flex justify-between items-center h-[38px] ">
    <div className="flex-grow text-center">
      <span>Sign up and get 20% off your first order. <a href="#" className="underline">Sign Up Now</a></span>
    </div>
    <button onClick={handleClose} className="text-white">X</button>
  </div>
  );
};

export default NotificationBar;
