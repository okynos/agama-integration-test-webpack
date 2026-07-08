import { it, page, getTextContent } from "../lib/helpers";
import assert from "node:assert/strict";
import { ErrorFetchingProfilePage } from "../pages/error_fetching_profile_page";

export function verifyErrorFetchingProfile() {
  it(`should show error fetching profile`, async function () {
    const errorFetchingProfilePage = new ErrorFetchingProfilePage(page);

    const elementText = await getTextContent(errorFetchingProfilePage.alertWarningMsg());
    const expectedTextRegex =
      /It was unreachable or invalid\. Do you want to try again\?|Configuration cannot be applied because it is invalid or could not be reached/;

    await assert.match(elementText, expectedTextRegex);
  });
}
