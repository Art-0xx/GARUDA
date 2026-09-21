---
mitre_data:
  id: T1059.005
  linker_tags:
  - mitre/attack/linker/execution/visual_basic
  name: Visual Basic
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Visual Basic (`T1059.005`)

Adversaries may abuse Visual Basic (VB) for execution. VB is a programming language created by Microsoft with interoperability with many Windows technologies such as [Component Object Model](https://attack.mitre.org/techniques/T1559/001) and the [Native API](https://attack.mitre.org/techniques/T1106) through the Windows API. Although tagged as legacy with no planned future evolutions, VB is integrated and supported in the .NET Framework and cross-platform .NET Core.[^fn1][^fn5]

Derivative languages based on VB have also been created, such as Visual Basic for Applications (VBA) and VBScript. VBA is an event-driven programming language built into Microsoft Office, as well as several third-party applications.[^fn4][^fn6] VBA enables documents to contain macros used to automate the execution of tasks and other functionality on the host. VBScript is a default scripting language on Windows hosts and can also be used in place of [JavaScript](https://attack.mitre.org/techniques/T1059/007) on HTML Application (HTA) webpages served to Internet Explorer (though most modern browsers do not come with VBScript support).[^fn3]

Adversaries may use VB payloads to execute malicious commands. Common malicious usage includes automating execution of behaviors with VBScript or embedding VBA content into [Spearphishing Attachment](https://attack.mitre.org/techniques/T1566/001) payloads (which may also involve [Mark-of-the-Web Bypass](https://attack.mitre.org/techniques/T1553/005) to enable execution).[^fn2]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

# Tool(s)

- [[../Tools/Remcos|Remcos]]
- [[../Tools/Donut|Donut]]
- [[../Tools/Koadic|Koadic]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059.005](https://attack.mitre.org/techniques/T1059/005)

[^fn1]: [.NET Team. (2020, March 11). Visual Basic support planned for .NET 5.0. Retrieved June 23, 2020.](https://devblogs.microsoft.com/vbteam/visual-basic-support-planned-for-net-5-0/)
[^fn2]: [Kellie Eickmeyer. (2022, February 7). Helping users stay safe: Blocking internet macros by default in Office. Retrieved February 7, 2022.](https://techcommunity.microsoft.com/t5/microsoft-365-blog/helping-users-stay-safe-blocking-internet-macros-by-default-in/ba-p/3071805)
[^fn3]: [Microsoft. (2011, April 19). What Is VBScript?. Retrieved March 28, 2020.](https://docs.microsoft.com/previous-versions//1kw29xwf(v=vs.85))
[^fn4]: [Microsoft. (2019, June 11). Office VBA Reference. Retrieved June 23, 2020.](https://docs.microsoft.com/office/vba/api/overview/)
[^fn5]: [Microsoft. (n.d.). Visual Basic documentation. Retrieved June 23, 2020.](https://docs.microsoft.com/dotnet/visual-basic/)
[^fn6]: [Wikipedia. (n.d.). Visual Basic for Applications. Retrieved August 13, 2020.](https://en.wikipedia.org/wiki/Visual_Basic_for_Applications)