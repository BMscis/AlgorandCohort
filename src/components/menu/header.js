import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useMatch, useResolvedPath } from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';
import auth from '../../core/auth';
import { AwsHook } from '../../core/context/AwsContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
svg{
  width: 24px;
}
.navbar-title.navbar-item{
  padding:30px
}
.navbar-title h3{
  letter-spacing: 10px;
}
.navbar-title h4{
  color: #1dd9b5;
}
.navbar-title h3,
.navbar-title h4{
  margin-bottom: 0;
  white-space: nowrap;
}
`;
// setDefaultBreakpoints([{ xs: 0 }, { s: 641 }, { l: 1199 }, { xl: 1200 }]);

const NavLink = (props) => {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return <Link {...props} className={match ? 'active' : 'non-active'} />;
};

const Header = function () {
  const { wallet, user, userClear } = AwsHook();
  const navigate = useNavigate();
  const [showmenu, btn_icon] = useState(false);
  const [showpop, btn_icon_pop] = useState(false);
  const [shownot, btn_icon_not] = useState(false);
  const [wallt, setWallet] = useState(wallet);
  const token = auth.getToken();

  const closePop = () => {
    btn_icon_pop(false);
  };
  const closeNot = () => {
    btn_icon_not(false);
  };
  const refpop = useOnclickOutside(() => {
    closePop();
  });
  const refpopnot = useOnclickOutside(() => {
    closeNot();
  });

  const handleLogout = () => {
    auth.clearAppStorage();
    userClear();
    navigate('/');
  };
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  // const [openMenu3, setOpenMenu3] = React.useState(false);
  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleBtnClick1 = () => {
    setOpenMenu1((value) => !value);
  };
  const handleBtnClick2 = () => {
    setOpenMenu2((value) => !value);
  };
  /* const handleBtnClick3 = () => {
    setOpenMenu3((value) => !value);
  }; */
  const closeMenu = () => {
    setOpenMenu(false);
  };
  const closeMenu1 = () => {
    setOpenMenu1(false);
  };
  const closeMenu2 = () => {
    setOpenMenu2(false);
  };
  /* const closeMenu3 = () => {
    setOpenMenu3(false);
  }; */
  const ref = useOnclickOutside(() => {
    closeMenu();
  });
  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });
  const ref2 = useOnclickOutside(() => {
    closeMenu2();
  });
  /* const ref3 = useOnclickOutside(() => {
    closeMenu3();
  }); */

  useEffect(() => {
    const header = document.getElementById('myHeader');
    const totop = document.getElementById('scroll-to-top');
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        totop.classList.add('show');
      } else {
        header.classList.remove('sticky');
        totop.classList.remove('show');
      }
      if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);
  useEffect(() => {
    return setWallet(wallet);
  }, [wallet]);
  return (
    <>
      <GlobalStyle />
      <header id="myHeader" className="navbar white">
        <div className="container">
          <div className="w-100-nav">
            <div style={{ display: 'flex', alignItems: 'center', padding: '7px 0' }}>
              <NavLink to="/">
                <img src="/img/new-logo-green.png" alt="site logo" className="logo" />
              </NavLink>

              <div className="search">
                <input
                  id="quick_search"
                  className="xs-hide"
                  name="quick_search"
                  placeholder="search item here..."
                  type="text"
                />
              </div>
            </div>

            <div className="desktop-menu">
              <div className="navbar-item">
                <div ref={ref}>
                  <div
                    id="home"
                    className="dropdown-custom dropdown-toggle btn"
                    onClick={() => {
                      btn_icon(false);
                      navigate('/');
                    }}
                    onMouseEnter={handleBtnClick}
                    onMouseLeave={closeMenu}
                  >
                    Home
                    <span className="lines"></span>
                    {/* {openMenu && (
                              <NavLink to="/">Homepage</NavLink>
                          // <div className='item-dropdown'>
                          //   <div className="dropdown" onClick={closeMenu}>
                          //     <NavLink to="/home1">Homepage 1</NavLink>
                          //     <NavLink to="/home2">Homepage 2</NavLink>
                          //   </div>
                          // </div>
                        )} */}
                  </div>
                </div>
              </div>
              <div className="navbar-item">
                <div ref={ref1}>
                  <div
                    className="dropdown-custom dropdown-toggle btn"
                    onMouseEnter={handleBtnClick1}
                    onMouseLeave={closeMenu1}
                  >
                    Explore
                    <span className="lines"></span>
                    {openMenu1 && (
                      <div className="item-dropdown">
                        <div className="dropdown" onClick={closeMenu1}>
                          <NavLink to="/explore">Explore</NavLink>
                          {/* <NavLink to="/explore2">Explore 2</NavLink> */}
                          <NavLink to="/rangking">Rangking</NavLink>
                          <NavLink to="/colection">Collection</NavLink>
                          <NavLink to="/ItemDetail">Items Details</NavLink>
                          <NavLink to="/Auction">Live Auction</NavLink>
                          <NavLink to="/helpcenter">Help Center</NavLink>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="navbar-item">
                <div ref={ref2}>
                  <div
                    className="dropdown-custom dropdown-toggle btn"
                    onMouseEnter={handleBtnClick2}
                    onMouseLeave={closeMenu2}
                  >
                    Setup
                    <span className="lines"></span>
                    {openMenu2 && (
                      <div className="item-dropdown">
                        <div className="dropdown" onClick={closeMenu2}>
                          <NavLink to="/wallet">Wallet</NavLink>
                          <NavLink to="/create">Create</NavLink>
                          <NavLink to="/news">News</NavLink>
                          <NavLink to="/works">Gallery</NavLink>
                          <NavLink to="/activity" onClick={() => btn_icon(!showmenu)}>
                            Activity
                          </NavLink>
                          {user && (
                            <>
                              <NavLink to={`/Author/${user.user}`}>Author</NavLink>
                              <NavLink to={`/Profile/${user.user}`}>Profile</NavLink>
                            </>
                          )}
                          {/* <NavLink to="/loginTwo">login 2</NavLink> */}
                          <NavLink to="/register">Register</NavLink>
                          <NavLink to="/contact">Contact Us</NavLink>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {!user && (
                <div className="navbar-item">
                  <NavLink to="/login" onClick={() => btn_icon(!showmenu)}>
                    Login
                  </NavLink>
                </div>
              )}
              {/* <div className='navbar-item'>
                    <div ref={ref3}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                        Elements
                        <span className='lines'></span>
                        {openMenu3 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu3}>
                              <NavLink to="/elegantIcons">Elegant Icon</NavLink>
                              <NavLink to="/etlineIcons">Etline Icon</NavLink>
                              <NavLink to="/fontAwesomeIcons">Font Awesome Icon</NavLink>
                              <NavLink to="/accordion">Accordion</NavLink>
                              <NavLink to="/alerts">Alerts</NavLink>
                              <NavLink to="/price">Pricing Table</NavLink>
                              <NavLink to="/progressbar">Progess Bar</NavLink>
                              <NavLink to="/tabs">Tabs</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div> */}
            </div>
            {user && (
              <div className="mainside">
                <NavLink
                  to="/wallet"
                  className="btn-main"
                  style={{ display: token ? 'none' : 'block' }}
                >
                  Connect Wallet
                </NavLink>
                <div className="logout" style={{ display: token ? 'flex' : 'none' }}>
                  <NavLink
                    to="/create"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      marginTop: 'auto',
                      marginBottom: 'auto'
                    }}
                  >
                    Create
                  </NavLink>
                  <div
                    id="de-click-menu-notification"
                    className="de-menu-notification"
                    onClick={() => {
                      btn_icon_not(!shownot);
                      btn_icon(false);
                    }}
                    ref={refpopnot}
                  >
                    <div className="d-count">8</div>
                    <i className="fa fa-bell"></i>
                    {shownot && (
                      <div className="popshow">
                        <div className="de-flex">
                          <h4>Notifications</h4>
                          <span className="viewaall">Show all</span>
                        </div>
                        <ul>
                          <li>
                            <div className="mainnot">
                              <img className="lazy" src="../../img/author/author-2.jpg" alt="" />
                              <div className="d-desc">
                                <span className="d-name">
                                  <b>Mamie Barnett</b> started following you
                                </span>
                                <span className="d-time">1 hour ago</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="mainnot">
                              <img className="lazy" src="../../img/author/author-3.jpg" alt="" />
                              <div className="d-desc">
                                <span className="d-name">
                                  <b>Nicholas Daniels</b> liked your item
                                </span>
                                <span className="d-time">2 hours ago</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="mainnot">
                              <img className="lazy" src="../../img/author/author-4.jpg" alt="" />
                              <div className="d-desc">
                                <span className="d-name">
                                  <b>Lori Hart</b> started following you
                                </span>
                                <span className="d-time">18 hours ago</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="mainnot">
                              <img className="lazy" src="../../img/author/author-5.jpg" alt="" />
                              <div className="d-desc">
                                <span className="d-name">
                                  <b>Jimmy Wright</b> liked your item
                                </span>
                                <span className="d-time">1 day ago</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="mainnot">
                              <img className="lazy" src="../../img/author/author-6.jpg" alt="" />
                              <div className="d-desc">
                                <span className="d-name">
                                  <b>Karla Sharp</b> started following you
                                </span>
                                <span className="d-time">3 days ago</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div
                    id="de-click-menu-profile"
                    className="de-menu-profile"
                    onClick={() => btn_icon_pop(!showpop)}
                    ref={refpop}
                  >
                    <img
                      src={user.photo.url}
                      alt=""
                      style={{
                        pointerEvents: 'none'
                      }}
                    />
                    {showpop && (
                      <div className="popshow">
                        <div className="d-name">
                          <h4 style={{ color: 'black' }}>{user.social}</h4>
                          <span className="name" onClick={() => window.open('', '_self')}>
                            Set display name
                          </span>
                        </div>
                        {!wallt && (
                          <NavLink to="/wallet" className="btn-main" style={{ display: 'block' }}>
                            Connect Wallet
                          </NavLink>
                        )}
                        {wallt && (
                          <>
                            <div className="d-balance">
                              <h4>Balance</h4>
                              {wallt.Balance} {wallt.Chain}
                            </div>
                            <div className="d-wallet">
                              <h4>My Wallet</h4>
                              <span id="wallet" className="d-wallet-address">
                                {wallt.Account}
                              </span>
                              <button id="btn_copy" title="Copy Text">
                                Copy
                              </button>
                            </div>
                          </>
                        )}
                        <div className="d-line"></div>
                        <ul className="de-submenu-profile">
                          <li>
                            <span
                              onClick={() => {
                                navigate(`/Author/${user.user}`);
                              }}
                            >
                              <i className="fa fa-user"></i> My profile
                            </span>
                          </li>
                          <li>
                            <span
                              onClick={() => {
                                navigate(`/Profile/${user.user}`);
                              }}
                            >
                              <i className="fa fa-pencil"></i> Edit profile
                            </span>
                          </li>
                          <li onClick={handleLogout}>
                            <span>
                              <i className="fa fa-sign-out"></i> Sign out
                            </span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <span className="nav-icon" onClick={() => btn_icon(!showmenu)}>
            <svg
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </span>
          {showmenu && (
            <div className="mobile-menu">
              <div className="navbar-item">
                <div ref={ref}>
                  <div
                    id="home"
                    className="dropdown-custom dropdown-toggle btn"
                    onClick={() => {
                      btn_icon(false);
                      navigate('/');
                    }}
                  >
                    Home
                  </div>
                  {/* {openMenu && (
                            <NavLink to="/" onClick={() => btn_icon(!showmenu)}>Homepage</NavLink>
                        // <div className='item-dropdown'>
                        //   <div className="dropdown" onClick={closeMenu}>
                        //     <NavLink to="/home1" onClick={() => btn_icon(!showmenu)}>Homepage 1</NavLink>
                        //     <NavLink to="/home2" onClick={() => btn_icon(!showmenu)}>Homepage 1</NavLink>
                        //   </div> 
                        // </div>
                      )} */}
                </div>
              </div>
              <div className="navbar-item">
                <div ref={ref1}>
                  <div
                    className={`dropdown-custom dropdown-toggle btn ${
                      openMenu1 && 'dropdown-toggle--open'
                    }`}
                    onClick={handleBtnClick1}
                  >
                    Explore
                  </div>
                  {openMenu1 && (
                    <div className="item-dropdown">
                      <div className="dropdown" onClick={closeMenu1}>
                        <NavLink to="/explore" onClick={() => btn_icon(!showmenu)}>
                          Explore
                        </NavLink>
                        {/* <NavLink to="/explore2" onClick={() => btn_icon(!showmenu)}>Explore 2</NavLink> */}
                        <NavLink to="/rangking" onClick={() => btn_icon(!showmenu)}>
                          Rangking
                        </NavLink>
                        <NavLink to="/colection" onClick={() => btn_icon(!showmenu)}>
                          Collection
                        </NavLink>
                        <NavLink to="/ItemDetail" onClick={() => btn_icon(!showmenu)}>
                          Items Details
                        </NavLink>
                        <NavLink to="/Auction" onClick={() => btn_icon(!showmenu)}>
                          Live Auction
                        </NavLink>
                        <NavLink to="/helpcenter" onClick={() => btn_icon(!showmenu)}>
                          Help Center
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="navbar-item">
                <div ref={ref2}>
                  <div
                    className={`dropdown-custom dropdown-toggle btn ${
                      openMenu2 && 'dropdown-toggle--open'
                    }`}
                    onClick={handleBtnClick2}
                  >
                    Setup
                  </div>
                  {openMenu2 && (
                    <div className="item-dropdown">
                      <div className="dropdown" onClick={closeMenu2}>
                        <NavLink to="/wallet" onClick={() => btn_icon(!showmenu)}>
                          Wallet
                        </NavLink>
                        <NavLink to="/create" onClick={() => btn_icon(!showmenu)}>
                          Create
                        </NavLink>
                        <NavLink to="/news" onClick={() => btn_icon(!showmenu)}>
                          News
                        </NavLink>
                        <NavLink to="/works" onClick={() => btn_icon(!showmenu)}>
                          Gallery
                        </NavLink>
                        <NavLink to="/activity" onClick={() => btn_icon(!showmenu)}>
                          Activity
                        </NavLink>
                        {/* <NavLink to="/loginTwo" onClick={() => btn_icon(!showmenu)}>login 2</NavLink> */}
                        <NavLink to="/register" onClick={() => btn_icon(!showmenu)}>
                          Register
                        </NavLink>
                        {user && (
                          <>
                            <NavLink to={`/Author/${user.user}`}>Author</NavLink>
                            <NavLink to={`/Profile/${user.user}`}>Profile</NavLink>
                          </>
                        )}
                        <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>
                          Contact Us
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {!user && (
                <div className="navbar-item">
                  <NavLink to="/login" onClick={() => btn_icon(!showmenu)}>
                    <div className="dropdown-link">Login</div>
                  </NavLink>
                </div>
              )}
              {/* <div className='navbar-item'>
                    <div ref={ref3}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick3}
                      >
                        Element
                      </div>
                      {openMenu3 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu3}>
                            <NavLink to="/elegantIcons" onClick={() => btn_icon(!showmenu)}>Elegant Icon</NavLink>
                            <NavLink to="/etlineIcons" onClick={() => btn_icon(!showmenu)}>Etline Icon</NavLink>
                            <NavLink to="/fontAwesomeIcons" onClick={() => btn_icon(!showmenu)}>Font Awesome Icon</NavLink>
                            <NavLink to="/accordion" onClick={() => btn_icon(!showmenu)}>Accordion</NavLink>
                            <NavLink to="/alerts" onClick={() => btn_icon(!showmenu)}>Alerts</NavLink>
                            <NavLink to="/price" onClick={() => btn_icon(!showmenu)}>Pricing Table</NavLink>
                            <NavLink to="/progressbar" onClick={() => btn_icon(!showmenu)}>Progress bar</NavLink>
                            <NavLink to="/tabs" onClick={() => btn_icon(!showmenu)}>Tabs</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div> */}
            </div>
          )}
        </div>
      </header>
    </>
  );
};
export default Header;
