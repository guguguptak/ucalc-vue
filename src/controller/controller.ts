import { calcStore } from '@/stores/calcStore';

// export const CalcController = {
//   id: 'CalcController',
//   methods: {
//     signPressed() {
//       const calcStore2 = calcStore();
//       // CalcController.stopRepeat();
//       const patch = {
//         result: calcStore().result *= -1,
//       };
//       calcStore2.$patch(patch);
//     },
//   },
// };
export const PRECISION_MAX = 10;
// const MIN_NON_EXPONENTIAL = Math.pow(10, -PRECISION_MAX);
// const MAX_NON_EXPONENTIAL = Math.pow(10, PRECISION_MAX);
// const JS_DUMB_TOSTRING_EXP_THRESHOLD = 1E-6;

export class CalcController {
  // static MemoryView() {
  //   const calcStore2 = calcStore();
  //   const patch = {
  //     memory: 'dupa',
  //   };
  //   calcStore2.$patch(patch);
  // };
  static numberPressed(buttonNr) {
    const storeState = calcStore();
    let storePatch = { result: buttonNr };
    storePatch.result = storeState.result * 10 + buttonNr;
    storeState.$patch(storePatch);
  };
  static numberHandlePressed(buttonNumber) {
    // CalcController.stopRepeat();

    const storeState = calcStore();
    let storePatch = { result: buttonNumber };

    if (storeState.opWasLast) {
      storePatch.result = buttonNumber;
    } else {
      if (storeState.result < 0 || Object.is(storeState.result, -0)) {
        buttonNumber *= -1;
      }
      if (storeState.dotPosition === null) {
        storePatch.fakeZeroes = 0;
        storePatch.result = storeState.result * 10 + buttonNumber;
      } else {//TODO dotPosition;;
        if (storeState.dotPosition < PRECISION_MAX) {
          storeState.dotPosition++;
          storePatch.dotPosition = storeState.dotPosition;
          // newState = { state: state.dotPosition++, }; //TODO:why?? (both versions are worked but why?)
          // newState.result = parseFloat( buttonNumber.toPrecision( PRECISION_MAX ) );
          if (buttonNumber === 0) {
            storePatch.fakeZeroes++;
            CalcController.updateResult();
          } else {
            storePatch.fakeZeroes = 0;
            storePatch.result = storeState.result + buttonNumber / Math.pow(10, storeState.dotPosition);
          }
          //     // TODO <-if it's necessary something else this one line above
          // }
        }
      }
    }
    storePatch.opWasLast = false;
    storeState.$patch(storePatch);
    ;
  }

  static signPressed() {
    const storeState = calcStore();
    // CalcController.stopRepeat();
    const storePatch = storeState.result *= -1;
    storeState.$patch(storePatch);
  }

  static doOperation() {
    const storeState = calcStore();
    let newResult = storeState.subtotal;
    switch (storeState.lastOp) {
      case '+' :
        newResult += storeState.result;
        break;
      case '-':
        newResult -= storeState.result;
        break;
      case '*':
        newResult *= storeState.result;
        break;
      case '/':
        newResult /= storeState.result;
        break;
      case null:
        break;
      default:
        throw new Error('invalid operation');
    }
    const storePatch = {
      result: newResult,
      // lastOp: null,
      opWasLast: true,
      dotPosition: null,
      fakeZeroes: 0,
    };
    storeState.$patch(storePatch);
    // return storePatch;
  }

  // static calcOperationPressed(op) {
  //   const storeState = calcStore();
  //   const storePatch = storeState.opWasLast ?
  //     {
  //       lastOp: op,
  //       opWasLast: true,
  //       dotPosition: null,
  //     } : CalcController.doOperation();
  //   // TODO problems with expected values after operation (calcOperationPressed)
  //   // newState.subtotal = null;
  //   //newState.repeatValue = state.result;
  //   if (storeState.repeatValue === null) {
  //     newState.subtotal = storeState.result;
  //   }
  //   storeState.$patch(storePatch);
  // }

  static memoryStorePressed() {
    const storeState = calcStore();
    const storePatch = { memory: storeState.result };
    storeState.$patch(storePatch);
  }

  static memoryRecallPressed() {
    const storeState = calcStore();
    if (storeState.memory !== null) {
      let storePatch = { result: storeState.memory };
      storeState.$patch(storePatch);
    }
  }

  static memoryAddPressed() {
    const storeState = calcStore();
    let storePatch = {
      memory: storeState.memory + storeState.result,
    };
    storeState.$patch(storePatch);
  }

  static memoryClearPressed() {
    const storeState = calcStore();
    let storePatch = { memory: null };
    storeState.$patch(storePatch);
  }

  static dotPressed() {
    const storeState = calcStore();
    // CalcController.stopRepeat();
    if (storeState.opWasLast) {
      return;
    }
    if (storeState.dotPosition === null) {
      let storePatch = {
        dotPosition: 0,
      };
      storeState.$patch(storePatch);
    }else{
      let storePatch = {
        dotPosition: null,
      };
      storeState.$patch(storePatch);
    }
  }

  static calcClearPressed() {
    const storeState = calcStore();
    if (storeState.result !== 0) {
      const storePatch = {
        result: 0,
      };
      storeState.$patch(storePatch);
    }
    ;
  }

  //TODO:rest of it
}