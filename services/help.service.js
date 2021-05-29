const {
  getDBHelps,
  getDBhelpById,
  getDBhelpByType,
  addNewDBHelp
} = require("../db/help-db");

const _getHelps = async (id) => {
  try {
    return await getDBHelps();
  } catch (e) {
    throw new Error(e.message);
  }
};

const _getHelpById = async (id) => {
  try {
    return await getDBhelpById(id);
  } catch (e) {
    throw new Error(e.message);
  }
};

const _getHelpByType = async (type) => {
  try {
    return await getDBhelpByType(type);
  } catch (e) {
    throw new Error(e.message);
  }
};

const _addNewHelp = async (body) => {
  console.log(body);
  if (!Object.keys(body).length > 0) {
    throw new Error(
      "received no data, name and helptype are mandatory atleast"
    );
  }

  if (body.name)
    try {
      return await addNewDBHelp(body);
    } catch (e) {
      throw new Error(e.message);
    }
};

module.exports = {
  _getHelps,
  _getHelpById,
  _getHelpByType,
  _addNewHelp
};
