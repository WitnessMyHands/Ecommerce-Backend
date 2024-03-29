const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Default Route
router.use((req, res) => {
  res.send("<h1>Wrong Route, Try Again!</h1>")
});

module.exports = router;