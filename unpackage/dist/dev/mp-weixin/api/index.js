"use strict";
const common_vendor = require("../common/vendor.js");
require("./image/index.js");
require("./pay/index.js");
require("./user/index.js");
require("./video/index.js");
require("./chat/index.js");
const http = common_vendor.index.$u.http;
const getTaskById = (id) => http.get(`/box/chat/task/${id}`);
exports.getTaskById = getTaskById;
