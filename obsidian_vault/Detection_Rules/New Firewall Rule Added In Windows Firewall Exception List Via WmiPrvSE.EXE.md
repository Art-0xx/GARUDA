---
type: detection_rule
title: "New Firewall Rule Added In Windows Firewall Exception List Via WmiPrvSE.EXE"
rule_id: eca81e8d-09e1-4d04-8614-c91f44fd0519
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1686.003]
---

# New Firewall Rule Added In Windows Firewall Exception List Via WmiPrvSE.EXE

## Description
Detects the addition of a new "Allow" firewall rule by the WMI process (WmiPrvSE.EXE).
This can occur if an attacker leverages PowerShell cmdlets such as "New-NetFirewallRule", or directly uses WMI CIM classes such as "MSFT_NetFirewallRule".

## Log Source
```yaml
product: windows
service: firewall-as
```

## Detection Logic
```yaml
condition: selection
selection:
  Action: 3
  EventID:
  - 2004
  - 2071
  - 2097
  ModifyingApplication|endswith: :\Windows\System32\wbem\WmiPrvSE.exe
```

## MITRE ATT&CK
- T1686.003

## False Positives
- Administrator scripts or activity.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1562.004/T1562.004.md#atomic-test-24---set-a-firewall-rule-using-new-netfirewallrule
- https://malware.news/t/the-rhysida-ransomware-activity-analysis-and-ties-to-vice-society/72170
- https://cybersecuritynews.com/rhysida-ransomware-attacking-windows/

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-05-10
- **Rule ID:** `eca81e8d-09e1-4d04-8614-c91f44fd0519`
- **Source file:** `windows/builtin/firewall_as/win_firewall_as_add_rule_wmiprvse.yml`
