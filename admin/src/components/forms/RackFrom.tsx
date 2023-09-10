import { RackParams } from '@/interface/product/RackParams';
import { Button, Form, Input } from 'antd';
import React, { FC } from 'react'
import { LocaleFormatter, useLocale } from '@/locales';

const initialValues: RackParams = {
  name: '',
  description: ''
}
const RackFrom:FC = () => {
  const { formatMessage } = useLocale();

  const onFinished = async (form: RackParams) => {
    console.log({ form })
  };
  return (
    <Form<RackParams> onFinish={onFinished} >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.rack.name" })

          }
        ]}
      >
        <Input
          placeholder='Rack name'
        />

      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.rack.description" })

          }
        ]}
      >
        <Input
          placeholder='Rack description'
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

export default RackFrom