const initialState = {
  dsMenuHeader: [
    {
      link: '/',
      name: 'Trang chủ'
    },
    {
      link: '/gioi-thieu',
      name: 'Giới thiệu'
    },
    {
      link: '/lien-he',
      name: 'Liên hệ'
    }
  ],
  headerTitle: {
    diaChi: '01 Lê Thanh Nghị, Quận Hải Châu, Thành Phố Đà Nẵng',
    soDienThoai: '+84 934 895 060',
    email: 'phuocdt.mmo@gmail.com'
  }
};

export default function setting(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
