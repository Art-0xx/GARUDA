---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Copy
  Command: dtutil.exe /FILE {PATH_ABSOLUTE:.source.ext} /COPY FILE;{PATH_ABSOLUTE:.dest.ext}
  Description: Copy file from source to destination
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: Administrator
  Usecase: Use to copies the source file to the destination file
Created: 2024-06-17
Description: Microsoft command line utility used to manage SQL Server Integration
  Services packages.
Full_Path:
- Path: C:\Program Files\Microsoft SQL Server\<version>\DTS\Binn\dtutil.exe
- Path: C:\Program Files (x86)\Microsoft SQL Server\<version>\DTS\Binn\dtutil.exe
Name: dtutil.exe
Resources:
- Link: https://learn.microsoft.com/en-us/sql/integration-services/dtutil-utility?view=sql-server-ver16
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# dtutil.exe

Microsoft command line utility used to manage SQL Server Integration Services packages.

# Path(s)

- `C:\Program Files\Microsoft SQL Server\<version>\DTS\Binn\dtutil.exe`
- `C:\Program Files (x86)\Microsoft SQL Server\<version>\DTS\Binn\dtutil.exe`

# Copy Commands

Copy file from source to destination

```batch
dtutil.exe /FILE {PATH_ABSOLUTE:.source.ext} /COPY FILE;{PATH_ABSOLUTE:.dest.ext}
```

- **Usecase:** Use to copies the source file to the destination file
- **Privileges Required:** Administrator
- **MitreID:** `T1105`
- **Operating System(s):** Windows



# Resource(s)

- https://learn.microsoft.com/en-us/sql/integration-services/dtutil-utility?view=sql-server-ver16
# Acknowledgements

- Avihay Eldad (Authored, 2024-06-17)
- Avihay El