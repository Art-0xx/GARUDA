---
type: campaign
scenario_id: 21
tactic: Execution
technique: "T1059.006: Python"
technique_id: T1059.006
tags: [campaign, lotl, execution]
---

# Using Python to execute obfuscated payload via os.system.

## Threat Description
Using Python to execute obfuscated payload via os.system.

## Attack Command
```
python -c "import os; os.system('powershell -c I' + ''.join(chr(97 + (i % 26)) for i in range(50)) + '$(echo payload | base64 -w0)')"
```

## Detection Logic
Monitor python execution: `wmic process where name='python.exe' get commandline`; YARA rule: `rule PythonExec { strings: $a = /python.*os.system.*powershell/ nocase; condition: $a }`

## Mitigation
Restrict Python: `icacls %windir%\System32\python.exe /deny Everyone:RX`; Enable script execution logging.

## AI Training Prompt
Train AI to detect Python-based payload execution and suggest access controls.

## References
- MITRE ATT&CK T1059.006: https://attack.mitre.org/techniques/T1059/006/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
