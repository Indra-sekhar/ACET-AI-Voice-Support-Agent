# ACET AI Voice Support Agent — Challenges and Solutions

## 1. Vapi SDK Integration

**Challenge:** The frontend initially displayed `Vapi is not a constructor`.

**Solution:** Inspected the installed SDK's exports and corrected the import to use the appropriate constructor.

**Result:** The voice assistant connected and responded aloud.

## 2. Google Sheets Integration

**Challenge:** The support enquiry tool initially returned a missing Nango configuration error.

**Solution:** Reviewed the Google Sheets tool configuration, spreadsheet ID, range, and published tool version.

**Result:** Subsequent testing confirmed that new enquiry records could be saved to Google Sheets.

## 3. Speech Recognition and Clarification

**Challenge:** Some spoken course names and user responses were unclear or incorrectly transcribed.

**Solution:** Tested clarification and correction flows so the assistant could ask the user to repeat or correct unclear information.

**Result:** The assistant handled clarification scenarios during testing.

## 4. Missing or Unverified College Information

**Challenge:** Current admission fees and admission-opening dates could not always be verified from the available knowledge base.

**Solution:** Configured the assistant to avoid guessing and offer a support enquiry when verified information is unavailable.

**Result:** The assistant can direct users toward college follow-up instead of inventing answers.

## 5. Frontend UI Restoration

**Challenge:** Changes made during Vapi integration affected the original website interface.

**Solution:** Retrieved the earlier UI implementation from Git history, restored the original styling, and committed the corrected files.

**Result:** The preferred interface was restored while retaining voice controls.

## 6. Testing and Reliability

**Challenge:** A successful spoken response does not necessarily prove that an external tool completed its action.

**Solution:** Checked Google Sheets records and reviewed tool outcomes during functional testing.

**Result:** The testing process included verification of enquiry storage and honest failure handling.

## 7. Lessons Learned

- Inspect SDK exports and error logs before changing working code.
- Keep API keys and other secrets out of GitHub.
- Verify external tool results instead of trusting spoken confirmations alone.
- Use verified knowledge sources for college-specific information.
- Test unclear inputs, corrections, and failure scenarios.
- Commit working milestones regularly.

## 8. Remaining Improvements

- Verify the complete workflow on the live deployment.
- Improve speech recognition for branch names and Indian accents.
- Add enquiry status tracking for college staff.
- Expand the knowledge base after verifying official information.
- Add multilingual support in a future version.