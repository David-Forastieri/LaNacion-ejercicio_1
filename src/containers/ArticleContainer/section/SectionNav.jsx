import React from 'react'
import { OrderItemTag } from './Sections.style';

const SectionNav = ( {tagsItem} ) => {
  return (
    <>
      <OrderItemTag>
        {tagsItem.map((tag, index) => {
          return(
              <a key={index} href={tag.slug}>{tag.text}</a>
            )
        })}
      </OrderItemTag>
    </>
  )
}

export default SectionNav;