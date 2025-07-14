import React from 'react'
import Image from 'next/image';

const Card = ({ id, frontSrc, frontAlt, backText}) => {
  return (
    <div className='card' id={id}>
      <div className="cardWrapper">
        <div className="fileCardInner">
            <div className="flipCardFront">
                <Image 
                    priority
                    src={frontSrc}
                    width={500}
                    height={500}
                    alt={frontAlt}
                />
            </div>
            <div className="flipCardBack">
                {backText}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
