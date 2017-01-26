'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DynamitoMemory;

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _document = require('./document');

var _document2 = _interopRequireDefault(_document);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DynamitoMemory() {
  DynamitoMemory.DocumentClient.Parent = this;

  this._db = new _db2.default();
}

DynamitoMemory.DocumentClient = _document2.default;

DynamitoMemory.prototype.db = function () {
  return this._db;
};

DynamitoMemory.prototype.listTables = function (data, callback) {
  _winston2.default.silly('Listing tables: ');
  _winston2.default.silly(data);
  _process2.default.nextTick(callback, null, {
    TableNames: this._db.getTablesNames()
  });
};

DynamitoMemory.prototype.createTable = function (tableData, callback) {
  _winston2.default.silly('Creating tables: ');
  _winston2.default.silly(tableData);
  this._db.createTable(tableData.TableName, tableData);
  _process2.default.nextTick(callback, null, tableData);
};

DynamitoMemory.prototype.deleteTable = function (tableData, callback) {
  _winston2.default.silly('Deleting tables: ');
  _winston2.default.silly(tableData);
  this._db.deleteTable(tableData.TableName);
  _process2.default.nextTick(callback, null, tableData.TableName);
};