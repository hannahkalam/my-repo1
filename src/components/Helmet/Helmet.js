import React from 'react'

const Helmet = (props) => {

    document.title ='AERIN -' + props.title
  return (
    <div className='t-bar'>
      {props.children}
    </div>
  )
}

export default Helmet
