#!/bin/bash

# Check if a file name is provided as an argument
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

FILE="$1"

# Comment out uncommented import statements, ignoring specific imports
sed -i '' '/^import.*from/{
    /import { provide } from \x27vue\x27;/!{
        /import type { UserData } from \x27\.\/models\/userData\x27;/!{
            s/^import/\/\/ import/
        }
    }
}' "$FILE"

# Comment out component tags in the template section if not already commented
# Look for /> and ensure what follows isn't -->
# This is a simple approach, assuming component tags are on their own line
sed -i '' '/\/>$/{
    /-->$/!{
        s/^\(.*\)$/\x3C!-- \1 -->/
    }
}' "$FILE"

echo "Imports (except specific ones) and component tags have been commented in $FILE"
