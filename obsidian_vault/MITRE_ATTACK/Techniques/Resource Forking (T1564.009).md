---
mitre_data:
  id: T1564.009
  linker_tags:
  - mitre/attack/linker/stealth/resource_forking
  name: Resource Forking
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Resource Forking (`T1564.009`)

Adversaries may abuse resource forks to hide malicious code or executables to evade detection and bypass security applications. A resource fork provides applications a structured way to store resources such as thumbnail images, menu definitions, icons, dialog boxes, and code.[^fn5] Usage of a resource fork is identifiable when displaying a file’s extended attributes, using <code>ls -l@</code> or <code>xattr -l</code> commands. Resource forks have been deprecated and replaced with the application bundle structure. Non-localized resources are placed at the top level directory of an application bundle, while localized resources are placed in the <code>/Resources</code> folder.[^fn2][^fn3]

Adversaries can use resource forks to hide malicious data that may otherwise be stored directly in files. Adversaries can execute content with an attached resource fork, at a specified offset, that is moved to an executable location then invoked. Resource fork content may also be obfuscated/encrypted until execution.[^fn4][^fn1]


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Hide Artifacts (T1564)|Hide Artifacts]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1564.009](https://attack.mitre.org/techniques/T1564/009)

[^fn1]: [Erika Noerenberg. (2020, June 29). TAU Threat Analysis: Bundlore (macOS) mm-install-macos. Retrieved October 12, 2021.](https://blogs.vmware.com/security/2020/06/tau-threat-analysis-bundlore-macos-mm-install-macos.html)
[^fn2]: [Flylib. (n.d.). Identifying Resource and Data Forks. Retrieved October 12, 2021.](https://flylib.com/books/en/4.395.1.192/1/)
[^fn3]: [Howard Oakley. (2020, October 24). There's more to files than data: Extended Attributes. Retrieved October 12, 2021.](https://eclecticlight.co/2020/10/24/theres-more-to-files-than-data-extended-attributes/)
[^fn4]: [Phil Stokes. (2020, November 5). Resourceful macOS Malware Hides in Named Fork. Retrieved October 12, 2021.](https://www.sentinelone.com/labs/resourceful-macos-malware-hides-in-named-fork/)
[^fn5]: [Tenon. (n.d.). Retrieved October 12, 2021.](http://tenon.com/products/codebuilder/User_Guide/6_File_Systems.html#anchor520553)