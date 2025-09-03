export const endpoints = {
  login: 'https://practice.expandtesting.com/notes/api/users/login',
  getUserProfile: 'https://practice.expandtesting.com/notes/api/users/profile',
  unknown: 'https://reqres.in/api/unknown',
  users: 'https://reqres.in/api/users',
  singleUser: id => `https://reqres.in/api/users/${id}`
};
