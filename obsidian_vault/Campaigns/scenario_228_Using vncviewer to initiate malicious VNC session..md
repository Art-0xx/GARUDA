---
type: campaign
scenario_id: 228
tactic: Lateral Movement
technique: "T1021.005: Remote Services: VNC"
technique_id: T1021.005
tags: [campaign, lotl, lateral_movement]
---

# Using vncviewer to initiate malicious VNC session.

## Threat Description
Using vncviewer to initiate malicious VNC session.

## Attack Command
```
vncviewer $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com::$(shuf -i 1000-65535 -n 1) -passwd $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor vncviewer: `wmic process where name='vncviewer.exe' get commandline | findstr passwd`; Monitor VNC traffic: `netstat -anp | grep :5900`.

## Mitigation
Restrict vncviewer: `icacls %programfiles%\TightVNC\vncviewer.exe /deny Everyone:RX`; Block VNC: `netsh advfirewall firewall add rule name='Block VNC' dir=out action=block protocol=TCP remoteport=5900`.

## AI Training Prompt
Train AI to detect vncviewer abuse and suggest VNC restrictions.

## References
- MITRE ATT&CK T1021.005: https://attack.mitre.org/techniques/T1021/005/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
