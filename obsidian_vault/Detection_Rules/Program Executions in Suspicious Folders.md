---
type: detection_rule
title: "Program Executions in Suspicious Folders"
rule_id: a39d7fa7-3fbd-4dc2-97e1-d87f546b1bbc
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1587, attack.t1584]
---

# Program Executions in Suspicious Folders

## Description
Detects program executions in suspicious non-program folders related to malware or hacking activity

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection
selection:
  exe|startswith:
  - /tmp/
  - /var/www/
  - /home/*/public_html/
  - /usr/local/apache2/
  - /usr/local/httpd/
  - /var/apache/
  - /srv/www/
  - /home/httpd/html/
  - /srv/http/
  - /usr/share/nginx/html/
  - /var/lib/pgsql/data/
  - /usr/local/mysql/data/
  - /var/lib/mysql/
  - /var/vsftpd/
  - /etc/bind/
  - /var/named/
  type: SYSCALL
```

## MITRE ATT&CK
- T1587
- T1584

## False Positives
- Admin activity (especially in /tmp folders)
- Crazy web applications

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-01-23
- **Rule ID:** `a39d7fa7-3fbd-4dc2-97e1-d87f546b1bbc`
- **Source file:** `linux/auditd/syscall/lnx_auditd_susp_exe_folders.yml`
