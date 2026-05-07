#!/usr/bin/env python3
import os
import re
import sys

if sys.stdout.encoding != 'utf-8':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

ROOT = os.getcwd()
EXCLUDE_DIRS  = {'.git', '.github', 'node_modules'}
EXCLUDE_FILES = {'LICENSE', 'README.md'}
EXCLUDE_EXTS  = {'.py', '.sh', '.swp', '.gpg'}

def iter_site_files():
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in EXCLUDE_DIRS]
        for fname in filenames:
            if fname in EXCLUDE_FILES or os.path.splitext(fname)[1].lower() in EXCLUDE_EXTS:
                continue
            yield os.path.join(dirpath, fname)

def format_bytes(n):
    if n < 1024: return f"{n} B"
    elif n < 1024 * 1024: return f"{n / 1024:.1f} kB"
    return f"{n / (1024 * 1024):.2f} MB"

site_files = list(iter_site_files())
total_bytes = sum(os.path.getsize(f) for f in site_files)
weight_str = format_bytes(total_bytes)

target_file = os.path.join(ROOT, 'assets', 'js', 'components.js')

if not os.path.exists(target_file):
    print(f"ERRORE: {target_file} non trovato")
    sys.exit(1)

with open(target_file, 'r', encoding='utf-8') as f:
    content = f.read()

placeholder_re = re.compile(r'<SITE_WEIGHT>.*?</SITE_WEIGHT>', re.DOTALL)
replacement = f'<SITE_WEIGHT>{weight_str}</SITE_WEIGHT>'

if '<SITE_WEIGHT>' in content:
    new_content = placeholder_re.sub(replacement, content)
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"OK: Peso aggiornato a {weight_str}")
else:
    print("ERRORE: Tag <SITE_WEIGHT> non trovati in components.js")
    sys.exit(1)
