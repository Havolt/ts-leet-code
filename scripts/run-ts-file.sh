#!/bin/bash

# Check if a filename was provided
if [ -z "$1" ]; then
  echo "Usage: ./run-ts-file.sh <filename_without_extension>"
  exit 1
fi

FILENAME="$1"
SRC_PATH="src/${FILENAME}.ts"
DIST_PATH="dist/${FILENAME}.js"

# Run tsc-watch for the specific file
# --outDir ./dist is important to put compiled files in the correct place
# --onSuccess command runs the compiled JS
tsc-watch "$SRC_PATH" --outDir ./dist --onSuccess "node \"$DIST_PATH\""