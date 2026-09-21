---
type: detection_rule
title: "New PDQDeploy Service - Server Side"
rule_id: ee9ca27c-9bd7-4cee-9b01-6e906be7cae3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# New PDQDeploy Service - Server Side

## Description
Detects a PDQDeploy service installation which indicates that PDQDeploy was installed on the machines.
PDQDeploy can be abused by attackers to remotely install packages or execute commands on target machines

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: all of selection_*
selection_root:
  EventID: 7045
  Provider_Name: Service Control Manager
selection_service:
- ImagePath|contains: PDQDeployService.exe
- ServiceName:
  - PDQDeploy
  - PDQ Deploy
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Legitimate use of the tool

## References
- https://documentation.pdq.com/PDQDeploy/13.0.3.0/index.html?windows-services.htm

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-22
- **Rule ID:** `ee9ca27c-9bd7-4cee-9b01-6e906be7cae3`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_service_install_pdqdeploy.yml`
