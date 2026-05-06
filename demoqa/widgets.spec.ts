import { sleep, test } from '@fixtures/demoqa/common.js'

test.beforeAll(async({widgetPage}) => {
    await widgetPage.navigateToWidgets();
})


test('Fill Multiple Color', { tag : ['@widgets'] }, async({ widgetPage })=> {
    await widgetPage.clickOnAutoComplete();
    await widgetPage.inputMultiColor('White', 'Blue', 'Black');
})

test('Fill Single Color', { tag : ['@widgets'] }, async({ widgetPage })=> {
    await widgetPage.clickOnAutoComplete();
    await widgetPage.inputSingleColr('White');
})

test('Remove Multiple Color', { tag : ['@widgets'] }, async({ widgetPage })=> {
    await widgetPage.clickOnAutoComplete();
    await widgetPage.removeMultiColor('White', 'Blue', 'Black');
})


test('Comple Date Picker', {tag : ['@widgets', '@datePicker']}, async({widgetPage})=> {
    await widgetPage.clickOnDatePickr();
    await widgetPage.openComplexDatePicker();
    await widgetPage.setDatePicker(2027, "September", 1 ,"23:45");
    await sleep(5000)
})

// test.only('Simple Date Picker', {tag : ['@widgets', '@datePicker']}, async({widgetPage})=> {
//     await widgetPage.clickOnDatePickr();
//     await widgetPage.setSimpleDatePicker(2027, "September", 1);
//     await sleep(5000);
// })