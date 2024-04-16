import { By } from 'selenium-webdriver';
import { DriverLike } from '@oracle/oraclejet-webdriver';
import { LegendWebElement } from './LegendWebElement';
export { LegendWebElement };
/**
 * Retrieve an instance of [LegendWebElement](../classes/LegendWebElement.html).
 * @example
 * ```javascript
 * import { findLegend } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findLegend(driver, By.id('my-oj-c-legend'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
export declare function findLegend(driver: DriverLike, by: By): Promise<LegendWebElement>;
