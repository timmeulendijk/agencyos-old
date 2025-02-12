function userName(user) {
  if (!user) {
    return "Unknown User";
  }
  if (user.first_name && user.last_name) {
    return `${user.first_name} ${user.last_name}`;
  }
  if (user.first_name) {
    return user.first_name;
  }
  if (user.email) {
    return user.email;
  }
  return "Unknown User";
}

export { userName as u };
//# sourceMappingURL=user-name-hNaZlTuZ.mjs.map
