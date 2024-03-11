#!/bin/bash

# Check if a file name is provided as an argument
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

# File to be modified
FILE="$1"

# Uncomment the import line for RefBasics.vue
sed -i '' '/\/\/ import RefBasics from \x27\.\/components\/basics\/RefBasics.vue\x27/s/^\/\///' "$FILE"

# Uncomment the usage of RefBasics component in the template section
sed -i '' 's/<!-- <RefBasics \/> -->/<RefBasics \/>/' "$FILE"

echo "Lesson 1 has been uncommented in $FILE"
