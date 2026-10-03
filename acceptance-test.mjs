import assert from 'node:assert/strict';
import { greeting } from './greeting.mjs';

assert.equal(typeof greeting('Ada'), 'string');
assert.ok(greeting('Ada').includes('Ada'));
