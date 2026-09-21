---
type: detection_rule
title: "Suspicious Obfuscated PowerShell Code"
rule_id: 8d01b53f-456f-48ee-90f6-bc28e67d4e35
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious Obfuscated PowerShell Code

## Description
Detects suspicious UTF16 and base64 encoded and often obfuscated PowerShell code often used in command lines

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
  - IAAtAGIAeABvAHIAIAAwAHgA
  - AALQBiAHgAbwByACAAMAB4A
  - gAC0AYgB4AG8AcgAgADAAeA
  - AC4ASQBuAHYAbwBrAGUAKAApACAAfAAg
  - AuAEkAbgB2AG8AawBlACgAKQAgAHwAI
  - ALgBJAG4AdgBvAGsAZQAoACkAIAB8AC
  - AHsAMQB9AHsAMAB9ACIAIAAtAGYAI
  - B7ADEAfQB7ADAAfQAiACAALQBmAC
  - AewAxAH0AewAwAH0AIgAgAC0AZgAg
  - AHsAMAB9AHsAMwB9ACIAIAAtAGYAI
  - B7ADAAfQB7ADMAfQAiACAALQBmAC
  - AewAwAH0AewAzAH0AIgAgAC0AZgAg
  - AHsAMgB9AHsAMAB9ACIAIAAtAGYAI
  - B7ADIAfQB7ADAAfQAiACAALQBmAC
  - AewAyAH0AewAwAH0AIgAgAC0AZgAg
  - AHsAMQB9AHsAMAB9ACcAIAAtAGYAI
  - B7ADEAfQB7ADAAfQAnACAALQBmAC
  - AewAxAH0AewAwAH0AJwAgAC0AZgAg
  - AHsAMAB9AHsAMwB9ACcAIAAtAGYAI
  - B7ADAAfQB7ADMAfQAnACAALQBmAC
  - AewAwAH0AewAzAH0AJwAgAC0AZgAg
  - AHsAMgB9AHsAMAB9ACcAIAAtAGYAI
  - B7ADIAfQB7ADAAfQAnACAALQBmAC
  - AewAyAH0AewAwAH0AJwAgAC0AZgAg
```

## False Positives
- Unknown

## References
- https://app.any.run/tasks/fcadca91-3580-4ede-aff4-4d2bf809bf99/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-07-11
- **Rule ID:** `8d01b53f-456f-48ee-90f6-bc28e67d4e35`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_base64_encoded_obfusc.yml`
