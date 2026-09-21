---
type: gtfobin
name: poetry
platform: Unix
functions: [inherit]
tags: [gtfobin, unix, lotl]
---

# poetry

## inherit

```bash
echo '...' >/path/to/temp-file
poetry run python /path/to/temp-file
```
_This allows to run Python code (`...`).

A valid `pyproject.toml` file must be present in the current working directory, you can create one with `poetry init -n`._
**Contexts:** sudo, unprivileged
