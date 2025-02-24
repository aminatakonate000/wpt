// META: title=test WebNN API gather operation
// META: global=window
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-gather
// Gather values of the input tensor along an axis according to the indices.
//
// dictionary MLGatherOptions {
//   [EnforceRange] unsigned long axis = 0;
// };
//
// MLOperand gather(
//     MLOperand input, MLOperand indices,
//     optional MLGatherOptions options = {});


const getGatherPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {float32: 0, float16: 0};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', value: toleranceValueDict[expectedDataType]};
};

const gatherTests = [
  {
    'name':
        'gather float32 1D tensor and uint32 0D scalar indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [4],
          'descriptor': {shape: [], dataType: 'uint32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [89.0337142944336],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'gather float32 1D tensor and int64 0D scalar indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [4],
          'descriptor': {shape: [], dataType: 'int64'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [89.0337142944336],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'gather float32 1D tensor and int32 0D scalar indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [4],
          'descriptor': {shape: [], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [89.0337142944336],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 1D tensor and int32 1D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [16, 20, 6, 11, 17, 19, 13, 17],
          'descriptor': {shape: [8], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            10.829925537109375, 0.9129875898361206, 43.84803771972656,
            -50.42131042480469, -19.693084716796875, 43.11057662963867,
            55.620765686035156, -19.693084716796875
          ],
          'descriptor': {shape: [8], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 1D tensor and int32 2D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [14, 9, 21, 17],
          'descriptor': {shape: [2, 2], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            44.92119598388672, 41.94132614135742, -7.699817180633545,
            -19.693084716796875
          ],
          'descriptor': {shape: [2, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 1D tensor and int32 3D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'gatherIndices': {
          'data':
              [17, 19, 14, 16, 13, 0, 5, 15, 18, 18, 6, 20, 7, 22, 5, 1, 4, 19],
          'descriptor': {shape: [2, 3, 3], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -19.693084716796875, 43.11057662963867, 44.92119598388672,
            10.829925537109375, 55.620765686035156, -66.05901336669922,
            -45.89653396606445, 56.828636169433594, -37.696800231933594,
            -37.696800231933594, 43.84803771972656, 0.9129875898361206,
            48.81806945800781, 25.76774024963379, -45.89653396606445,
            -68.9197006225586, 89.0337142944336, 43.11057662963867
          ],
          'descriptor': {shape: [2, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 1D tensor and int32 4D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [18, 18, 22, 11, 8, 15, 12, 11, 7, 13, 7, 7],
          'descriptor': {shape: [1, 2, 2, 3], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -37.696800231933594, -37.696800231933594, 25.76774024963379,
            -50.42131042480469, 51.79948425292969, 56.828636169433594,
            90.2870101928711, -50.42131042480469, 48.81806945800781,
            55.620765686035156, 48.81806945800781, 48.81806945800781
          ],
          'descriptor': {shape: [1, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 2D tensor and 0D scalar indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [12, 2], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [11],
          'descriptor': {shape: [], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [25.76774024963379, 73.60064697265625],
          'descriptor': {shape: [2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 2D tensor and 1D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [12, 2], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [1, 10, 9, 0, 3, 5, 3, 8],
          'descriptor': {shape: [8], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -77.02045440673828, -26.158037185668945, 0.9129875898361206,
            -7.699817180633545, -37.696800231933594, 43.11057662963867,
            -66.05901336669922, -68.9197006225586, 43.84803771972656,
            48.81806945800781, -1.1303654909133911, -50.42131042480469,
            43.84803771972656, 48.81806945800781, 10.829925537109375,
            -19.693084716796875
          ],
          'descriptor': {shape: [8, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 2D tensor and 2D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [12, 2], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [4, 8, 9, 10],
          'descriptor': {shape: [2, 2], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            51.79948425292969, 41.94132614135742, 10.829925537109375,
            -19.693084716796875, -37.696800231933594, 43.11057662963867,
            0.9129875898361206, -7.699817180633545
          ],
          'descriptor': {shape: [2, 2, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 2D tensor and 3D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [12, 2], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [8, 2, 2, 3, 4, 1, 2, 2, 7, 11, 4, 11, 6, 6, 7, 3, 11, 10],
          'descriptor': {shape: [2, 3, 3], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            10.829925537109375, -19.693084716796875, 89.0337142944336,
            -45.89653396606445, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,  48.81806945800781,   51.79948425292969,
            41.94132614135742,  -77.02045440673828,  -26.158037185668945,
            89.0337142944336,   -45.89653396606445,  89.0337142944336,
            -45.89653396606445, 44.92119598388672,   56.828636169433594,
            25.76774024963379,  73.60064697265625,   51.79948425292969,
            41.94132614135742,  25.76774024963379,   73.60064697265625,
            90.2870101928711,   55.620765686035156,  90.2870101928711,
            55.620765686035156, 44.92119598388672,   56.828636169433594,
            43.84803771972656,  48.81806945800781,   25.76774024963379,
            73.60064697265625,  0.9129875898361206,  -7.699817180633545
          ],
          'descriptor': {shape: [2, 3, 3, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 2D tensor and 4D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [12, 2], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [6, 9, 7, 3, 4, 7, 4, 3, 7, 7, 6, 0],
          'descriptor': {shape: [1, 2, 2, 3], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            90.2870101928711,   55.620765686035156, -37.696800231933594,
            43.11057662963867,  44.92119598388672,  56.828636169433594,
            43.84803771972656,  48.81806945800781,  51.79948425292969,
            41.94132614135742,  44.92119598388672,  56.828636169433594,
            51.79948425292969,  41.94132614135742,  43.84803771972656,
            48.81806945800781,  44.92119598388672,  56.828636169433594,
            44.92119598388672,  56.828636169433594, 90.2870101928711,
            55.620765686035156, -66.05901336669922, -68.9197006225586
          ],
          'descriptor': {shape: [1, 2, 2, 3, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 3D tensor and 2D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [3, 4, 2], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [2, 1, 1, 1],
          'descriptor': {shape: [2, 2], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            10.829925537109375,  -19.693084716796875, -37.696800231933594,
            43.11057662963867,   0.9129875898361206,  -7.699817180633545,
            25.76774024963379,   73.60064697265625,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  51.79948425292969,   41.94132614135742,
            -1.1303654909133911, -50.42131042480469,  90.2870101928711,
            55.620765686035156,  44.92119598388672,   56.828636169433594,
            51.79948425292969,   41.94132614135742,   -1.1303654909133911,
            -50.42131042480469,  90.2870101928711,    55.620765686035156,
            44.92119598388672,   56.828636169433594
          ],
          'descriptor': {shape: [2, 2, 4, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 4D tensor and 2D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [8, 1, 1, 3], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [0, 0, 7, 4],
          'descriptor': {shape: [2, 2], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -66.05901336669922, -68.9197006225586, -77.02045440673828,
            -66.05901336669922, -68.9197006225586, -77.02045440673828,
            -7.699817180633545, 25.76774024963379, 73.60064697265625,
            90.2870101928711, 55.620765686035156, 44.92119598388672
          ],
          'descriptor': {shape: [2, 2, 1, 1, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 5D tensor and 1D indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [4, 2, 1, 1, 3], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [3, 2, 2],
          'descriptor': {shape: [3], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -37.696800231933594, 43.11057662963867, 0.9129875898361206,
            -7.699817180633545, 25.76774024963379, 73.60064697265625,
            90.2870101928711, 55.620765686035156, 44.92119598388672,
            56.828636169433594, 10.829925537109375, -19.693084716796875,
            90.2870101928711, 55.620765686035156, 44.92119598388672,
            56.828636169433594, 10.829925537109375, -19.693084716796875
          ],
          'descriptor': {shape: [3, 2, 1, 1, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 3D tensor and 1D indices options.axis=1',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [3, 4, 2], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [1, 1, 2],
          'descriptor': {shape: [3], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [
          {'input': 'gatherInput'}, {'indices': 'gatherIndices'},
          {'options': {'axis': 1}}
        ],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -77.02045440673828, -26.158037185668945, -77.02045440673828,
            -26.158037185668945, 89.0337142944336, -45.89653396606445,
            -1.1303654909133911, -50.42131042480469, -1.1303654909133911,
            -50.42131042480469, 90.2870101928711, 55.620765686035156,
            -37.696800231933594, 43.11057662963867, -37.696800231933594,
            43.11057662963867, 0.9129875898361206, -7.699817180633545
          ],
          'descriptor': {shape: [3, 3, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 3D tensor and 2D indices options.axis=2',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [3, 4, 2], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [0, 0, 0, 1],
          'descriptor': {shape: [2, 2], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [
          {'input': 'gatherInput'}, {'indices': 'gatherIndices'},
          {'options': {'axis': 2}}
        ],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -66.05901336669922,  -66.05901336669922,  -66.05901336669922,
            -68.9197006225586,   -77.02045440673828,  -77.02045440673828,
            -77.02045440673828,  -26.158037185668945, 89.0337142944336,
            89.0337142944336,    89.0337142944336,    -45.89653396606445,
            43.84803771972656,   43.84803771972656,   43.84803771972656,
            48.81806945800781,   51.79948425292969,   51.79948425292969,
            51.79948425292969,   41.94132614135742,   -1.1303654909133911,
            -1.1303654909133911, -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    90.2870101928711,    90.2870101928711,
            55.620765686035156,  44.92119598388672,   44.92119598388672,
            44.92119598388672,   56.828636169433594,  10.829925537109375,
            10.829925537109375,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, -37.696800231933594, -37.696800231933594,
            43.11057662963867,   0.9129875898361206,  0.9129875898361206,
            0.9129875898361206,  -7.699817180633545,  25.76774024963379,
            25.76774024963379,   25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [3, 4, 2, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 4D tensor and 2D indices explict options.axis=0',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [8, 1, 1, 3], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [0, 0, 7, 4],
          'descriptor': {shape: [2, 2], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [
          {'input': 'gatherInput'}, {'indices': 'gatherIndices'},
          {'options': {'axis': 0}}
        ],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -66.05901336669922, -68.9197006225586, -77.02045440673828,
            -66.05901336669922, -68.9197006225586, -77.02045440673828,
            -7.699817180633545, 25.76774024963379, 73.60064697265625,
            90.2870101928711, 55.620765686035156, 44.92119598388672
          ],
          'descriptor': {shape: [2, 2, 1, 1, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gather float32 5D tensor and 0D scalar indices options.axis=4',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [4, 2, 1, 1, 3], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [1],
          'descriptor': {shape: [], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [
          {'input': 'gatherInput'}, {'indices': 'gatherIndices'},
          {'options': {'axis': 4}}
        ],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -68.9197006225586, 89.0337142944336, 48.81806945800781,
            -1.1303654909133911, 55.620765686035156, 10.829925537109375,
            43.11057662963867, 25.76774024963379
          ],
          'descriptor': {shape: [4, 2, 1, 1], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'gather float32 2D tensor and int32 0D negative indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [2, 12], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [-2],
          'descriptor': {shape: [], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -66.05901336669922, -68.9197006225586, -77.02045440673828,
            -26.158037185668945, 89.0337142944336, -45.89653396606445,
            43.84803771972656, 48.81806945800781, 51.79948425292969,
            41.94132614135742, -1.1303654909133911, -50.42131042480469
          ],
          'descriptor': {shape: [12], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'gather float32 2D tensor and int32 0D out-of-bound positive indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [2, 12], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [10],
          'descriptor': {shape: [], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            90.2870101928711, 55.620765686035156, 44.92119598388672,
            56.828636169433594, 10.829925537109375, -19.693084716796875,
            -37.696800231933594, 43.11057662963867, 0.9129875898361206,
            -7.699817180633545, 25.76774024963379, 73.60064697265625
          ],
          'descriptor': {shape: [12], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'gather float32 2D tensor and int32 0D out-of-bound negative indices default options',
    'graph': {
      'inputs': {
        'gatherInput': {
          'data': [
            -66.05901336669922,  -68.9197006225586,   -77.02045440673828,
            -26.158037185668945, 89.0337142944336,    -45.89653396606445,
            43.84803771972656,   48.81806945800781,   51.79948425292969,
            41.94132614135742,   -1.1303654909133911, -50.42131042480469,
            90.2870101928711,    55.620765686035156,  44.92119598388672,
            56.828636169433594,  10.829925537109375,  -19.693084716796875,
            -37.696800231933594, 43.11057662963867,   0.9129875898361206,
            -7.699817180633545,  25.76774024963379,   73.60064697265625
          ],
          'descriptor': {shape: [2, 12], dataType: 'float32'}
        },
        'gatherIndices': {
          'data': [-10],
          'descriptor': {shape: [], dataType: 'int32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'gather',
        'arguments': [{'input': 'gatherInput'}, {'indices': 'gatherIndices'}],
        'outputs': 'gatherOutput'
      }],
      'expectedOutputs': {
        'gatherOutput': {
          'data': [
            -66.05901336669922, -68.9197006225586, -77.02045440673828,
            -26.158037185668945, 89.0337142944336, -45.89653396606445,
            43.84803771972656, 48.81806945800781, 51.79948425292969,
            41.94132614135742, -1.1303654909133911, -50.42131042480469
          ],
          'descriptor': {shape: [12], dataType: 'float32'}
        }
      }
    }
  }
];

if (navigator.ml) {
  gatherTests.forEach((test) => {
    webnn_conformance_test(
        buildAndExecuteGraph, getGatherPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
