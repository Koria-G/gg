import React from 'react'
import MyCarousel from '@/components/my-carousel'
import MyHeader from '@/components/my-header'
import MyNavUser from '@/components/my-nav-user'
import MyNavAdmin from '@/components/my-nav-admin'

export default function index() {
  return (
    <>
    <MyHeader />
    <MyCarousel/>
    {/* <MyNavUser/> */}
    <MyNavAdmin/>
    </>
  
  )
}
