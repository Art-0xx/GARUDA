---
type: detection_rule
title: "Suspicious PowerShell Mailbox Export to Share - PS"
rule_id: 4a241dea-235b-4a7e-8d76-50d817b146c4
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
---

# Suspicious PowerShell Mailbox Export to Share - PS

## Description
Detects usage of the powerShell New-MailboxExportRequest Cmdlet to exports a mailbox to a remote or local share, as used in ProxyShell exploitations

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - New-MailboxExportRequest
  - ' -Mailbox '
  - ' -FilePath \\\\'
```

## False Positives
- Unknown

## References
- https://youtu.be/5mqid-7zp8k?t=2481
- https://blog.orange.tw/2021/08/proxylogon-a-new-attack-surface-on-ms-exchange-part-1.html
- https://peterjson.medium.com/reproducing-the-proxyshell-pwn2own-exploit-49743a4ea9a1
- https://m365internals.com/2022/10/07/hunting-in-on-premises-exchange-server-logs/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-26
- **Rule ID:** `4a241dea-235b-4a7e-8d76-50d817b146c4`
- **Source file:** `windows/powershell/powershell_script/posh_ps_mailboxexport_share.yml`
