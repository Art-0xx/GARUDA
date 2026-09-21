---
type: detection_rule
title: "Windows PowerShell User Agent"
rule_id: c8557060-9221-4448-8794-96320e6f3e74
platform: web
level: medium
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1071.001]
---

# Windows PowerShell User Agent

## Description
Detects Windows PowerShell Web Access

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  c-useragent|contains: ' WindowsPowerShell/'
```

## MITRE ATT&CK
- T1071.001

## False Positives
- Administrative scripts that download files from the Internet
- Administrative scripts that retrieve certain website contents

## References
- https://msdn.microsoft.com/powershell/reference/5.1/microsoft.powershell.utility/Invoke-WebRequest

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-03-13
- **Rule ID:** `c8557060-9221-4448-8794-96320e6f3e74`
- **Source file:** `web/proxy_generic/proxy_ua_powershell.yml`
