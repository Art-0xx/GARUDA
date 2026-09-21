---
type: campaign
scenario_id: 39
tactic: Execution
technique: "T1059.007: JavaScript"
technique_id: T1059.007
tags: [campaign, lotl, execution]
---

# Executing JavaScript payload via wscript with obfuscated JScript.

## Threat Description
Executing JavaScript payload via wscript with obfuscated JScript.

## Attack Command
```
wscript //E:JScript $(echo script$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).js) "eval(atob('$(echo 'malicious' | base64 -w0)'))"
```

## Detection Logic
Monitor wscript JScript: `wmic process where name='wscript.exe' get commandline | findstr JScript`; YARA rule: `rule JScriptExec { strings: $a = /wscript.*eval.*atob/ nocase; condition: $a }`

## Mitigation
Disable JScript: `reg add HKLM\Software\Microsoft\Windows\Script Host\Settings /v JScript /t REG_DWORD /d 0`; Restrict wscript: AppLocker.

## AI Training Prompt
Train AI to detect JScript execution and suggest script host restrictions.

## References
- MITRE ATT&CK T1059.007: https://attack.mitre.org/techniques/T1059/007/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
