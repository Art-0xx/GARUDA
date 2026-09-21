---
tags:
  - mitre/attack/tool
---

# Donut (`S0695`)

[Donut](https://attack.mitre.org/software/S0695) is an open source framework used to generate position-independent shellcode.[^fn3][^fn2] [Donut](https://attack.mitre.org/software/S0695) generated code has been used by multiple threat actors to inject and load malicious payloads into memory.[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Indicator Removal

[Donut](https://attack.mitre.org/software/S0695) can erase file references to payloads in-memory after being reflectively loaded and executed.[\[Donut Github\]](https://github.com/TheWover/donut)

- *Technique:* [[../Techniques/Indicator Removal (T1070)|Indicator Removal]]

## Python

[Donut](https://attack.mitre.org/software/S0695) can generate shellcode outputs that execute via Python.[\[Donut Github\]](https://github.com/TheWover/donut)	

- *Technique:* [[../Techniques/Python (T1059.006)|Python]]

## Process Injection

[Donut](https://attack.mitre.org/software/S0695) includes a subproject <code>DonutTest</code> to inject shellcode into a target process.[\[Donut Github\]](https://github.com/TheWover/donut)	

- *Technique:* [[../Techniques/Process Injection (T1055)|Process Injection]]

## Command and Scripting Interpreter

[Donut](https://attack.mitre.org/software/S0695) can generate shellcode outputs that execute via Ruby.[\[Donut Github\]](https://github.com/TheWover/donut)	

- *Technique:* [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

## Visual Basic

[Donut](https://attack.mitre.org/software/S0695) can generate shellcode outputs that execute via VBScript.[\[Donut Github\]](https://github.com/TheWover/donut)	

- *Technique:* [[../Techniques/Visual Basic (T1059.005)|Visual Basic]]

## Encrypted/Encoded File

[Donut](https://attack.mitre.org/software/S0695) can generate encrypted, compressed/encoded, or otherwise obfuscated code modules.[\[Donut Github\]](https://github.com/TheWover/donut)

- *Technique:* [[../Techniques/Encrypted_Encoded File (T1027.013)|Encrypted/Encoded File]]

## Process Discovery

[Donut](https://attack.mitre.org/software/S0695) includes subprojects that enumerate and identify information about [Process Injection](https://attack.mitre.org/techniques/T1055) candidates.[\[Donut Github\]](https://github.com/TheWover/donut)	

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## Software Packing

[Donut](https://attack.mitre.org/software/S0695) can generate packed code modules.[\[Donut Github\]](https://github.com/TheWover/donut)	

- *Technique:* [[../Techniques/Software Packing (T1027.002)|Software Packing]]

## Web Protocols

[Donut](https://attack.mitre.org/software/S0695) can use HTTP to download previously staged shellcode payloads.[\[Donut Github\]](https://github.com/TheWover/donut)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## JavaScript

[Donut](https://attack.mitre.org/software/S0695) can generate shellcode outputs that execute via JavaScript or JScript.[\[Donut Github\]](https://github.com/TheWover/donut)	

- *Technique:* [[../Techniques/JavaScript (T1059.007)|JavaScript]]

## Native API

[Donut](https://attack.mitre.org/software/S0695) code modules use various API functions to load and inject code.[\[Donut Github\]](https://github.com/TheWover/donut)	

- *Technique:* [[../Techniques/Native API (T1106)|Native API]]

## Reflective Code Loading

[Donut](https://attack.mitre.org/software/S0695) can generate code modules that enable in-memory execution of VBScript, JScript, EXE, DLL, and dotNET payloads.[\[Donut Github\]](https://github.com/TheWover/donut)

- *Technique:* [[../Techniques/Reflective Code Loading (T1620)|Reflective Code Loading]]

## Disable or Modify Tools

[Donut](https://attack.mitre.org/software/S0695) can patch Antimalware Scan Interface (AMSI), Windows Lockdown Policy (WLDP), as well as exit-related [Native API](https://attack.mitre.org/techniques/T1106) functions to avoid process termination.[\[Donut Github\]](https://github.com/TheWover/donut)	

- *Technique:* [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]

## Compression

[Donut](https://attack.mitre.org/software/S0695) can generate encrypted, compressed/encoded, or otherwise obfuscated code modules.[\[Donut Github\]](https://github.com/TheWover/donut)

- *Technique:* [[../Techniques/Compression (T1027.015)|Compression]]

## PowerShell

[Donut](https://attack.mitre.org/software/S0695) can generate shellcode outputs that execute via PowerShell.[\[Donut Github\]](https://github.com/TheWover/donut)	

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## Ingress Tool Transfer

[Donut](https://attack.mitre.org/software/S0695) can download and execute previously staged shellcode payloads.[\[Donut Github\]](https://github.com/TheWover/donut)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]


# External References(s)

- [S0695](https://attack.mitre.org/software/S0695)

[^fn1]: [Antenucci, S., Pantazopoulos, N., Sandee, M. (2020, June 23). WastedLocker: A New Ransomware Variant Developed By The Evil Corp Group. Retrieved September 14, 2021.](https://research.nccgroup.com/2020/06/23/wastedlocker-a-new-ransomware-variant-developed-by-the-evil-corp-group/)
[^fn2]: [The Wover. (2019, May 9). Donut - Injecting .NET Assemblies as Shellcode. Retrieved October 4, 2021.](https://thewover.github.io/Introducing-Donut/)
[^fn3]: [TheWover. (2019, May 9). donut. Retrieved March 25, 2022.](https://github.com/TheWover/donut)