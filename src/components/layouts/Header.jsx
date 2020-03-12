import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Affix } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import logo from 'src/assets/images/logo-ketoangiakhang.png';
import { map, get, isEmpty } from 'lodash';
import { withRouter } from "react-router";
import classnames from 'classnames';

const Header = (props) => {
  const location = useLocation();
  return (
    <Layout.Header>
      <div className="header-title-container-full">
        <div className="header-container">
          <div className="header-title">
            <div className="title-left">
              <i className="icon-location color-icon-title" />
              <span className="title-text">{ get(props, 'headerTitle.diaChi') }</span>
            </div>
            <div className="title-right">
              <i className="icon-phone color-icon-title" />
              <span className="title-text">{ get(props, 'headerTitle.soDienThoai') }</span>
              <i className="icon-envelop pl40 color-icon-title" />
              <span className="title-text">{ get(props, 'headerTitle.email') }</span>
            </div>
          </div>
        </div>
      </div>
      <Affix>
        <div className="header-menu-container-full">
          <div className="header-container">
            <div className="header-menu">
              <div className="header-logo">
                <img
                  src={logo}
                  alt="logo-ketoangiakhang.png"
                  onClick={() => props.history.push('/') }
                  className="cursor-pointer"
                />
              </div>
              <div className="header-content-menu">
                <nav className="wrap-nav">
                  <ul className="list-menu">
                    {
                      map(props.dsMenuHeader, ((item, index) => (
                        <li>
                          <Link
                            key={index}
                            className={classnames("item-menu pl20 pr20", {
                              "color-active": item.link === get(location, 'pathname')
                            })}
                            to={item.link}
                          >
                            { item.name }
                          </Link>
                          {!isEmpty(item.child) && (
                            <ul className="wrap-nav-child">
                              {map(item.child, ((itemChild, indexChild) => (
                                <li className="item-child">
                                  <Link
                                    key={indexChild}
                                    to={itemChild.link}
                                  >
                                    { itemChild.name }
                                  </Link>
                                </li>
                              )))}
                            </ul>
                          )}
                        </li>
                      )))
                    }
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Affix>
    </Layout.Header>
  )
}

Header.propTypes = {
  dsMenuHeader: PropTypes.array,
  headerTitle: PropTypes.object
}

Header.defaultProps = {
  dsMenuHeader: [],
  headerTitle: {}
}

const mapStateToProps = state => ({
  dsMenuHeader: state.setting.dsMenuHeader,
  headerTitle: state.setting.headerTitle
});

export default connect(
  mapStateToProps,
  null
)(withRouter(Header));
