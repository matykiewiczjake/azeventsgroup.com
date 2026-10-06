/**
 * Google Apps Script — logs every Contact form submission to a Google
 * Sheet, independent of whether Netlify's email notification succeeds.
 * This is not part of the Next.js app; it runs entirely inside Google.
 *
 * Setup:
 * 1. Create a Google Sheet (e.g. "AEG Contact Leads"). Add a header row:
 *    Timestamp | Name | Email | Phone | Event Type | Message
 * 2. In the Sheet: Extensions -> Apps Script. Delete the placeholder
 *    code and paste this whole file in. Save.
 * 3. Deploy -> New deployment -> type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 *    Deploy, authorize when prompted, and copy the Web app URL (it ends
 *    in /exec).
 * 4. Netlify dashboard -> your site -> Site configuration -> Forms ->
 *    Notifications -> Add notification -> Outgoing webhook.
 *      Event: New form submission
 *      Form: contact
 *      URL: the /exec URL from step 3
 *    Save.
 * 5. Submit the live contact form once and confirm a row appears.
 *
 * Note: the deployed URL isn't authenticated — anyone who has the exact
 * URL could POST a row to the sheet. That's a spam-row risk, not a data
 * exposure risk (it can't read anything back), which is the standard
 * trade-off for this pattern. If you want to close it, add a shared
 * secret: append `?secret=<random-string>` to the webhook URL in
 * Netlify, and uncomment the check below with the same string.
 */

// const SHARED_SECRET = "put-a-random-string-here";

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // if (e.parameter.secret !== SHARED_SECRET) {
  //   return ContentService.createTextOutput(
  //     JSON.stringify({ ok: false, error: "forbidden" }),
  //   ).setMimeType(ContentService.MimeType.JSON);
  // }

  const body = JSON.parse(e.postData.contents);

  // Netlify's webhook payload nests the submitted fields under `data`
  // (sometimes one level deeper under `payload`) -- handle both shapes
  // defensively since the exact wrapping isn't guaranteed across
  // Netlify versions.
  const payload = body.payload || body;
  const data = payload.data || {};

  sheet.appendRow([
    new Date(),
    data["name"] || "",
    data["email"] || "",
    data["phone"] || "",
    data["event-type"] || "",
    data["message"] || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
