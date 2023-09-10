import { BrandParams } from '@/interface/product/BrandParams';
import { useLocale } from '@/locales';
import { Button, Form, Input } from 'antd';
import { selectBrands, selectError, selectIsFetching } from '@/@domain/models/selectors/brand.selector'
import { Brand } from '@/@domain/types/Brand'
import { Creators } from '@/stores/brandReducer'
import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import { BrandListProps } from './brand.types'
type BrandFormProps = {
    error: any, isFetching: boolean, brand: BrandParams,addBrandAction: Function
}
const BrandFrom: FC<BrandFormProps> = ({error, isFetching, brand, addBrandAction}) => {
  const { formatMessage } = useLocale();

  const onFinished = async (form: BrandParams) => {
    console.log({ form })
    addBrandAction(form)
  };
  return (
    <Form<BrandParams> onFinish={onFinished} >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.brand.name" })

          }
        ]}
      >
        <Input
          placeholder='Brand name'
        />

      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.brand.description" })

          }
        ]}
      >
        <Input
          placeholder='Brand description'
        />

      </Form.Item>
      <Form.Item>
        <Button  htmlType="submit" type="primary" className="login-page-form_button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
const mapStateToProps = createStructuredSelector({
    error: selectError,
    isFetching: selectIsFetching,
    // brands: selectBrands
})

const mapDispatchToProps = {
    addBrandAction: Creators.addBrand,
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandFrom)
