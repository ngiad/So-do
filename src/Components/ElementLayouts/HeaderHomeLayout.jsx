import React, { useState } from 'react'
import "../../style/HeaderHomeLayout.css"
import logo from "../../Images/logoColor.png"
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../Redux/Slice';


const HeaderHomeLayout = () => {

  const [search,setSearch] = useState("")
  const dispatch = useDispatch()
  
  const Item = useSelector((state) => state.Item)  

  const Submit = (e) => {
    e.preventDefault()
    dispatch(update({...Item,search : search}))
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