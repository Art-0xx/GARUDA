---
mitre_data:
  id: T1221
  linker_tags:
  - mitre/attack/linker/stealth/template_injection
  name: Template Injection
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Template Injection (`T1221`)

Adversaries may create or modify references in user document templates to conceal malicious code or force authentication attempts. For example, Microsoft’s Office Open XML (OOXML) specification defines an XML-based format for Office documents (.docx, xlsx, .pptx) to replace older binary formats (.doc, .xls, .ppt). OOXML files are packed together ZIP archives compromised of various XML files, referred to as parts, containing properties that collectively define how a document is rendered.[^fn5]

Properties within parts may reference shared public resources accessed via online URLs. For example, template properties may reference a file, serving as a pre-formatted document blueprint, that is fetched when the document is loaded.

Adversaries may abuse these templates to initially conceal malicious code to be executed via user documents. Template references injected into a document may enable malicious payloads to be fetched and executed when the document is loaded.[^fn9] These documents can be delivered via other techniques such as [Phishing](https://attack.mitre.org/techniques/T1566) and/or [Taint Shared Content](https://attack.mitre.org/techniques/T1080) and may evade static detections since no typical indicators (VBA macro, script, etc.) are present until after the malicious payload is fetched.[^fn3] Examples have been seen in the wild where template injection was used to load malicious code containing an exploit.[^fn8]

Adversaries may also modify the <code>*\template</code> control word within an .rtf file to similarly conceal then download malicious code. This legitimate control word value is intended to be a file destination of a template file resource that is retrieved and loaded when an .rtf file is opened. However, adversaries may alter the bytes of an existing .rtf file to insert a template control word field to include a URL resource of a malicious payload.[^fn7][^fn6]

This technique may also enable [Forced Authentication](https://attack.mitre.org/techniques/T1187) by injecting a SMB/HTTPS (or other credential prompting) URL and triggering an authentication attempt.[^fn4][^fn1][^fn2]


# Platform(s)

- Windows

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1221](https://attack.mitre.org/techniques/T1221)

[^fn1]: [Baird, S. et al.. (2017, July 7). Attack on Critical Infrastructure Leverages Template Injection. Retrieved July 21, 2018.](https://blog.talosintelligence.com/2017/07/template-injection.html)
[^fn2]: [Hanson, R. (2016, September 24). phishery. Retrieved July 21, 2018.](https://github.com/ryhanson/phishery)
[^fn3]: [Hawkins, J. (2018, July 18). Executing Macros From a DOCX With Remote Template Injection. Retrieved October 12, 2018.](http://blog.redxorblue.com/2018/07/executing-macros-from-docx-with-remote.html)
[^fn4]: [Intel_Acquisition_Team. (2018, March 1). Credential Harvesting and Malicious File Delivery using Microsoft Office Template Injection. Retrieved July 20, 2018.](https://forum.anomali.com/t/credential-harvesting-and-malicious-file-delivery-using-microsoft-office-template-injection/2104)
[^fn5]: [Microsoft. (2014, July 9). Introducing the Office (2007) Open XML File Formats. Retrieved July 20, 2018.](https://docs.microsoft.com/previous-versions/office/developer/office-2007/aa338205(v=office.12))
[^fn6]: [Pedrero, R.. (2021, July). Decoding malicious RTF files. Retrieved November 16, 2021.](https://ciberseguridad.blog/decodificando-ficheros-rtf-maliciosos/)
[^fn7]: [Raggi, M. (2021, December 1). Injection is the New Black: Novel RTF Template Inject Technique Poised for Widespread Adoption Beyond APT Actors . Retrieved December 9, 2021.](https://www.proofpoint.com/us/blog/threat-insight/injection-new-black-novel-rtf-template-inject-technique-poised-widespread)
[^fn8]: [Segura, J. (2017, October 13). Decoy Microsoft Word document delivers malware through a RAT. Retrieved July 21, 2018.](https://blog.malwarebytes.com/threat-analysis/2017/10/decoy-microsoft-word-document-delivers-malware-through-rat/)
[^fn9]: [Wiltse, B.. (2018, November 7). Template Injection Attacks - Bypassing Security Controls by Living off the Land. Retrieved April 10, 2019.](https://www.sans.org/reading-room/whitepapers/testing/template-injection-attacks-bypassing-security-controls-living-land-38780)