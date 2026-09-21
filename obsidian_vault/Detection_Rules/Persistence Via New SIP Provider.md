---
type: detection_rule
title: "Persistence Via New SIP Provider"
rule_id: 5a2b21ee-6aaa-4234-ac9d-59a59edf90a1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1553.003]
---

# Persistence Via New SIP Provider

## Description
Detects when an attacker register a new SIP provider for persistence and defense evasion

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter*
filter:
  Details:
  - WINTRUST.DLL
  - mso.dll
filter_poqexec:
  Details: C:\Windows\System32\PsfSip.dll
  Image: C:\Windows\System32\poqexec.exe
  TargetObject|contains: \CryptSIPDll
selection_dll:
  TargetObject|contains:
  - \Dll
  - \$DLL
selection_root:
  TargetObject|contains:
  - \SOFTWARE\Microsoft\Cryptography\Providers\
  - \SOFTWARE\Microsoft\Cryptography\OID\EncodingType
  - \SOFTWARE\WOW6432Node\Microsoft\Cryptography\Providers\
  - \SOFTWARE\WOW6432Node\Microsoft\Cryptography\OID\EncodingType
```

## MITRE ATT&CK
- T1553.003

## False Positives
- Legitimate SIP being registered by the OS or different software.

## References
- https://persistence-info.github.io/Data/codesigning.html
- https://github.com/gtworek/PSBits/tree/master/SIP
- https://specterops.io/assets/resources/SpecterOps_Subverting_Trust_in_Windows.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `5a2b21ee-6aaa-4234-ac9d-59a59edf90a1`
- **Source file:** `windows/registry/registry_set/registry_set_sip_persistence.yml`
