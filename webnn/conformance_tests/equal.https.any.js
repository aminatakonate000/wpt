// META: title=test WebNN API element-wise equal operation
// META: global=window
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-logical
// Compare if the values of the two input tensors are equal, element-wise.
//
// MLOperand equal(MLOperand a, MLOperand b);


const getEqualPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {uint8: 0};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', value: toleranceValueDict[expectedDataType]};
};

const equalTests = [
  {
    'name': 'equal float32 0D scalar',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-0.6285496950149536],
          'descriptor': {shape: [], dataType: 'float32'}
        },
        'inputB': {
          'data': [-4.4166412353515625],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {'data': [0], 'descriptor': {shape: [], dataType: 'uint8'}}
      }
    }
  },
  {
    'name': 'equal float32 1D constant tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [24], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float32 1D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [24], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float32 2D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [4, 6], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float32 3D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float32 4D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float32 5D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float32 broadcast 0D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [2.80570650100708],
          'descriptor': {shape: [], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float32 broadcast 1D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [2.80570650100708],
          'descriptor': {shape: [1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float32 broadcast 2D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708, 5.588105201721191, -4.9622955322265625,
            -2.863192081451416, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float32 broadcast 3D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708, 5.588105201721191, -9.041799545288086,
            3.6268343925476074
          ],
          'descriptor': {shape: [2, 2, 1], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float32 broadcast 4D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [2.80570650100708],
          'descriptor': {shape: [1, 1, 1, 1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },

  // float16 tests
  {
    'name': 'equal float16 0D scalar',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-0.62841796875],
          'descriptor': {shape: [], dataType: 'float16'}
        },
        'inputB': {
          'data': [-4.41796875],
          'descriptor': {shape: [], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {'data': [0], 'descriptor': {shape: [], dataType: 'uint8'}}
      }
    }
  },
  {
    'name': 'equal float16 1D constant tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [24], dataType: 'float16'},
          'constant': true
        },
        'inputB': {
          'data': [
            2.806640625,   5.58984375,  -4.83984375,     4.99609375,
            0.97265625,    -6.171875,   2.806640625,     5.58984375,
            7.765625,      -4.30859375, -5.89453125,     -8.53125,
            2.806640625,   5.58984375,  0.1783447265625, -4.48046875,
            0.68212890625, -6.6875,     2.806640625,     5.58984375,
            -9.0390625,    -1.97265625, -3.01171875,     3.626953125
          ],
          'descriptor': {shape: [24], dataType: 'float16'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [24], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float16 1D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            2.806640625,   5.58984375,  -4.83984375,     4.99609375,
            0.97265625,    -6.171875,   2.806640625,     5.58984375,
            7.765625,      -4.30859375, -5.89453125,     -8.53125,
            2.806640625,   5.58984375,  0.1783447265625, -4.48046875,
            0.68212890625, -6.6875,     2.806640625,     5.58984375,
            -9.0390625,    -1.97265625, -3.01171875,     3.626953125
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [24], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float16 2D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            2.806640625,   5.58984375,  -4.83984375,     4.99609375,
            0.97265625,    -6.171875,   2.806640625,     5.58984375,
            7.765625,      -4.30859375, -5.89453125,     -8.53125,
            2.806640625,   5.58984375,  0.1783447265625, -4.48046875,
            0.68212890625, -6.6875,     2.806640625,     5.58984375,
            -9.0390625,    -1.97265625, -3.01171875,     3.626953125
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [4, 6], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float16 3D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            2.806640625,   5.58984375,  -4.83984375,     4.99609375,
            0.97265625,    -6.171875,   2.806640625,     5.58984375,
            7.765625,      -4.30859375, -5.89453125,     -8.53125,
            2.806640625,   5.58984375,  0.1783447265625, -4.48046875,
            0.68212890625, -6.6875,     2.806640625,     5.58984375,
            -9.0390625,    -1.97265625, -3.01171875,     3.626953125
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float16 4D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            2.806640625,   5.58984375,  -4.83984375,     4.99609375,
            0.97265625,    -6.171875,   2.806640625,     5.58984375,
            7.765625,      -4.30859375, -5.89453125,     -8.53125,
            2.806640625,   5.58984375,  0.1783447265625, -4.48046875,
            0.68212890625, -6.6875,     2.806640625,     5.58984375,
            -9.0390625,    -1.97265625, -3.01171875,     3.626953125
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float16 5D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            2.806640625,   5.58984375,  -4.83984375,     4.99609375,
            0.97265625,    -6.171875,   2.806640625,     5.58984375,
            7.765625,      -4.30859375, -5.89453125,     -8.53125,
            2.806640625,   5.58984375,  0.1783447265625, -4.48046875,
            0.68212890625, -6.6875,     2.806640625,     5.58984375,
            -9.0390625,    -1.97265625, -3.01171875,     3.626953125
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float16 broadcast 0D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [2.806640625],
          'descriptor': {shape: [], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float16 broadcast 1D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [2.806640625],
          'descriptor': {shape: [1], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float16 broadcast 2D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            2.806640625, 5.58984375, -4.9609375, -2.86328125, -3.01171875,
            3.626953125
          ],
          'descriptor': {shape: [2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float16 broadcast 3D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        },
        'inputB': {
          'data': [2.806640625, 5.58984375, -9.0390625, 3.626953125],
          'descriptor': {shape: [2, 2, 1], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'equal float16 broadcast 4D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [2.806640625],
          'descriptor': {shape: [1, 1, 1, 1], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            2.806640625, 5.58984375,   2.85546875,  4.99609375,  0.97265625,
            -4.7421875,  2.806640625,  5.58984375,  -5.109375,   6.625,
            -2.3203125,  -7.0546875,   2.806640625, 5.58984375,  4.98046875,
            -5.44140625, 1.1455078125, 7.7734375,   2.806640625, 5.58984375,
            -6.24609375, -2.849609375, -2.6953125,  5.81640625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'equal',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  }
];

if (navigator.ml) {
  equalTests.forEach((test) => {
    webnn_conformance_test(
        buildAndExecuteGraph, getEqualPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
