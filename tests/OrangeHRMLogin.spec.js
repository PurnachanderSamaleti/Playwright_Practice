import {test, expect } from '@playwright/test';
import { HRMLogin } from '../pages/OrangeHRMLogin';

test('Veerify HRM Login page', async ({page }) => {
    const HRMlgn = new HRMLogin(page);
    await HRMlgn.goto('https://chandusamaleti-trials8101.orangehrmlive.com/auth/login');
    await HRMlgn.LoginForm('admin', 'TXv4RJ9c@k');

})