---
type: detection_rule
title: "NTLM Hash Leak Via Curl NTLM Authentication"
rule_id: 916eb839-895e-47f8-99ee-3008bf377a3e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1187]
---

# NTLM Hash Leak Via Curl NTLM Authentication

## Description
Detects the use of curl with NTLM authentication and empty credentials (-u :), which can be abused to leak the currently logged-in user's NTLMv2 challenge-response to an
attacker-controlled server, enabling offline cracking or relay attacks.
When no credentials are provided, the Microsoft-shipped curl passes a NULL identity to Windows SSPI, which automatically falls back to the current user's logon session credentials
stored in LSASS — without requiring a plaintext password.
This behavior is exclusive to the curl binary shipped by Microsoft (available since Windows 10 / Windows Server 2019), which is built with SSPI support.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_empty_creds:
  CommandLine|re: '(?i)\s(-u|--user)\s*:'
selection_img:
- Image|endswith: \curl.exe
- OriginalFileName: curl.exe
selection_ntlm_flag:
  CommandLine|contains: --ntlm
```

## MITRE ATT&CK
- T1187

## False Positives
- Should be very rare as it's not widely known or used, but could occur in legitimate use cases where curl is used with NTLM authentication and empty credentials, such as in certain scripts or automation tasks.

## References
- https://github.com/curl/curl/blob/master/lib/vauth/ntlm_sspi.c#L128-L140
- https://learn.microsoft.com/en-us/windows/win32/secauthn/acquirecredentialshandle--ntlm
- https://curl.se/docs/manpage.html#--ntlm

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-06-04
- **Rule ID:** `916eb839-895e-47f8-99ee-3008bf377a3e`
- **Source file:** `windows/process_creation/proc_creation_win_curl_ntlm_hash_leak_attempt.yml`
