---
type: detection_rule
title: "Suspicious OpenSSH Daemon Error"
rule_id: e76b413a-83d0-4b94-8e4c-85db4a5b8bdc
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1190]
---

# Suspicious OpenSSH Daemon Error

## Description
Detects suspicious SSH / SSHD error messages that indicate a fatal or suspicious error that could be caused by exploiting attempts

## Log Source
```yaml
product: linux
service: sshd
```

## Detection Logic
```yaml
condition: keywords
keywords:
- unexpected internal error
- unknown or unsupported key type
- invalid certificate signing key
- invalid elliptic curve value
- incorrect signature
- error in libcrypto
- unexpected bytes remain after decoding
- 'fatal: buffer_get_string: bad string'
- 'Local: crc32 compensation attack'
- bad client public DH value
- Corrupted MAC on input
```

## MITRE ATT&CK
- T1190

## False Positives
- Unknown

## References
- https://github.com/openssh/openssh-portable/blob/c483a5c0fb8e8b8915fad85c5f6113386a4341ca/ssherr.c
- https://github.com/ossec/ossec-hids/blob/1ecffb1b884607cb12e619f9ab3c04f530801083/etc/rules/sshd_rules.xml

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-06-30
- **Rule ID:** `e76b413a-83d0-4b94-8e4c-85db4a5b8bdc`
- **Source file:** `linux/builtin/sshd/lnx_sshd_susp_ssh.yml`
