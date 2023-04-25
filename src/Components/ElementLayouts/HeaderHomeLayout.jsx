import React, { useState } from 'react'
import "../../style/HeaderHomeLayout.css"
import logo from "../../Images/logoColor.png"
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../Redux/Slice';
import Request_base from '../../utils/request';
import { useNavigate } from 'react-router-dom';

const HeaderHomeLayout = () => {

  const [search,setSearch] = useState("")
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const Item = useSelector((state) => state.Item)  

  const GetData = async () => {
    try {
      const res = await Request_base.get(
        `loaicongbo?paginate=true&page=${Item.page}&perpage=18`
      );
      const data = await res.data;
      dispatch(
        update({ ...Item, data: [...Item.data, ...data.list], page: Item.page })
      );
    } catch (error) {
      navigate("/error");
    }
  };

  const Submit = (e) => {
    e.preventDefault()
    if(!search){
        return GetData()
    }

    dispatch(update({...Item,data :Item.data.filter((item) => item.ten.includes(search)) })) 
  }  


  return (
    <div className='HeaderHomeLayout'>
        <div className='top'></div>
        <div className='container'>
            <div className="left">
                <img src={logo} alt="logo" />
                <div>
                    <p>HỆ THÔNG BẢO VỆ HIỆN TRẠNG</p>
                    <p>LOÀI NGUY HIỂM CẤP QUÝ HIẾM ĐƯỢC ƯU TIÊN BẢO VỆ</p>
                </div>
            </div>

            <div className="right">
                <form onSubmit={Submit}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button><AiOutlineSearch /></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HeaderHomeLayout