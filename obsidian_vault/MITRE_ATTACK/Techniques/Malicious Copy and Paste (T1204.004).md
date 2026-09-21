---
mitre_data:
  id: T1204.004
  linker_tags:
  - mitre/attack/linker/execution/malicious_copy_and_paste
  name: Malicious Copy and Paste
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Malicious Copy and Paste (`T1204.004`)

An adversary may rely upon a user copying and pasting code in order to gain execution. Users may be subjected to social engineering to get them to copy and paste code directly into a [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059). One such strategy is "ClickFix," in which adversaries present users with seemingly helpful solutions—such as prompts to fix errors or complete CAPTCHAs—that instead instruct the user to copy and paste malicious code.

Malicious websites, such as those used in [Drive-by Compromise](https://attack.mitre.org/techniques/T1189), may present fake error messages or CAPTCHA prompts that instruct users to open a terminal or the Windows Run Dialog box and execute an arbitrary command. These commands may be obfuscated using encoding or other techniques to conceal malicious intent. Once executed, the adversary will typically be able to establish a foothold on the victim's machine.[^fn5][^fn4][^fn3][^fn2]

Adversaries may also leverage phishing emails for this purpose. When a user attempts to open an attachment, they may be presented with a fake error and offered a malicious command to paste as a solution, consistent with the "ClickFix" strategy.[^fn6][^fn1]

Tricking a user into executing a command themselves may help to bypass email filtering, browser sandboxing, or other mitigations designed to protect users against malicious downloaded files. 


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/User Execution (T1204)|User Execution]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1204.004](https://attack.mitre.org/techniques/T1204/004)

[^fn1]: [AhnLab SEcurity intelligence Center. (2024, May 23). Warning Against Phishing Emails Prompting Execution of Commands via Paste (CTRL+V). Retrieved April 23, 2025.](https://asec.ahnlab.com/en/73952/)
[^fn2]: [AhnLab SEcurity intelligence Center. (2025, January 8). Infostealer LummaC2 Spreading Through Fake CAPTCHA Verification Page. Retrieved April 23, 2025.](https://asec.ahnlab.com/en/85699/)
[^fn3]: [Alex Capraro. (2024, December 17). Using CAPTCHA for Compromise: Hackers Flip the Script. Retrieved March 18, 2025.](https://www.reliaquest.com/blog/using-captcha-for-compromise/)
[^fn4]: [Amaury G., Coline Chavane, Felix Aimé and Sekoia TDR. (2025, March 31). From Contagious to ClickFake Interview: Lazarus leveraging the ClickFix tactic. Retrieved April 1, 2025.](https://blog.sekoia.io/clickfake-interview-campaign-by-lazarus/)
[^fn5]: [CloudSEK TRIAD. (2024, September 19). Unmasking the Danger: Lumma Stealer Malware Exploits Fake CAPTCHA Pages. Retrieved March 18, 2025.](https://www.cloudsek.com/blog/unmasking-the-danger-lumma-stealer-malware-exploits-fake-captcha-pages)
[^fn6]: [Tommy Madjar, Selena Larson and The Proofpoint Threat Research Team. (2024, November 18). Security Brief: ClickFix Social Engineering Technique Floods Threat Landscape. Retrieved March 18, 2025.](https://www.proofpoint.com/us/blog/threat-insight/security-brief-clickfix-social-engineering-technique-floods-threat-landscape)