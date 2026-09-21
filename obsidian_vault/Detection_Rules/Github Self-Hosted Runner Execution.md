---
type: detection_rule
title: "Github Self-Hosted Runner Execution"
rule_id: 5bac7a56-da88-4c27-922e-c81e113b20cb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1102.002, attack.t1071]
---

# Github Self-Hosted Runner Execution

## Description
Detects GitHub self-hosted runners executing workflows on local infrastructure that could be abused for persistence and code execution.
Shai-Hulud is an npm supply chain worm targeting CI/CD environments.
It installs runners on compromised systems to maintain access after credential theft, leveraging their access to secrets and internal networks.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_worker_* or all of selection_listener_*
selection_listener_cli:
  CommandLine|contains:
  - run
  - configure
selection_listener_img:
- Image|endswith: \Runner.Listener.exe
- OriginalFileName: Runner.Listener.dll
selection_worker_cli:
  CommandLine|contains: spawnclient
selection_worker_img:
- Image|endswith: \Runner.Worker.exe
- OriginalFileName: Runner.Worker.dll
```

## MITRE ATT&CK
- T1102.002
- T1071

## False Positives
- Legitimate GitHub self-hosted runner installations on designated CI/CD infrastructure
- Authorized runner deployments by DevOps/Platform teams following change management
- Scheduled runner updates or reconfigurations on existing build agents
- Self-hosted runners that follow expected/known naming patterns
- Installation via expected/known configuration management tools (reflected mostly as parent process name)

## References
- https://about.gitlab.com/blog/gitlab-discovers-widespread-npm-supply-chain-attack/
- https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/

## Metadata
- **Author:** Daniel Koifman (KoifSec)
- **Date:** 2025-11-29
- **Rule ID:** `5bac7a56-da88-4c27-922e-c81e113b20cb`
- **Source file:** `windows/process_creation/proc_creation_win_github_self_hosted_runner.yml`
