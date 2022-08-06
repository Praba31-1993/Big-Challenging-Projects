import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import LogoSearch from './LogoSearch/LogoSearch'
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCard/>
    </div>
  )
}

export default ProfileSide
