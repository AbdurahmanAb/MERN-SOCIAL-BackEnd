const { register, activate, login } = require("../controllers/user");

const router = require("express").Router();

router.post("/register", register);
router.post("/activate", activate);
router.post("/login", login);

module.exports = router;
