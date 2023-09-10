import { WarehouseParams } from '@/interface/product/WarehouseParams'
import { Button, Form, Input } from 'antd'
import React, { FC } from 'react'
import { LocaleFormatter, useLocale } from '@/locales';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { Creators } from '@/stores/warehouseReducer';
import { createStructuredSelector } from 'reselect';
import { selectError, selectIsFetching, selectWarehouses } from '@/@domain/models/selectors/warehouse.selector';
const initialValues: WarehouseParams = {
  name: '',
  address: '',
  description: ''
}

const WarehouseForm: FC<{
  error: boolean,
  isFetching: boolean,
  addWarehouseAction: Function,
}> = ({
  error,isFetching, addWarehouseAction
}) => {
  const { formatMessage } = useLocale();
  const onFinished = async (payload: WarehouseParams) => {
    addWarehouseAction(payload)
  };
  return (
    <Form<WarehouseParams> onFinish={onFinished} >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.warehouse.name" })
          }
        ]}
      >
        <Input
          placeholder='Warehouse name'
        />

      </Form.Item>
      <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.warehouse.address" })
          }
        ]}
      >
        <Input
          placeholder='Warehouse address'
        />

      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.warehouse.description" })
          }
        ]}
      >
        <Input
          placeholder='Warehouse description'
        />

      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" className="login-page-form_button">
          Add Warehouse
        </Button>
      </Form.Item>
    </Form>
  )
}

const mapStateToProps = createStructuredSelector({
  error: selectError,
  isFetching: selectIsFetching,
  warehouses: selectWarehouses,
})

const mapDispatchToProps = {
  addWarehouseAction: Creators.addWarehouse,
}
const enhanced = compose(connect(mapStateToProps, mapDispatchToProps))
export default enhanced(WarehouseForm);