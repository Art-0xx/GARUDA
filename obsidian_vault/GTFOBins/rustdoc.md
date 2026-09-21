---
type: gtfobin
name: rustdoc
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# rustdoc

## file-read

```bash
rustdoc /path/to/input-file
```
_Partial content is displayed as error messages._
**Contexts:** sudo, unprivileged

## file-write

```bash
echo '//! DATA' >/path/to/temp-file
rustdoc /path/to/temp-file -o /path/to/output-dir/
```
_This command creates a number of documentation files in the target directory, and the data is written in multiple locations, e.g., `src/temp_file/temp-file.html`, amidst other content._
**Contexts:** sudo, unprivileged
