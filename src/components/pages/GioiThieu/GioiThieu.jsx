import React from 'react';
import { MasterLayout } from 'src/components/layouts';
import { Row, Col } from 'antd';

const GioiThieu = (props) => {
  return (
    <MasterLayout>
      <div className="content-container">
        <Row>
          <Col lg={18} xs={24}>
            <div className="wrap-chi-tiet">
              <h1 className="title-gioithieu">Giới thiệu</h1>
              <div>CÔNG TY TNHH CÔNG NGHỆ SỐ ĐÔNG TÂY là một trong những công ty chuyên cung cấp dịch vụ kế toán ,dịch vụ tư vấn thuế;  dịch vụ tư vấn tài chính; dịch vụ làm thủ tục về thuế; dịch vụ tư vấn quản lý doanh nghiệp hàng đầu Việt Nam. Chúng tôi có đầy đủ nguồn lực và khả năng để tự tin đáp ứng tất cả nhu cầu của khách hàng. Với đội ngũ cán bộ, nhân viên trẻ trung, tài năng trong đó có nhiều cử nhân, thạc sĩ  hơn 10 năm kinh nghiệm trong lĩnh vực tài chính kế toán.</div>
            </div>
          </Col>
          <Col lg={6} xs={24}>
            <div className="wrap-dich-vu">
              <h3 className="title-menu">Dịch vụ</h3>
              <div className="menu-dichvu">
                <p className="item-menu">dịch vụ kế toán</p>
                <p className="item-menu">dịch vụ kế toán</p>
                <p className="item-menu">dịch vụ kế toán</p>
                <p className="item-menu">dịch vụ kế toán</p>
              </div>
            </div>
            <div className="wrap-dich-vu wrap-news">
              <h3 className="title-menu">Bài viết mới nhất</h3>
              <div className="menu-dichvu">
                <p className="item-menu">dịch vụ kế toán</p>
                <p className="item-menu">dịch vụ kế toán</p>
                <p className="item-menu">dịch vụ kế toán</p>
                <p className="item-menu">dịch vụ kế toán</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </MasterLayout>
  )
}

export default GioiThieu;