---
type: detection_rule
title: "Suspicious Manipulation Of Default Accounts Via Net.EXE"
rule_id: 5b768e71-86f2-4879-b448-81061cbae951
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1560.001]
---

# Suspicious Manipulation Of Default Accounts Via Net.EXE

## Description
Detects suspicious manipulations of default accounts such as 'administrator' and 'guest'. For example 'enable' or 'disable' accounts or change the password...etc

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not filter
filter:
  CommandLine|contains|all:
  - guest
  - /active no
selection_img:
- Image|endswith:
  - \net.exe
  - \net1.exe
- OriginalFileName:
  - net.exe
  - net1.exe
selection_user_option:
  CommandLine|contains: ' user '
selection_username:
  CommandLine|contains:
  - " J\xE4rjestelm\xE4nvalvoja "
  - ' Rendszergazda '
  - " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\
    \ "
  - ' Administrateur '
  - ' Administrador '
  - " Administrat\xF6r "
  - ' Administrator '
  - ' guest '
  - ' DefaultAccount '
  - " \"J\xE4rjestelm\xE4nvalvoja\" "
  - ' "Rendszergazda" '
  - " \"\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\
    \" "
  - ' "Administrateur" '
  - ' "Administrador" '
  - " \"Administrat\xF6r\" "
  - ' "Administrator" '
  - ' "guest" '
  - ' "DefaultAccount" '
  - " 'J\xE4rjestelm\xE4nvalvoja' "
  - ' ''Rendszergazda'' '
  - " '\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\
    ' "
  - ' ''Administrateur'' '
  - ' ''Administrador'' '
  - " 'Administrat\xF6r' "
  - ' ''Administrator'' '
  - ' ''guest'' '
  - ' ''DefaultAccount'' '
```

## MITRE ATT&CK
- T1560.001

## False Positives
- Some false positives could occur with the admin or guest account. It depends on the scripts being used by the admins in your env. If you experience a lot of FP you could reduce the level to medium

## References
- https://www.trellix.com/en-sg/about/newsroom/stories/threat-labs/lockergoga-ransomware-family-used-in-targeted-attacks.html
- https://redacted.com/blog/bianlian-ransomware-gang-gives-it-a-go/
- https://www.microsoft.com/security/blog/2022/09/07/profiling-dev-0270-phosphorus-ransomware-operations/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-01
- **Rule ID:** `5b768e71-86f2-4879-b448-81061cbae951`
- **Source file:** `windows/process_creation/proc_creation_win_net_user_default_accounts_manipulation.yml`
