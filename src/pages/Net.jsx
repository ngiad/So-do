import React, { useMemo } from 'react'
import BtnAddItem from '../Components/ElementLayouts/BtnAddItem'
import { useSelector } from 'react-redux'
import "../style/Net.css"
import { CiSquareQuestion } from 'react-icons/ci'


const Net = () => {
  const Item = useSelector((state) => state.Item)

  const RenderItem = useMemo(() =>{
    if(Item.search){
      return Item.data?.filter((item) => item.ten.toLowerCase().includes(Item.search?.toLowerCase()))
    }else{
      return Item.data
    }
  } ,[Item])

  const RenderHot = RenderItem?.slice(0,6)?.map((item,index) => {
    const test = `https://loainguycap.ceid.gov.vn/${item.attachments[0].path}`
    return <div className='hotItem' key={index}>
      <div className="top">
        <img src={test} alt="imageItem" />
      </div>
      <div className="bottom">
          <p>{item.phylumn.ten}</p>
          <h3>{item.ten}</h3>
          <p>{item.ten_khoa_hoc}</p>
          <p><span><CiSquareQuestion /></span> Chưa xác định</p>
      </div>
    </div>
  })

  const Render = RenderItem?.slice(6)?.map((item,index) => {
    return <div className='item' key={index}>
      <div className="bottom">
          <p>{item.phylumn.ten}</p>
          <h3>{item.ten}</h3>
          <p>{item.ten_khoa_hoc}</p>
          <p><span><CiSquareQuestion /></span> Chưa xác định</p>
      </div>
    </div>
  })


  return (
    <div className='content'>
      <p><strong>kết quả :  ({Item.data.length})</strong></p>
      <div className='hot'>
          {RenderHot}
      </div>
      <p><strong>Kết quả khác</strong></p>
      <div className='other'>
          {Render}
      </div>
      <BtnAddItem />
    </div>
  )
}

export default Net