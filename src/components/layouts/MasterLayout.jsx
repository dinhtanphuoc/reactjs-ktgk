import React from 'react';
import { Layout } from 'antd';
import Header from 'src/components/layouts/Header';
import Footer from 'src/components/layouts/Footer';
import 'src/components/layouts/main.scss';

const MasterLayout = (props) => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        { props.children }
      </Layout.Content>
      <Footer />
    </Layout>
  )
}

export default MasterLayout;