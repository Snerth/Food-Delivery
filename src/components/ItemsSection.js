import React from 'react'
import Item from './Item'
import './ItemsSection.css'

function ItemsSection(props) {
    return(
        <div className='items-section'>
            <div className='items-section-header'>
                <p className='items-section-header-name'>{props.section}</p>
            </div>
            <div className='items-section-body'>
                {
                    props.items.length === 0 && <div className='items-error'>Server is unable to render items. Please, try again.</div> 
                }
                {
                    props.items.map((item, i) => {
                        return <Item
                                    key={i}
                                    item={item}
                                    itemImage={props.itemsImages[i]}
                                    handleShowItemFullImage={props.handleShowItemFullImage}
                                    section={props.section}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default ItemsSection