# Screen: 06_otp_empty

Reference: /docs/reference/06_otp_empty.png

Build pixel-close to the reference. Reuse existing components. No invented UI.

OTP is 4 digits (match reference).
Next button disabled until digits filled.
Also match these states:
- Error state reference: /docs/reference/08_otp_error.png
- Filled state reference: /docs/reference/09_otp_filled.png
Implement as ONE screen with local state toggles for default/error/filled.