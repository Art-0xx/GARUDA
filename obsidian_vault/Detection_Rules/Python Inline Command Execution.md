---
type: detection_rule
title: "Python Inline Command Execution"
rule_id: 899133d5-4d7c-4a7f-94ee-27355c879d90
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Python Inline Command Execution

## Description
Detects execution of python using the "-c" flag. This is could be used as a way to launch a reverse shell or execute live python code.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_python_1:
  ParentCommandLine|contains: -E -s -m ensurepip -U --default-pip
  ParentImage|endswith: \python.exe
  ParentImage|startswith:
  - C:\Program Files\Python
  - C:\Program Files (x86)\Python
filter_main_python_trace:
  CommandLine|contains|all:
  - -W ignore::DeprecationWarning
  - '[''install'', ''--no-cache-dir'', ''--no-index'', ''--find-links'','
  - '''--upgrade'', ''pip'''
  ParentImage|startswith:
  - C:\Program Files\Python
  - C:\Program Files (x86)\Python
filter_optional_pip:
  CommandLine|contains|all:
  - <pip-setuptools-caller>
  - exec(compile(
filter_optional_vscode:
- ParentImage|endswith: \AppData\Local\Programs\Microsoft VS Code\Code.exe
- ParentImage:
  - C:\Program Files\Microsoft VS Code\Code.exe
  - C:\Program Files (x86)\Microsoft VS Code\Code.exe
selection_cli:
  CommandLine|contains: ' -c'
selection_img:
- OriginalFileName: python.exe
- Image|endswith:
  - python.exe
  - python3.exe
  - python2.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Python libraries that use a flag starting with "-c". Filter according to your environment

## References
- https://docs.python.org/3/using/cmdline.html#cmdoption-c
- https://www.revshells.com/
- https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-02
- **Rule ID:** `899133d5-4d7c-4a7f-94ee-27355c879d90`
- **Source file:** `windows/process_creation/proc_creation_win_python_inline_command_execution.yml`
