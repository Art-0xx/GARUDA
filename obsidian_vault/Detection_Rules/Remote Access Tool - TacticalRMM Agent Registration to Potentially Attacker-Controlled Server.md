---
type: detection_rule
title: "Remote Access Tool - TacticalRMM Agent Registration to Potentially Attacker-Controlled Server"
rule_id: 2db93a3f-3249-4f73-9e68-0e77a0f8ae7e
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219, attack.t1105]
---

# Remote Access Tool - TacticalRMM Agent Registration to Potentially Attacker-Controlled Server

## Description
Detects TacticalRMM agent installations where the --api, --auth, and related flags are used on the command line.
These parameters configure the agent to connect to a specific RMM server with authentication, client ID, and site ID.
This technique could indicate a threat actor attempting to register the agent with an attacker-controlled RMM infrastructure silently.

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
  - --api
  - --auth
  - --client-id
  - --site-id
  - --agent-type
  Image|contains: \TacticalAgent\tacticalrmm.exe
```

## MITRE ATT&CK
- T1219
- T1105

## False Positives
- Legitimate system administrator deploying TacticalRMM

## References
- https://github.com/amidaware/tacticalrmm
- https://apophis133.medium.com/powershell-script-tactical-rmm-installation-45afb639eff3

## Metadata
- **Author:** Ahmed Nosir (@egycondor)
- **Date:** 2025-05-29
- **Rule ID:** `2db93a3f-3249-4f73-9e68-0e77a0f8ae7e`
- **Source file:** `windows/process_creation/proc_creation_win_remote_access_tools_tacticalrmm_agent_registration_via_cli.yml`
