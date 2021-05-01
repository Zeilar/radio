"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('@prisma/client'),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

function likeChannel(req, res) {
  like(req, res, "channel");
}

function unlikeChannel(req, res) {
  unlike(req, res, "channel");
}

function likeProgram(req, res) {
  like(req, res, "program");
}

function unlikeProgram(req, res) {
  unlike(req, res, "program");
}

function like(_x, _x2, _x3) {
  return _like.apply(this, arguments);
}

function _like() {
  _like = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, resource) {
    var resource_id, _where, _data, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resource_id = Number(req.params.id);

            if (resource_id) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", status(400).end());

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return prisma[resource + "Likes"].findFirst({
              where: (_where = {}, _where[resource + "_id"] = resource_id, _where.user_id = req.session.user, _where)
            });

          case 6:
            data = _context.sent;

            if (!data) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).end());

          case 9:
            _context.next = 11;
            return prisma[resource + "Likes"].create({
              data: (_data = {}, _data[resource + "_id"] = resource_id, _data.user_id = req.session.user, _data)
            });

          case 11:
            res.status(200).end();
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            console.error(_context.t0);
            res.status(500).end();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 14]]);
  }));
  return _like.apply(this, arguments);
}

function unlike(_x4, _x5, _x6) {
  return _unlike.apply(this, arguments);
}

function _unlike() {
  _unlike = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, resource) {
    var resource_id, _where2, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            resource_id = Number(req.params.id);

            if (resource_id) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", status(400).end());

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return prisma[resource + "Likes"].findFirst({
              where: (_where2 = {}, _where2[resource + "_id"] = resource_id, _where2.user_id = req.session.user, _where2)
            });

          case 6:
            data = _context2.sent;

            if (data) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(400).end());

          case 9:
            _context2.next = 11;
            return prisma[resource + "Likes"]["delete"]({
              where: {
                id: data.id
              }
            });

          case 11:
            res.status(200).end();
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](3);
            console.error(_context2.t0);
            res.status(500).end();

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 14]]);
  }));
  return _unlike.apply(this, arguments);
}

module.exports = {
  likeChannel: likeChannel,
  likeProgram: likeProgram,
  unlikeChannel: unlikeChannel,
  unlikeProgram: unlikeProgram
};