---
tags:
  - mitre/attack/tool
---

# evilginx2 (`S9003`)

[evilginx2](https://attack.mitre.org/software/S9003) is an open-source adversary-in-the-middle (AiTM) attack framework based on the open-source nginx web server. [evilginx2](https://attack.mitre.org/software/S9003) can be used as a reverse proxy between victims and legitimate web services to intercept and capture credentials, authentication tokens, and session cookies.[^fn3][^fn2][^fn1]
 



# Platform(s)

- IaaS
- Identity Provider
- Office Suite
- SaaS

# Techniques Used

## JavaScript

[evilginx2](https://attack.mitre.org/software/S9003) can inject JavaScript code into HTML content to customize phishing attacks.[\[Breakdev Evilginx 2.3 JAN 2019\]](https://breakdev.org/evilginx-2-3-phishermans-dream/)

- *Technique:* [[../Techniques/JavaScript (T1059.007)|JavaScript]]

## Time Based Checks

[evilginx2](https://attack.mitre.org/software/S9003) has the ability to hide phishing lures for a set time to avoid scanning by sandboxes.[\[Breakdev Evilginx 3.2 AUG 2023\]](https://breakdev.org/evilginx-3-2/)

- *Technique:* [[../Techniques/Time Based Checks (T1497.003)|Time Based Checks]]

## Execution Guardrails

[evilginx2](https://attack.mitre.org/software/S9003) can reject requests to phishing URLs if the User-Agent of the visitor doesn't match the allowlist REGEX filter for a specific lure.[\[Breakdev Evilginx 2.4 SEP 2020\]](https://breakdev.org/evilginx-2-4-gone-phishing/)

- *Technique:* [[../Techniques/Execution Guardrails (T1480)|Execution Guardrails]]

## Steal Web Session Cookie

[evilginx2](https://attack.mitre.org/software/S9003) can collect information on each session with a victim including the session cookie.[\[Evilginx 2 July 2018\]](https://breakdev.org/evilginx-2-next-generation-of-phishing-2fa-tokens/)[\[Sophos Evilginx MAR 2025\]](https://www.sophos.com/en-us/blog/stealing-user-credentials-with-evilginx)


- *Technique:* [[../Techniques/Steal Web Session Cookie (T1539)|Steal Web Session Cookie]]

## Web Protocols

[evilginx2](https://attack.mitre.org/software/S9003) can proxy HTTPS connections between victims and destination websites.[\[Evilginx 2 July 2018\]](https://breakdev.org/evilginx-2-next-generation-of-phishing-2fa-tokens/)[\[Breakdev Evilginx 2.4 SEP 2020\]](https://breakdev.org/evilginx-2-4-gone-phishing/)[\[Breakdev Evilginx 3.3 APR 2024\]](https://breakdev.org/evilginx-3-3-go-phish/)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Adversary-in-the-Middle

[evilginx2](https://attack.mitre.org/software/S9003) has the ability to act as an adversary-in-the-middle (AiTM) relay between a legitimate website and a phished user to capture all transmitted data including usernames, passwords, authentication tokens, and session cookies and tokens.[\[Evilginx 2 July 2018\]](https://breakdev.org/evilginx-2-next-generation-of-phishing-2fa-tokens/)[\[Breakdev Evilginx 3.0 May 2023\]](https://breakdev.org/evilginx-3-0-evilginx-mastery/)[\[Breakdev Evilginx 3.2 AUG 2023\]](https://breakdev.org/evilginx-3-2/)[\[Sophos Evilginx MAR 2025\]](https://www.sophos.com/en-us/blog/stealing-user-credentials-with-evilginx)

- *Technique:* [[../Techniques/Adversary-in-the-Middle (T1557)|Adversary-in-the-Middle]]

## Browser Session Hijacking

[evilginx2](https://attack.mitre.org/software/S9003) can inject custom POST arguments into requests to silently enable "Remember Me" options during authentication to stay logged in across browser sessions.[\[Breakdev Evilginx 2.2 NOV 2018\]](https://breakdev.org/evilginx-2-2-jolly-winter-update)

- *Technique:* [[../Techniques/Browser Session Hijacking (T1185)|Browser Session Hijacking]]

## Multi-Factor Authentication Interception

[evilginx2](https://attack.mitre.org/software/S9003) can intercept authentication tokens to enable bypass of non-phishing resistant forms of MFA.[\[Evilginx 2 July 2018\]](https://breakdev.org/evilginx-2-next-generation-of-phishing-2fa-tokens/)

- *Technique:* [[../Techniques/Multi-Factor Authentication Interception (T1111)|Multi-Factor Authentication Interception]]

## Data Encoding

[evilginx2](https://attack.mitre.org/software/S9003) can randomly generate and Base64 encode parameters in phishing links to defeat static detection.[\[Breakdev Evilginx 2.4 SEP 2020\]](https://breakdev.org/evilginx-2-4-gone-phishing/)

- *Technique:* [[../Techniques/Data Encoding (T1132)|Data Encoding]]

## Install Root Certificate

[evilginx2](https://attack.mitre.org/software/S9003) has obtained a valid SSL/TLS certificate from LetsEncrypt to provide responses to Automatic Certificate Management Environment (ACME) challenges.[\[Evilginx 2 July 2018\]](https://breakdev.org/evilginx-2-next-generation-of-phishing-2fa-tokens/)

- *Technique:* [[../Techniques/Install Root Certificate (T1553.004)|Install Root Certificate]]

## External Proxy

[evilginx2](https://attack.mitre.org/software/S9003) can route traffic via SOCKS5 and HTTP(S) proxies between an intended phishing victim's machine and legitimate websites.[\[Evilginx 2 July 2018\]](https://breakdev.org/evilginx-2-next-generation-of-phishing-2fa-tokens/)[\[Breakdev Evilginx 2.4 SEP 2020\]](https://breakdev.org/evilginx-2-4-gone-phishing/)[\[Sophos Evilginx MAR 2025\]](https://www.sophos.com/en-us/blog/stealing-user-credentials-with-evilginx)


- *Technique:* [[../Techniques/External Proxy (T1090.002)|External Proxy]]

## System Network Configuration Discovery

[evilginx2](https://attack.mitre.org/software/S9003) can capture information from each session with a victim including the public IP used to access the server and the user agent.[\[Sophos Evilginx MAR 2025\]](https://www.sophos.com/en-us/blog/stealing-user-credentials-with-evilginx)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Spearphishing Link

[evilginx2](https://attack.mitre.org/software/S9003) can generate and display phishing URLs including hidden tracking pixels and can also embed URLs within iframes for browser-in-the-browser phishing.[\[Breakdev Evilginx 2.3 JAN 2019\]](https://breakdev.org/evilginx-2-3-phishermans-dream/)[\[Breakdev Evilginx 3.3 APR 2024\]](https://breakdev.org/evilginx-3-3-go-phish/)[\[Sophos Evilginx MAR 2025\]](https://www.sophos.com/en-us/blog/stealing-user-credentials-with-evilginx)


- *Technique:* [[../Techniques/Spearphishing Link (T1598.003)|Spearphishing Link]]

## Data Obfuscation

[evilginx2](https://attack.mitre.org/software/S9003) can modify the Origin and Referrer fields in HTTPS headers it relays between intended victims and legitimate websites to comply with cross-origin resource sharing (CORS) restrictions.[\[Evilginx 2 July 2018\]](https://breakdev.org/evilginx-2-next-generation-of-phishing-2fa-tokens/)

- *Technique:* [[../Techniques/Data Obfuscation (T1001)|Data Obfuscation]]


# External References(s)

- [S9003](https://attack.mitre.org/software/S9003)

[^fn1]: [Everts, M. (2025, March 28). Stealing user credentials with evilginx. Retrieved January 27, 2026.](https://www.sophos.com/en-us/blog/stealing-user-credentials-with-evilginx)
[^fn2]: [Gretzky, K. (2018, September 10). Evilginx 2.1 - The First Post-Release Update. Retrieved January 27, 2026.](https://breakdev.org/evilginx-2-1-the-first-post-release-update/)
[^fn3]: [Gretzky, K.. (2018, July 26). Evilginx 2 - Next Generation of Phishing 2FA Tokens. Retrieved October 14, 2019.](https://breakdev.org/evilginx-2-next-generation-of-phishing-2fa-tokens/)