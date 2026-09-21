---
mitre_data:
  id: T1137.001
  linker_tags:
  - mitre/attack/linker/persistence/office_template_macros
  name: Office Template Macros
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Office Template Macros (`T1137.001`)

Adversaries may abuse Microsoft Office templates to obtain persistence on a compromised system. Microsoft Office contains templates that are part of common Office applications and are used to customize styles. The base templates within the application are used each time an application starts. [^fn3]

Office Visual Basic for Applications (VBA) macros [^fn1] can be inserted into the base template and used to execute code when the respective Office application starts in order to obtain persistence. Examples for both Word and Excel have been discovered and published. By default, Word has a Normal.dotm template created that can be modified to include a malicious macro. Excel does not have a template file created by default, but one can be added that will automatically be loaded.[^fn4][^fn2] Shared templates may also be stored and pulled from remote locations.[^fn6] 

Word Normal.dotm location:<br>
<code>C:\Users\&lt;username&gt;\AppData\Roaming\Microsoft\Templates\Normal.dotm</code>

Excel Personal.xlsb location:<br>
<code>C:\Users\&lt;username&gt;\AppData\Roaming\Microsoft\Excel\XLSTART\PERSONAL.XLSB</code>

Adversaries may also change the location of the base template to point to their own by hijacking the application's search order, e.g. Word 2016 will first look for Normal.dotm under <code>C:\Program Files (x86)\Microsoft Office\root\Office16\</code>, or by modifying the GlobalDotName registry key. By modifying the GlobalDotName registry key an adversary can specify an arbitrary location, file name, and file extension to use for the template that will be loaded on application startup. To abuse GlobalDotName, adversaries may first need to register the template as a trusted document or place it in a trusted location.[^fn6] 

An adversary may need to enable macros to execute unrestricted depending on the system or enterprise security policy on use of macros.


# Platform(s)

- Office Suite
- Windows

# Parent Technique(s)

- [[../Techniques/Office Application Startup (T1137)|Office Application Startup]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1137.001](https://attack.mitre.org/techniques/T1137/001)
- [Parisi, T., et al. (2017, July). Using Outlook Forms for Lateral Movement and Persistence. Retrieved February 5, 2019.](https://malware.news/t/using-outlook-forms-for-lateral-movement-and-persistence/13746)
- [Soutcast. (2018, September 14). Outlook Today Homepage Persistence. Retrieved February 5, 2019.](https://medium.com/@bwtech789/outlook-today-homepage-persistence-33ea9b505943)

[^fn1]: [Austin, J. (2017, June 6). Getting Started with VBA in Office. Retrieved July 3, 2017.](https://msdn.microsoft.com/en-us/vba/office-shared-vba/articles/getting-started-with-vba-in-office)
[^fn2]: [Hexacorn. (2017, April 17). Beyond good ol’ Run key, Part 62. Retrieved July 3, 2017.](http://www.hexacorn.com/blog/2017/04/19/beyond-good-ol-run-key-part-62/)
[^fn3]: [Microsoft. (n.d.). Change the Normal template (Normal.dotm). Retrieved July 3, 2017.](https://support.office.com/article/Change-the-Normal-template-Normal-dotm-06de294b-d216-47f6-ab77-ccb5166f98ea)
[^fn4]: [Nelson, M. (2014, January 23). Maintaining Access with normal.dotm. Retrieved July 3, 2017.](https://enigma0x3.net/2014/01/23/maintaining-access-with-normal-dotm/comment-page-1/)
[^fn6]: [Shukrun, S. (2019, June 2). Office Templates and GlobalDotName - A Stealthy Office Persistence Technique. Retrieved August 26, 2019.](https://www.221bluestreet.com/post/office-templates-and-globaldotname-a-stealthy-office-persistence-technique)