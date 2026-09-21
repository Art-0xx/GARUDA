---
mitre_data:
  id: T1218.015
  linker_tags:
  - mitre/attack/linker/stealth/electron_applications
  name: Electron Applications
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Electron Applications (`T1218.015`)

Adversaries may abuse components of the Electron framework to execute malicious code. The Electron framework hosts many common applications such as Signal, Slack, and Microsoft Teams.[^fn5] Originally developed by GitHub, Electron is a cross-platform desktop application development framework that employs web technologies like JavaScript, HTML, and CSS.[^fn1] The Chromium engine is used to display web content and Node.js runs the backend code.[^fn4]

Due to the functional mechanics of Electron (such as allowing apps to run arbitrary commands), adversaries may also be able to perform malicious functions in the background potentially disguised as legitimate tools within the framework.[^fn4] For example, the abuse of `teams.exe` and `chrome.exe` may allow adversaries to execute malicious commands as child processes of the legitimate application (e.g., `chrome.exe --disable-gpu-sandbox --gpu-launcher="C:\Windows\system32\cmd.exe /c calc.exe`).[^fn3]

Adversaries may also execute malicious content by planting malicious [JavaScript](https://attack.mitre.org/techniques/T1059/007) within Electron applications.[^fn2]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.015](https://attack.mitre.org/techniques/T1218/015)

[^fn1]: [Alanna Titterington. (2023, September 14). Security of Electron-based desktop applications. Retrieved March 7, 2024.](https://www.kaspersky.com/blog/electron-framework-security-issues/49035/)
[^fn2]: [ElectronJS.org. (n.d.). Retrieved March 7, 2024.](https://www.electronjs.org/docs/latest/tutorial/using-native-node-modules)
[^fn3]: [Kosayev, U. (2023, June 15). One Electron to Rule Them All. Retrieved March 7, 2024.](https://medium.com/@MalFuzzer/one-electron-to-rule-them-all-dc2e9b263daf)
[^fn4]: [TOM ABAI. (2023, August 10). There’s a New Stealer Variant in Town, and It’s Using Electron to Stay Fully Undetected. Retrieved March 7, 2024.](https://www.mend.io/blog/theres-a-new-stealer-variant-in-town-and-its-using-electron-to-stay-fully-undetected/)
[^fn5]: [Trend Micro. (2023, June 6). Abusing Electronbased applications in targeted attacks. Retrieved March 7, 2024.](https://www.first.org/resources/papers/conf2023/FIRSTCON23-TLP-CLEAR-Horejsi-Abusing-Electron-Based-Applications-in-Targeted-Attacks.pdf)