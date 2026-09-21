---
type: detection_rule
title: "PUA - TruffleHog Execution - Linux"
rule_id: d7a650c4-226c-451e-948f-cc490db506aa
platform: linux
level: medium
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1083, attack.t1552.001]
---

# PUA - TruffleHog Execution - Linux

## Description
Detects execution of TruffleHog, a tool used to search for secrets in different platforms like Git, Jira, Slack, SharePoint, etc. that could be used maliciously.
While it is a legitimate tool, intended for use in CI pipelines and security assessments,
It was observed in the Shai-Hulud malware campaign targeting npm packages to steal sensitive information.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection_img or all of selection_cli_*
selection_cli_platform:
  CommandLine|contains:
  - ' docker --image '
  - ' Git '
  - ' GitHub '
  - ' Jira '
  - ' Slack '
  - ' Confluence '
  - ' SharePoint '
  - ' s3 '
  - ' gcs '
selection_cli_verified:
  CommandLine|contains: ' --results=verified'
selection_img:
  Image|endswith: /trufflehog
```

## MITRE ATT&CK
- T1083
- T1552.001

## False Positives
- Legitimate use of TruffleHog by security teams or developers.

## References
- https://github.com/trufflesecurity/trufflehog
- https://www.getsafety.com/blog-posts/shai-hulud-npm-attack

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-09-24
- **Rule ID:** `d7a650c4-226c-451e-948f-cc490db506aa`
- **Source file:** `linux/process_creation/proc_creation_lnx_pua_trufflehog.yml`
