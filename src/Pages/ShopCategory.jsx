import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { HomeContext } from '../Context/HomeContext'
import Item from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {all_product}=useContext(HomeContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} price={item.price} id={item.id} name={item.name} image={item.image} />
          }
          else
          return null;
        })}
      </div>

    </div>
  )
}
export default ShopCategory