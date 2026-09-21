---
tags: 
  - mitre/attack/data_component
---

# Host Status (`DC0018`)

Logging, messaging, and other artifacts that highlight the health and operational state of host-based security sensors, such as Endpoint Detection and Response (EDR) agents, antivirus software, logging services, and system monitoring tools. Monitoring sensor health is essential for detecting misconfigurations, sensor failures, tampering, or deliberate security control evasion by adversaries.

*Data Collection Measures:*

- Windows Event Logs:
    - Event ID 1074 (System Shutdown): Detects unexpected system reboots/shutdowns.
    - Event ID 6006 (Event Log Stopped): Logs when Windows event logging is stopped.
    - Event ID 16 (Sysmon): Detects configuration state changes that may indicate log tampering.
    - Event ID 12 (Windows Defender Status Change) – Detects changes in Windows Defender state.
- Linux/macOS Monitoring:
    - `/var/log/syslog`, `/var/log/auth.log`, `/var/log/kern.log`
    - Journald (journalctl) for kernel and system alerts.
- Endpoint Detection and Response (EDR) Tools:
    - Monitor agent health status, detect sensor tampering, and alert on missing telemetry.
- Mobile Threat Intelligence Logs:
    - Samsung Knox, SafetyNet, iOS Secure Enclave provide sensor health status for mobile endpoints.





