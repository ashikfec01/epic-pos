import BrandFrom from '@/components/forms/BrandFrom'
import CategoryForm from '@/components/forms/CategoryForm'
import MenufacturerForm from '@/components/forms/MenufacturerForm'
import RackFrom from '@/components/forms/RackFrom'
import SupplierForm from '@/components/forms/SupplierForm'
import WarehouseForm from '@/components/forms/WarehouseForm'
import { Card, Col, Row, Tooltip } from 'antd'
import type { ColProps } from 'antd/es/col';
import React, { FC } from 'react'
import { InfoCircleOutlined } from "@ant-design/icons";
import { useLocale } from '@/locales'

import { ReactComponent as CaretDownIcon } from './assets/caret-down.svg';
import { ReactComponent as CaretUpIcon } from './assets/caret-up.svg';
import ProductForm from '@/components/forms/ProductForm'
import WarehouseTable from '../warehouse/WarehouseTable'
import BrandList from '../brand/BrandList'
import RackList from '../rack/RackList'
import UnitList from '../unit/UnitList'
// 

const wrapperCol: ColProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 6,
};

interface ColCardProps {
  metaName: string;
  metaCount: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  loading: boolean;
}
const ColCard: FC<ColCardProps> = ({ metaName, metaCount, body, footer, loading }) => {
  return (
    <Col {...wrapperCol}>
      <Card loading={loading} className="overview" bordered={false}>
        <div className="overview-header">
          <div className="overview-header-meta">{metaName}</div>
          <div className="overview-header-count">{metaCount}</div>
          <Tooltip title="Introduce">
            <InfoCircleOutlined className="overview-header-action" />
          </Tooltip>
        </div>
        <div className="overview-body">{body}</div>
        <div className="overview-footer">{footer}</div>
      </Card>
    </Col>
  );
};
interface FieldProps {
  name: string;
  number: string;
}

const Field: FC<FieldProps> = ({ name, number }) => (
  <div className="field">
    <span className="field-label">{name}</span>
    <span className="field-number">{number} </span>
  </div>
);

interface TrendProps {
  wow: string;
  dod: string;
  style?: React.CSSProperties;
}

const Trend: FC<TrendProps> = ({ wow, dod, style = {} }) => {
  const { formatMessage } = useLocale();

  return (
    <div className="trend" style={style}>
      <div className="trend-item">
        <span className="trend-item-label">{formatMessage({ id: 'app.dashboard.overview.wowChange' })}</span>
        <span className="trend-item-text">{wow}</span>
        <CaretUpIcon color="#f5222d" />
      </div>
      <div className="trend-item">
        <span className="trend-item-label">{formatMessage({ id: 'app.dashboard.overview.dodChange' })}</span>
        <span className="trend-item-text">{dod}</span>
        <CaretDownIcon color="#52c41a" />
      </div>
    </div>
  );
};
const ProductPage: FC<{ loading: boolean }> = ({ loading }) => {
  const { formatMessage } = useLocale();

  return (
    <div>
      <Row gutter={[12, 12]}>
        <img src="http://localhost:3000/upload/file/1694020372317-4750982421413888.png" />
        <Col>
        <UnitList />
        <RackList />
        <BrandList />
        <WarehouseTable />
        </Col>
        <Col span={12}>
          <Card title="Add warehouse" loading={loading}>
            <WarehouseForm />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Add rack" loading={loading} bordered={true}>
            <RackFrom />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Add categroy" loading={loading} bordered={true}>
            <CategoryForm />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Add brand" loading={loading} bordered={true}>
            {/* <BrandFrom brand={undefined} /> */}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Add menufacturer" loading={loading} bordered={true}>
            <MenufacturerForm />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Add supplier" loading={loading} bordered={true}>
            <SupplierForm />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Add Product" loading={loading} bordered={true}>
            <ProductForm />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductPage