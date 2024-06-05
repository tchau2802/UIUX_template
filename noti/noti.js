document.addEventListener('DOMContentLoaded', () => {
  const notificationBell = document.getElementById('notification-bell');
  const notificationsPanel = document.getElementById('notifications-panel');

  notificationBell.addEventListener('click', () => {
    if (notificationsPanel.style.display === 'none' || notificationsPanel.style.display === '') {
      notificationsPanel.style.display = 'block';
    } else {
      notificationsPanel.style.display = 'none';
    }
  });
});
