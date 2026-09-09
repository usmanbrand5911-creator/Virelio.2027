// This script ensures clean state
if (typeof window !== 'undefined') {
  localStorage.removeItem('admin_tasks');
  localStorage.removeItem('tasks');
  localStorage.removeItem('admin_articles');
  localStorage.removeItem('articles');
  localStorage.removeItem('admin_blogs');
  localStorage.removeItem('blogs');
  localStorage.removeItem('user_balance');
}
