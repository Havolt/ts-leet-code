#!/bin/bash

#Get the input (filepath_without_extension_from_src_folder)
if [ -z "$1" ]; then
  echo "Usage: ./run-ts-file.sh <filepath_without_extension_from_src_folder>"
  echo "Example: ./run-ts-file.sh my-folder/my-file"
  exit 1
fi

FULL_INPUT_PATH="$1" # e.g., linked-lists/palindrome

# Extract the directory component (e.g., "linked-lists")
INPUT_DIR=$(dirname "$FULL_INPUT_PATH") # If input is "filename", dirname returns "."
# Extract the filename component without extension (e.g., "palindrome")
INPUT_FILENAME=$(basename "$FULL_INPUT_PATH")

# Define the source .ts file path
# This combines the "src" base with the full input path (e.g., src/linked-lists/palindrome.ts)
SRC_PATH="src/${FULL_INPUT_PATH}.ts"

# Construct the full destination directory path in 'dist'
# If INPUT_DIR is ".", it means no subfolder, so DEST_DIR will be "dist"
# If INPUT_DIR is "linked-lists", DEST_DIR will be "dist/linked-lists"
DEST_DIR="dist/${INPUT_DIR}"

# Construct the full destination .js file path in 'dist'
# This combines the constructed DEST_DIR with the original filename (e.g., dist/linked-lists/palindrome.js)
FINAL_DIST_PATH="${DEST_DIR}/${INPUT_FILENAME}.js"

# Create the path in the dist folder if it doesn't exist
echo "Ensuring output directory exists: $DEST_DIR"
mkdir -p "$DEST_DIR"

echo "Watching TypeScript file: $SRC_PATH"
echo "Compiling to JavaScript file: $FINAL_DIST_PATH"

# Read the TS file from the path/file and Place it into dist/path/file
# tsc-watch handles reading the TS file and placing the compiled JS file.
# We use --outFile to explicitly tell tsc-watch the exact output path,
# which includes the subfolder structure we've constructed.
# --onSuccess then runs the compiled JS file from its final location.
tsc-watch "$SRC_PATH" --outFile "$FINAL_DIST_PATH" --onSuccess "node \"$FINAL_DIST_PATH\""