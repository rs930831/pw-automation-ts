import {test} from '@playwright/test'


// Sleep utility
function sleep(ms: number):Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


test('test1', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(2000)
})
test('test2', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(1000)
})
test('test3', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(2100)
})
test('test4', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(2200)
})
test('test5', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(2300)
})
test('test6', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(2400)
})
test('test7', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(2500)
})
test('test8', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(2600)
})
test('test9', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(2700)
})
test('test10', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(2800)
})
test('test11', async ({page}) => {
    console.log("Worker Index: " + test.info().workerIndex)
    console.log("Worker Parallel Index: " + test.info().parallelIndex)
    sleep(2900)
})