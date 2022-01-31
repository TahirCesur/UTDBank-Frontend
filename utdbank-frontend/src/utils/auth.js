
export const isUserManager = (roles) => {
  return roles && roles.includes("Manager");
};

export const isUserEmployee = (roles) => {
  return roles && roles.includes("Employee");
};

