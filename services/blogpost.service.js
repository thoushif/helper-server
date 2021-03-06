const { blogpostDb } = require("../db/blogpost-db-copy");

/*
 * if you need to make calls to additional tables, data stores (Redis, for example),
 * or call an external endpoint as part of creating the blogpost, add them to this service
 */
const createBlogpost = async (id) => {
  try {
    return await blogpostDb(id);
  } catch (e) {
    throw new Error(e.message);
  }
};

const getBlogpost = async (id) => {
  try {
    return await blogpostDb(id);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  createBlogpost,
  getBlogpost,
};
