---
type: detection_rule
title: "Registry Modification for OCI DLL Redirection"
rule_id: c0e0bdec-3e3d-47aa-9974-05539c999c89
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112, attack.t1574.001]
---

# Registry Modification for OCI DLL Redirection

## Description
Detects registry modifications related to 'OracleOciLib' and 'OracleOciLibPath' under 'MSDTC' settings.
Threat actors may modify these registry keys to redirect the loading of 'oci.dll' to a malicious DLL, facilitating phantom DLL hijacking via the MSDTC service.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: (selection_ocilib and not filter_main_ocilib_file) or (selection_ocilibpath
  and not filter_main_ocilibpath)
filter_main_ocilib_file:
  Details|contains: oci.dll
filter_main_ocilibpath:
  Details|contains: '%SystemRoot%\System32\'
selection_ocilib:
  TargetObject|endswith: \SOFTWARE\Microsoft\MSDTC\MTxOCI\OracleOciLib
selection_ocilibpath:
  TargetObject|endswith: \SOFTWARE\Microsoft\MSDTC\MTxOCI\OracleOciLibPath
```

## MITRE ATT&CK
- T1112
- T1574.001

## False Positives
- Unlikely

## References
- https://www.crowdstrike.com/en-us/blog/4-ways-adversaries-hijack-dlls/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-01-24
- **Rule ID:** `c0e0bdec-3e3d-47aa-9974-05539c999c89`
- **Source file:** `windows/registry/registry_set/registry_set_potential_oci_dll_redirection.yml`
