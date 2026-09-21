---
tags:
  - mitre/attack/tool
---

# IronNetInjector (`S0581`)

[IronNetInjector](https://attack.mitre.org/software/S0581) is a [Turla](https://attack.mitre.org/groups/G0010) toolchain that utilizes scripts from the open-source IronPython implementation of Python with a .NET injector to drop one or more payloads including [ComRAT](https://attack.mitre.org/software/S0126).[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Python

[IronNetInjector](https://attack.mitre.org/software/S0581) can use IronPython scripts to load payloads with the help of a .NET injector.[\[Unit 42 IronNetInjector February 2021 \]](https://unit42.paloaltonetworks.com/ironnetinjector/)

- *Technique:* [[../Techniques/Python (T1059.006)|Python]]

## Process Discovery

[IronNetInjector](https://attack.mitre.org/software/S0581) can identify processes via C# methods such as <code>GetProcessesByName</code> and running [Tasklist](https://attack.mitre.org/software/S0057) with the Python <code>os.popen</code> function.[\[Unit 42 IronNetInjector February 2021 \]](https://unit42.paloaltonetworks.com/ironnetinjector/)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## Process Injection

[IronNetInjector](https://attack.mitre.org/software/S0581) can use an IronPython scripts to load a .NET injector to inject a payload into its own or a remote process.[\[Unit 42 IronNetInjector February 2021 \]](https://unit42.paloaltonetworks.com/ironnetinjector/)

- *Technique:* [[../Techniques/Process Injection (T1055)|Process Injection]]

## Masquerade Task or Service

[IronNetInjector](https://attack.mitre.org/software/S0581) has been disguised as a legitimate service using the name PythonUpdateSrvc.[\[Unit 42 IronNetInjector February 2021 \]](https://unit42.paloaltonetworks.com/ironnetinjector/)

- *Technique:* [[../Techniques/Masquerade Task or Service (T1036.004)|Masquerade Task or Service]]

## Scheduled Task

[IronNetInjector](https://attack.mitre.org/software/S0581) has used a task XML file named <code>mssch.xml</code> to run an IronPython script when a user logs in or when specific system events are created.[\[Unit 42 IronNetInjector February 2021 \]](https://unit42.paloaltonetworks.com/ironnetinjector/)

- *Technique:* [[../Techniques/Scheduled Task (T1053.005)|Scheduled Task]]

## Deobfuscate/Decode Files or Information

[IronNetInjector](https://attack.mitre.org/software/S0581) has the ability to decrypt embedded .NET and PE payloads.[\[Unit 42 IronNetInjector February 2021 \]](https://unit42.paloaltonetworks.com/ironnetinjector/)

- *Technique:* [[../Techniques/Deobfuscate_Decode Files or Information (T1140)|Deobfuscate/Decode Files or Information]]

## Dynamic-link Library Injection

[IronNetInjector](https://attack.mitre.org/software/S0581) has the ability to inject a DLL into running processes, including the [IronNetInjector](https://attack.mitre.org/software/S0581) DLL into explorer.exe.[\[Unit 42 IronNetInjector February 2021 \]](https://unit42.paloaltonetworks.com/ironnetinjector/)

- *Technique:* [[../Techniques/Dynamic-link Library Injection (T1055.001)|Dynamic-link Library Injection]]

## Encrypted/Encoded File

[IronNetInjector](https://attack.mitre.org/software/S0581) can obfuscate variable names, encrypt strings, as well as base64 encode and Rijndael encrypt payloads.[\[Unit 42 IronNetInjector February 2021 \]](https://unit42.paloaltonetworks.com/ironnetinjector/)

- *Technique:* [[../Techniques/Encrypted_Encoded File (T1027.013)|Encrypted/Encoded File]]


# External References(s)

- [S0581](https://attack.mitre.org/software/S0581)

[^fn1]: [Reichel, D. (2021, February 19). IronNetInjector: Turla’s New Malware Loading Tool. Retrieved February 24, 2021.](https://unit42.paloaltonetworks.com/ironnetinjector/)