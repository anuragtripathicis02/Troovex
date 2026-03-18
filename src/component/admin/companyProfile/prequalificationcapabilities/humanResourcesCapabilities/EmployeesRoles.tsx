import Link from "next/link";
import React from "react";

const EmployeesRoles = () => {
  return (
    <div className="board-member-box">
      <div className="board-location-list mt-3">
        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap card-member-box location-list-box justify-content-between">
          <p className="name">
            Head Office{" "}
            <span className="d-block">120 King Street, London, EC2V 7JN</span>
          </p>
          <p className="type">United Kingdom</p>
          <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2">
            <li>
              <Link href="" className="edit-btn ui-icon icon-pencil">
                drop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeesRoles;
