---
type: detection_rule
title: "Linux Command History Tampering"
rule_id: fdc88d25-96fb-4b7c-9633-c0e417fdbd4e
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1070.003]
---

# Linux Command History Tampering

## Description
Detects commands that try to clear or tamper with the Linux command history.
This technique is used by threat actors in order to evade defenses and execute commands without them being recorded in files such as "bash_history" or "zsh_history".

## Log Source
```yaml
product: linux
```

## Detection Logic
```yaml
condition: keywords
keywords:
- cat /dev/null >*sh_history
- cat /dev/zero >*sh_history
- chattr +i*sh_history
- echo "" >*sh_history
- empty_bash_history
- export HISTFILESIZE=0
- history -c
- history -w
- ln -sf /dev/null *sh_history
- ln -sf /dev/zero *sh_history
- rm *sh_history
- shopt -ou history
- shopt -uo history
- shred *sh_history
- truncate -s0 *sh_history
```

## MITRE ATT&CK
- T1070.003

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1070.003/T1070.003.md
- https://www.hackers-arise.com/post/2016/06/20/covering-your-bash-shell-tracks-antiforensics
- https://www.cadosecurity.com/spinning-yarn-a-new-linux-malware-campaign-targets-docker-apache-hadoop-redis-and-confluence/

## Metadata
- **Author:** Patrick Bareiss
- **Date:** 2019-03-24
- **Rule ID:** `fdc88d25-96fb-4b7c-9633-c0e417fdbd4e`
- **Source file:** `linux/builtin/lnx_shell_clear_cmd_history.yml`
