const { models } = require("./index");

const getDBHelps = async () => {
  let data;
  await models.Help.find().then((helps) => (data = helps));

  return data;
};

const getDBhelpById = async (id) => {
  let data;
  await models.Help.findById({ _id: id }).then((helps) => (data = helps));
  return data;
};

const getDBhelpByType = async (type) => {
  console.log("=====type", type);
  let data;
  await models.Help.find({ helptype: type }).then((helps) => (data = helps));
  return data;
};

const addNewDBHelp = async (body) => {
  const newHelp = new models.Help({
    name: body.name,
    notes: body.notes,
    helptype: body.type,
    availableBy: body.availableBy,
    status: body.staus,
    progress: body.progress,
    expires: body.expires
  });

  await newHelp.save();

  return newHelp;
};

module.exports = {
  getDBHelps,
  getDBhelpById,
  getDBhelpByType,
  addNewDBHelp
};
