const router = require('express').Router();

const userRoutes = require('./user-routes.js');

const commentRoutes = require('./comment-routes');

const postRoutes = require('./post-routes');

router.use('/users', userRoutes);

router.use('/posts', postRoutes);

router.use('/comments', commentRoutes);
module.exports = router;
