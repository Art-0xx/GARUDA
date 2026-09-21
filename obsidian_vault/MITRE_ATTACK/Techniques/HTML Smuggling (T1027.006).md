---
mitre_data:
  id: T1027.006
  linker_tags:
  - mitre/attack/linker/stealth/html_smuggling
  name: HTML Smuggling
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# HTML Smuggling (`T1027.006`)

Adversaries may smuggle data and files past content filters by hiding malicious payloads inside of seemingly benign HTML files. HTML documents can store large binary objects known as JavaScript Blobs (immutable data that represents raw bytes) that can later be constructed into file-like objects. Data may also be stored in Data URLs, which enable embedding media type or MIME files inline of HTML documents. HTML5 also introduced a download attribute that may be used to initiate file downloads.[^fn3][^fn1]

Adversaries may deliver payloads to victims that bypass security controls through HTML Smuggling by abusing JavaScript Blobs and/or HTML5 download attributes. Security controls such as web content filters may not identify smuggled malicious files inside of HTML/JS files, as the content may be based on typically benign MIME types such as <code>text/plain</code> and/or <code>text/html</code>. Malicious files or data can be obfuscated and hidden inside of HTML files through Data URLs and/or JavaScript Blobs and can be deobfuscated when they reach the victim (i.e. [Deobfuscate/Decode Files or Information](https://attack.mitre.org/techniques/T1140)), potentially bypassing content filters.

For example, JavaScript Blobs can be abused to dynamically generate malicious files in the victim machine and may be dropped to disk by abusing JavaScript functions such as <code>msSaveBlob</code>.[^fn3][^fn2][^fn1][^fn4]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.006](https://attack.mitre.org/techniques/T1027/006)

[^fn1]: [Hegt, S. (2018, August 14). HTML smuggling explained. Retrieved May 20, 2021.](https://outflank.nl/blog/2018/08/14/html-smuggling-explained/)
[^fn2]: [Microsoft Threat Intelligence Center (MSTIC). (2021, May 27). New sophisticated email-based attack from NOBELIUM. Retrieved May 28, 2021.](https://www.microsoft.com/security/blog/2021/05/27/new-sophisticated-email-based-attack-from-nobelium/)
[^fn3]: [Subramanian, K. (2020, August 18). New HTML Smuggling Attack Alert: Duri. Retrieved May 20, 2021.](https://www.menlosecurity.com/blog/new-attack-alert-duri)
[^fn4]: [Warren, R. (2017, August 8). Smuggling HTA files in Internet Explorer/Edge. Retrieved September 12, 2024.](https://www.nccgroup.com/us/research-blog/smuggling-hta-files-in-internet-exploreredge/)