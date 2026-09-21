---
type: detection_rule
title: "Suspicious PowerShell Parameter Substring"
rule_id: 36210e0d-5b19-485d-a087-c096088885f0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Parameter Substring

## Description
Detects suspicious PowerShell invocation with a parameter substring

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - ' -windowstyle h '
  - ' -windowstyl h'
  - ' -windowsty h'
  - ' -windowst h'
  - ' -windows h'
  - ' -windo h'
  - ' -wind h'
  - ' -win h'
  - ' -wi h'
  - ' -win h '
  - ' -win hi '
  - ' -win hid '
  - ' -win hidd '
  - ' -win hidde '
  - ' -NoPr '
  - ' -NoPro '
  - ' -NoProf '
  - ' -NoProfi '
  - ' -NoProfil '
  - ' -nonin '
  - ' -nonint '
  - ' -noninte '
  - ' -noninter '
  - ' -nonintera '
  - ' -noninterac '
  - ' -noninteract '
  - ' -noninteracti '
  - ' -noninteractiv '
  - ' -ec '
  - ' -encodedComman '
  - ' -encodedComma '
  - ' -encodedComm '
  - ' -encodedCom '
  - ' -encodedCo '
  - ' -encodedC '
  - ' -encoded '
  - ' -encode '
  - ' -encod '
  - ' -enco '
  - ' -en '
  - ' -executionpolic '
  - ' -executionpoli '
  - ' -executionpol '
  - ' -executionpo '
  - ' -executionp '
  - ' -execution bypass'
  - ' -executio bypass'
  - ' -executi bypass'
  - ' -execut bypass'
  - ' -execu bypass'
  - ' -exec bypass'
  - ' -exe bypass'
  - ' -ex bypass'
  - ' -ep bypass'
  - ' /windowstyle h '
  - ' /windowstyl h'
  - ' /windowsty h'
  - ' /windowst h'
  - ' /windows h'
  - ' /windo h'
  - ' /wind h'
  - ' /win h'
  - ' /wi h'
  - ' /win h '
  - ' /win hi '
  - ' /win hid '
  - ' /win hidd '
  - ' /win hidde '
  - ' /NoPr '
  - ' /NoPro '
  - ' /NoProf '
  - ' /NoProfi '
  - ' /NoProfil '
  - ' /nonin '
  - ' /nonint '
  - ' /noninte '
  - ' /noninter '
  - ' /nonintera '
  - ' /noninterac '
  - ' /noninteract '
  - ' /noninteracti '
  - ' /noninteractiv '
  - ' /ec '
  - ' /encodedComman '
  - ' /encodedComma '
  - ' /encodedComm '
  - ' /encodedCom '
  - ' /encodedCo '
  - ' /encodedC '
  - ' /encoded '
  - ' /encode '
  - ' /encod '
  - ' /enco '
  - ' /en '
  - ' /executionpolic '
  - ' /executionpoli '
  - ' /executionpol '
  - ' /executionpo '
  - ' /executionp '
  - ' /execution bypass'
  - ' /executio bypass'
  - ' /executi bypass'
  - ' /execut bypass'
  - ' /execu bypass'
  - ' /exec bypass'
  - ' /exe bypass'
  - ' /ex bypass'
  - ' /ep bypass'
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- http://www.danielbohannon.com/blog-1/2017/3/12/powershell-execution-argument-obfuscation-how-it-can-make-detection-easier

## Metadata
- **Author:** Florian Roth (Nextron Systems), Daniel Bohannon (idea), Roberto Rodriguez (Fix)
- **Date:** 2019-01-16
- **Rule ID:** `36210e0d-5b19-485d-a087-c096088885f0`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_susp_parameter_variation.yml`
