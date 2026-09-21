---
type: detection_rule
title: "Python Image Load By Non-Python Process"
rule_id: cbb56d62-4060-40f7-9466-d8aaf3123f83
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027.002]
---

# Python Image Load By Non-Python Process

## Description
Detects the image load of "Python Core" by a non-Python process. This might be indicative of a execution of executable that has been bundled from Python code.
Various tools like Py2Exe, PyInstaller, and cx_Freeze are used to bundle Python code into standalone executables.
Threat actors often use these tools to bundle malicious Python scripts into executables, sometimes to obfuscate the code or to bypass security measures.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_generic:
- Image|contains: Python
- Image|startswith:
  - C:\Program Files\
  - C:\Program Files (x86)\
  - C:\ProgramData\Anaconda3\
filter_optional_null_image:
  Image: null
selection:
  Description: Python Core
```

## MITRE ATT&CK
- T1027.002

## False Positives
- Legitimate Py2Exe Binaries
- Known false positive caused with Python Anaconda
- Various legitimate software is bundled from Python code into executables

## References
- https://www.py2exe.org/
- https://unit42.paloaltonetworks.com/unit-42-technical-analysis-seaduke/

## Metadata
- **Author:** Patrick St. John, OTR (Open Threat Research)
- **Date:** 2020-05-03
- **Rule ID:** `cbb56d62-4060-40f7-9466-d8aaf3123f83`
- **Source file:** `windows/image_load/image_load_susp_python_image_load.yml`
