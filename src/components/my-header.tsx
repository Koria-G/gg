import React from 'react'
import logo from '@/assets/logo.png'
import { Popconfirm } from 'antd'
import {
  LogoutOutlined
} from '@ant-design/icons'
import '@/css/my-header.scss'


const MyHeader: React.FC = () =>{
  return (
    <div className='header'>
      <div className='header-first'>
        <div className='logo'>
          <img src={logo} alt="" /></div>
        <div className='user'>
          <ul>
            <li>欢迎登陆，username</li>
            <li>
              <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" >
                <LogoutOutlined /> 退出
              </Popconfirm>
            </li>
          </ul>
        </div>
      </div>
      <div className='header-second'>
        <ul>
        <li>首页</li>
        <li>话题中心</li>
        <li>个人中心</li>
        <li>购物车</li>
      </ul></div>
    </div>
   
  )
}

export default MyHeader;
