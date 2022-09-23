function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  friends.map(elem => {
    let li = document.createElement('li');
    li.textContent = elem.firstName + ' ' + elem.lastName;
    ul.append(li);
  });
  return ul;
}