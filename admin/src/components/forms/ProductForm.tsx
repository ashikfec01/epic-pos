import React, { FC } from 'react'
import { useLocale } from '@/locales';
import { Button, Form, Input } from 'antd';
import { ProductParams } from '@/interface/product/ProductParams';

const ProductForm: FC = () => {
  const { formatMessage } = useLocale();

  const onFinished = async (form: ProductParams) => {
    console.log({ form })
  };
  return (
    <Form<ProductParams> onFinish={onFinished} >
      <Form.Item
        name="sku"
        rules={[{
          required: true,
          message: formatMessage({ id: "global.tips.product.sku" })
        }]}
      >
        <Input placeholder='Product sku' />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[{
          required: true,
          message: formatMessage({ id: "global.tips.product.name" })
        }]}
      >
        <Input placeholder='Product name' />
      </Form.Item>
      <Form.Item
        name="description"
        rules={[{
          required: true,
          message: formatMessage({ id: "global.tips.product.description" })
        }]}
      >
        <Input placeholder='Product description' />
      </Form.Item>
      <Form.Item
        name="photo"
        rules={[{
          required: true,
          message: formatMessage({ id: "global.tips.product.photo" })
        }]}
      >
        <Input placeholder='Product photo' />
      </Form.Item>
      <Form.Item
        name="unit_price"
        rules={[{
          required: true,
          message: formatMessage({ id: "global.tips.product.unit_price" })
        }]}
      >
        <Input placeholder='Product unit price' />
      </Form.Item>
      <Form.Item
        name="qty"
        rules={[{
          required: true,
          message: formatMessage({ id: "global.tips.product.qty" })
        }]}
      >
        <Input placeholder='Product quantity' />
      </Form.Item>
      <Form.Item
        name="default_commission_percent"
        rules={[{
          required: true,
          message: formatMessage({ id: "global.tips.product.default_commission_percent" })
        }]}
      >
        <Input placeholder='Product default commission percent' />
      </Form.Item>
      <Form.Item
        name="low_stock_qty"
        rules={[{
          required: true,
          message: formatMessage({ id: "global.tips.product.low_stock_qty" })
        }]}
      >
        <Input placeholder='Product low stock quantity' />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" className="login-page-form_button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductForm