---
mitre_data:
  id: T1059.007
  linker_tags:
  - mitre/attack/linker/execution/javascript
  name: JavaScript
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# JavaScript (`T1059.007`)

Adversaries may abuse various implementations of JavaScript for execution. JavaScript (JS) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though JS can be executed in runtime environments outside the browser.[^fn6]

JScript is the Microsoft implementation of the same scripting standard. JScript is interpreted via the Windows Script engine and thus integrated with many components of Windows such as the [Component Object Model](https://attack.mitre.org/techniques/T1559/001) and Internet Explorer HTML Application (HTA) pages.[^fn5][^fn3][^fn4]

JavaScript for Automation (JXA) is a macOS scripting language based on JavaScript, included as part of Apple’s Open Scripting Architecture (OSA), that was introduced in OSX 10.10. Apple’s OSA provides scripting capabilities to control applications, interface with the operating system, and bridge access into the rest of Apple’s internal APIs. As of OSX 10.10, OSA only supports two languages, JXA and [AppleScript](https://attack.mitre.org/techniques/T1059/002). Scripts can be executed via the command line utility <code>osascript</code>, they can be compiled into applications or script files via <code>osacompile</code>, and they can be compiled and executed in memory of other programs by leveraging the OSAKit Framework.[^fn1][^fn8][^fn7][^fn9][^fn2]

Adversaries may abuse various implementations of JavaScript to execute various behaviors. Common uses include hosting malicious scripts on websites as part of a [Drive-by Compromise](https://attack.mitre.org/techniques/T1189) or downloading and executing these script files as secondary payloads. Since these payloads are text-based, it is also very common for adversaries to obfuscate their content as part of [Obfuscated Files or Information](https://attack.mitre.org/techniques/T1027).


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

# Tool(s)

- [[../Tools/evilginx2|evilginx2]]
- [[../Tools/FRP|FRP]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Donut|Donut]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059.007](https://attack.mitre.org/techniques/T1059/007)

[^fn1]: [Apple. (2016, June 13). About Mac Scripting. Retrieved April 14, 2021.](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/index.html)
[^fn2]: [Dominic Chell. (2021, January 1). macOS Post-Exploitation Shenanigans with VSCode Extensions. Retrieved April 20, 2021.](https://www.mdsec.co.uk/2021/01/macos-post-exploitation-shenanigans-with-vscode-extensions/)
[^fn3]: [Microsoft. (2007, August 15). The World of JScript, JavaScript, ECMAScript …. Retrieved June 23, 2020.](https://docs.microsoft.com/archive/blogs/gauravseth/the-world-of-jscript-javascript-ecmascript)
[^fn4]: [Microsoft. (2017, January 18). Windows Script Interfaces. Retrieved June 23, 2020.](https://docs.microsoft.com/scripting/winscript/windows-script-interfaces)
[^fn5]: [Microsoft. (2018, May 31). Translating to JScript. Retrieved June 23, 2020.](https://docs.microsoft.com/windows/win32/com/translating-to-jscript)
[^fn6]: [OpenJS Foundation. (n.d.). Node.js. Retrieved June 23, 2020.](https://nodejs.org/)
[^fn7]: [Phil Stokes. (2019, December 5). macOS Red Team: Calling Apple APIs Without Building Binaries. Retrieved July 17, 2020.](https://www.sentinelone.com/blog/macos-red-team-calling-apple-apis-without-building-binaries/)
[^fn8]: [Pitt, L. (2020, August 6). Persistent JXA. Retrieved April 14, 2021.](https://posts.specterops.io/persistent-jxa-66e1c3cd1cf5)
[^fn9]: [Tony Lambert. (2021, February 18). Clipping Silver Sparrow’s wings: Outing macOS malware before it takes flight. Retrieved April 20, 2021.](https://redcanary.com/blog/clipping-silver-sparrows-wings/)