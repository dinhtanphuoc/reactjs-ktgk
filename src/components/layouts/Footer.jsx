import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import { map, get } from 'lodash';
import { withRouter } from "react-router";

const Footer = (props) => {
  return (
    <div className="container-footer">
      <Layout.Footer>
        <div className="content-container">
          <div className="pt20">
            <Row>
              <Col lg={10} xs={24} className="pd-10">
                <h2 className="title-footer">Liên hệ với chúng tôi</h2>
                <div className="item-lien-he">
                  <span className="icon-home2" />
                  <span className="text-lien-he">{get(props, 'footer.lienHe.diaChi')}</span>
                </div>
                <div className="item-lien-he">
                  <span className="icon-phone" />
                  <span className="text-lien-he">{get(props, 'footer.lienHe.sdt')}</span>
                </div>
                <div className="item-lien-he">
                  <span className="icon-mail3" />
                  <span className="text-lien-he">{get(props, 'footer.lienHe.email')}</span>
                </div>
                <div className="item-lien-he">
                  <span className="icon-earth" />
                  <span className="text-lien-he">{get(props, 'footer.lienHe.web')}</span>
                </div>
                <div className="wrap-mangxh">
                  <div className="icon-mangxh">
                    <span className="icon icon-facebook"/>
                  </div>
                  <div className="icon-mangxh">
                    <span className="icon icon-twitter"/>
                  </div>
                  <div className="icon-mangxh">
                    <span className="icon icon-google"/>
                  </div>
                  <div className="icon-mangxh">
                    <span className="icon icon-youtube"/>
                  </div>
                </div>
              </Col>
              <Col lg={6} xs={24} className="pd-10">
                <h2 className="title-footer">Dịch vụ</h2>
                  {
                    map(props.footer.dichVu, ((item, index) => (
                      <div className="item-lien-he" key={index}>
                        <span className="text-lien-he ml0">{item.value}</span>
                      </div>
                    )))
                  }
              </Col>
              <Col lg={8} xs={24} className="pd-10">
                <h2 className="title-footer">Bạn Cần hỗ trợ</h2>
                <div className="hot-line">{get(props, 'footer.lienHe.sdt')}</div>
                <div className="wrap-dang-ky">
                  <p>ĐĂNG KÝ NHẬN TIN KHUYẾN MẠI</p>
                  <div className="wrap-form">
                    <input className="input-khuyen-mai" type="text" placeholder="Email đăng ký"/>
                    <button className="btn-send">Gửi</button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Layout.Footer>
      <div className="content-container bottom-footer">
        <p>Sosachketoan.vn - Công ty TNHH Công Nghệ Số Đông Tây</p>
        <p>Copyright © 202. All rights reserved</p>
      </div>
    </div>
  )
}

Footer.propTypes = {
  footer: PropTypes.object
}

Footer.defaultProps = {
  footer: {}
}

const mapStateToProps = state => ({
  footer: state.setting.footer
});

export default connect(
  mapStateToProps,
  null
)(withRouter(Footer));
