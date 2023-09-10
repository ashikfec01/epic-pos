

import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { RackListProps } from './rack.types'
import { selectRacks , selectError, selectIsFetching } from '@/@domain/models/selectors/rack.selector'
import { Creators } from '@/stores/rackReducer'
import { compose } from '@reduxjs/toolkit'
import { Col, Row, Space } from 'antd'
import { Rack } from "../../@domain/types/Rack";
import MyTable from '@/components/core/table'
import ColumnGroup from 'antd/es/table/ColumnGroup'
import Column from 'antd/es/table/Column'
import MyButton from '@/components/basic/button'


const RackList: FC<RackListProps> = ({
    error, isFetching, racks, getRacksAction
}) => {
    useEffect(()=>{
        getRacksAction('');
    },[]);
    useEffect(()=>{
        console.table(racks)
    }, [isFetching])
  return (
    <Row gutter={[12, 12]}>
      <Col>
      {racks.length && <MyTable<Rack> dataSource={racks} rowKey={record => record.id} height="100%">
        <ColumnGroup title="Name">
          <Column title="Name" dataIndex="name" key="name" />
        </ColumnGroup>
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
    racks: selectRacks
})

const mapDispatchToProps = {
    getRacksAction: Creators.getRacks,
}

const enhanced = compose(connect(mapStateToProps, mapDispatchToProps))

export default enhanced(RackList)