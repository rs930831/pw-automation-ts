
//import { test } from '@playwright/test';
import { TodoPage } from './todo-page.js';
import {test } from './../fixtures/share-page.js'

test.describe('todo tests', () => {
  let todoPage:TodoPage;


  test.beforeEach(async ({ sharedPage }) => {
    todoPage = new TodoPage(sharedPage);
    await todoPage.goto();
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2');
  });

  test.afterEach(async () => {
    await todoPage.removeAll();
  });

  test('should add an item', async () => {
    await todoPage.addToDo('my item');
    // ...
  });

  test('should remove an item', async () => {
    await todoPage.remove('item1');
    // ...
  });
});

