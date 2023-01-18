import React from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import '@/css/my-carousel.scss'

const contentStyle: React.CSSProperties = {
  height: 300,
  color: 'white',
  fontSize: 100,
  textAlign: 'center',
}

const MyCarousel: React.FC = () => {
  return (
    <Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
      <div>
        <h3
          style={{
            backgroundColor: 'red',
            ...contentStyle,
          }}>
          1
        </h3>
      </div>
      <div>
        <h3 style={{ backgroundColor: 'teal', ...contentStyle }}>2</h3>
      </div>
      <div>
        <h3 style={{ backgroundColor: 'yellow', ...contentStyle }}>3</h3>
      </div>
      <div>
        <h3 style={{ backgroundColor: 'blue', ...contentStyle }}>4</h3>
      </div>
    </Carousel>
  )
}
export default MyCarousel
