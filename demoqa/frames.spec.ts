import { test } from '@fixtures/demoqa/common.js'


test.beforeAll(async({homePage})=> {
    await homePage.clickOnAlertsFramesWindows();
})

test('Parent/Child Frame', { tag : '@frame' },  async({afwPage})=> {
    await afwPage.clickOnNestedFrames();
    await afwPage.verifyParentIframeText()
    await afwPage.verifyChildIframeText()
})

test('First Simple Frame', { tag : '@frame' },  async({afwPage})=> {
    await afwPage.clickOnFrames();
    await afwPage.verifyFirstFrameText()
    
})


test('Second Simple Frame', { tag : '@frame' },  async({afwPage})=> {
    await afwPage.clickOnFrames();
    await afwPage.verifySecondFrameText()
})

