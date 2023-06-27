import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SockJsClient from 'react-stomp';
import {
  addNotification,
  getNotifications,
  removeNotifications,
} from '../../../features/slices/userDatas/notificationsSlice';
import { SOCKET_URL } from '../../../util/constants';
import Spinner from '../../Spinner/Spinner';
import { ItemNotification } from '../ItemNotification/ItemNotification';
import { useStylesListNotification } from './LitsNotificationStyle';

export const ListNotifications = () => {
  const classes = useStylesListNotification();
  const username = useSelector((state) => state.auth.user?.username || "");
  const { list, loading } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications());

    return () => {
      dispatch(removeNotifications());
    };
  }, []);

  const onSocketChange = (notification) => {
    dispatch(addNotification(notification));
  };

  return (
    <ul className={classes.list}>
      <SockJsClient url={SOCKET_URL} topics={[`/user/${username}/queue/notification`]} onMessage={onSocketChange}/>
        {list.length === 0 && loading ? (
        <Spinner />
      ) : (
          list.map((notification, index) => {
            return <ItemNotification key={index} notification={notification} />;
          })
      )}
    </ul>
  );
};
