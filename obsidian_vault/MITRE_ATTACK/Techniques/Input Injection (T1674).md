---
mitre_data:
  id: T1674
  linker_tags:
  - mitre/attack/linker/execution/input_injection
  name: Input Injection
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Input Injection (`T1674`)

Adversaries may simulate keystrokes on a victim’s computer by various means to perform any type of action on behalf of the user, such as launching the command interpreter using keyboard shortcuts,  typing an inline script to be executed, or interacting directly with a GUI-based application.  These actions can be preprogrammed into adversary tooling or executed through physical devices such as Human Interface Devices (HIDs).

For example, adversaries have used tooling that monitors the Windows message loop to detect when a user visits bank-specific URLs. If detected, the tool then simulates keystrokes to open the developer console or select the address bar, pastes malicious JavaScript from the clipboard, and executes it - enabling manipulation of content within the browser, such as replacing bank account numbers during transactions.[^fn1][^fn3]

Adversaries have also used malicious USB devices to emulate keystrokes that launch PowerShell, leading to the download and execution of malware from adversary-controlled servers.[^fn2]


# Platform(s)

- Windows
- macOS
- Linux

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1674](https://attack.mitre.org/techniques/T1674)

[^fn1]: [Catalin Cimpanu. (2018, May 25). BackSwap Banking Trojan Uses Never-Before-Seen Techniques. Retrieved March 27, 2025.](https://www.bleepingcomputer.com/news/security/backswap-banking-trojan-uses-never-before-seen-techniques/)
[^fn2]: [Ionut Ilascu. (2020, March 27). FBI: Hackers Sending Malicious USB Drives & Teddy Bears via USPS. Retrieved March 27, 2025.](https://www.bleepingcomputer.com/news/security/fbi-hackers-sending-malicious-usb-drives-and-teddy-bears-via-usps/)
[^fn3]: [Michal Poslušný. (2018, May 25). BackSwap malware finds innovative ways to empty bank accounts. Retrieved March 27, 2025.](https://www.welivesecurity.com/2018/05/25/backswap-malware-empty-bank-accounts/)