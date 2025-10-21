"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:14491445251698762242 LICENSE.md

const {expect} = require('chai')
const MilitaryDeva = require('./index.js');

describe(MilitaryDeva.me.name, () => {
  beforeEach(() => {
    return MilitaryDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(MilitaryDeva).to.be.an('object');
    expect(MilitaryDeva).to.have.property('agent');
    expect(MilitaryDeva).to.have.property('vars');
    expect(MilitaryDeva).to.have.property('listeners');
    expect(MilitaryDeva).to.have.property('methods');
    expect(MilitaryDeva).to.have.property('modules');
  });
})
