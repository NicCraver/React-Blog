import React from 'react'
import '../public/style/components/header.css'

import { Row, Col, Menu, Icon } from 'antd'

const Header = () => {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">Nic</span>
          <span className="header-txt">安想智慧医疗-前端开发工程师</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item>首页</Menu.Item>
            <Menu.Item>视频</Menu.Item>
            <Menu.Item>生活</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
