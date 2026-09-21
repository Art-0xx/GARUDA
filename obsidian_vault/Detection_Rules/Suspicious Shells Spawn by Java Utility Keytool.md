---
type: detection_rule
title: "Suspicious Shells Spawn by Java Utility Keytool"
rule_id: 90fb5e62-ca1f-4e22-b42e-cc521874c938
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious Shells Spawn by Java Utility Keytool

## Description
Detects suspicious shell spawn from Java utility keytool process (e.g. adselfservice plus exploitation)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \cmd.exe
  - \sh.exe
  - \bash.exe
  - \powershell.exe
  - \pwsh.exe
  - \schtasks.exe
  - \certutil.exe
  - \whoami.exe
  - \bitsadmin.exe
  - \wscript.exe
  - \cscript.exe
  - \scrcons.exe
  - \regsvr32.exe
  - \hh.exe
  - \wmic.exe
  - \mshta.exe
  - \rundll32.exe
  - \forfiles.exe
  - \scriptrunner.exe
  - \mftrace.exe
  - \AppVLP.exe
  - \systeminfo.exe
  - \reg.exe
  - \query.exe
  ParentImage|endswith: \keytool.exe
```

## False Positives
- Unknown

## References
- https://redcanary.com/blog/intelligence-insights-december-2021
- https://www.synacktiv.com/en/publications/how-to-exploit-cve-2021-40539-on-manageengine-adselfservice-plus.html

## Metadata
- **Author:** Andreas Hunkeler (@Karneades)
- **Date:** 2021-12-22
- **Rule ID:** `90fb5e62-ca1f-4e22-b42e-cc521874c938`
- **Source file:** `windows/process_creation/proc_creation_win_java_keytool_susp_child_process.yml`
