import { it, page } from "../lib/helpers";

export function prepareStorage() {
    it("should prepare storage", async function () {
        await page.locator("a[href='#/storage']").click({ delay: 1000 });
        await page.locator("button[id='toggle-partitions-and-file-systems-view']").click();

        await page.evaluate(() => {
            let table = document.getElementsByClassName('pf-v5-c-table pf-m-grid-md pf-m-compact')[0] as HTMLTableElement;

            let lastElement = table.rows.item(table.rows.length-1);
            lastElement.click();
        })

        await page.locator("span::-p-text('Edit')").click();
        await page.locator("input[id='Fixed']").click();
        await page.locator("input[id='size']").fill("2");
        await page.locator("button::-p-text('Accept')").click();
    });
}
