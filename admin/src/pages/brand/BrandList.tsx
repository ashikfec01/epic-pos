import { selectBrands, selectError, selectIsFetching } from '@/@domain/models/selectors/brand.selector'
import { Brand } from '@/@domain/types/Brand'
import { Creators } from '@/stores/brandReducer'
import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { BrandListProps } from './brand.types'
import { compose } from '@reduxjs/toolkit'
import { Col, Row, Space } from 'antd'
import MyTable from '@/components/core/table'
import ColumnGroup from 'antd/es/table/ColumnGroup'
import Column from 'antd/es/table/Column'
import MyButton from '@/components/basic/button'


const BrandList: FC<BrandListProps> = ({
    error, isFetching, brands, getBrandsAction,
}) => {
    useEffect(()=>{
        getBrandsAction('');
    },[]);
    useEffect(()=>{
        console.log({brands})
    }, [isFetching])
  return (
    <Row gutter={[12, 12]}>
      <Col>
      {brands.length && <MyTable<Brand> dataSource={brands} rowKey={record => record.id} height="100%">
        <ColumnGroup title="Name">
          <Column title="Name" dataIndex="name" key="name" />
        </ColumnGroup>
        {/* <Column title="Address" dataIndex="address" key="address" /> */}
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
    brands: selectBrands
})

const mapDispatchToProps = {
    getBrandsAction: Creators.getBrands,
}
const enhanced = compose(connect(mapStateToProps, mapDispatchToProps))
export default enhanced(BrandList)