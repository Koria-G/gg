import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'

const MyForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form
      validateTrigger={['onBlur', 'onChange']}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <Form.Item
        label="账号："
        name="username"
        rules={[
          {
            pattern: /^[a-zA-Z0-9]{6,11}$/,
            message: '账号由6-11位的数字和字母组成',
            validateTrigger: 'onBlur',
          },
          { required: true, message: '账号不能为空！' },
        ]}>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        label="密码："
        name="password"
        rules={[
          {
            pattern: /^[a-zA-Z0-9]{6,11}$/,
            message: '请输入6-11位的数字和字母组成的密码',
            validateTrigger: 'onBlur',
          },
          { required: true, message: '请输入您的密码!' },
        ]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  )
}

export default MyForm
