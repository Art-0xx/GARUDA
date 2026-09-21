---
type: detection_rule
title: "Potential LSASS Process Dump Via Procdump"
rule_id: 5afee48e-67dd-4e03-a783-f74259dcf998
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036, attack.t1003.001]
---

# Potential LSASS Process Dump Via Procdump

## Description
Detects potential credential harvesting attempts through LSASS memory dumps using ProcDump.
This rule identifies suspicious command-line patterns that combine memory dump flags (-ma, -mm, -mp) with LSASS-related process markers.
LSASS (Local Security Authority Subsystem Service) contains sensitive authentication data including plaintext passwords, NTLM hashes, and Kerberos tickets in memory.
Attackers commonly dump LSASS memory to extract credentials for lateral movement and privilege escalation.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_flags:
  CommandLine|contains|windash:
  - ' -ma '
  - ' -mm '
  - ' -mp '
selection_process:
  CommandLine|contains:
  - ' ls'
  - ' keyiso'
  - ' samss'
```

## MITRE ATT&CK
- T1036
- T1003.001

## False Positives
- Unlikely, because no one should dump an lsass process memory
- Another tool that uses command line flags similar to ProcDump

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/procdump
- https://research.splunk.com/endpoint/3742ebfe-64c2-11eb-ae93-0242ac130002
- https://x.com/wietze/status/1958302556033065292?s=12

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-10-30
- **Rule ID:** `5afee48e-67dd-4e03-a783-f74259dcf998`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_procdump_lsass.yml`
