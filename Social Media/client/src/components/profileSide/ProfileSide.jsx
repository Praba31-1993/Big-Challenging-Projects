import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileCard from '../ProfileCard/ProfileCard'
import LogoSearch from './LogoSearch/LogoSearch'
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide
