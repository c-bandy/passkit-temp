'use strict';

const jsSign = require('../src/lib/signManifest-forge');

const { randomBytes } = require('crypto');
const path = require('path');

const TEST_STRING = randomBytes(1024).toString('base64');

test('signManifest', async () => {
  const jsSignedBuffer = await jsSign(
    path.resolve(__dirname, '../keys/com.example.passbook.pem'),
    'secret',
    TEST_STRING,
    'keys/wwdr.pem',
  );
  expect(Buffer.isBuffer(jsSignedBuffer)).toBeTruthy();
});
