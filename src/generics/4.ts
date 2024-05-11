type TUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<TUser>): TUser {
  const UserData: TUser = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...UserData, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
