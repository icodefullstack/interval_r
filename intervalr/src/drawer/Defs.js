import React from 'react';

const Defs = ()=>{
  return(
    <defs>
      <filter id="Shadow_1">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feFlood floodColor="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
      </filter>
      <filter id="Shadow_2">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feFlood floodColor="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
      </filter>
      <filter id="Shadow_3">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feFlood floodColor="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
      </filter>
      <filter id="Shadow_4">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feFlood floodColor="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
      </filter>
      <filter id="Shadow_5">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feFlood floodColor="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
      </filter>
      <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="360" y1="0" x2="360" y2="240">
        <stop offset="0" stopColor="#CDF5FF"/>
        <stop offset="1" stopColor="#FFFFFF"/>
      </linearGradient>
      <clipPath id="Clip_6">
        <path d="M240,30 L480,30 L480,126 L240,126 z"/>
      </clipPath>
      <filter id="Shadow_7">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feFlood floodColor="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
      </filter>
      <linearGradient id="Gradient_2" gradientUnits="userSpaceOnUse" x1="360.396" y1="146.576" x2="360.396" y2="184.322">
        <stop offset="0" stopColor="#C0D5FF"/>
        <stop offset="0.162" stopColor="#0080FF"/>
        <stop offset="1" stopColor="#000000"/>
      </linearGradient>
    </defs>
  )
}
export default Defs;
