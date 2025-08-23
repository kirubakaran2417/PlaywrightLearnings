
const { test, expect } = require('@playwright/test');
const xlsx = require('xlsx');
const path = require('path');

// Read Excel file
const workbook = xlsx.readFile(path.resolve(__dirname, '../testdata/tdata.xlsx'));
const worksheet = workbook.Sheets['Sheet1'];
const testData = xlsx.utils.sheet_to_json(worksheet);

test.describe('Data driven test', () => {
  for (const data of testData) {
    test('verify user info for ${data.Name} (${data.country})', async ({ page }) => {
      console.log(`Running test for ${data.Name} - ${data.country}`);
      expect(Number(data.Age)).toBeGreaterThan(18);
    });
  }
});