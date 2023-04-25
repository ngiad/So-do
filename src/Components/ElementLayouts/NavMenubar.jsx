import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineTable } from "react-icons/ai";
import { MdTableRows } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import "../../style/NavMenubar.css";

const NavMenubar = () => {
  return (
    <div className="NavMenubar">
      <ul>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/"}
          >
            <AiOutlineTable /> Lưới
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/table"}
          >
            <MdTableRows /> Bảng
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/chart"}
          >
            <FaRegChartBar /> Thống kê
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenubar;
