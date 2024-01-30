import PropTypes from 'prop-types';

import { NotificationMessage } from './NotificationStyles';

const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
