import database from 'src/database.json';

const initialState = {
  dsMenuHeader: [...database.setting.menuHeader],
  headerTitle: {...database.setting.headerTitle},
  footer: {...database.footer},
  gioiThieu: {...database.gioiThieu}
};

export default function setting(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
