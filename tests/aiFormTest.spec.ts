import { expect } from '@playwright/test';
import { test } from './test-with-fixture';

test.describe('Submit form using AI vs Normal Way', () => {
    test('Submit form test using AI', async ({ page, ai }) => {
        test.setTimeout(60000);
        await page.goto('http://localhost:8501/');
        await ai('Fill out the Please enter your details form with realistic values');
        await ai('Click submit button');

        // Verify the form submission
        expect (await page.locator('data-testid=stMarkdown').isVisible()).toBeTruthy();
    });
});