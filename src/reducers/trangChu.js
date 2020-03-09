import database from 'src/database.json';

const initialState = {
  bgSlider: [...database.trangChu.bgSlider],
  gioiThieu: {...database.trangChu.gioiThieu}
};

export default function trangChu(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
