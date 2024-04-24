import { test, expect } from '@playwright/test';

test.describe('Traditional Form Submission', () => {
    test('Submit Personal Information Form using Playwright', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('http://localhost:8501/');

        // Fill the personal information form fields
        await page.fill('[aria-label="First Name"]', 'John');
        await page.fill('[aria-label="Last Name"]', 'Doe');
        await page.fill('[aria-label="Email"]', 'john.doe@example.com');
        await page.fill('[aria-label="Phone Number"]', '123-456-7890');
        await page.fill('[aria-label="Address"]', '123 Main St, Anytown, USA');
        await page.fill('[aria-label="Occupation"]', 'Software Developer');
        await page.fill('[aria-label="Nationality"]', 'American');
        await page.fill('[aria-label="Emergency Contact Name"]', 'Jane Doe');
        await page.fill('[aria-label="Emergency Contact Phone"]', '987-654-3210');
        await page.fill('[aria-label="Select a date."]', '1990-01-01');
        await page.click('input[aria-label="Selected Male. Gender"]');
        await page.check('input[type="radio"][value="0"]');
        await page.fill('[aria-label="Other Details"]', 'Other details');

        // Click the submit button
        await page.click('button:has-text("Submit")');
    });
});
