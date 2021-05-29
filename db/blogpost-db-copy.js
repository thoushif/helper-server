const mongoose = require("mongoose");

//data schema and model
const movieSchema = {
  title: String,
  genre: String,
  year: String
};

const Movie = mongoose.model("Movie", movieSchema);

const blogpostDb = async () => {
  /*
     * put code to call database here
     * this can be either an ORM model or code to call the database through a driver or querybuilder
     * i.e.-
      INSERT INTO blogposts (user_name, blogpost_body)
      VALUES (user, content);
    */
  //   console.log(db);
  let data;
  await Movie.find().then((movies) => (data = movies));

  // const mov = new Movie({
  //   title: "t2",
  //   genre: "g2",
  //   year: "y2"
  // });
  // await mov.save();
  return data;
  //just a dummy return as we aren't calling db right now
};

module.exports = {
  blogpostDb
};
