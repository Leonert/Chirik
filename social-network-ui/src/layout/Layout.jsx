import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { BottomLine } from '../components/BottomLine/BottomLine';
import { CustomSnackbar } from '../components/CustomSnackbar/CustomSnackbar';
// import { CustomSnackbar } from '../components/CustomSnackbar/CustomSnackbar';
import { handleSnackbar } from '../features/slices/snackbarSlice';

export const Layout = () => {
  const { user } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.snackbar);

  return (
    <div>
      <div className="container">
        {/* <Modal>{login ? <Login /> : '<Sign up/>'}</Modal> */}
        <Outlet />
      </div>
      
      <CustomSnackbar />
      {!user && <BottomLine />}
    </div>
  );
};
