(function simd_store32_lane_wast_js() {

// simd_store32_lane.wast:4
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x02\x60\x02\x7f\x7b\x01\x7e\x60\x01\x7b\x01\x7e\x03\x95\x80\x80\x80\x00\x14\x00\x00\x00\x00\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x06\x96\x80\x80\x80\x00\x01\x7b\x01\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x07\xbd\x84\x80\x80\x00\x14\x13\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x30\x00\x00\x13\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x31\x00\x01\x13\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x32\x00\x02\x13\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x33\x00\x03\x1c\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x30\x5f\x6f\x66\x66\x73\x65\x74\x5f\x30\x00\x04\x1c\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x31\x5f\x6f\x66\x66\x73\x65\x74\x5f\x31\x00\x05\x1c\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x32\x5f\x6f\x66\x66\x73\x65\x74\x5f\x32\x00\x06\x1c\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x33\x5f\x6f\x66\x66\x73\x65\x74\x5f\x33\x00\x07\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x30\x5f\x61\x6c\x69\x67\x6e\x5f\x31\x00\x08\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x30\x5f\x61\x6c\x69\x67\x6e\x5f\x32\x00\x09\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x30\x5f\x61\x6c\x69\x67\x6e\x5f\x34\x00\x0a\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x31\x5f\x61\x6c\x69\x67\x6e\x5f\x31\x00\x0b\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x31\x5f\x61\x6c\x69\x67\x6e\x5f\x32\x00\x0c\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x31\x5f\x61\x6c\x69\x67\x6e\x5f\x34\x00\x0d\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x32\x5f\x61\x6c\x69\x67\x6e\x5f\x31\x00\x0e\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x32\x5f\x61\x6c\x69\x67\x6e\x5f\x32\x00\x0f\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x32\x5f\x61\x6c\x69\x67\x6e\x5f\x34\x00\x10\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x33\x5f\x61\x6c\x69\x67\x6e\x5f\x31\x00\x11\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x33\x5f\x61\x6c\x69\x67\x6e\x5f\x32\x00\x12\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x33\x5f\x61\x6c\x69\x67\x6e\x5f\x34\x00\x13\x0a\xbd\x85\x80\x80\x00\x14\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x02\x00\x00\x20\x00\x29\x03\x00\x21\x02\x20\x00\x23\x00\xfd\x0b\x04\x00\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x02\x00\x01\x20\x00\x29\x03\x00\x21\x02\x20\x00\x23\x00\xfd\x0b\x04\x00\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x02\x00\x02\x20\x00\x29\x03\x00\x21\x02\x20\x00\x23\x00\xfd\x0b\x04\x00\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x02\x00\x03\x20\x00\x29\x03\x00\x21\x02\x20\x00\x23\x00\xfd\x0b\x04\x00\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x41\x00\x20\x00\xfd\x5a\x02\x00\x00\x41\x00\x29\x03\x00\x21\x01\x41\x00\x23\x00\xfd\x0b\x04\x00\x20\x01\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x41\x00\x20\x00\xfd\x5a\x02\x01\x01\x41\x00\x29\x03\x01\x21\x01\x41\x00\x23\x00\xfd\x0b\x04\x01\x20\x01\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x41\x00\x20\x00\xfd\x5a\x02\x02\x02\x41\x00\x29\x03\x02\x21\x01\x41\x00\x23\x00\xfd\x0b\x04\x02\x20\x01\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x41\x00\x20\x00\xfd\x5a\x02\x03\x03\x41\x00\x29\x03\x03\x21\x01\x41\x00\x23\x00\xfd\x0b\x04\x03\x20\x01\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x00\x00\x00\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x00\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x01\x00\x00\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x00\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x02\x00\x00\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x00\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x00\x00\x01\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x01\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x01\x00\x01\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x01\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x02\x00\x01\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x01\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x00\x00\x02\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x02\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x01\x00\x02\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x02\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x02\x00\x02\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x02\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x00\x00\x03\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x03\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x01\x00\x03\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x03\x20\x02\x0b\x9e\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x20\x01\xfd\x5a\x02\x00\x03\x20\x00\x29\x03\x00\x21\x02\x41\x00\x23\x00\xfd\x0b\x04\x03\x20\x02\x0b");

// simd_store32_lane.wast:125
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x8f\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x13\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x30\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x00\xfd\x0c\x00\x01\x02\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x01\x42\x80\x82\x88\x18\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_0", [0, v128("50_462_976 0 0 0")]), int64("50_462_976"))

// simd_store32_lane.wast:128
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x8f\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x13\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x31\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x01\xfd\x0c\x00\x00\x00\x00\x01\x02\x03\x04\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x01\x42\x81\x84\x8c\x20\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_1", [1, v128("0 67_305_985 0 0")]), int64("67_305_985"))

// simd_store32_lane.wast:131
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x8f\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x13\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x32\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x02\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x02\x03\x04\x05\x00\x00\x00\x00\x10\x00\x01\x42\x82\x86\x90\x28\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_2", [2, v128("0 0 84_148_994 0")]), int64("84_148_994"))

// simd_store32_lane.wast:134
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x8f\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x13\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x33\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x03\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\x04\x05\x06\x10\x00\x01\x42\x83\x88\x94\x30\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_3", [3, v128("0 0 0 100_992_003")]), int64("100_992_003"))

// simd_store32_lane.wast:137
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7e\x02\x98\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1c\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x30\x5f\x6f\x66\x66\x73\x65\x74\x5f\x30\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xac\x80\x80\x80\x00\x01\xa6\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x01\x02\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x01\x42\x80\x82\x88\x18\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_0_offset_0", [v128("50_462_976 0 0 0")]), int64("50_462_976"))

// simd_store32_lane.wast:139
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7e\x02\x98\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1c\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x31\x5f\x6f\x66\x66\x73\x65\x74\x5f\x31\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xac\x80\x80\x80\x00\x01\xa6\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x01\x02\x03\x04\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x01\x42\x81\x84\x8c\x20\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_1_offset_1", [v128("0 67_305_985 0 0")]), int64("67_305_985"))

// simd_store32_lane.wast:141
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7e\x02\x98\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1c\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x32\x5f\x6f\x66\x66\x73\x65\x74\x5f\x32\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xac\x80\x80\x80\x00\x01\xa6\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x02\x03\x04\x05\x00\x00\x00\x00\x10\x00\x01\x42\x82\x86\x90\x28\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_2_offset_2", [v128("0 0 84_148_994 0")]), int64("84_148_994"))

// simd_store32_lane.wast:143
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7e\x02\x98\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1c\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x33\x5f\x6f\x66\x66\x73\x65\x74\x5f\x33\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xac\x80\x80\x80\x00\x01\xa6\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\x04\x05\x06\x10\x00\x01\x42\x83\x88\x94\x30\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_3_offset_3", [v128("0 0 0 100_992_003")]), int64("100_992_003"))

// simd_store32_lane.wast:145
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x30\x5f\x61\x6c\x69\x67\x6e\x5f\x31\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x00\xfd\x0c\x00\x01\x02\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x01\x42\x80\x82\x88\x18\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_0_align_1", [0, v128("50_462_976 0 0 0")]), int64("50_462_976"))

// simd_store32_lane.wast:148
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x30\x5f\x61\x6c\x69\x67\x6e\x5f\x32\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x00\xfd\x0c\x00\x01\x02\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x01\x42\x80\x82\x88\x18\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_0_align_2", [0, v128("50_462_976 0 0 0")]), int64("50_462_976"))

// simd_store32_lane.wast:151
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x30\x5f\x61\x6c\x69\x67\x6e\x5f\x34\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x00\xfd\x0c\x00\x01\x02\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x01\x42\x80\x82\x88\x18\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_0_align_4", [0, v128("50_462_976 0 0 0")]), int64("50_462_976"))

// simd_store32_lane.wast:154
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x31\x5f\x61\x6c\x69\x67\x6e\x5f\x31\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x01\xfd\x0c\x00\x00\x00\x00\x01\x02\x03\x04\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x01\x42\x81\x84\x8c\x20\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_1_align_1", [1, v128("0 67_305_985 0 0")]), int64("67_305_985"))

// simd_store32_lane.wast:157
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x31\x5f\x61\x6c\x69\x67\x6e\x5f\x32\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x01\xfd\x0c\x00\x00\x00\x00\x01\x02\x03\x04\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x01\x42\x81\x84\x8c\x20\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_1_align_2", [1, v128("0 67_305_985 0 0")]), int64("67_305_985"))

// simd_store32_lane.wast:160
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x31\x5f\x61\x6c\x69\x67\x6e\x5f\x34\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x01\xfd\x0c\x00\x00\x00\x00\x01\x02\x03\x04\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x01\x42\x81\x84\x8c\x20\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_1_align_4", [1, v128("0 67_305_985 0 0")]), int64("67_305_985"))

// simd_store32_lane.wast:163
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x32\x5f\x61\x6c\x69\x67\x6e\x5f\x31\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x02\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x02\x03\x04\x05\x00\x00\x00\x00\x10\x00\x01\x42\x82\x86\x90\x28\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_2_align_1", [2, v128("0 0 84_148_994 0")]), int64("84_148_994"))

// simd_store32_lane.wast:166
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x32\x5f\x61\x6c\x69\x67\x6e\x5f\x32\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x02\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x02\x03\x04\x05\x00\x00\x00\x00\x10\x00\x01\x42\x82\x86\x90\x28\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_2_align_2", [2, v128("0 0 84_148_994 0")]), int64("84_148_994"))

// simd_store32_lane.wast:169
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x32\x5f\x61\x6c\x69\x67\x6e\x5f\x34\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x02\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x02\x03\x04\x05\x00\x00\x00\x00\x10\x00\x01\x42\x82\x86\x90\x28\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_2_align_4", [2, v128("0 0 84_148_994 0")]), int64("84_148_994"))

// simd_store32_lane.wast:172
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x33\x5f\x61\x6c\x69\x67\x6e\x5f\x31\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x03\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\x04\x05\x06\x10\x00\x01\x42\x83\x88\x94\x30\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_3_align_1", [3, v128("0 0 0 100_992_003")]), int64("100_992_003"))

// simd_store32_lane.wast:175
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x33\x5f\x61\x6c\x69\x67\x6e\x5f\x32\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x03\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\x04\x05\x06\x10\x00\x01\x42\x83\x88\x94\x30\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_3_align_2", [3, v128("0 0 0 100_992_003")]), int64("100_992_003"))

// simd_store32_lane.wast:178
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa5\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x02\x7f\x7b\x01\x7e\x02\x97\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x1b\x76\x31\x32\x38\x2e\x73\x74\x6f\x72\x65\x33\x32\x5f\x6c\x61\x6e\x65\x5f\x33\x5f\x61\x6c\x69\x67\x6e\x5f\x34\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xae\x80\x80\x80\x00\x01\xa8\x80\x80\x80\x00\x00\x02\x40\x41\x03\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\x04\x05\x06\x10\x00\x01\x42\x83\x88\x94\x30\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "v128.store32_lane_3_align_4", [3, v128("0 0 0 100_992_003")]), int64("100_992_003"))

// simd_store32_lane.wast:183
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7b\x01\x7b\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x20\x00\x41\x00\xfd\x5a\x02\x00\x00\x0b");

// simd_store32_lane.wast:189
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7b\x01\x7b\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x20\x00\xfd\x5a\x02\x00\x04\x0b");

// simd_store32_lane.wast:195
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7b\x01\x7b\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x20\x00\xfd\x5a\x03\x00\x00\x0b");
reinitializeRegistry();
})();
