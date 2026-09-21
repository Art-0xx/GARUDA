---
mitre_data:
  id: T1137.002
  linker_tags:
  - mitre/attack/linker/persistence/office_test
  name: Office Test
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Office Test (`T1137.002`)

Adversaries may abuse the Microsoft Office "Office Test" Registry key to obtain persistence on a compromised system. An Office Test Registry location exists that allows a user to specify an arbitrary DLL that will be executed every time an Office application is started. This Registry key is thought to be used by Microsoft to load DLLs for testing and debugging purposes while developing Office applications. This Registry key is not created by default during an Office installation.[^fn2][^fn1]

There exist user and global Registry keys for the Office Test feature, such as:

* <code>HKEY_CURRENT_USER\Software\Microsoft\Office test\Special\Perf</code>
* <code>HKEY_LOCAL_MACHINE\Software\Microsoft\Office test\Special\Perf</code>

Adversaries may add this Registry key and specify a malicious DLL that will be executed whenever an Office application, such as Word or Excel, is started.


# Platform(s)

- Windows
- Office Suite

# Parent Technique(s)

- [[../Techniques/Office Application Startup (T1137)|Office Application Startup]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1137.002](https://attack.mitre.org/techniques/T1137/002)

[^fn1]: [Falcone, R. (2016, July 20). Technical Walkthrough: Office Test Persistence Method Used In Recent Sofacy Attacks. Retrieved July 3, 2017.](https://researchcenter.paloaltonetworks.com/2016/07/unit42-technical-walkthrough-office-test-persistence-method-used-in-recent-sofacy-attacks/)
[^fn2]: [Hexacorn. (2014, April 16). Beyond good ol’ Run key, Part 10. Retrieved July 3, 2017.](http://www.hexacorn.com/blog/2014/04/16/beyond-good-ol-run-key-part-10/)