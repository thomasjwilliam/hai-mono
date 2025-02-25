import { test, expect } from '@playwright/test';

test('has note', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('div.notes-list')).toHaveText(/This is the first note/);
});

test('should create a new note and display it in the list', async ({ page }) => {
  await page.goto('/');

  // Click the "Start note" button
  await page.getByRole('button', { name: 'Start note' }).click();

  // Type a note in the textarea
  const testNoteContent = 'This is a new test note';
  await page.locator('textarea').fill(testNoteContent);

  // Click the "Save" button
  await page.getByRole('button', { name: 'Save' }).click();

  // Wait for the note to appear in the list
  await expect(page.getByText(testNoteContent)).toBeVisible();
});

test('should edit an existing note', async ({ page }) => {
  await page.goto('/');

  // Wait for notes to load and ensure the first note exists
  const firstNoteSelector = page.locator('.notes-list div:nth-child(1) div:nth-child(2)');
  await expect(firstNoteSelector).toBeVisible();

  // Click on the first note to edit
  await firstNoteSelector.click();

  // Update the note content
  const updatedNoteContent = 'Updated note content';
  await page.locator('textarea').fill(updatedNoteContent);

  // Save the edited note
  await page.getByRole('button', { name: 'Save' }).click();

  // Verify the note content is updated
  await expect(page.getByText(updatedNoteContent)).toBeVisible();
});

test('should delete a note from the list', async ({ page }) => {
  await page.goto('/');

  // Locate the specific note wrapper based on the content
  const firstNote = page.locator('.notes-list > div', {
    has: page.locator('div', { hasText: 'This is the first note' }),
  });

  // Verify the wrapper is visible
  await expect(firstNote).toBeVisible();

  // Find the delete button inside the wrapper
  const deleteButton = firstNote.locator('text=delete');
  await expect(deleteButton).toBeVisible();

  // Click on the delete button
  await deleteButton.click();

  // Verify the note is removed from the list
  await expect(firstNote).not.toBeVisible();
});