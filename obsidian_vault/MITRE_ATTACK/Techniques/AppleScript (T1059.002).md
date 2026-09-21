---
mitre_data:
  id: T1059.002
  linker_tags:
  - mitre/attack/linker/execution/applescript
  name: AppleScript
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# AppleScript (`T1059.002`)

Adversaries may abuse AppleScript for execution. AppleScript is a macOS scripting language designed to control applications and parts of the OS via inter-application messages called AppleEvents.[^fn1] These AppleEvent messages can be sent independently or easily scripted with AppleScript. These events can locate open windows, send keystrokes, and interact with almost any open application locally or remotely.

Scripts can be run from the command-line via <code>osascript /path/to/script</code> or <code>osascript -e "script here"</code>. Aside from the command line, scripts can be executed in numerous ways including Mail rules, Calendar.app alarms, and Automator workflows. AppleScripts can also be executed as plain text shell scripts by adding <code>#!/usr/bin/osascript</code> to the start of the script file.[^fn3]

AppleScripts do not need to call <code>osascript</code> to execute. However, they may be executed from within mach-O binaries by using the macOS [Native API](https://attack.mitre.org/techniques/T1106)s <code>NSAppleScript</code> or <code>OSAScript</code>, both of which execute code independent of the <code>/usr/bin/osascript</code> command line utility.

Adversaries may abuse AppleScript to execute various behaviors, such as interacting with an open SSH connection, moving to remote machines, and even presenting users with fake dialog boxes. These events cannot start applications remotely (they can start them locally), but they can interact with applications if they're already running remotely. On macOS 10.10 Yosemite and higher, AppleScript has the ability to execute [Native API](https://attack.mitre.org/techniques/T1106)s, which otherwise would require compilation and execution in a mach-O binary file format.[^fn2] Since this is a scripting language, it can be used to launch more common techniques as well such as a reverse shell via [Python](https://attack.mitre.org/techniques/T1059/006).[^fn4]


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059.002](https://attack.mitre.org/techniques/T1059/002)

[^fn1]: [Apple. (2016, January 25). Introduction to AppleScript Language Guide. Retrieved March 28, 2020.](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html)
[^fn2]: [Phil Stokes. (2019, December 5). macOS Red Team: Calling Apple APIs Without Building Binaries. Retrieved July 17, 2020.](https://www.sentinelone.com/blog/macos-red-team-calling-apple-apis-without-building-binaries/)
[^fn3]: [Phil Stokes. (2020, March 16). How Offensive Actors Use AppleScript For Attacking macOS. Retrieved July 17, 2020.](https://www.sentinelone.com/blog/how-offensive-actors-use-applescript-for-attacking-macos/)
[^fn4]: [Yerko Grbic. (2017, February 14). Macro Malware Targets Macs. Retrieved July 8, 2017.](https://www.mcafee.com/blogs/other-blogs/mcafee-labs/macro-malware-targets-macs/)