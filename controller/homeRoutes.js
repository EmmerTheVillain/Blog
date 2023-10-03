// Import the necessary modules and middleware
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require('sequelize');

// Prevent non-logged-in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    // Find all user IDs that the current user has sent match requests to
    const sentMatches = await Match.findAll({
      where: {
        sender_id: req.session.user_id,
      },
      attributes: ['receiver_id'],
    });

// Render the homepage template with user data and logged-in flag
res.render('homepage', {
    user,
    // Pass the logged-in flag to the template
        logged_in: req.session.logged_in,
        });
    } catch (err) {
      // Handle errors by sending a 500 response with error details
      res.status(500).json(err);
    }
});