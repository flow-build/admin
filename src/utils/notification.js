import { store } from 'react-notifications-component';

const notification = (title, message, type, duration) => {
  store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration,
      onScreen: true,
    },
  });
};

export default notification;
