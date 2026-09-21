---
type: gtfobin
name: rustc
platform: Unix
functions: [file-read, file-write, inherit]
tags: [gtfobin, unix, lotl]
---

# rustc

## file-read

```bash
rustc /path/to/input-file
```
_The compiler leaks some file lines in the compiler error._
**Contexts:** sudo, unprivileged

## file-write

```bash
echo 'fn main() { println!("DATA"); }' >/path/to/temp-file
rustc /path/to/temp-file -o /path/to/output-file
```
_The comment appears in the compiled program._
**Contexts:** sudo, unprivileged

## inherit

```bash
rustc --explain E0001
```
**Contexts:** sudo, unprivileged
