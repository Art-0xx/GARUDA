---
type: detection_rule
title: "Change the Fax Dll"
rule_id: 9e3357ba-09d4-4fbd-a7c5-ad6386314513
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Change the Fax Dll

## Description
Detect possible persistence using Fax DLL load when service restart

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Details: '%systemroot%\system32\fxst30.dll'
selection:
  TargetObject|contains|all:
  - \Software\Microsoft\Fax\Device Providers\
  - \ImageName
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://twitter.com/dottor_morte/status/1544652325570191361
- https://raw.githubusercontent.com/RiccardoAncarani/talks/master/F-Secure/unorthodox-lateral-movement.pdf

## Metadata
- **Author:** frack113
- **Date:** 2022-07-17
- **Rule ID:** `9e3357ba-09d4-4fbd-a7c5-ad6386314513`
- **Source file:** `windows/registry/registry_set/registry_set_fax_dll_persistance.yml`
