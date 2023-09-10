import { Col, Row, Space, Typography } from 'antd'
import React, { FC } from 'react'
import WarehouseTable from './WarehouseTable'
import WarehouseForm from '@/components/forms/WarehouseForm'
const {Title} = Typography;

const WarehousePage: FC = () => {
  return (
    <Row gutter={[12, 12]}>
      <Col span={24}><WarehouseForm /></Col>
      <Title>Warehouse list</Title>
      <Col span={24}><WarehouseTable/></Col>
    </Row>
  )
}

export default WarehousePage