/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  const router = useRouter();
  
  const handleLightModeClick = () => {
    router.push('/home-light/');
  };

  const handleDarkModeClick = () => {
    router.push('/home/');
  };

  // Check if we're on a light theme page
  const isLightTheme = router.pathname.includes('light');
  
  // Determine button text and icon based on current theme
  const buttonText = isLightTheme ? 'Dark' : 'Light';
  const buttonIcon = isLightTheme ? 'fas fa-moon' : 'fas fa-sun';
  const buttonColor = isLightTheme ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)';
  const buttonBorder = isLightTheme ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)';
  const buttonHoverColor = isLightTheme ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)';
  const buttonHoverBorder = isLightTheme ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)';
  
  // Determine click handler based on current theme
  const handleThemeClick = isLightTheme ? handleDarkModeClick : handleLightModeClick;

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/*
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                ...dropdown items...
              </div>
            </li>
            */}
            <li className="nav-item">
              <Link href={isLightTheme ? "/home-light" : "/home"}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={isLightTheme ? "/about-light" : "/about"}>
                <a className="nav-link">About</a>
              </Link>
            </li>
            {/*
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                ...dropdown items...
              </div>
            </li>
            */}
            <li className="nav-item">
              <Link href={isLightTheme ? "/project-display-light" : "/project-display"}>
                <a className="nav-link">Works</a>
              </Link>
            </li>
            {/* 
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <Link href={`/articles`}>
                  <a className="dropdown-item">Blog Standerd</a>
                </Link>
                <Link href={`/blog-list/blog-list-dark`}>
                  <a className="dropdown-item">Blog List</a>
                </Link>
                <Link href={`/blog-grid/blog-grid-dark`}>
                  <a className="dropdown-item">Blog Grid</a>
                </Link>
                <Link href={`/blog-details/blog-details-dark`}>
                  <a className="dropdown-item">Blog Details</a>
                </Link>
              </div>
            </li>
            */}
            <li className="nav-item">
              <Link href={isLightTheme ? "/articles-light" : "/articles"}>
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={isLightTheme ? "/contact/contact-light" : "/contact-us"}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            
            {/* Light Mode Toggle Button */}
            <li className="nav-item" style={{ marginLeft: '20px', marginTop: '20px' }}>
              <button
                className="theme-toggle-btn"
                onClick={handleThemeClick}
                style={{
                  background: 'transparent',
                  border: `1px solid ${buttonBorder}`,
                  borderRadius: '50px',
                  padding: '6px 16px',
                  color: buttonColor,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '400',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  minWidth: 'auto',
                  outline: 'none',
                  height: '32px',
                  lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = buttonHoverBorder;
                  e.target.style.color = buttonHoverColor;
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = buttonBorder;
                  e.target.style.color = buttonColor;
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i 
                  className={buttonIcon} 
                  style={{
                    fontSize: '11px',
                    opacity: '0.9',
                    transition: 'transform 0.3s ease'
                  }}
                ></i>
                <span style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>{buttonText}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
