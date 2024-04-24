import {expect} from '@playwright/test';
import { test } from './test-with-fixture';

test.describe('EA Website Testing', () => {
    test.only('book the next available timeslot', async ({page, ai}) => {
        await page.goto('http://eaapp.somee.com')

        await expect(page).toHaveScreenshot();
        await ai('Click on the Login link');
        await ai('Enter the UserName as admin');
        await ai('Enter the Password as password');
        await ai('Click the login button');
        await page.waitForURL('http://eaapp.somee.com');

        await ai('Click the Employee List link');
        await page.waitForURL('http://eaapp.somee.com/Employee');
        await ai('Click and on create new');
        await page.waitForURL('http://eaapp.somee.com/Employee/Create');
        await ai('Fill out the form with realistic values');
        await ai('Submit the form');
        await expect(page).toHaveURL(/.*Index/);
        var value = await ai('Scroll down the page and get if the above filled realistic value exist on the page');
        expect(value).not.toBeNull();
    });
});

test.describe('Google', () => {
    const searchTerm = 'software testing'

    test('search and verify the first organic search result', async ({ page, ai }) => {
        await page.goto('https://www.google.com')

        await ai(`Search for '${searchTerm}'`)
        await page.keyboard.press('Enter')

        await page.waitForURL('https://www.google.com/search**')

        const title = await ai(`What is the title of the first organic search result?`)

        console.log('First organic search result is: ', title)
    });
});

test.describe('New York Times', () => {
    test('go to section and verify ad is displayed', async ({ page, ai }) => {
        await page.goto('https://www.nytimes.com')

        await ai(`Hover over the World top nav item`)
        await ai('Click the "World" section')

        await page.waitForURL('https://www.nytimes.com/section/world')
        const cta = await ai('What is the CTA of the ad at the top of the page?')

        console.log('Call to action is: ', cta)
    });
});

test.describe('OrangeHRM', () => {
    test('can login and checkout', async ({ page, ai }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' })
        const [username, password] = await ai([
            'Get the username listed on the page',
            'Get the password listed on the page',
        ])
        await ai([
            `Enter ${username} as the username`,
            `Enter ${password} as the password`
        ])
        await ai('Click Login')
        await page.waitForTimeout(5_000)
        await ai('Search for "performance"')
        await ai('Click the Performance link')
        await page.waitForTimeout(2_000)
        await ai('Enter "Fiona" in the employee name input')
        await page.waitForTimeout(2_000)
        await ai('Click "Fiona Grace"')
        await ai('Click the "Search" button in the employee reviews section')
        const noRecordsFound = await ai('Confirm there are no records found')
        expect(noRecordsFound).toEqual(true)
    });
});