const { createBlogpost } = require("../services/blogpost.service");
const { getBlogpost } = require("../services/blogpost.service");

/*
 * call other imported services, or same service but different functions here if you need to
 */
const postBlogpost = async (req, res, next) => {
  const { id } = req.params;
  let giveitems;
  try {
    // await createBlogpost(user, content);
    await getBlogpost(id).then((data) => (giveitems = data));
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.json(giveitems);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  postBlogpost,
};
