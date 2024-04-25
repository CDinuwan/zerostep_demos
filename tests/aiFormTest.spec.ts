import { expect } from '@playwright/test';
import { test } from './test-with-fixture';

test.describe('Submit form using AI vs Normal Way', () => {
    test('Submit form test using AI', async ({ page, ai }) => {
        await page.goto('http://10.131.104.45:8501');
        await ai('Fill out the Please enter your details form with realistic values');
        await ai('Click submit button');

        // Verify the form submission
        expect (await page.locator('data-testid=stMarkdown')).toBeVisible();
    });
});