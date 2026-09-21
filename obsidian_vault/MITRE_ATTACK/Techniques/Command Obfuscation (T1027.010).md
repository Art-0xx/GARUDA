---
mitre_data:
  id: T1027.010
  linker_tags:
  - mitre/attack/linker/stealth/command_obfuscation
  name: Command Obfuscation
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Command Obfuscation (`T1027.010`)

Adversaries may obfuscate content during command execution to impede detection. Command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. This type of obfuscation can be included within commands executed by delivered payloads (e.g., [Phishing](https://attack.mitre.org/techniques/T1566) and [Drive-by Compromise](https://attack.mitre.org/techniques/T1189)) or interactively via [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059).[^fn6][^fn5]

For example, adversaries may abuse syntax that utilizes various symbols and escape characters (such as spacing,  `^`, `+`. `$`, and `%`) to make commands difficult to analyze while maintaining the same intended functionality.[^fn9] Many languages support built-in obfuscation in the form of base64 or URL encoding.[^fn8] Adversaries may also manually implement command obfuscation via string splitting (`“Wor”+“d.Application”`), order and casing of characters (`rev <<<'dwssap/cte/ tac'`), globing (`mkdir -p '/tmp/:&$NiA'`), as well as various tricks involving passing strings through tokens/environment variables/input streams.[^fn7][^fn4]

Adversaries may also use tricks such as directory traversals to obfuscate references to the binary being invoked by a command (`C:\voi\pcw\..\..\Windows\tei\qs\k\..\..\..\system32\erool\..\wbem\wg\je\..\..\wmic.exe shadowcopy delete`).[^fn1]

Tools such as <code>Invoke-Obfuscation</code> and <code>Invoke-DOSfucation</code> have also been used to obfuscate commands.[^fn3][^fn2]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tool(s)

- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.010](https://attack.mitre.org/techniques/T1027/010)

[^fn1]: [Ackroyd, R. (2023, March 24). Twitter. Retrieved September 12, 2024.](https://x.com/rfackroyd/status/1639136000755765254)
[^fn2]: [Bohannon, D. (2016, September 24). Invoke-Obfuscation. Retrieved March 17, 2023.](https://github.com/danielbohannon/Invoke-Obfuscation)
[^fn3]: [Bohannon, D. (2018, March 19). Invoke-DOSfuscation. Retrieved March 17, 2023.](https://github.com/danielbohannon/Invoke-DOSfuscation)
[^fn4]: [Bohannon, D. & Carr N. (2017, June 30). Obfuscation in the Wild: Targeted Attackers Lead the Way in Evasion Techniques. Retrieved February 12, 2018.](https://web.archive.org/web/20170923102302/https://www.fireeye.com/blog/threat-research/2017/06/obfuscation-in-the-wild.html)
[^fn5]: [Bromiley, M. (2016, December 27). Malware Monday: VBScript and VBE Files. Retrieved March 17, 2023.](https://bromiley.medium.com/malware-monday-vbscript-and-vbe-files-292252c1a16)
[^fn6]: [Katz, O. (2020, October 26). Catch Me if You Can—JavaScript Obfuscation. Retrieved March 17, 2023.](https://www.akamai.com/blog/security/catch-me-if-you-can-javascript-obfuscation)
[^fn7]: [LeFevre, A. (n.d.). Bashfuscator Command Obfuscators. Retrieved March 17, 2023.](https://bashfuscator.readthedocs.io/en/latest/Mutators/command_obfuscators/index.html)
[^fn8]: [Microsoft. (2023, February 8). about_PowerShell_exe: EncodedCommand. Retrieved March 17, 2023.](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_powershell_exe?view=powershell-5.1#-encodedcommand-base64encodedcommand)
[^fn9]: [Red Canary. (n.d.). 2022 Threat Detection Report: PowerShell. Retrieved March 17, 2023.](https://redcanary.com/threat-detection-report/techniques/powershell/)