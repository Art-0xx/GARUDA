---
type: detection_rule
title: "Potential Suspicious PowerShell Module File Created"
rule_id: e8a52bbd-bced-459f-bd93-64db45ce7657
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Suspicious PowerShell Module File Created

## Description
Detects the creation of a new PowerShell module in the first folder of the module directory structure "\WindowsPowerShell\Modules\malware\malware.psm1". This is somewhat an uncommon practice as legitimate modules often includes a version folder.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith:
  - \\WindowsPowerShell\\Modules\\*\.ps
  - \\WindowsPowerShell\\Modules\\*\.dll
```

## False Positives
- False positive rate will vary depending on the environments. Additional filters might be required to make this logic usable in production.

## References
- Internal Research
- https://learn.microsoft.com/en-us/powershell/scripting/developer/module/understanding-a-windows-powershell-module?view=powershell-7.3

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-09
- **Rule ID:** `e8a52bbd-bced-459f-bd93-64db45ce7657`
- **Source file:** `windows/file/file_event/file_event_win_powershell_module_susp_creation.yml`
