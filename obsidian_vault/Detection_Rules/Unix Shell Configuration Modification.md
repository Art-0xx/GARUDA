---
type: detection_rule
title: "Unix Shell Configuration Modification"
rule_id: a94cdd87-6c54-4678-a6cc-2814ffe5a13d
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1546.004]
---

# Unix Shell Configuration Modification

## Description
Detect unix shell configuration modification. Adversaries may establish persistence through executing malicious commands triggered when a new shell is opened.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection
selection:
  name:
  - /etc/shells
  - /etc/profile
  - /etc/profile.d/*
  - /etc/bash.bashrc
  - /etc/bashrc
  - /etc/zsh/zprofile
  - /etc/zsh/zshrc
  - /etc/zsh/zlogin
  - /etc/zsh/zlogout
  - /etc/csh.cshrc
  - /etc/csh.login
  - /root/.bashrc
  - /root/.bash_profile
  - /root/.profile
  - /root/.zshrc
  - /root/.zprofile
  - /home/*/.bashrc
  - /home/*/.zshrc
  - /home/*/.bash_profile
  - /home/*/.zprofile
  - /home/*/.profile
  - /home/*/.bash_login
  - /home/*/.bash_logout
  - /home/*/.zlogin
  - /home/*/.zlogout
  type: PATH
```

## MITRE ATT&CK
- T1546.004

## False Positives
- Admin or User activity are expected to generate some false positives

## References
- https://objective-see.org/blog/blog_0x68.html
- https://web.archive.org/web/20221204161143/https://www.glitch-cat.com/p/green-lambert-and-attack
- https://www.anomali.com/blog/pulling-linux-rabbit-rabbot-malware-out-of-a-hat

## Metadata
- **Author:** Peter Matkovski, IAI
- **Date:** 2023-03-06
- **Rule ID:** `a94cdd87-6c54-4678-a6cc-2814ffe5a13d`
- **Source file:** `linux/auditd/path/lnx_auditd_unix_shell_configuration_modification.yml`
