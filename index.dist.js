"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (f) {
  try {
    return f();
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
