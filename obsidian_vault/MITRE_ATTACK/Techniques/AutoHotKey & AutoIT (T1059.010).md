---
mitre_data:
  id: T1059.010
  linker_tags:
  - mitre/attack/linker/execution/autohotkey_autoit
  name: AutoHotKey & AutoIT
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# AutoHotKey & AutoIT (`T1059.010`)

Adversaries may execute commands and perform malicious tasks using AutoIT and AutoHotKey automation scripts. AutoIT and AutoHotkey (AHK) are scripting languages that enable users to automate Windows tasks. These automation scripts can be used to perform a wide variety of actions, such as clicking on buttons, entering text, and opening and closing programs.[^fn2][^fn1]

Adversaries may use AHK (`.ahk`) and AutoIT (`.au3`) scripts to execute malicious code on a victim's system. For example, adversaries have used for AHK to execute payloads and other modular malware such as keyloggers. Adversaries have also used custom AHK files containing embedded malware as [Phishing](https://attack.mitre.org/techniques/T1566) payloads.[^fn3]

These scripts may also be compiled into self-contained executable payloads (`.exe`).[^fn2][^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059.010](https://attack.mitre.org/techniques/T1059/010)

[^fn1]: [AutoHotkey Foundation LLC. (n.d.). Using the Program. Retrieved March 29, 2024.](https://www.autohotkey.com/docs/v1/Program.htm)
[^fn2]: [AutoIT. (n.d.). Running Scripts. Retrieved March 29, 2024.](https://www.autoitscript.com/autoit3/docs/intro/running.htm)
[^fn3]: [Splunk Threat Research Team. (2024, January 17). Enter The Gates: An Analysis of the DarkGate AutoIt Loader. Retrieved March 29, 2024.](https://www.splunk.com/en_us/blog/security/enter-the-gates-an-analysis-of-the-darkgate-autoit-loader.html)