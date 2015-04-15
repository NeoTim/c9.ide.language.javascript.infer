#!/usr/bin/env node
"use strict";
"use server";
"use mocha";

require("c9/inline-mocha")(module);

describe(__filename, function() {
    it("should analyze 'perform.js'", require('./framework').buildTest("perform.js"));
});