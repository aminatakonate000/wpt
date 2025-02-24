// META: title=test WebNN API gelu operation
// META: global=window
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-gelu-method
// Compute the gaussian error linear unit function (GELU) of the input tensor.
// The calculation follows the expression 0.5 * x * (1 + erf(x / sqrt(2))).
//
// MLOperand gelu(MLOperand input);

const geluTests = [
  {
    'name': 'gelu float32 0D scalar',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [-0.044885843992233276],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [-0.021639423444867134],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gelu float16 0D scalar',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [-0.044891357421875],
          'descriptor': {shape: [], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [-0.021636962890625],
          'descriptor': {shape: [], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'gelu float32 1D tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.878292441368103,    -0.09706497937440872, 0.1367187649011612,
            0.46406492590904236,  -0.26635801792144775, -0.8252315521240234,
            0.8530909419059753,   0.3846154808998108,   0.6772316694259644,
            -0.4811072051525116,  0.2983909249305725,   0.6777864098548889,
            -0.526228129863739,   0.3497541546821594,   -0.12918996810913086,
            0.5853934288024902,   -0.8950720429420471,  0.028302494436502457,
            -0.09901237487792969, -0.8838679790496826,  -0.596120297908783,
            0.31863871216773987,  0.4794037640094757,   -0.06489315629005432
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.7115113139152527,   -0.0447796992957592,  0.07579325884580612,
            0.3149605691432953,   -0.10520657151937485, -0.16885890066623688,
            0.6851989030838013,   0.24989959597587585,  0.508513331413269,
            -0.1516546905040741,  0.18419598042964935,  0.509049117565155,
            -0.15753419697284698, 0.22270187735557556,  -0.05795508995652199,
            0.42198580503463745,  -0.1659233123064041,  0.014470770955085754,
            -0.04560155048966408, -0.1665063202381134,  -0.1642593890428543,
            0.19914908707141876,  0.3279957175254822,   -0.030767757445573807
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gelu float32 1D constant tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.878292441368103,    -0.09706497937440872, 0.1367187649011612,
            0.46406492590904236,  -0.26635801792144775, -0.8252315521240234,
            0.8530909419059753,   0.3846154808998108,   0.6772316694259644,
            -0.4811072051525116,  0.2983909249305725,   0.6777864098548889,
            -0.526228129863739,   0.3497541546821594,   -0.12918996810913086,
            0.5853934288024902,   -0.8950720429420471,  0.028302494436502457,
            -0.09901237487792969, -0.8838679790496826,  -0.596120297908783,
            0.31863871216773987,  0.4794037640094757,   -0.06489315629005432
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.7115113139152527,   -0.0447796992957592,  0.07579325884580612,
            0.3149605691432953,   -0.10520657151937485, -0.16885890066623688,
            0.6851989030838013,   0.24989959597587585,  0.508513331413269,
            -0.1516546905040741,  0.18419598042964935,  0.509049117565155,
            -0.15753419697284698, 0.22270187735557556,  -0.05795508995652199,
            0.42198580503463745,  -0.1659233123064041,  0.014470770955085754,
            -0.04560155048966408, -0.1665063202381134,  -0.1642593890428543,
            0.19914908707141876,  0.3279957175254822,   -0.030767757445573807
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gelu float16 1D tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.87841796875,    -0.0970458984375, 0.13671875,
            0.464111328125,   -0.266357421875,  -0.8251953125,
            0.85302734375,    0.384521484375,   0.67724609375,
            -0.481201171875,  0.29833984375,    0.677734375,
            -0.5263671875,    0.349853515625,   -0.129150390625,
            0.58544921875,    -0.89501953125,   0.0283050537109375,
            -0.0989990234375, -0.8837890625,    -0.59619140625,
            0.318603515625,   0.4794921875,     -0.06488037109375
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.71142578125,     -0.044769287109375, 0.0758056640625,
            0.31494140625,     -0.105224609375,    -0.1688232421875,
            0.68505859375,     0.2498779296875,    0.50830078125,
            -0.151611328125,   0.1842041015625,    0.5087890625,
            -0.1575927734375,  0.2227783203125,    -0.057952880859375,
            0.422119140625,    -0.1658935546875,   0.01447296142578125,
            -0.04559326171875, -0.16650390625,     -0.164306640625,
            0.1990966796875,   0.328125,           -0.03076171875
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'gelu float32 2D tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.878292441368103,    -0.09706497937440872, 0.1367187649011612,
            0.46406492590904236,  -0.26635801792144775, -0.8252315521240234,
            0.8530909419059753,   0.3846154808998108,   0.6772316694259644,
            -0.4811072051525116,  0.2983909249305725,   0.6777864098548889,
            -0.526228129863739,   0.3497541546821594,   -0.12918996810913086,
            0.5853934288024902,   -0.8950720429420471,  0.028302494436502457,
            -0.09901237487792969, -0.8838679790496826,  -0.596120297908783,
            0.31863871216773987,  0.4794037640094757,   -0.06489315629005432
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.7115113139152527,   -0.0447796992957592,  0.07579325884580612,
            0.3149605691432953,   -0.10520657151937485, -0.16885890066623688,
            0.6851989030838013,   0.24989959597587585,  0.508513331413269,
            -0.1516546905040741,  0.18419598042964935,  0.509049117565155,
            -0.15753419697284698, 0.22270187735557556,  -0.05795508995652199,
            0.42198580503463745,  -0.1659233123064041,  0.014470770955085754,
            -0.04560155048966408, -0.1665063202381134,  -0.1642593890428543,
            0.19914908707141876,  0.3279957175254822,   -0.030767757445573807
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gelu float16 2D tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.87841796875,    -0.0970458984375, 0.13671875,
            0.464111328125,   -0.266357421875,  -0.8251953125,
            0.85302734375,    0.384521484375,   0.67724609375,
            -0.481201171875,  0.29833984375,    0.677734375,
            -0.5263671875,    0.349853515625,   -0.129150390625,
            0.58544921875,    -0.89501953125,   0.0283050537109375,
            -0.0989990234375, -0.8837890625,    -0.59619140625,
            0.318603515625,   0.4794921875,     -0.06488037109375
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.71142578125,     -0.044769287109375, 0.0758056640625,
            0.31494140625,     -0.105224609375,    -0.1688232421875,
            0.68505859375,     0.2498779296875,    0.50830078125,
            -0.151611328125,   0.1842041015625,    0.5087890625,
            -0.1575927734375,  0.2227783203125,    -0.057952880859375,
            0.422119140625,    -0.1658935546875,   0.01447296142578125,
            -0.04559326171875, -0.16650390625,     -0.164306640625,
            0.1990966796875,   0.328125,           -0.03076171875
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'gelu float32 3D tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.878292441368103,    -0.09706497937440872, 0.1367187649011612,
            0.46406492590904236,  -0.26635801792144775, -0.8252315521240234,
            0.8530909419059753,   0.3846154808998108,   0.6772316694259644,
            -0.4811072051525116,  0.2983909249305725,   0.6777864098548889,
            -0.526228129863739,   0.3497541546821594,   -0.12918996810913086,
            0.5853934288024902,   -0.8950720429420471,  0.028302494436502457,
            -0.09901237487792969, -0.8838679790496826,  -0.596120297908783,
            0.31863871216773987,  0.4794037640094757,   -0.06489315629005432
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.7115113139152527,   -0.0447796992957592,  0.07579325884580612,
            0.3149605691432953,   -0.10520657151937485, -0.16885890066623688,
            0.6851989030838013,   0.24989959597587585,  0.508513331413269,
            -0.1516546905040741,  0.18419598042964935,  0.509049117565155,
            -0.15753419697284698, 0.22270187735557556,  -0.05795508995652199,
            0.42198580503463745,  -0.1659233123064041,  0.014470770955085754,
            -0.04560155048966408, -0.1665063202381134,  -0.1642593890428543,
            0.19914908707141876,  0.3279957175254822,   -0.030767757445573807
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gelu float16 3D tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.87841796875,    -0.0970458984375, 0.13671875,
            0.464111328125,   -0.266357421875,  -0.8251953125,
            0.85302734375,    0.384521484375,   0.67724609375,
            -0.481201171875,  0.29833984375,    0.677734375,
            -0.5263671875,    0.349853515625,   -0.129150390625,
            0.58544921875,    -0.89501953125,   0.0283050537109375,
            -0.0989990234375, -0.8837890625,    -0.59619140625,
            0.318603515625,   0.4794921875,     -0.06488037109375
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.71142578125,     -0.044769287109375, 0.0758056640625,
            0.31494140625,     -0.105224609375,    -0.1688232421875,
            0.68505859375,     0.2498779296875,    0.50830078125,
            -0.151611328125,   0.1842041015625,    0.5087890625,
            -0.1575927734375,  0.2227783203125,    -0.057952880859375,
            0.422119140625,    -0.1658935546875,   0.01447296142578125,
            -0.04559326171875, -0.16650390625,     -0.164306640625,
            0.1990966796875,   0.328125,           -0.03076171875
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'gelu float32 4D tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.878292441368103,    -0.09706497937440872, 0.1367187649011612,
            0.46406492590904236,  -0.26635801792144775, -0.8252315521240234,
            0.8530909419059753,   0.3846154808998108,   0.6772316694259644,
            -0.4811072051525116,  0.2983909249305725,   0.6777864098548889,
            -0.526228129863739,   0.3497541546821594,   -0.12918996810913086,
            0.5853934288024902,   -0.8950720429420471,  0.028302494436502457,
            -0.09901237487792969, -0.8838679790496826,  -0.596120297908783,
            0.31863871216773987,  0.4794037640094757,   -0.06489315629005432
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.7115113139152527,   -0.0447796992957592,  0.07579325884580612,
            0.3149605691432953,   -0.10520657151937485, -0.16885890066623688,
            0.6851989030838013,   0.24989959597587585,  0.508513331413269,
            -0.1516546905040741,  0.18419598042964935,  0.509049117565155,
            -0.15753419697284698, 0.22270187735557556,  -0.05795508995652199,
            0.42198580503463745,  -0.1659233123064041,  0.014470770955085754,
            -0.04560155048966408, -0.1665063202381134,  -0.1642593890428543,
            0.19914908707141876,  0.3279957175254822,   -0.030767757445573807
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gelu float16 4D tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.87841796875,    -0.0970458984375, 0.13671875,
            0.464111328125,   -0.266357421875,  -0.8251953125,
            0.85302734375,    0.384521484375,   0.67724609375,
            -0.481201171875,  0.29833984375,    0.677734375,
            -0.5263671875,    0.349853515625,   -0.129150390625,
            0.58544921875,    -0.89501953125,   0.0283050537109375,
            -0.0989990234375, -0.8837890625,    -0.59619140625,
            0.318603515625,   0.4794921875,     -0.06488037109375
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.71142578125,     -0.044769287109375, 0.0758056640625,
            0.31494140625,     -0.105224609375,    -0.1688232421875,
            0.68505859375,     0.2498779296875,    0.50830078125,
            -0.151611328125,   0.1842041015625,    0.5087890625,
            -0.1575927734375,  0.2227783203125,    -0.057952880859375,
            0.422119140625,    -0.1658935546875,   0.01447296142578125,
            -0.04559326171875, -0.16650390625,     -0.164306640625,
            0.1990966796875,   0.328125,           -0.03076171875
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'gelu float32 5D tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.878292441368103,    -0.09706497937440872, 0.1367187649011612,
            0.46406492590904236,  -0.26635801792144775, -0.8252315521240234,
            0.8530909419059753,   0.3846154808998108,   0.6772316694259644,
            -0.4811072051525116,  0.2983909249305725,   0.6777864098548889,
            -0.526228129863739,   0.3497541546821594,   -0.12918996810913086,
            0.5853934288024902,   -0.8950720429420471,  0.028302494436502457,
            -0.09901237487792969, -0.8838679790496826,  -0.596120297908783,
            0.31863871216773987,  0.4794037640094757,   -0.06489315629005432
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.7115113139152527,   -0.0447796992957592,  0.07579325884580612,
            0.3149605691432953,   -0.10520657151937485, -0.16885890066623688,
            0.6851989030838013,   0.24989959597587585,  0.508513331413269,
            -0.1516546905040741,  0.18419598042964935,  0.509049117565155,
            -0.15753419697284698, 0.22270187735557556,  -0.05795508995652199,
            0.42198580503463745,  -0.1659233123064041,  0.014470770955085754,
            -0.04560155048966408, -0.1665063202381134,  -0.1642593890428543,
            0.19914908707141876,  0.3279957175254822,   -0.030767757445573807
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gelu float16 5D tensor',
    'graph': {
      'inputs': {
        'geluInput': {
          'data': [
            0.87841796875,    -0.0970458984375, 0.13671875,
            0.464111328125,   -0.266357421875,  -0.8251953125,
            0.85302734375,    0.384521484375,   0.67724609375,
            -0.481201171875,  0.29833984375,    0.677734375,
            -0.5263671875,    0.349853515625,   -0.129150390625,
            0.58544921875,    -0.89501953125,   0.0283050537109375,
            -0.0989990234375, -0.8837890625,    -0.59619140625,
            0.318603515625,   0.4794921875,     -0.06488037109375
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'gelu',
        'arguments': [{'input': 'geluInput'}],
        'outputs': 'geluOutput'
      }],
      'expectedOutputs': {
        'geluOutput': {
          'data': [
            0.71142578125,     -0.044769287109375, 0.0758056640625,
            0.31494140625,     -0.105224609375,    -0.1688232421875,
            0.68505859375,     0.2498779296875,    0.50830078125,
            -0.151611328125,   0.1842041015625,    0.5087890625,
            -0.1575927734375,  0.2227783203125,    -0.057952880859375,
            0.422119140625,    -0.1658935546875,   0.01447296142578125,
            -0.04559326171875, -0.16650390625,     -0.164306640625,
            0.1990966796875,   0.328125,           -0.03076171875
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float16'}
        }
      }
    }
  }
];

if (navigator.ml) {
  geluTests.forEach((test) => {
    webnn_conformance_test(buildAndExecuteGraph, getPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
