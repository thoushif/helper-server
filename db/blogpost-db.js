const fs = require("fs");

let giveitems;

fs.readFile("./db/data/giveitems.json", (err, data) => {
  if (err) throw err;
  giveitems = JSON.parse(data);
});

const blogpostDb = async (id) => {
  console.log("id is ", id);

  /*
     * put code to call database here
     * this can be either an ORM model or code to call the database through a driver or querybuilder
     * i.e.-
      INSERT INTO blogposts (user_name, blogpost_body)
      VALUES (user, content);
    */
  //   console.log(db);

  if (id !== undefined)
    return giveitems.filter(function (item) {
      return item.name == id;
    });
  else return giveitems;
  //just a dummy return as we aren't calling db right now
};

module.exports = {
  blogpostDb,
};
