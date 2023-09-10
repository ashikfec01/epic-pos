import { SupplierParams } from '@/interface/product/SupplierParams';
import { useLocale } from '@/locales';
import { Button, Form, Input } from 'antd';
import React, { FC } from 'react'

const SupplierForm: FC = () => {
  const { formatMessage } = useLocale();
  const onFinished = async (form: SupplierParams) => {
    console.log({ form })
  };
  return (
    <Form<SupplierParams> onFinish={onFinished} >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.supplier.name" })
          }
        ]}
      >
        <Input
          placeholder='Supplier name'
        />

      </Form.Item>

      <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.supplier.address" })
          }
        ]}
      >
        <Input
          placeholder='Supplier address'
        />

      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.supplier.phone" })
          }
        ]}
      >
        <Input placeholder='Supplier phone number' />
      </Form.Item>
      <Form.Item
        name="contact_person_name"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.supplier.contact_person_name" })
          }
        ]}
      >
        <Input placeholder='Supplier contact person name' />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" className="login-page-form_button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SupplierForm