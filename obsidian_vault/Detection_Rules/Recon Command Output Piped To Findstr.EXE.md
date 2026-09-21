---
type: detection_rule
title: "Recon Command Output Piped To Findstr.EXE"
rule_id: ccb5742c-c248-4982-8c5c-5571b9275ad3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1057]
---

# Recon Command Output Piped To Findstr.EXE

## Description
Detects the execution of a potential recon command where the results are piped to "findstr". This is meant to trigger on inline calls of "cmd.exe" via the "/c" or "/k" for example.
Attackers often time use this technique to extract specific information they require in their reconnaissance phase.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_xampp:
  CommandLine|contains|all:
  - cmd.exe /c TASKLIST /V |
  - FIND /I
  - \xampp\
  - \catalina_start.bat
selection:
  CommandLine|contains:
  - ipconfig*|*find
  - net*|*find
  - netstat*|*find
  - ping*|*find
  - systeminfo*|*find
  - tasklist*|*find
  - whoami*|*find
```

## MITRE ATT&CK
- T1057

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/02cb591f75064ffe1e0df9ac3ed5972a2e491c97/atomics/T1057/T1057.md#atomic-test-6---discover-specific-process---tasklist
- https://www.hhs.gov/sites/default/files/manage-engine-vulnerability-sector-alert-tlpclear.pdf
- https://www.trendmicro.com/en_us/research/22/d/spring4shell-exploited-to-deploy-cryptocurrency-miners.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), frack113
- **Date:** 2023-07-06
- **Rule ID:** `ccb5742c-c248-4982-8c5c-5571b9275ad3`
- **Source file:** `windows/process_creation/proc_creation_win_findstr_recon_pipe_output.yml`
