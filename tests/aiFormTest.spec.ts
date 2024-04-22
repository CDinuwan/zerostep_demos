import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('Submit form using AI vs Normal Way', () => {
    test('Submit form test using AI', async ({ page }) => {
        await page.goto('http://localhost:8501/');
        await ai('Fill out the form with realistic values', { page, test });
        await ai('Click submit button', { page, test });

        // Verify the form submission
        expect (await page.locator('data-testid=stMarkdown').isVisible()).toBeTruthy();
    });
});