// META: title=test WebNN API softplus operation
// META: global=window
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-softplus-method
// Compute the softplus function of the input tensor. The calculation follows
// the expression ln(1 + exp(x)).
//
// MLOperand softplus(MLOperand input);

const softplusTests = [
  {
    'name': 'softplus float32 1D constant tensor',
    'graph': {
      'inputs': {
        'softplusInput': {
          'data': [
            5.626614570617676,   5.167487144470215, 4.0146355628967285,
            9.480032920837402,   9.989937782287598, 7.065441131591797,
            2.132680892944336,   8.187150955200195, 5.169976234436035,
            2.1044998168945312,  3.523329496383667, 4.136340618133545,
            1.741871953010559,   5.145224094390869, 5.015515327453613,
            0.04590393602848053, 2.957089900970459, 3.959244728088379,
            5.517927169799805,   7.192322254180908, 8.764925003051758,
            1.373470425605774,   8.930668830871582, 8.660283088684082
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'softplus',
        'arguments': [{'input': 'softplusInput'}],
        'outputs': 'softplusOutput'
      }],
      'expectedOutputs': {
        'softplusOutput': {
          'data': [
            5.630208969116211,  5.1731696128845215, 4.032524108886719,
            9.480109214782715,  9.989983558654785,  7.0662946701049805,
            2.2446866035461426, 8.187429428100586,  5.175644874572754,
            2.219529390335083,  3.552403688430786,  4.152195453643799,
            1.903303623199463,  5.151034355163574,  5.022127628326416,
            0.7163625359535217, 3.007754325866699,  3.978142499923706,
            5.521933078765869,  7.1930742263793945, 8.765081405639648,
            1.5991919040679932, 8.930801391601562,  8.660456657409668
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'softplus float32 0D tensor',
    'graph': {
      'inputs': {
        'softplusInput': {
          'data': [5.626614570617676],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'softplus',
        'arguments': [{'input': 'softplusInput'}],
        'outputs': 'softplusOutput'
      }],
      'expectedOutputs': {
        'softplusOutput': {
          'data': [5.630208969116211],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'softplus float32 1D tensor',
    'graph': {
      'inputs': {
        'softplusInput': {
          'data': [
            5.626614570617676,   5.167487144470215, 4.0146355628967285,
            9.480032920837402,   9.989937782287598, 7.065441131591797,
            2.132680892944336,   8.187150955200195, 5.169976234436035,
            2.1044998168945312,  3.523329496383667, 4.136340618133545,
            1.741871953010559,   5.145224094390869, 5.015515327453613,
            0.04590393602848053, 2.957089900970459, 3.959244728088379,
            5.517927169799805,   7.192322254180908, 8.764925003051758,
            1.373470425605774,   8.930668830871582, 8.660283088684082
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'softplus',
        'arguments': [{'input': 'softplusInput'}],
        'outputs': 'softplusOutput'
      }],
      'expectedOutputs': {
        'softplusOutput': {
          'data': [
            5.630208969116211,  5.1731696128845215, 4.032524108886719,
            9.480109214782715,  9.989983558654785,  7.0662946701049805,
            2.2446866035461426, 8.187429428100586,  5.175644874572754,
            2.219529390335083,  3.552403688430786,  4.152195453643799,
            1.903303623199463,  5.151034355163574,  5.022127628326416,
            0.7163625359535217, 3.007754325866699,  3.978142499923706,
            5.521933078765869,  7.1930742263793945, 8.765081405639648,
            1.5991919040679932, 8.930801391601562,  8.660456657409668
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'softplus float32 2D tensor',
    'graph': {
      'inputs': {
        'softplusInput': {
          'data': [
            5.626614570617676,   5.167487144470215, 4.0146355628967285,
            9.480032920837402,   9.989937782287598, 7.065441131591797,
            2.132680892944336,   8.187150955200195, 5.169976234436035,
            2.1044998168945312,  3.523329496383667, 4.136340618133545,
            1.741871953010559,   5.145224094390869, 5.015515327453613,
            0.04590393602848053, 2.957089900970459, 3.959244728088379,
            5.517927169799805,   7.192322254180908, 8.764925003051758,
            1.373470425605774,   8.930668830871582, 8.660283088684082
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'softplus',
        'arguments': [{'input': 'softplusInput'}],
        'outputs': 'softplusOutput'
      }],
      'expectedOutputs': {
        'softplusOutput': {
          'data': [
            5.630208969116211,  5.1731696128845215, 4.032524108886719,
            9.480109214782715,  9.989983558654785,  7.0662946701049805,
            2.2446866035461426, 8.187429428100586,  5.175644874572754,
            2.219529390335083,  3.552403688430786,  4.152195453643799,
            1.903303623199463,  5.151034355163574,  5.022127628326416,
            0.7163625359535217, 3.007754325866699,  3.978142499923706,
            5.521933078765869,  7.1930742263793945, 8.765081405639648,
            1.5991919040679932, 8.930801391601562,  8.660456657409668
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'softplus float32 3D tensor',
    'graph': {
      'inputs': {
        'softplusInput': {
          'data': [
            5.626614570617676,   5.167487144470215, 4.0146355628967285,
            9.480032920837402,   9.989937782287598, 7.065441131591797,
            2.132680892944336,   8.187150955200195, 5.169976234436035,
            2.1044998168945312,  3.523329496383667, 4.136340618133545,
            1.741871953010559,   5.145224094390869, 5.015515327453613,
            0.04590393602848053, 2.957089900970459, 3.959244728088379,
            5.517927169799805,   7.192322254180908, 8.764925003051758,
            1.373470425605774,   8.930668830871582, 8.660283088684082
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'softplus',
        'arguments': [{'input': 'softplusInput'}],
        'outputs': 'softplusOutput'
      }],
      'expectedOutputs': {
        'softplusOutput': {
          'data': [
            5.630208969116211,  5.1731696128845215, 4.032524108886719,
            9.480109214782715,  9.989983558654785,  7.0662946701049805,
            2.2446866035461426, 8.187429428100586,  5.175644874572754,
            2.219529390335083,  3.552403688430786,  4.152195453643799,
            1.903303623199463,  5.151034355163574,  5.022127628326416,
            0.7163625359535217, 3.007754325866699,  3.978142499923706,
            5.521933078765869,  7.1930742263793945, 8.765081405639648,
            1.5991919040679932, 8.930801391601562,  8.660456657409668
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'softplus float32 4D tensor',
    'graph': {
      'inputs': {
        'softplusInput': {
          'data': [
            5.626614570617676,   5.167487144470215, 4.0146355628967285,
            9.480032920837402,   9.989937782287598, 7.065441131591797,
            2.132680892944336,   8.187150955200195, 5.169976234436035,
            2.1044998168945312,  3.523329496383667, 4.136340618133545,
            1.741871953010559,   5.145224094390869, 5.015515327453613,
            0.04590393602848053, 2.957089900970459, 3.959244728088379,
            5.517927169799805,   7.192322254180908, 8.764925003051758,
            1.373470425605774,   8.930668830871582, 8.660283088684082
          ],
          'descriptor': {shape: [1, 2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'softplus',
        'arguments': [{'input': 'softplusInput'}],
        'outputs': 'softplusOutput'
      }],
      'expectedOutputs': {
        'softplusOutput': {
          'data': [
            5.630208969116211,  5.1731696128845215, 4.032524108886719,
            9.480109214782715,  9.989983558654785,  7.0662946701049805,
            2.2446866035461426, 8.187429428100586,  5.175644874572754,
            2.219529390335083,  3.552403688430786,  4.152195453643799,
            1.903303623199463,  5.151034355163574,  5.022127628326416,
            0.7163625359535217, 3.007754325866699,  3.978142499923706,
            5.521933078765869,  7.1930742263793945, 8.765081405639648,
            1.5991919040679932, 8.930801391601562,  8.660456657409668
          ],
          'descriptor': {shape: [1, 2, 3, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'softplus float32 5D tensor',
    'graph': {
      'inputs': {
        'softplusInput': {
          'data': [
            5.626614570617676,   5.167487144470215, 4.0146355628967285,
            9.480032920837402,   9.989937782287598, 7.065441131591797,
            2.132680892944336,   8.187150955200195, 5.169976234436035,
            2.1044998168945312,  3.523329496383667, 4.136340618133545,
            1.741871953010559,   5.145224094390869, 5.015515327453613,
            0.04590393602848053, 2.957089900970459, 3.959244728088379,
            5.517927169799805,   7.192322254180908, 8.764925003051758,
            1.373470425605774,   8.930668830871582, 8.660283088684082
          ],
          'descriptor': {shape: [1, 2, 1, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'softplus',
        'arguments': [{'input': 'softplusInput'}],
        'outputs': 'softplusOutput'
      }],
      'expectedOutputs': {
        'softplusOutput': {
          'data': [
            5.630208969116211,  5.1731696128845215, 4.032524108886719,
            9.480109214782715,  9.989983558654785,  7.0662946701049805,
            2.2446866035461426, 8.187429428100586,  5.175644874572754,
            2.219529390335083,  3.552403688430786,  4.152195453643799,
            1.903303623199463,  5.151034355163574,  5.022127628326416,
            0.7163625359535217, 3.007754325866699,  3.978142499923706,
            5.521933078765869,  7.1930742263793945, 8.765081405639648,
            1.5991919040679932, 8.930801391601562,  8.660456657409668
          ],
          'descriptor': {shape: [1, 2, 1, 3, 4], dataType: 'float32'}
        }
      }
    }
  }
];

if (navigator.ml) {
  softplusTests.forEach((test) => {
    webnn_conformance_test(buildAndExecuteGraph, getPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
