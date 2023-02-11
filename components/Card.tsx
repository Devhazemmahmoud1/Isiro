import React from "react";

const Card = () => {
    return (
        <>
                      <div className="col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title">Recent Estimates</h5>
                      </div>
                      <div className="col-auto">
                        <a
                          href="estimates"
                          className="btn-right btn btn-sm btn-outline-primary"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="progress progress-md rounded-pill mb-3">
                        {/* <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style="width: 39%"
                            aria-valuenow="39"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style="width: 35%"
                            aria-valuenow="35"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style="width: 26%"
                            aria-valuenow="26"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div> */}
                      </div>
                      <div className="row">
                        <div className="col-auto">
                          <i className="fas fa-circle text-success me-1"></i>{" "}
                          Sent
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-warning me-1"></i>{" "}
                          Draft
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-danger me-1"></i>{" "}
                          Expired
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="thead-light">
                          <tr>
                            <th>Customer</th>
                            <th>Expiry Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th className="text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="/img/profiles/avatar-05.jpg"
                                    alt="User Image"
                                  />{" "}
                                  Greg Lynch
                                </a>
                              </h2>
                            </td>
                            <td>5 Nov 2020</td>
                            <td>$175</td>
                            <td>
                              <span className="badge bg-info-light">
                                Sent
                              </span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="edit_invoice"
                                  >
                                    <i className="far fa-edit me-2"></i>Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-trash-alt me-2"></i>
                                    Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="view_estimate"
                                  >
                                    <i className="far fa-eye me-2"></i>View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-file-alt me-2"></i>
                                    Convert to Invoice
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-check-circle me-2"></i>
                                    Mark as sent
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-paper-plane me-2"></i>
                                    Send Estimate
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-check-circle me-2"></i>
                                    Mark as Accepted
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-times-circle me-2"></i>
                                    Mark as Rejected
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="/img/profiles/avatar-06.jpg"
                                    alt="User Image"
                                  />{" "}
                                  Karlene Chaidez
                                </a>
                              </h2>
                            </td>
                            <td>28 Oct 2020</td>
                            <td>$1500</td>
                            <td>
                              <span className="badge bg-warning-light">
                                Expired
                              </span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="edit_invoice"
                                  >
                                    <i className="far fa-edit me-2"></i>Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-trash-alt me-2"></i>
                                    Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="view_estimate"
                                  >
                                    <i className="far fa-eye me-2"></i>View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-file-alt me-2"></i>
                                    Convert to Invoice
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-check-circle me-2"></i>
                                    Mark as sent
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-paper-plane me-2"></i>
                                    Send Estimate
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-check-circle me-2"></i>
                                    Mark as Accepted
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-times-circle me-2"></i>
                                    Mark as Rejected
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="/img/profiles/avatar-07.jpg"
                                    alt="User Image"
                                  />{" "}
                                  John Blair
                                </a>
                              </h2>
                            </td>
                            <td>17 Oct 2020</td>
                            <td>$2350</td>
                            <td>
                              <span className="badge bg-success-light">
                                Accepted
                              </span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="edit_invoice"
                                  >
                                    <i className="far fa-edit me-2"></i>Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-trash-alt me-2"></i>
                                    Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="view_estimate"
                                  >
                                    <i className="far fa-eye me-2"></i>View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-file-alt me-2"></i>
                                    Convert to Invoice
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-check-circle me-2"></i>
                                    Mark as sent
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-paper-plane me-2"></i>
                                    Send Estimate
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-check-circle me-2"></i>
                                    Mark as Accepted
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-times-circle me-2"></i>
                                    Mark as Rejected
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="/img/profiles/avatar-08.jpg"
                                    alt="User Image"
                                  />{" "}
                                  Russell Copeland
                                </a>
                              </h2>
                            </td>
                            <td>8 Oct 2020</td>
                            <td>$1890</td>
                            <td>
                              <span className="badge bg-success-light">
                                Accepted
                              </span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="edit_invoice"
                                  >
                                    <i className="far fa-edit me-2"></i>Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-trash-alt me-2"></i>
                                    Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="view_estimate"
                                  >
                                    <i className="far fa-eye me-2"></i>View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-file-alt me-2"></i>
                                    Convert to Invoice
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-check-circle me-2"></i>
                                    Mark as sent
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-paper-plane me-2"></i>
                                    Send Estimate
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-check-circle me-2"></i>
                                    Mark as Accepted
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-times-circle me-2"></i>
                                    Mark as Rejected
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="/img/profiles/avatar-09.jpg"
                                    alt="User Image"
                                  />{" "}
                                  Leatha Bailey
                                </a>
                              </h2>
                            </td>
                            <td>30 Sep 2020</td>
                            <td>$785</td>
                            <td>
                              <span className="badge bg-success-light">
                                Accepted
                              </span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="edit_invoice"
                                  >
                                    <i className="far fa-edit me-2"></i>Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-trash-alt me-2"></i>
                                    Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="view_estimate"
                                  >
                                    <i className="far fa-eye me-2"></i>View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-file-alt me-2"></i>
                                    Convert to Invoice
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-check-circle me-2"></i>
                                    Mark as sent
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-paper-plane me-2"></i>
                                    Send Estimate
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-check-circle me-2"></i>
                                    Mark as Accepted
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#;"
                                  >
                                    <i className="far fa-times-circle me-2"></i>
                                    Mark as Rejected
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}

export default Card;