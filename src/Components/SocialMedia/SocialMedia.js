import React from 'react';
import './SocialMedia.css'

export default function SocialMedia(props) {
  return (
    <div className='social-media-wrapper'>
        <i className={props.icon}></i>
    </div>
  )
}

