---
mitre_data:
  id: T1564.003
  linker_tags:
  - mitre/attack/linker/stealth/hidden_window
  name: Hidden Window
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Hidden Window (`T1564.003`)

Adversaries may use hidden windows to conceal malicious activity from the plain sight of users. In some cases, windows that would typically be displayed when an application carries out an operation can be hidden. This may be utilized by system administrators to avoid disrupting user work environments when carrying out administrative tasks. 

Adversaries may abuse these functionalities to hide otherwise visible windows from users so as not to alert the user to adversary activity on the system.[^fn7]

On macOS, the configurations for how applications run are listed in property list (plist) files. One of the tags in these files can be <code>apple.awt.UIElement</code>, which allows for Java applications to prevent the application's icon from appearing in the Dock. A common use for this is when applications run in the system tray, but don't also want to show up in the Dock.

Similarly, on Windows there are a variety of features in scripting languages, such as [PowerShell](https://attack.mitre.org/techniques/T1059/001), Jscript, and [Visual Basic](https://attack.mitre.org/techniques/T1059/005) to make windows hidden. One example of this is <code>powershell.exe -WindowStyle Hidden</code>.[^fn8]

The Windows Registry can also be edited to hide application windows from the current user. For example, by setting the `WindowPosition` subkey in the `HKEY_CURRENT_USER\Console\%SystemRoot%_System32_WindowsPowerShell_v1.0_PowerShell.exe` Registry key to a maximum value, PowerShell windows will open off screen and be hidden.[^fn1]

In addition, Windows supports the `CreateDesktop()` API that can create a hidden desktop window with its own corresponding <code>explorer.exe</code> process.[^fn4][^fn5]  All applications running on the hidden desktop window, such as a hidden VNC (hVNC) session,[^fn4] will be invisible to other desktops windows.

Adversaries may also leverage cmd.exe[^fn2] as a parent process, and then utilize a LOLBin, such as DeviceCredentialDeployment.exe,[^fn3][^fn6] to hide windows.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Hide Artifacts (T1564)|Hide Artifacts]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/MCMD|MCMD]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1564.003](https://attack.mitre.org/techniques/T1564/003)

[^fn1]: [Cantoris. (2016, July 22). PowerShell Malware. Retrieved December 12, 2024.](https://cantoriscomputing.wordpress.com/2016/07/22/powershell-malware/)
[^fn2]: [Cybereason Security Services Team. (n.d.). Behind Closed Doors: The Rise of Hidden Malicious Remote Access. Retrieved July 22, 2025.](https://www.cybereason.com/blog/behind-closed-doors-the-rise-of-hidden-malicious-remote-access)
[^fn3]: [Elliot Killick. (n.d.). /DeviceCredentialDeployment.exe. Retrieved July 22, 2025.](https://lolbas-project.github.io/lolbas/Binaries/DeviceCredentialDeployment/)
[^fn4]: [Hutchins, Marcus. (2015, September 13). Hidden VNC for Beginners. Retrieved November 28, 2023.](https://www.malwaretech.com/2015/09/hidden-vnc-for-beginners.html)
[^fn5]: [Keshet, Lior. Kessem, Limor. (2017, January 25). Anatomy of an hVNC Attack. Retrieved November 28, 2023.](https://securityintelligence.com/anatomy-of-an-hvnc-attack/)
[^fn6]: [Seongsu Park. (2022, December 27). BlueNoroff introduces new methods bypassing MoTW. Retrieved July 22, 2025.](https://securelist.com/bluenoroff-methods-bypass-motw/108383/)
[^fn7]: [Thomas Reed. (2017, January 18). New Mac backdoor using antiquated code. Retrieved July 5, 2017.](https://blog.malwarebytes.com/threat-analysis/2017/01/new-mac-backdoor-using-antiquated-code/)
[^fn8]: [Wheeler, S. et al.. (2019, May 1). About PowerShell.exe. Retrieved October 11, 2019.](https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Core/About/about_PowerShell_exe?view=powershell-5.1)