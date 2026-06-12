import { test, expect } from '@playwright/test';
import { Registration } from '../Pages/RegisterPage';

test('Verify Registration page', async ({ page }) => {

    const regpage = new Registration(page);
    await regpage.goto('https://onereal.com/');
    await regpage.registrationpage('John', 'Doe', 'johndoe123', 'john.doe@example.com', 'Password123!', 'Password123!');
})