---
type: detection_rule
title: "Remote Access Tool - Renamed MeshAgent Execution - MacOS"
rule_id: bd3b5eaa-439d-4a42-8f35-a49f5c8a2582
platform: macos
level: high
status: experimental
tags: [detection, sigma, macos]
mitre_tags: [attack.t1219.002, attack.t1036.003]
---

# Remote Access Tool - Renamed MeshAgent Execution - MacOS

## Description
Detects the execution of a renamed instance of the Remote Monitoring and Management (RMM) tool, MeshAgent.
RMM tools such as MeshAgent are commonly utilized by IT administrators for legitimate remote support and system management.
However, malicious actors may exploit these tools by renaming them to bypass detection mechanisms, enabling unauthorized access and control over compromised systems.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection_meshagent and not 1 of filter_main_*
filter_main_legitimate:
  Image|endswith:
  - /meshagent
  - /meshagent_osx64
selection_meshagent:
- CommandLine|contains: --meshServiceName
- OriginalFileName|contains: meshagent
```

## MITRE ATT&CK
- T1219.002
- T1036.003

## False Positives
- Unknown

## References
- https://www.huntress.com/blog/know-thy-enemy-a-novel-november-case-on-persistent-remote-access
- https://thecyberexpress.com/ukraine-hit-by-meshagent-malware-campaign/
- https://wazuh.com/blog/how-to-detect-meshagent-with-wazuh/
- https://www.security.com/threat-intelligence/medusa-ransomware-attacks

## Metadata
- **Author:** Norbert Jaśniewicz (AlphaSOC)
- **Date:** 2025-05-19
- **Rule ID:** `bd3b5eaa-439d-4a42-8f35-a49f5c8a2582`
- **Source file:** `macos/process_creation/proc_creation_macos_remote_access_tools_renamed_meshagent_execution.yml`
