---
type: detection_rule
title: "Unsigned .node File Loaded"
rule_id: e5f5c693-52d7-4de5-88ae-afbfbce85595
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1129, attack.t1574.001, attack.t1036.005]
---

# Unsigned .node File Loaded

## Description
Detects the loading of unsigned .node files.
Adversaries may abuse a lack of .node integrity checking to execute arbitrary code inside of trusted applications such as Slack.
.node files are native add-ons for Electron-based applications, which are commonly used for desktop applications like Slack, Discord, and Visual Studio Code.
This technique has been observed in the DripLoader malware, which uses unsigned .node files to load malicious native code into Electron applications.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_evernote:
  ImageLoaded|contains: \Evernote\resources\app
  Image|contains:
  - C:\Program Files (x86)\
  - C:\Program Files\
  - \AppData\Local\Programs\
  Image|endswith: \Evernote\Evernote.exe
filter_optional_vscode_core:
  ImageLoaded|contains: \Microsoft VS Code\resources\app\node_modules
  Image|contains: \Microsoft VS Code\Code.exe
filter_optional_vscode_jupyter:
  ImageLoaded|contains: .vscode\extensions\ms-toolsai.jupyter-
  ImageLoaded|endswith:
  - \electron.napi.node
  - \node.napi.glibc.node
  Image|endswith: \Code.exe
selection_node_extension:
  ImageLoaded|endswith: .node
selection_status:
- Signed: 'false'
- SignatureStatus: Unavailable
```

## MITRE ATT&CK
- T1129
- T1574.001
- T1036.005

## False Positives
- VsCode extensions or similar legitimate tools might use unsigned .node files. These should be investigated on a case-by-case basis, and whitelisted if determined to be benign.

## References
- https://www.coreycburton.com/blog/driploader-case-study
- https://github.com/CoreyCBurton/DripLoaderNG
- https://www.electronjs.org/docs/latest/tutorial/native-code-and-electron

## Metadata
- **Author:** Jonathan Beierle (@hullabrian)
- **Date:** 2025-11-22
- **Rule ID:** `e5f5c693-52d7-4de5-88ae-afbfbce85595`
- **Source file:** `windows/image_load/image_load_dll_unsigned_node_load.yml`
