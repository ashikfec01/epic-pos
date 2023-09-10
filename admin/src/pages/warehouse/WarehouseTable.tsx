import { selectError, selectIsFetching, selectWarehouses } from '@/@domain/models/selectors/warehouse.selector'
import { Warehouse } from '@/@domain/types/Warehouse'
import MyButton from '@/components/basic/button'
import MyTable from '@/components/core/table'
import { Creators } from '@/stores/warehouseReducer'
import { compose } from '@reduxjs/toolkit'
import { Col, Row, Space, Tag } from 'antd'
import Column from 'antd/es/table/Column'
import ColumnGroup from 'antd/es/table/ColumnGroup'
import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const WarehouseTable: FC<{
  error: any, isFetching: boolean, warehouses: Warehouse[],getWarehouses: Function
}> = ({
  error,
  isFetching,
  warehouses,
  getWarehouses
}) => {
  useEffect(() => {
    getWarehouses();
  }, []);
  useEffect(()=> {
    console.log(warehouses)
  },[isFetching])
  return (
    <Row gutter={[12, 12]}>
      <Col>
      {warehouses.length && <MyTable<Warehouse> dataSource={warehouses} rowKey={record => record.id} height="100%">
        <ColumnGroup title="Name">
          <Column title="Name" dataIndex="name" key="name" />
        </ColumnGroup>
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Description" dataIndex="description" key="description" />
        <Column
          title="Action"
          key="action"
          render={(text, record: any) => (
            <Space size="middle">
              <MyButton type="text">Invite {record.lastName}</MyButton>
              <MyButton type="text">Delete</MyButton>
            </Space>
          )}
        />
      </MyTable>}
      </Col>
    </Row>
  )
}

const mapStateToProps = createStructuredSelector({
  error: selectError,
  isFetching: selectIsFetching,
  warehouses: selectWarehouses,
})

const mapDispatchToProps = {
  getWarehouses: Creators.warehouses,
}
const enhanced = compose(connect(mapStateToProps, mapDispatchToProps))
export default enhanced(WarehouseTable);