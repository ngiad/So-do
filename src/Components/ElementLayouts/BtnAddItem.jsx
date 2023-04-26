import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../style/BtnAddItem.css";
import { useNavigate } from "react-router-dom";
import Request_base from "../../utils/request";
import { update } from "../../Redux/Slice";

const BtnAddItem =  () => {
  const [loading, setloading] = useState(false);
  const Item = useSelector((state) => state.Item);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const GetData = async () => {
    try {
      setloading(true);
      const res = await Request_base.get(
        `loaicongbo?paginate=true&page=${Item.page + 1}&perpage=18`
      );
      const data = await res.data;
      dispatch(
        update({ ...Item, data: [...Item.data, ...data.list], page: Item.page + 1})
      );
    } catch (error) {
      navigate("/error");
    } finally {
      setloading(false);
    }
  };


  const HandleAddItem = async () => {
    GetData()
  };

  useEffect(() => {
    GetData()
  },[])

  return (
    <>
      {loading ? (
        <div class="loader">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      ) : (
        <button onClick={HandleAddItem} className="addItem">
          Tải thêm
        </button>
      )}{" "}
    </>
  );
};

export default BtnAddItem;
