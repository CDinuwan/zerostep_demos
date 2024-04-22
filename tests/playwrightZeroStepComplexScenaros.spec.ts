import {expect} from '@playwright/test';
import { test } from './test-with-fixture';

test.describe('EA Website Testing', () => {
    test('book the next available timeslot', async ({page, ai}) => {
        await page.goto('http://eaapp.somee.com');

        await ai('Click on the Login link');
        await ai('Enter the UserName as admin');
        await ai('Enter the Password as password');
        await ai('Click the login button');
        await page.waitForURL('http://eaapp.somee.com');

        await ai('Click the Employee List link');
        await page.waitForURL('http://eaapp.somee.com/Employee');
        await ai('Click benefit link for user HelloWorld on the table');
        await expect(page).toHaveURL(/.*Benefit/);
        // await ai('Edit the Name with HelloWorld');
        // await ai('Submit the form');
        // var value = await ai('Get the edited Value from the table');
        // console.log(value);
        // expect(value).not.toBeNull();
        var benefits = await ai('Get all the benefits for the user HelloWorld');
        var additionalBenefits = await ai('Get all the additional benefit for the user HelloWorld');
        expect(benefits).toContain('Gym');
        expect(additionalBenefits).toContain('Car');
    });
})