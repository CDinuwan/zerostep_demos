import {expect, test} from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('EA Website Testing', () => {
    test('book the next available timeslot', async ({page}) => {
        await page.goto('http://eaapp.somee.com')

        await ai('Click on the Login link', {page, test});
        await ai('Enter the UserName as admin', {page, test});
        await ai('Enter the Password as password', {page, test});
        await ai('Click the login button', {page, test});
        await page.waitForURL('http://eaapp.somee.com');

        await ai('Click the Employee List link', {page, test});
        await page.waitForURL('http://eaapp.somee.com/Employee');
        await ai('Click edit link for user Prashanth on the table', {page, test});
        await expect(page).toHaveURL(/.*Edit/);
        await ai('Edit the Name with KarthikEdit', {page, test});
        await ai('Submit the form', {page, test});
        var value = await ai('Get the edited Value from the table', {page, test});
        console.log(value)
        expect(value).not.toBeNull();
    });
})