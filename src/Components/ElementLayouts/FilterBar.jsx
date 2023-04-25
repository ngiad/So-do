import React, { useEffect, useReducer, useState } from "react";
import Request_base from "../../utils/request";
import { useNavigate } from "react-router-dom";
import "../../style/Filter.css";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

const STATE = {
  top: false,
  bottom: false,
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case 0:
      if (state.top) {
        return { ...state, top: false };
      } else {
        return { ...state, top: true };
      }
    case 1:
      if (state.bottom) {
        return { ...state, bottom: false };
      } else {
        return { ...state, bottom: true };
      }
    default:
      break;
  }
};

const FilterBar = () => {
  const [check, dispatch] = useReducer(reducerFunc, STATE);
  const [filterList, setFilterList] = useState([]);
  const navigate = useNavigate();

  const handleGetCity = async () => {
    try {
      const res = await Request_base.get(
        "danhmuccha?ma_danh_mucs[]=REDBOOK&ma_danh_mucs[]=IUCN"
      );
      const data = await res.data;
      setFilterList(data);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    handleGetCity();
  }, []);


  const handleClick = (index) => {
    dispatch({type : index})
  }

  const render = filterList.map((item, index) => {
    return (
      <div className="option" key={index}>
        <p onClick={() => handleClick(index)}>
          <strong>
            <span>
              {check[index === 0 ? "top" : "bottom"] ? (
                <BsFillCaretDownFill />
              ) : (
                <BsFillCaretRightFill />
              )}{" "}
            </span>{" "}
            {item.ten}
          </strong>
        </p>
        <div className={`option_content ${check[index === 0 ? "top" : "bottom"] && "block"}`}>
          {item?.childs.map((option, i) => {
            return (
              <div key={i}>
                <input
                  id={option.ten.split(" ").join("")+index+i}
                  value={option.ten}
                  type="checkbox"
                />{" "}
                <label htmlFor={option.ten.split(" ").join("")+index+i}>
                  {option.ma_danh_muc} - {option.ten}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return <div className="FilterBar">{render}</div>;
};

export default FilterBar;
