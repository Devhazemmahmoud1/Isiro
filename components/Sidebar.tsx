import React, { useEffect, CSSProperties } from "react";
import { Users, Home, Clipboard, Trello, FileText, Star } from "react-feather";
import Link from "next/link";

export default function SideBar() {
  useEffect(() => {
    var $slimScrolls = $(".slimscroll");
    if (typeof window !== "undefined") {
      if ($slimScrolls.length > 0) {
        $(".slimscroll").slimScroll({
          height: "auto",
          width: "100%",
          position: "right",
          size: "7px",
          color: "#ccc",
          allowPageScroll: false,
          wheelStep: 10,
          touchScrollStep: 100,
        });
        var wHeight = $(window).height() ? window.innerHeight - 60 : "10";
        $slimScrolls.height(wHeight);
        $(".sidebar .slimScrollDiv").height(wHeight);
        $(window).resize(function () {
          var rHeight = $(window).height() ? window.innerHeight - 60 : "10";
          $slimScrolls.height(rHeight);
          $(".sidebar .slimScrollDiv").height(rHeight);
        });
      }
    }
  }, []);

  const toggleSlide = () => {
    const Sidemenu = function () {
        //@ts-ignore
        $menuItem = $("#sidebar-menu a");
      };
      var $this = Sidemenu;
		$('#sidebar-menu a').on('click', function (e) {
            console.log('heloo')
			if ($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if (!$(this).hasClass('subdrop')) {
                console.log(1)
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
                return false;
			} else {
                console.log(2)
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
                return false
			}
		});
		$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
        return false;
  }

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul onClick={toggleSlide}>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className="active">
              <Link href="/" legacyBehavior>
                <a href="dashboard">
                  <Home />
                  <span>Overview</span>
                </a>
              </Link>
            </li>
            <li className="!active">
              <a href="customer">
                <Users /> <span>Contacts</span>
              </a>
            </li>
            <li className="submenu <?php echo ($page == 'invoices' || $page == 'edit_invoice' || $page == 'view_invoice' || $page == 'invoice_grid' || $page == 'invoice_paid' || $page == 'invoice_overdue' || $page == 'invoice_draft' || $page == 'invoice_recurring' || $page == 'invoice_cancelled' || $page == 'invoices_settings' || $page == 'tax_settings' || $page == 'bank_settings' || $page == 'add_invoice' || $page == 'invoice_grid_two' || $page == 'view_invoice_two')?'active':'';?>">
              <a href="#">
                <Trello />
                <span> Accounting</span> <span className="menu-arrow"></span>
              </a>
              <ul>
                <li>
                  <a
                    className="active"
                    href="invoices"
                  >
                    Template
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'invoice_grid')?'active':'';?>"
                    href="invoice_grid"
                  >
                    Appendix overview
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'invoice_grid_two')?'active':'';?>"
                    href="invoice_grid_two"
                  >
                    Plant index
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'add_invoice')?'active':'';?>"
                    href="add_invoice"
                  >
                    Pay
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'edit_invoice')?'active':'';?>"
                    href="edit_invoice"
                  >
                    Cash register
                  </a>
                </li>
              </ul>
            </li>
            <li className="submenu <?php echo ($page == 'invoices' || $page == 'edit_invoice' || $page == 'view_invoice' || $page == 'invoice_grid' || $page == 'invoice_paid' || $page == 'invoice_overdue' || $page == 'invoice_draft' || $page == 'invoice_recurring' || $page == 'invoice_cancelled' || $page == 'invoices_settings' || $page == 'tax_settings' || $page == 'bank_settings' || $page == 'add_invoice' || $page == 'invoice_grid_two' || $page == 'view_invoice_two')?'active':'';?>">
              <a href="#">
                <Clipboard />
                <span> Invoices</span> <span className="menu-arrow"></span>
              </a>
              <ul>
                <li>
                  <a
                    className="<?php echo ($page == 'invoices' || $page == 'invoice_paid' || $page == 'invoice_overdue' || $page == 'invoice_draft' || $page == 'invoice_recurring' || $page == 'invoice_cancelled')?'active':'';?>"
                    href="invoices"
                  >
                    Invoices List
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'invoice_grid')?'active':'';?>"
                    href="invoice_grid"
                  >
                    Invoices Grid
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'invoice_grid_two')?'active':'';?>"
                    href="invoice_grid_two"
                  >
                    Invoices Grid 2
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'add_invoice')?'active':'';?>"
                    href="add_invoice"
                  >
                    Add Invoices
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'edit_invoice')?'active':'';?>"
                    href="edit_invoice"
                  >
                    Edit Invoices
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'view_invoice')?'active':'';?>"
                    href="view_invoice"
                  >
                    Invoices Details
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'view_invoice_two')?'active':'';?>"
                    href="view_invoice_two"
                  >
                    Invoices Details 2
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'invoices_settings' || $page == 'tax_settings' || $page == 'bank_settings')?'active':'';?>"
                    href="invoices_settings"
                  >
                    Invoices Settings
                  </a>
                </li>
              </ul>
            </li>
            <li className="<?php echo ($page == 'invoice_item' || $page == 'invoice_category')?'active':'';?>">
              <a href="invoice_item">
                <Star /> <span>Products</span>
              </a>
            </li>
            <li className="<?php echo ($page == 'payments' || $page == 'add_payments')?'active':'';?>">
              <a href="payments">
                <i data-feather="credit-card"></i> <span>Payments</span>
              </a>
            </li>
            <li className="<?php echo ($page == 'expenses' || $page == 'add_expenses' || $page == 'edit_expenses')?'active':'';?>">
              <a href="expenses">
                <i data-feather="package"></i> <span>Expenses</span>
              </a>
            </li>
            <li className="submenu <?php echo ($page == 'sales_report' || $page == 'expenses_report' || $page == 'profit_loss_report' || $page == 'tax_report')?'active':'';?>">
              <a href="#">
                <FileText /><span> Reports</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul>
                <li>
                  <a
                    className="<?php echo ($page == 'sales_report')?'active':'';?>"
                    href="sales_report"
                  >
                    Sales Report
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'expenses_report')?'active':'';?>"
                    href="expenses_report"
                  >
                    Expenses Report
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'profit_loss_report')?'active':'';?>"
                    href="profit_loss_report"
                  >
                    Profit & Loss Report
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'tax_report')?'active':'';?>"
                    href="tax_report"
                  >
                    Taxs Report
                  </a>
                </li>
              </ul>
            </li>

            <li className="submenu <?php echo ($page == 'blogs' || $page == 'pending_blog' || $page == 'add_blog' || $page == 'blog_details' || $page == 'edit_blog' || $page == 'blog_categories')?'active':'';?>">
              <a href="#">
                <i data-feather="grid"></i> <span> Blogs</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul>
                <li>
                  <a
                    className="<?php echo ($page == 'blogs' || $page == 'pending_blog' || $page == 'blog_details')?'active':'';?>"
                    href="blogs"
                  >
                    All Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'add_blog')?'active':'';?>"
                    href="add_blog"
                  >
                    Add Blog
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'edit_blog')?'active':'';?>"
                    href="edit_blog"
                  >
                    Edit Blog
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'blog_categories')?'active':'';?>"
                    href="blog_categories"
                  >
                    Categories
                  </a>
                </li>
              </ul>
            </li>

            <li className="<?php echo ($page == 'settings' || $page == 'preferences' || $page == 'tax_types' || $page == 'expense_category' || $page == 'notifications' || $page == 'change_password' || $page == 'delete_account')?'active':'';?>">
              <a href="settings">
                <i data-feather="settings"></i> <span>Settings</span>
              </a>
            </li>
            <li className="submenu <?php echo ($page == 'chat' || $page == 'calendar' || $page == 'inbox')?'active':'';?>">
              <a href="#">
                <i data-feather="grid"></i> <span> Application</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul>
                <li>
                  <a
                    className="<?php echo ($page == 'chat')?'active':'';?>"
                    href="chat"
                  >
                    Chat
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'calendar')?'active':'';?>"
                    href="calendar"
                  >
                    Calendar
                  </a>
                </li>
                <li>
                  <a
                    className="<?php echo ($page == 'inbox')?'active':'';?>"
                    href="inbox"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
