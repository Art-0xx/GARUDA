---
mitre_data:
  id: T1546.001
  linker_tags:
  - mitre/attack/linker/privilege_escalation/change_default_file_association
  - mitre/attack/linker/persistence/change_default_file_association
  name: Change Default File Association
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Change Default File Association (`T1546.001`)

Adversaries may establish persistence by executing malicious content triggered by a file type association. When a file is opened, the default program used to open the file (also called the file association or handler) is checked. File association selections are stored in the Windows Registry and can be edited by users, administrators, or programs that have Registry access or by administrators using the built-in assoc utility.[^fn1][^fn2][^fn3] Applications can modify the file association for a given file extension to call an arbitrary program when a file with the given extension is opened.

System file associations are listed under <code>HKEY_CLASSES_ROOT\.[extension]</code>, for example <code>HKEY_CLASSES_ROOT\.txt</code>. The entries point to a handler for that extension located at <code>HKEY_CLASSES_ROOT\\[handler]</code>. The various commands are then listed as subkeys underneath the shell key at <code>HKEY_CLASSES_ROOT\\[handler]\shell\\[action]\command</code>. For example: 

* <code>HKEY_CLASSES_ROOT\txtfile\shell\open\command</code>
* <code>HKEY_CLASSES_ROOT\txtfile\shell\print\command</code>
* <code>HKEY_CLASSES_ROOT\txtfile\shell\printto\command</code>

The values of the keys listed are commands that are executed when the handler opens the file extension. Adversaries can modify these values to continually execute arbitrary commands.[^fn4]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.001](https://attack.mitre.org/techniques/T1546/001)

[^fn1]: [Microsoft. (n.d.). Change which programs Windows 7 uses by default. Retrieved July 26, 2016.](https://support.microsoft.com/en-us/help/18539/windows-7-change-default-programs)
[^fn2]: [Microsoft. (n.d.). Specifying File Handlers for File Name Extensions. Retrieved September 12, 2024.](https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/extensibility/specifying-file-handlers-for-file-name-extensions?view=vs-2015)
[^fn3]: [Plett, C. et al.. (2017, October 15). assoc. Retrieved August 7, 2018.](https://docs.microsoft.com/windows-server/administration/windows-commands/assoc)
[^fn4]: [Sioting, S. (2012, October 8). TROJ_FAKEAV.GZD. Retrieved August 8, 2018.](https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/troj_fakeav.gzd)