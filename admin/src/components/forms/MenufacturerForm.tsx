import { MenufacturerParams } from '@/interface/product/MenufacturerParams';
import { useLocale } from '@/locales';
import { Button, Form, Input } from 'antd';
import React, { FC } from 'react'

const MenufacturerForm:FC = () => {
  const { formatMessage } = useLocale();

  const onFinished = async (form: MenufacturerParams) => {
    console.log({ form })
  };
  return (
    <Form<MenufacturerParams> onFinish={onFinished} >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.manufacturer.name" })

          }
        ]}
      >
        <Input
          placeholder='Menufacturer name'
        />

      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.manufacturer.description" })
          }
        ]}
      >
        <Input
          placeholder='Menufacturer description'
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

export default MenufacturerForm