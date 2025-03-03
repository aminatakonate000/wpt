(function simd_i64x2_arith2_wast_js() {

// simd_i64x2_arith2.wast:3
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x01\x7b\x01\x7b\x60\x00\x01\x7b\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xa6\x80\x80\x80\x00\x02\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x00\x16\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x5f\x77\x69\x74\x68\x5f\x63\x6f\x6e\x73\x74\x5f\x30\x00\x01\x0a\xa9\x80\x80\x80\x00\x02\x87\x80\x80\x80\x00\x00\x20\x00\xfd\xc0\x01\x0b\x97\x80\x80\x80\x00\x00\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\xff\xff\xff\xff\xff\xff\xff\x7f\xfd\xc0\x01\x0b");

// simd_i64x2_arith2.wast:8
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("1 0 1 0")]), v128("int64("1") int64("1")"))

// simd_i64x2_arith2.wast:10
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("-1 -1 -1 -1")]), v128("int64("1") int64("1")"))

// simd_i64x2_arith2.wast:12
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("-1 -1 -1 -1")]), v128("int64("1") int64("1")"))

// simd_i64x2_arith2.wast:14
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("-1 -1 -1 -1")]), v128("int64("1") int64("1")"))

// simd_i64x2_arith2.wast:16
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x80\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x80\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("0 -2_147_483_648 0 -2_147_483_648")]), v128("int64("-9_223_372_036_854_775_808") int64("-9_223_372_036_854_775_808")"))

// simd_i64x2_arith2.wast:18
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x80\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x80\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("0 -2_147_483_648 0 -2_147_483_648")]), v128("int64("-9_223_372_036_854_775_808") int64("-9_223_372_036_854_775_808")"))

// simd_i64x2_arith2.wast:20
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x80\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x80\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("0 -2_147_483_648 0 -2_147_483_648")]), v128("int64("-9_223_372_036_854_775_808") int64("-9_223_372_036_854_775_808")"))

// simd_i64x2_arith2.wast:22
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x80\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x80\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("0 -2_147_483_648 0 -2_147_483_648")]), v128("int64("-9_223_372_036_854_775_808") int64("-9_223_372_036_854_775_808")"))

// simd_i64x2_arith2.wast:24
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x7b\x00\x00\x00\x00\x00\x00\x00\x7b\x00\x00\x00\x00\x00\x00\x00\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x7b\x00\x00\x00\x00\x00\x00\x00\x7b\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("123 0 123 0")]), v128("int64("123") int64("123")"))

// simd_i64x2_arith2.wast:26
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x85\xff\xff\xff\xff\xff\xff\xff\x85\xff\xff\xff\xff\xff\xff\xff\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x7b\x00\x00\x00\x00\x00\x00\x00\x7b\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("-123 -1 -123 -1")]), v128("int64("123") int64("123")"))

// simd_i64x2_arith2.wast:28
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("128 0 128 0")]), v128("int64("128") int64("128")"))

// simd_i64x2_arith2.wast:30
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x80\xff\xff\xff\xff\xff\xff\xff\x80\xff\xff\xff\xff\xff\xff\xff\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("-128 -1 -128 -1")]), v128("int64("128") int64("128")"))

// simd_i64x2_arith2.wast:32
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("128 0 128 0")]), v128("int64("128") int64("128")"))

// simd_i64x2_arith2.wast:34
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x80\xff\xff\xff\xff\xff\xff\xff\x80\xff\xff\xff\xff\xff\xff\xff\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("-128 -1 -128 -1")]), v128("int64("128") int64("128")"))

// simd_i64x2_arith2.wast:38
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa3\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x00\x01\x7b\x02\x92\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x16\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x5f\x77\x69\x74\x68\x5f\x63\x6f\x6e\x73\x74\x5f\x30\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xbc\x80\x80\x80\x00\x01\xb6\x80\x80\x80\x00\x00\x02\x40\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\xff\xff\xff\xff\xff\xff\xff\x7f\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs_with_const_0", []), v128("int64("-9_223_372_036_854_775_808") int64("9_223_372_036_854_775_807")"))

// simd_i64x2_arith2.wast:43
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\xff\xff\xff\xff\xff\xff\xff\x7f\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x80\xff\xff\xff\xff\xff\xff\xff\x7f\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("0 -2_147_483_648 -1 2_147_483_647")]), v128("int64("-9_223_372_036_854_775_808") int64("9_223_372_036_854_775_807")"))

// simd_i64x2_arith2.wast:47
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("0 0 0 0")]), v128("int64("0") int64("0")"))

// simd_i64x2_arith2.wast:49
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("0 0 0 0")]), v128("int64("0") int64("0")"))

// simd_i64x2_arith2.wast:51
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("0 0 0 0")]), v128("int64("0") int64("0")"))

// simd_i64x2_arith2.wast:53
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "i64x2.abs", [v128("0 0 0 0")]), v128("int64("0") int64("0")"))

// simd_i64x2_arith2.wast:59
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7b\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\xfd\xc0\x01\x0b");

// simd_i64x2_arith2.wast:63
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7b\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\xfd\xc0\x01\x0b");

// simd_i64x2_arith2.wast:73
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7b\x01\x7b\x03\x82\x80\x80\x80\x00\x01\x00\x07\x97\x80\x80\x80\x00\x01\x13\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x2d\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x20\x00\xfd\xc0\x01\xfd\xc0\x01\x0b");

// simd_i64x2_arith2.wast:77
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7b\x01\x7b\x02\x8f\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x13\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x2d\x69\x36\x34\x78\x32\x2e\x61\x62\x73\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x00\x02\x40\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\x00\xfd\x0c\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfd\x4e\xfd\x0c\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\xfd\x23\xfd\x63\x45\x0d\x00\x0f\x0b\x00\x0b", exports($2)),  "run", []));  // assert_return(() => call($2, "i64x2.abs-i64x2.abs", [v128("-1 -1 -1 -1")]), v128("int64("1") int64("1")"))
reinitializeRegistry();
})();
