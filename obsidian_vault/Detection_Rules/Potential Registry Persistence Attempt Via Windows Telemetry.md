---
type: detection_rule
title: "Potential Registry Persistence Attempt Via Windows Telemetry"
rule_id: 73a883d0-0348-4be4-a8d8-51031c2564f8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Potential Registry Persistence Attempt Via Windows Telemetry

## Description
Detects potential persistence behavior using the windows telemetry registry key.
Windows telemetry makes use of the binary CompatTelRunner.exe to run a variety of commands and perform the actual telemetry collections.
This binary was created to be easily extensible, and to that end, it relies on the registry to instruct on which commands to run.
The problem is, it will run any arbitrary command without restriction of location or type.

## Log Source
```yaml
category: registry_set
definition: 'Requirements: Sysmon config that monitors \SOFTWARE\Microsoft\Windows
  NT\CurrentVersion\AppCompatFlags\TelemetryController subkey of the HKLM hives'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_generic:
  Details|contains:
  - \system32\CompatTelRunner.exe
  - \system32\DeviceCensus.exe
selection:
  Details|contains:
  - .bat
  - .bin
  - .cmd
  - .dat
  - .dll
  - .exe
  - .hta
  - .jar
  - .js
  - .msi
  - .ps
  - .sh
  - .vb
  TargetObject|contains: \SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\TelemetryController\
  TargetObject|endswith: \Command
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Unknown

## References
- https://www.trustedsec.com/blog/abusing-windows-telemetry-for-persistence/

## Metadata
- **Author:** Lednyov Alexey, oscd.community, Sreeman
- **Date:** 2020-10-16
- **Rule ID:** `73a883d0-0348-4be4-a8d8-51031c2564f8`
- **Source file:** `windows/registry/registry_set/registry_set_telemetry_persistence.yml`
