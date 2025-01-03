const { test, expect } = require('@playwright/test');

test.describe('Todo App', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app before each test
    await page.goto('http://localhost:3000');
  });

  test('should load the todo app', async ({ page }) => {
    await expect(page).toHaveTitle(/Todo App/);
    await expect(page.locator('h1')).toHaveText('Todo App');
  });

  test('should add a new todo', async ({ page }) => {
    const newTodoTitle = 'New Todo Item';
    await page.fill('input[placeholder="Add a new todo"]', newTodoTitle);
    await page.press('input[placeholder="Add a new todo"]', 'Enter');

    const todoItems = page.locator('.todo-item');
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems.first()).toContainText(newTodoTitle);
  });

  test('should mark a todo as completed', async ({ page }) => {
    // Add a todo
    await page.fill('input[placeholder="Add a new todo"]', 'Todo to complete');
    await page.press('input[placeholder="Add a new todo"]', 'Enter');

    const todoItem = page.locator('.todo-item').first();
    const checkbox = todoItem.locator('input[type="checkbox"]');

    await checkbox.check();
    await expect(todoItem).toHaveClass(/completed/);
  });

  test('should edit a todo', async ({ page }) => {
    // Add a todo
    await page.fill('input[placeholder="Add a new todo"]', 'Todo to edit');
    await page.press('input[placeholder="Add a new todo"]', 'Enter');

    const todoItem = page.locator('.todo-item').first();
    await todoItem.dblclick();

    const editInput = todoItem.locator('input[type="text"]');
    await editInput.fill('Edited Todo');
    await page.press('input[type="text"]', 'Enter');

    await expect(todoItem).toContainText('Edited Todo');
  });

  test('should delete a todo', async ({ page }) => {
    // Add a todo
    await page.fill('input[placeholder="Add a new todo"]', 'Todo to delete');
    await page.press('input[placeholder="Add a new todo"]', 'Enter');

    const deleteButton = page.locator('.todo-item button').first();
    await deleteButton.click();

    const todoItems = page.locator('.todo-item');
    await expect(todoItems).toHaveCount(0);
  });

  test('should filter todos', async ({ page }) => {
    // Add two todos
    await page.fill('input[placeholder="Add a new todo"]', 'Active todo');
    await page.press('input[placeholder="Add a new todo"]', 'Enter');
    await page.fill('input[placeholder="Add a new todo"]', 'Completed todo');
    await page.press('input[placeholder="Add a new todo"]', 'Enter');

    // Complete the second todo
    const secondTodo = page.locator('.todo-item').nth(1);
    await secondTodo.locator('input[type="checkbox"]').check();

    // Filter by active
    await page.click('text=Active');
    await expect(page.locator('.todo-item')).toHaveCount(1);
    await expect(page.locator('.todo-item')).toContainText('Active todo');

    // Filter by completed
    await page.click('text=Completed');
    await expect(page.locator('.todo-item')).toHaveCount(1);
    await expect(page.locator('.todo-item')).toContainText('Completed todo');

    // Show all
    await page.click('text=All');
    await expect(page.locator('.todo-item')).toHaveCount(2);
  });

  test('should clear completed todos', async ({ page }) => {
    // Add two todos
    await page.fill('input[placeholder="Add a new todo"]', 'Active todo');
    await page.press('input[placeholder="Add a new todo"]', 'Enter');
    await page.fill('input[placeholder="Add a new todo"]', 'Completed todo');
    await page.press('input[placeholder="Add a new todo"]', 'Enter');

    // Complete the second todo
    const secondTodo = page.locator('.todo-item').nth(1);
    await secondTodo.locator('input[type="checkbox"]').check();

    // Clear completed
    await page.click('text=Clear completed');
    await expect(page.locator('.todo-item')).toHaveCount(1);
    await expect(page.locator('.todo-item')).toContainText('Active todo');
  });
});