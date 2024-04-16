import { By } from 'selenium-webdriver';
import { DriverLike } from '@oracle/oraclejet-webdriver';
import { LabelledLinkWebElement } from './LabelledLinkWebElement';
export { LabelledLinkWebElement };
/**
 * Retrieve an instance of [LabelledLinkWebElement](../classes/LabelledLinkWebElement.html).
 * @example
 * ```javascript
 * import { findLabelledLink } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findLabelledLink(driver, By.id('my-oj-c-labelled-link'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
export declare function findLabelledLink(driver: DriverLike, by: By): Promise<LabelledLinkWebElement>;
