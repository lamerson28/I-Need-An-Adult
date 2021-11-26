const express = require('express');
const jwt = require('jsonwebtoken');

const auth = {};

auth.getToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  try {
    console.log('token!!!!!!!!!!!!!!!:', token);
    if (!token) {
      return res.status(401).json('Unauthorized');
    }
    const verified = await jwt.verify(token, 'mochi');
    console.log('verified!!!!!!!!!!!!!!!!:', verified);
    req.user = verified.user;
    console.log(req.user);
    next();
  } catch {
    next({
      log: 'error in auth',
      status: 400,
      message: { err: 'unauthorized' },
    });
  }
};

module.exports = auth;
