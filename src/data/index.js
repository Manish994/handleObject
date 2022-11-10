/***********************************************
 * Normal Object
 ************************************************/

const keysMap = {
  name: "firstName",
  job: "passion",
};

const obj = {
  name: "Bobo",
  job: "Front-End Master",
};

/***********************************************
 * ADVANCED OBJECT
 ************************************************/
const payload = {
  data: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
  ],
};

const payloadKeysMap = {
  id: "SN",
  email: "Email_Address",
};

export { keysMap, obj, payload, payloadKeysMap };
