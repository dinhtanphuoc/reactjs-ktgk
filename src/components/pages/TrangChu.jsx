import React from 'react';
import { Carousel } from 'antd';
import 'src/components/pages/_trangchu.scss';
import { MasterLayout } from 'src/components/layouts';
import { withRouter } from "react-router";
import { Row, Col, Button } from 'antd';
import logoV1 from 'src/assets/images/bg-ketoangiakhang-2.jpg';
import logoV2 from 'src/assets/images/bg-ketoangiakhang-2.jpg';
import imgGioiThieu from 'src/assets/images/gioithieu-ketoangiakhang.jpg';

const TrangChu = (props) => {
  return (
    <MasterLayout>
      <Carousel autoplay>
        <div
          className="cursor-pointer"
          onClick={() => { props.history.push('/gioi-thieu')}}
        >
          <img
            src={logoV1}
            alt="bg-ketoangiakhang"
            className="carousel-item"
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => { props.history.push('/lien-he')}}
        >
          <img
            src={logoV2}
            alt="bg-ketoangiakhang-2"
            className="carousel-item"
          />
        </div>
      </Carousel>
      <div className="content-container">
        <div className="pt30">
          <div className="content-gioithieu">
            <h1 className="gioithieu-title">Vì sao bạn nên chọn Gia Khang</h1>
            <Row gutter={20}>
              <Col lg={12} xs={24}>
                <h2 className="gioithieu-content-title">Gia khang - Chuyên nghiệp và kinh nghiệm</h2>
                <p className="gioithieu-content">
                  Công Ty TNHH MTV Gia Khang là một trong những công ty chuyên cung cấp dịch vụ kế toán,
                  dịch vụ tư vấn thuế; dịch vụ tư vấn tài chính; dịch vụ làm thủ tục về thuế,
                  dịch vụ tư vấn quản lý doanh nghiệp hàng đầu Việt Nam.
                  Chúng tôi có đầy đủ nguồn lực và khả năng để tự tin đáp ứng tất cả nhu cầu của khách hàng.
                  Với đội ngũ cán bộ, nhân viên trẻ trung, tài năng trong đó có nhiều cử nhân,
                  thạc sĩ hơn 10 năm kinh nghiệm trong lĩnh vực tài chính kế toán...
                </p>
                <Button className="button-xemthem">Xem thêm</Button>
              </Col>
              <Col lg={12} xs={24} className="gioithieu-content-image">
                <img
                  src={imgGioiThieu}
                  alt="gioithieu-ketoangiakhang"
                  className="gioithieu-image"
                />
              </Col>
            </Row>
          </div>
          <Row>
            <Col lg={8} xs={24}>col-8</Col>
            <Col lg={8} xs={24}>col-8</Col>
            <Col lg={8} xs={24}>col-8</Col>
          </Row>
        </div>
      </div>
    </MasterLayout>
  )
}

export default withRouter(TrangChu);