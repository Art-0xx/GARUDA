---
type: detection_rule
title: "Mshtml.DLL RunHTMLApplication Suspicious Usage"
rule_id: 4782eb5a-a513-4523-a0ac-f3082b26ac5c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Mshtml.DLL RunHTMLApplication Suspicious Usage

## Description
Detects execution of commands that leverage the "mshtml.dll" RunHTMLApplication export to run arbitrary code via different protocol handlers (vbscript, javascript, file, http...)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - '#135'
  - RunHTMLApplication
  CommandLine|contains|all:
  - \..\
  - mshtml
```

## False Positives
- Unlikely

## References
- https://twitter.com/n1nj4sec/status/1421190238081277959
- https://hyp3rlinx.altervista.org/advisories/MICROSOFT_WINDOWS_DEFENDER_TROJAN.WIN32.POWESSERE.G_MITIGATION_BYPASS_PART2.txt
- http://hyp3rlinx.altervista.org/advisories/MICROSOFT_WINDOWS_DEFENDER_DETECTION_BYPASS.txt

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems),  Florian Roth (Nextron Systems), Josh Nickels, frack113, Zaw Min Htun (ZETA)
- **Date:** 2022-08-14
- **Rule ID:** `4782eb5a-a513-4523-a0ac-f3082b26ac5c`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_mshtml_runhtmlapplication.yml`
