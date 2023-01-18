import React from 'react'
import MyForm from '@/components/my-form'
import MyFooter from '@/components/my-footer'

import './index.scss'
export default function index() {
  return (
    <>
      <div id="login">
        <h1 className="text">
          <span>Koria </span>汉服屋
        </h1>

        <div className="form-style">
          <h2 className="login">登录</h2>
          <p className="user">
            <button className="username">用户</button>
            <button className="admin">管理员</button>
          </p>
          <MyForm />
        </div>
        <MyFooter />
      </div>
    </>
  )
}
