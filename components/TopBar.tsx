import React, { useEffect, useState } from "react";
import { Bell, Link } from "react-feather";

export default function TopBar() {
  const [isOpened, toggleMobileBar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      var $wrapper = $(".main-wrapper");
      var $pageWrapper = $(".page-wrapper");
      var $slimScrolls = $(".slimscroll");
      toggleSideBar();
    }
  });

  const toggleSideBar = (): void => {
    $(document).on("click", "#toggle_btn", function (): boolean {
      if ($("body").hasClass("mini-sidebar")) {
        $("body").removeClass("mini-sidebar");
        $(".subdrop + ul").slideDown();
      } else {
        $("body").addClass("mini-sidebar");
        $(".subdrop + ul").slideUp();
      }
      // setTimeout(function () {
      //     mA.redraw();
      //     mL.redraw();
      // }, 300);
      return false;
    });
  };

  const mobileButtonPress = (): void => {
    // Mobile menu sidebar overlay
    var $wrapper = $(".main-wrapper");
    if (isOpened == false) {
      $("body").append('<div class="sidebar-overlay"></div>');
      $(document).on("click", "#mobile_btn", function () {
        $wrapper.toggleClass("slide-nav");
        $(".sidebar-overlay").toggleClass("opened");
        $("html").toggleClass("menu-opened");
        toggleMobileBar((value) => {
          return (value = true);
        });
        return false;
      });
    } else {
      $(document).on("click", "#mobile_btn", function () {
        $wrapper.removeClass("slide-nav");
        $(".sidebar-overlay").removeClass("opened");
        $("html").removeClass("menu-opened");
        toggleMobileBar((value) => {
          return (value = false);
        });
        return false;
      });
    }
  };

  return (
    <div className="header header-one">
      <div className="header-left header-left-one">   
        <a href="/" className="logo">
          <img src="/isiro_logo.png" alt="Logo" />
        </a>
        <a href="/" className="white-logo">
          <img src="/isiro_logo.png" alt="Logo" />
        </a>

        <a href="/" className="logo logo-small">
          <img src="/isiro_logo.png" alt="Logo" width="30" height="30" />
        </a>
        
      </div>

      <a href="#" id="toggle_btn" onClick={toggleSideBar}>
        <i className="fas fa-bars"></i>
      </a>

      <div className="top-nav-search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
          <button className="btn" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <a className="mobile_btn" id="mobile_btn" onClick={mobileButtonPress}>
        <i className="fas fa-bars"></i>
      </a>

      <ul className="nav nav-tabs user-menu">
        <li className="nav-item dropdown has-arrow flag-nav">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
          >
            <img src="./img/flags/us.png" alt="" height="20" />{" "}
            <span>English</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href="#" className="dropdown-item">
              <img src="./img/flags/us.png" alt="" height="16" /> English
            </a>
            <a href="#" className="dropdown-item">
              <img src="./img/flags/dk.png" alt="" height="16" /> Denimark
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <Bell /> <span className="badge rounded-pill">5</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href="#" className="clear-noti">
                {" "}
                Clear All
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="#">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt=""
                          src="<?php echo base_url();?>/assets/img/profiles/avatar-02.jpg"
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Brian Johnson</span> paid
                          the invoice{" "}
                          <span className="noti-title">#DF65485</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="#">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt=""
                          src="<?php echo base_url();?>/assets/img/profiles/avatar-03.jpg"
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Marie Canales</span> has
                          accepted your estimate{" "}
                          <span className="noti-title">#GTR458789</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="#">
                    <div className="media d-flex">
                      <div className="avatar avatar-sm">
                        <span className="avatar-title rounded-circle bg-primary-light">
                          <i className="far fa-user"></i>
                        </span>
                      </div>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">
                            New user registered
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="#">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt=""
                          src="<?php echo base_url();?>/assets/img/profiles/avatar-04.jpg"
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Barbara Moore</span>{" "}
                          declined the invoice{" "}
                          <span className="noti-title">#RDW026896</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="#">
                    <div className="media d-flex">
                      <div className="avatar avatar-sm">
                        <span className="avatar-title rounded-circle bg-info-light">
                          <i className="far fa-comment"></i>
                        </span>
                      </div>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">
                            You have received a new message
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="#">View all Notifications</a>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <span className="user-img">
              <img src="/assets/img/profiles/avatar-01.jpg" alt="" />
              <span className="status online"></span>
            </span>
            <span>Admin</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="profile">
              <i data-feather="user" className="me-1"></i> Profile
            </a>
            <a className="dropdown-item" href="settings">
              <i data-feather="settings" className="me-1"></i> Settings
            </a>
            <a className="dropdown-item" href="index">
              <i data-feather="log-out" className="me-1"></i> Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
