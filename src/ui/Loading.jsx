import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

function Loading({height="80", width="80"}) {
  return (
    <ThreeDots 
    visible={true}
    height={height}
    width={width}
    color="#ba1654"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
  )
}

export default Loading