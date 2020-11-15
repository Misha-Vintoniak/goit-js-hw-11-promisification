/*Перепиши функцію toggleUserState() так, щоб вона
не використовувала callback - функцію callback,
а приймала всього два параметри allUsers і userName
і повертала проміс.*/

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
// варіант з callback
/*
const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  callback(updatedUsers);
};

// Зараз працює так
 
// console.log(toggleUserState1(users, 'Mango', logger));
// console.log(toggleUserState1(users, 'Lux', logger));
*/

//  Варіант 1

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  return Promise.resolve(updatedUsers);
};

// Варіант 2
/*
const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    resolve(
      allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      ),
    );
  });
};
*/
const logger = updatedUsers => console.table(updatedUsers);

/*
 * Повинно працювати так
 */
console.log(toggleUserState(users, 'Mango').then(logger));
console.log(toggleUserState(users, 'Lux').then(logger));
