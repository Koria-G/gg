import React from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import '@/css/my-carousel.scss'
import crouse01 from '@/assets/images/crouse01.jpg'
import crouse02 from '@/assets/images/crouse02.jpg'

const contentStyle: React.CSSProperties = {
  height: 400,
  color: 'white',
  fontSize: 100,
  textAlign: 'center',
}

const MyCarousel: React.FC = () => {
  return (
    <Carousel autoplay arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
      <div>
        <h3
          style={{
            ...contentStyle,
          }}>
          <img src={crouse01} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={{  ...contentStyle }}><img src={crouse02} alt="" /></h3>
      </div>
    </Carousel>
  )
}
export default MyCarousel
