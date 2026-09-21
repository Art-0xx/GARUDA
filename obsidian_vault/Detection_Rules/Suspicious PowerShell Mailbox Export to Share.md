---
type: detection_rule
title: "Suspicious PowerShell Mailbox Export to Share"
rule_id: 889719ef-dd62-43df-86c3-768fb08dc7c0
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
---

# Suspicious PowerShell Mailbox Export to Share

## Description
Detects usage of the powerShell New-MailboxExportRequest Cmdlet to exports a mailbox to a remote or local share, as used in ProxyShell exploitations

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
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
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-08-07
- **Rule ID:** `889719ef-dd62-43df-86c3-768fb08dc7c0`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_mailboxexport_share.yml`
