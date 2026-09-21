---
type: campaign
scenario_id: 106
tactic: Defense Evasion
technique: "T1218.005: Mshta"
technique_id: T1218.005
tags: [campaign, lotl, defense_evasion]
---

# Using mshta.exe to execute obfuscated VBScript payload.

## Threat Description
Using mshta.exe to execute obfuscated VBScript payload.

## Attack Command
```
mshta vbscript:Execute("$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) = CreateObject(\"WScript.Shell\").Run(\"powershell -c I$(echo malicious | base64 -w0)\"):window.close")(window.close)
```

## Detection Logic
Monitor mshta VBScript: `wmic process where name='mshta.exe' get commandline | findstr vbscript`; YARA rule: `rule MshtaVBS { strings: $a = /mshta.*vbscript.*Execute/ nocase; condition: $a }`

## Mitigation
Restrict mshta: `icacls %windir%\System32\mshta.exe /deny Everyone:RX`; Disable VBScript execution: AppLocker.

## AI Training Prompt
Train AI to detect mshta VBScript execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.005: https://attack.mitre.org/techniques/T1218/005/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
