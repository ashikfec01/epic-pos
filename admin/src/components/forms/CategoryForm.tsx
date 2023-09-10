import { CategoryParams } from '@/interface/product/CategoryParams';
import { useLocale } from '@/locales';
import { Button, Form, Input } from 'antd';
import React, { FC } from 'react'

const CategoryForm:FC = () => {
  const { formatMessage } = useLocale();
  const onFinished = async (form: CategoryParams) => {
    console.log({ form })
  };
  return (
    <Form<CategoryParams> onFinish={onFinished} >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.category.name" })

          }
        ]}
      >
        <Input
          placeholder='Category name'
        />

      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: formatMessage({id: "global.tips.category.description" })

          }
        ]}
      >
        <Input
          placeholder='Category description'
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

export default CategoryForm