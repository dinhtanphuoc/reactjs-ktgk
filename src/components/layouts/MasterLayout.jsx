import React from 'react';
import { Layout } from 'antd';
import Header from 'src/components/layouts/Header';
import 'src/components/layouts/main.scss';

const MasterLayout = (props) => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        { props.children }
      </Layout.Content>
      <Layout.Footer>
      </Layout.Footer>
    </Layout>
  )
}

export default MasterLayout;