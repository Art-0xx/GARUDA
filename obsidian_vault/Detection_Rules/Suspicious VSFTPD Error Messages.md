---
type: detection_rule
title: "Suspicious VSFTPD Error Messages"
rule_id: 377f33a1-4b36-4ee1-acee-1dbe4b43cfbe
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1190]
---

# Suspicious VSFTPD Error Messages

## Description
Detects suspicious VSFTPD error messages that indicate a fatal or suspicious error that could be caused by exploiting attempts

## Log Source
```yaml
product: linux
service: vsftpd
```

## Detection Logic
```yaml
condition: keywords
keywords:
- 'Connection refused: too many sessions for this address.'
- 'Connection refused: tcp_wrappers denial.'
- Bad HTTP verb.
- port and pasv both active
- pasv and port both active
- Transfer done (but failed to open directory).
- Could not set file modification time.
- 'bug: pid active in ptrace_sandbox_free'
- PTRACE_SETOPTIONS failure
- 'weird status:'
- couldn't handle sandbox event
- syscall * out of bounds
- 'syscall not permitted:'
- 'syscall validate failed:'
- Input line too long.
- poor buffer accounting in str_netfd_alloc
- vsf_sysutil_read_loop
```

## MITRE ATT&CK
- T1190

## False Positives
- Unknown

## References
- https://github.com/dagwieers/vsftpd/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-07-05
- **Rule ID:** `377f33a1-4b36-4ee1-acee-1dbe4b43cfbe`
- **Source file:** `linux/builtin/vsftpd/lnx_vsftpd_susp_error_messages.yml`
