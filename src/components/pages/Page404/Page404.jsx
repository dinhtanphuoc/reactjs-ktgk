import React from 'react';
import { Result, Button } from 'antd';
import { withRouter } from "react-router";

const Page404 = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Xin lỗi, trang này không tồn tại!"
      extra={
        <Button
          type="primary"
          onClick={() => props.history.push('/') }
        >
          Quay lại
        </Button>
      }
    />
  )
}

export default withRouter(Page404)