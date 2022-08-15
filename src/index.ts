import { UserAccount } from "./userAccount";

const user = new UserAccount("JeukHwang", 1);

const { id, name } = user.toSequalize();
// eslint-disable-next-line no-console
console.log(id + 1);

// eslint-disable-next-line no-console
console.log(name.toLowerCase());

// eslint-disable-next-line no-console
console.log(name.trim().length);
