import React from 'react';
import { MasterLayout } from 'src/components/layouts';
import { Row, Col, Breadcrumb  } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { map, get } from "lodash";
import { Link } from 'react-router-dom';

const GioiThieu = (props) => {
  console.log(props.gioiThieu);
  const data = `<p style="text-align:start;"><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;"><strong>CÔNG TY TNHH CÔNG NGHỆ SỐ ĐÔNG TÂY </strong>là một trong những công ty chuyên cung cấp dịch vụ kế toán ,dịch vụ tư vấn thuế;  dịch vụ tư vấn tài chính; dịch vụ làm thủ tục về thuế; dịch vụ tư vấn quản lý doanh nghiệp hàng đầu Việt Nam. Chúng tôi có đầy đủ nguồn lực và khả năng để tự tin đáp ứng tất cả nhu cầu của khách hàng. Với đội ngũ cán bộ, nhân viên trẻ trung, tài năng trong đó có nhiều cử nhân, thạc sĩ  hơn 10 năm kinh nghiệm trong lĩnh vực tài chính kế toán.</span></p><p style="text-align:start;">&nbsp;</p><p style="text-align:start;"></p><p><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;">Chúng tôi nêu cao khẩu hiệu “Tạo dựng phong cách chuyên nghiệp” để làm việc chuyên nghiệp và phục vụ khách hàng chuyên nghiệp. Các dịch vụ của chúng tôi đã và đang được sử dụng rộng rãi ở các doanh nghiệp trên toàn HCM với nhiều mô hình khác nhau trong các lĩnh vực khác nhau và được đông đảo khách hàng khẳng định về chất lượng dịch vụ. </span></p><p>&nbsp;</p><p><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;">Khát vọng vươn lên không ngừng và tinh thần tương ái là nét nổi bật trong văn hóa và con người công ty  chúng tôi . Chúng tôi luôn chú tâm xây dựng đội ngũ nhân viên trẻ trung, tài năng và không ngừng chiêu mộ hiền tài từ các vùng miền trong cả nước có chung chí hướng để cùng nhau xây dựng một tổ chức hùng mạnh, tạo ra những dịch vụ, sản phẩm trí tuệ phục vụ cộng đồng và xây dựng đất nước. </span></p><p>&nbsp;</p><p><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;">Với năng lực của mình, chúng tôi tự tin mang đến cho Quý khách hàng những dịch vụ hoàn hảo nhất, chuyên nghiệp tối ưu hóa công tác quản lý, đem lại lợi ích tối đa cho doanh nghiệp của Quý vị. Đến với chúng tôi Quý vị sẽ thấy chuyên nghiệp tạo nên phong cách.</span></p><h2><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 24px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;"><strong>Mục tiêu phát triển</strong></span></h2><p><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;">“Tôn trọng đạo đức nghề nghiệp.</span></p><p><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;">Phấn đấu đem lại lợi ích cao nhất cho khách hàng”</span></p><h2><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 24px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;"><strong>Đội ngũ nhân viên</strong></span></h2><p><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;">Chúng tôi tâm niệm “Con người là nền tảng, đoàn kết là sức mạnh của mọi sự phát triển”, chính vì thế nên công tác nhân sự được đặt lên hàng đầu. Chúng tôi có quy trình tuyển dụng và đào tạo nhân sự chuyên nghiệp, luôn hướng tới việc nâng cao năng lực của các thành viên</span></p><p>&nbsp;</p><h3><span style="color: inherit;background-color: rgb(255,255,255);font-size: 24px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;">Để nhận được thông tin rõ hơn, mời quý khách đến:</span></h3><p><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;">232 Lê Văn Lương, P.Tân Hưng, Q.7 TP.HCM</span></p><p><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;">Hoặc liên hệ theo số điện thọai sau:</span></p><p><span style="color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: open_sansbold, Arial, "Helvetica Neue", Helvetica, Verdana;">08.66.837.512 - 0977 556 904</span>&nbsp;</p>`;
  return (
    <MasterLayout>
      <div className="wrap-breadcrumb">
        <div className="content-container">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Trang chủ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Giới thiệu
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>  
      </div>
      <div className="content-container mt30 mb30">
        <Row gutter={24}>
          <Col lg={18} xs={24}>
            <div className="wrap-chi-tiet">
              <h1 className="title-gioithieu">Giới thiệu</h1>
              <div
                className="content-gioithieu"
                dangerouslySetInnerHTML ={{__html : data}}
              />
            </div>
          </Col>
          <Col lg={6} xs={24}>
            <div className="wrap-dich-vu">
              <h3 className="title-menu">{get(props.gioiThieu, 'title.dichVu')}</h3>
              <div className="menu-dichvu">
                {
                  map(props.gioiThieu.dichVuKeToan, ((item, index) => (
                    <Link to={item.link} className="item-menu" key={index}>{item.value}</Link>
                  )))
                }
              </div>
            </div>
            <div className="wrap-dich-vu wrap-news">
              <h3 className="title-menu">{get(props.gioiThieu, 'title.baiVietMoiNhat')}</h3>
              <div className="menu-dichvu">
                {
                  map(props.gioiThieu.baiVietMoiNhat, ((item, index) => (
                    <Link to={item.link} className="item-menu" key={index}>{item.value}</Link>
                  )))
                }
              </div>
            </div>
            <div className="wrap-dich-vu wrap-news">
              <h3 className="title-menu">{get(props.gioiThieu, 'title.xemNhieuNhat')}</h3>
              <div className="menu-dichvu">
                {
                  map(props.gioiThieu.xemNhieuNhat, ((item, index) => (
                    <Link to={item.link} className="item-menu" key={index}>{item.value}</Link>
                  )))
                }
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </MasterLayout>
  )
}

GioiThieu.propTypes = {
  gioiThieu: PropTypes.object
}

GioiThieu.defaultProps = {
  gioiThieu: {}
}

const mapStateToProps = state => ({
  gioiThieu: state.setting.gioiThieu
});

export default connect(
  mapStateToProps,
  null
)(withRouter(GioiThieu));
