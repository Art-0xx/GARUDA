---
type: detection_rule
title: "Python WebServer Execution - Linux"
rule_id: 3f0f5957-04f8-4792-ad89-192b0303bde6
platform: linux
level: medium
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1048.003]
---

# Python WebServer Execution - Linux

## Description
Detects the execution of Python web servers via command line interface (CLI).
After gaining access to target systems, adversaries may use Python's built-in HTTP server modules to quickly establish a web server without requiring additional software.
This technique is commonly used in post-exploitation scenarios as it provides a simple method for transferring files between the compromised host and attacker-controlled systems.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- Image|endswith:
  - /python
  - /python2
  - /python3
- Image|contains:
  - /python2.
  - /python3.
selection_module:
  CommandLine|contains:
  - http.server
  - SimpleHTTPServer
```

## MITRE ATT&CK
- T1048.003

## False Positives
- Testing or development activity

## References
- https://www.atomicredteam.io/atomic-red-team/atomics/T1048.003#atomic-test-8---python3-httpserver
- https://docs.python.org/3/library/http.server.html
- https://docs.python.org/2/library/simplehttpserver.html

## Metadata
- **Author:** Mohamed LAKRI
- **Date:** 2025-10-17
- **Rule ID:** `3f0f5957-04f8-4792-ad89-192b0303bde6`
- **Source file:** `linux/process_creation/proc_creation_lnx_python_http_server_execution.yml`
