#!/bin/bash
set -x

cloudlinux-selector restart --json --interpreter nodejs --app-root ~/repositories/nodejs/

set +x