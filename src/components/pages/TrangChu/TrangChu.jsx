import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { MasterLayout } from 'src/components/layouts';
import { withRouter } from "react-router";
import { Row, Col, Button } from 'antd';
import { map, get } from 'lodash';

const TrangChu = (props) => {
  return (
    <MasterLayout>
      <Carousel autoplay>
        {
          map(props.bgSlider, ((item, key) => {
            const image = require(`../../../../${item.value}`);
            return (
              <div
                key={key}
                className="cursor-pointer"
                onClick={() => { props.history.push(item.link)}}
              >
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className="carousel-item"
                />
              </div>
            )
          }))
        }
      </Carousel>
      <div className="content-container">
        <div className="pt30">
          <div className="content-gioithieu">
            <h1 className="gioithieu-title">{ get(props, 'gioiThieu.title') }</h1>
            <Row>
              <Col lg={12} xs={24}>
                <h2 className="gioithieu-content-title">{ get(props, 'gioiThieu.titleContent') }</h2>
                <p className="gioithieu-content">{ get(props, 'gioiThieu.content') }</p>
                <Button className="button-read-more">Xem thêm</Button>
              </Col>
              <Col lg={12} xs={24} className="gioithieu-content-image">
                <div
                  style={{ backgroundImage: `url(${get(props, 'gioiThieu.imgGioiThieu')})` }}
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

TrangChu.propTypes = {
  bgSlider: PropTypes.array,
  gioiThieu: PropTypes.object
}

TrangChu.defaultProps = {
  bgSlider: [],
  gioiThieu: {}
}

const mapStateToProps = state => ({
  bgSlider: state.trangChu.bgSlider,
  gioiThieu: state.trangChu.gioiThieu
});

export default connect(
  mapStateToProps,
  null
)(withRouter(TrangChu));
