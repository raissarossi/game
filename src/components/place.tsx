//fazer componente com o place vaazio e place com o bonequinho
import React from 'react'
import imagePlace from "../components/place.png";
import imageJumpPlace from "../components/jumpPlace.gif";
import Image from 'next/image';

export default function Place({gabHere, className} : PlaceProps) {
  if(gabHere == true){
    return (
      <div className='pt-20'>
      <Image src={imageJumpPlace} alt="Gabriel Jump GIF" width={150} height={150}/>
      </div>
      )
    }
    else{
      return(
        <div className={`${className}`}>
        <Image src={imagePlace} alt="Place" width={150} height={150} />
        </div>
    )
  }
}
