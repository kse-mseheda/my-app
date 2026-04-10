#!/bin/bash -eu
cd $SRC/my-app
npm install --ignore-scripts
compile_javascript_fuzzer my-app fuzz/fuzz_transform.js fuzz_transform
compile_javascript_fuzzer my-app fuzz/fuzz_merge.js fuzz_merge
