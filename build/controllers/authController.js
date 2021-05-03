"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('@prisma/client'),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

var bcrypt = require('bcrypt');

function findUser(_x, _x2) {
  return _findUser.apply(this, arguments);
}

function _findUser() {
  _findUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(where, withPassword) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (withPassword === void 0) {
              withPassword = false;
            }

            _context.prev = 1;
            _context.next = 4;
            return prisma.user.findFirst({
              where: where,
              include: {
                programLikes: {
                  select: {
                    program_id: true
                  }
                },
                channelLikes: {
                  select: {
                    channel_id: true
                  }
                }
              }
            });

          case 4:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", null);

          case 7:
            user.programLikes = user.programLikes.map(function (like) {
              return like.program_id;
            });
            user.channelLikes = user.channelLikes.map(function (like) {
              return like.channel_id;
            });

            if (!withPassword) {
              delete user.password;
            }

            return _context.abrupt("return", user);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);
            return _context.abrupt("return", null);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));
  return _findUser.apply(this, arguments);
}

function authenticate(_x3, _x4) {
  return _authenticate.apply(this, arguments);
}

function _authenticate() {
  _authenticate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = Number(req.session.user);

            if (id) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(401).end());

          case 3:
            _context2.next = 5;
            return findUser({
              id: id
            });

          case 5:
            user = _context2.sent;

            if (user) {
              res.json(user);
            } else {
              res.status(401).end();
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _authenticate.apply(this, arguments);
}

function logout(req, res) {
  try {
    delete req.session.user;
    res.status(200).end();
  } catch (e) {
    res.status(500).end();
  }
}

function register(_x5, _x6) {
  return _register.apply(this, arguments);
}

function _register() {
  _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, username, password, user, hashedPassword, _yield$prisma$user$cr, id;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password = _req$body.password;

            if (!(!username || !password)) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(400).end());

          case 3:
            _context3.prev = 3;
            _context3.next = 6;
            return prisma.user.findUnique({
              where: {
                username: username
              }
            });

          case 6:
            user = _context3.sent;

            if (!user) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", res.status(422).json({
              message: "User already exists"
            }));

          case 9:
            _context3.next = 11;
            return bcrypt.hash(password, 10);

          case 11:
            hashedPassword = _context3.sent;
            _context3.next = 14;
            return prisma.user.create({
              data: {
                username: username,
                password: hashedPassword
              }
            });

          case 14:
            _yield$prisma$user$cr = _context3.sent;
            id = _yield$prisma$user$cr.id;
            req.session.user = id;
            res.status(200).end();
            _context3.next = 24;
            break;

          case 20:
            _context3.prev = 20;
            _context3.t0 = _context3["catch"](3);
            console.error(_context3.t0);
            res.status(500).end();

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 20]]);
  }));
  return _register.apply(this, arguments);
}

function login(_x7, _x8) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, username, password, user, match;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.session.user) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", res.status(405).end());

          case 2:
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;

            if (!(!username || !password)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", res.status(400).end());

          case 5:
            _context4.next = 7;
            return findUser({
              username: username
            }, true);

          case 7:
            user = _context4.sent;

            if (user) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt("return", res.status(422).json({
              message: "User does not exist"
            }));

          case 10:
            _context4.next = 12;
            return bcrypt.compare(password, user.password);

          case 12:
            match = _context4.sent;

            if (match) {
              req.session.user = user.id;
              delete user.password;
              res.json(user);
            } else {
              res.status(422).json({
                message: "Incorrect password"
              });
            }

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _login.apply(this, arguments);
}

module.exports = {
  logout: logout,
  login: login,
  authenticate: authenticate,
  register: register
};