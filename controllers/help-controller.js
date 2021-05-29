// const { createHelp } = require("../services/help.service");
const {
  _getHelps,
  _getHelpById,
  _getHelpByType,
  _addNewHelp
} = require("../services/help.service");

/*
 * call other imported services, or same service but different functions here if you need to
 */
const getAllHelps = async (req, res, next) => {
  let helptype = req.query.type;
  let helps;
  try {
    if (!helptype) {
      await _getHelps().then((data) => (helps = data));
    } else {
      await _getHelpByType(req.query.type).then((data) => (helps = data));
    }

    res.json(helps);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const getHelpById = async (req, res, next) => {
  let helps;
  try {
    await _getHelpById(req.params.id).then((data) => (helps = data));
    res.json(helps);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const addNewHelp = async (req, res, next) => {
  let helps;
  try {
    await _addNewHelp(req.body).then((data) => (helps = data));
    res.json(helps);
    next();
  } catch (e) {
    console.log(e.message);
    res.status(400).json({
      message: e.message
    });
  }
};

module.exports = {
  getAllHelps,
  getHelpById,
  addNewHelp
};
