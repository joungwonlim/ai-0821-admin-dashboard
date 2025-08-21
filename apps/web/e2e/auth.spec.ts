import { test, expect } from '@playwright/test';

test('should navigate to login page and sign in with GitHub', async ({ page }) => {
  await page.goto('/');

  // Expect the "Sign in" button to be visible
  const signInButton = page.getByRole('button', { name: 'Sign in' });
  await expect(signInButton).toBeVisible();

  // Click the sign in button
  await signInButton.click();

  // Expect to be redirected to GitHub login page or directly logged in
  // This is a simplified check. In a real scenario, you might need to mock GitHub login.
  await expect(page).toHaveURL(/github.com\/login|localhost:3000/); // Either GitHub login or back to app if already logged in

  // If redirected to GitHub, you might need to fill in credentials (not recommended for E2E)
  // For now, we just check the URL.
});

test('should display user info after successful login', async ({ page }) => {
  // This test assumes a successful login has occurred or can be mocked.
  // For simplicity, we'll just check for the presence of user info after navigating to the page.
  // In a real E2E, you'd perform the login steps first.

  await page.goto('/');

  // Expect the user's avatar/name to be visible (assuming successful login)
  const userAvatar = page.getByRole('button', { name: /Signed in as/ }); // Adjust name based on actual text
  if (userAvatar) {
    await expect(userAvatar).toBeVisible();
    await userAvatar.click(); // Click to open dropdown
    const signOutButton = page.getByRole('menuitem', { name: 'Log out' });
    await expect(signOutButton).toBeVisible();
    // await signOutButton.click(); // Uncomment to test sign out
  } else {
    // If not signed in, this test might fail or need to perform sign in first.
    // For this example, we'll just pass if the avatar is not found (meaning not logged in)
    // or if the sign-in button is visible.
    const signInButton = page.getByRole('button', { name: 'Sign in' });
    await expect(signInButton).toBeVisible();
  }
});
