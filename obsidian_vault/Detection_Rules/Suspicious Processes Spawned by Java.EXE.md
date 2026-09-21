---
type: detection_rule
title: "Suspicious Processes Spawned by Java.EXE"
rule_id: 0d34ed8b-1c12-4ff2-828c-16fc860b766d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious Processes Spawned by Java.EXE

## Description
Detects suspicious processes spawned from a Java host process which could indicate a sign of exploitation (e.g. log4j)

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
  - \AppVLP.exe
  - \bitsadmin.exe
  - \certutil.exe
  - \cscript.exe
  - \curl.exe
  - \forfiles.exe
  - \hh.exe
  - \mftrace.exe
  - \mshta.exe
  - \net.exe
  - \net1.exe
  - \query.exe
  - \reg.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \schtasks.exe
  - \scrcons.exe
  - \scriptrunner.exe
  - \sh.exe
  - \systeminfo.exe
  - \whoami.exe
  - \wmic.exe
  - \wscript.exe
  ParentImage|endswith: \java.exe
```

## False Positives
- Legitimate calls to system binaries
- Company specific internal usage

## References
- https://web.archive.org/web/20231230220738/https://www.lunasec.io/docs/blog/log4j-zero-day/

## Metadata
- **Author:** Andreas Hunkeler (@Karneades), Florian Roth
- **Date:** 2021-12-17
- **Rule ID:** `0d34ed8b-1c12-4ff2-828c-16fc860b766d`
- **Source file:** `windows/process_creation/proc_creation_win_java_susp_child_process.yml`
