---
type: gtfobin
name: dmidecode
platform: Unix
functions: [file-write]
tags: [gtfobin, unix, lotl]
---

# dmidecode

## file-write

```bash
dmidecode --no-sysfs -d x.dmi --dump-bin /path/to/output-file
```
_It can be used to write files using a specially crafted SMBIOS file that can be read as a memory device by dmidecode.
Generate the file with [dmiwrite](https://github.com/adamreiser/dmiwrite) and upload it to the target.

- `--dump-bin`, will cause dmidecode to write the payload to the destination specified, prepended with 32 null bytes.

- `--no-sysfs`, if the target system is using an older version of dmidecode, you may need to omit the option.

```
make dmiwrite
echo DATA >/path/to/temp-file
./dmiwrite /path/to/temp-file x.dmi
```_
**Contexts:** unprivileged
