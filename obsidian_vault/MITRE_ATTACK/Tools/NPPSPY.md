---
tags:
  - mitre/attack/tool
---

# NPPSPY (`S1131`)

NPPSPY is an implementation of a theoretical mechanism first presented in 2004 for capturing credentials submitted to a Windows system via a rogue Network Provider API item. NPPSPY captures credentials following submission and writes them to a file on the victim system for follow-on exfiltration.[^fn1][^fn2]



# Platform(s)

- Windows

# Techniques Used

## Impersonation

[NPPSPY](https://attack.mitre.org/software/S1131) creates a network listener using the misspelled label <code>logincontroll</code> recorded to the Registry key <code>HKLM\\SYSTEM\\CurrentControlSet\\Control\\NetworkProvider\\Order</code>.[\[Huntress NPPSPY 2022\]](https://www.huntress.com/blog/cleartext-shenanigans-gifting-user-passwords-to-adversaries-with-nppspy)

- *Technique:* [[../Techniques/Impersonation (T1684.001)|Impersonation]]

## Modify Registry

[NPPSPY](https://attack.mitre.org/software/S1131) modifies the Registry to record the malicious listener for output from the Winlogon process.[\[Huntress NPPSPY 2022\]](https://www.huntress.com/blog/cleartext-shenanigans-gifting-user-passwords-to-adversaries-with-nppspy)

- *Technique:* [[../Techniques/Modify Registry (T1112)|Modify Registry]]

## Data from Local System

[NPPSPY](https://attack.mitre.org/software/S1131) records data entered from the local system logon at Winlogon to capture credentials in cleartext.[\[Huntress NPPSPY 2022\]](https://www.huntress.com/blog/cleartext-shenanigans-gifting-user-passwords-to-adversaries-with-nppspy)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]

## Adversary-in-the-Middle

[NPPSPY](https://attack.mitre.org/software/S1131) opens a new network listener for the <code>mpnotify.exe</code> process that is typically contacted by the Winlogon process in Windows. A new, alternative RPC channel is set up with a malicious DLL recording plaintext credentials entered into Winlogon, effectively intercepting and redirecting the logon information.[\[Huntress NPPSPY 2022\]](https://www.huntress.com/blog/cleartext-shenanigans-gifting-user-passwords-to-adversaries-with-nppspy)

- *Technique:* [[../Techniques/Adversary-in-the-Middle (T1557)|Adversary-in-the-Middle]]

## Unsecured Credentials

[NPPSPY](https://attack.mitre.org/software/S1131) captures credentials by recording them through an alternative network listener registered to the <code>mpnotify.exe</code> process, allowing for cleartext recording of logon information.[\[Huntress NPPSPY 2022\]](https://www.huntress.com/blog/cleartext-shenanigans-gifting-user-passwords-to-adversaries-with-nppspy)

- *Technique:* [[../Techniques/Unsecured Credentials (T1552)|Unsecured Credentials]]

## Input Capture

[NPPSPY](https://attack.mitre.org/software/S1131) captures user input into the Winlogon process by redirecting RPC traffic from legitimate listening DLLs within the operating system to a newly registered malicious item that allows for recording logon information in cleartext.[\[Huntress NPPSPY 2022\]](https://www.huntress.com/blog/cleartext-shenanigans-gifting-user-passwords-to-adversaries-with-nppspy)

- *Technique:* [[../Techniques/Input Capture (T1056)|Input Capture]]

## Automated Collection

[NPPSPY](https://attack.mitre.org/software/S1131) collection is automatically recorded to a specified file on the victim machine.[\[Huntress NPPSPY 2022\]](https://www.huntress.com/blog/cleartext-shenanigans-gifting-user-passwords-to-adversaries-with-nppspy)

- *Technique:* [[../Techniques/Automated Collection (T1119)|Automated Collection]]


# External References(s)

- [S1131](https://attack.mitre.org/software/S1131)

[^fn1]: [Dray Agha. (2022, August 16). Cleartext Shenanigans: Gifting User Passwords to Adversaries With NPPSPY. Retrieved May 17, 2024.](https://www.huntress.com/blog/cleartext-shenanigans-gifting-user-passwords-to-adversaries-with-nppspy)
[^fn2]: [Sergey Polak. (2004, August). Capturing Windows Passwords using the Network Provider API. Retrieved May 17, 2024.](https://www.blackhat.com/presentations/win-usa-04/bh-win-04-polak/bh-win-04-polak2.pdf)