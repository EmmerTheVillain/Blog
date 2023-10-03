// Import the necessary modules and middleware
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require('sequelize');

// Prevent non-logged-in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    // Find all user IDs that the current user has sent match requests to
    const blogData = await blogData.findAll({
      include: User,
      order: [['createdAt', 'DESC']],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

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
//Handle rendering the login page
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // Render the login template with any necessary data
  res.render('login', {
    // Pass any necessary data to the login template
  });
});

// Handle rendering the new user registration page
router.get('/newUser', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // Render the newUser template with any necessary data
  res.render('newUser', {
    // Pass any necessary data to the newUser template
  });
});