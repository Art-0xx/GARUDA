---
tags: 
  - mitre/attack/data_component
---

# Logon Session Creation (`DC0067`)

The successful establishment of a new user session following a successful authentication attempt. This typically signifies that a user has provided valid credentials or authentication tokens, and the system has initiated a session associated with that user account. This data is crucial for tracking authentication events and identifying potential unauthorized access. Examples: 

- Windows Systems
    - Event ID: 4624
        - Logon Type: 2 (Interactive) or 10 (Remote Interactive via RDP).
        - Account Name: JohnDoe
        - Source Network Address: 192.168.1.100
        - Authentication Package: NTLM
- Linux Systems
    - /var/log/utmp or /var/log/wtmp:
        - Log format: login user [tty] from [source_ip]
        - User: jane
        - IP: 10.0.0.5
        - Timestamp: 2024-12-28 08:30:00
- macOS Systems
    - /var/log/asl.log or unified logging framework:
        - Log: com.apple.securityd: Authentication succeeded for user 'admin'
- Cloud Environments
    - Azure Sign-In Logs:
        - Activity: Sign-in successful
        - Client App: Browser
        - Location: Unknown (Country: X)
- Google Workspace
    - Activity: Login
        - Event Type: successful_login
        - Source IP: 203.0.113.55





