import { Col, Row } from 'antd'
import React, { FC } from 'react'
import RackList from './RackList'

const RackPage:FC = () => {
  return (
    <Row>
      <Col>
        <RackList />
      </Col>
    </Row>
  )
}

export default RackPage;