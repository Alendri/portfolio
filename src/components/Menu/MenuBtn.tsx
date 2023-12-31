import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuBtnProps {
  to: string;
  label: string;
  /** Animation delay in seconds. */
  delay: number;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ to, label, delay }) => {
  return (
    <NavLink
      to={to}
      className="group relative flex h-8 animate-intro-menu items-center opacity-0"
      style={{ animationDelay: delay + 's' }}
      end
    >
      {({ isActive }) => {
        return isActive ? (
          <>
            <div className="absolute -inset-x-5 h-full bg-background-200 transition-all duration-300" />
            <p className="relative text-primary-900">{label}</p>
          </>
        ) : (
          <>
            <div className="absolute inset-x-0 h-full bg-transparent transition-all duration-300 group-hover:-inset-x-5 group-hover:bg-secondary-600 dark:group-hover:bg-secondary-400" />
            <p className="relative text-primary-200 dark:text-text-800">
              {label}
            </p>
          </>
        );
      }}
    </NavLink>
  );
};

export default MenuBtn;
