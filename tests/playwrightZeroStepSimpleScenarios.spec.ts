import {expect, test} from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('EA Website Testing', () => {
    test('book the next available timeslot', async ({page}) => {
        await page.goto('http://eaapp.somee.com')

        await expect(page).toHaveScreenshot();
        await ai('Click on the Login link', {page, test});
        await ai('Enter the UserName as admin', {page, test});
        await ai('Enter the Password as password', {page, test});
        await ai('Click the login button', {page, test});
        await page.waitForURL('http://eaapp.somee.com');

        await ai('Click the Employee List link', {page, test});
        await page.waitForURL('http://eaapp.somee.com/Employee');
        await ai('Click and on create new', {page, test});
        await page.waitForURL('http://eaapp.somee.com/Employee/Create');
        await ai('Fill out the form with realistic values', {page, test});
        await ai('Submit the form', {page, test});
        await expect(page).toHaveURL(/.*Index/);
        var value = await ai('Scroll down the page and get if the above filled realistic value exist on the page', {page, test});
        expect(value).not.toBeNull();
    });
});

test.describe('Google', () => {
    const searchTerm = 'software testing'

    test.only('search and verify the first organic search result', async ({ page }) => {
        await page.goto('https://www.google.com')

        await ai(`Search for '${searchTerm}'`, { page, test })
        await page.keyboard.press('Enter')

        await page.waitForURL('https://www.google.com/search**')

        const title = await ai(`What is the title of the first organic search result?`, { page, test })

        console.log('First organic search result is: ', title)
    });
});

test.describe('New York Times', () => {
    test('go to section and verify ad is displayed', async ({ page }) => {
        await page.goto('https://www.nytimes.com')

        await ai(`Hover over the World top nav item`, { page, test })
        await ai('Click the "World" section', { page, test })

        await page.waitForURL('https://www.nytimes.com/section/world')
        const cta = await ai('What is the CTA of the ad at the top of the page?', { page, test })

        console.log('Call to action is: ', cta)
    });
});