import { calcStore } from '@/stores/calcStore';

export const PRECISION_MAX = 10;
// const MIN_NON_EXPONENTIAL = Math.pow(10, -PRECISION_MAX);
// const MAX_NON_EXPONENTIAL = Math.pow(10, PRECISION_MAX);
// const JS_DUMB_TOSTRING_EXP_THRESHOLD = 1E-6;

export class CalcController {

  static numberPressed(buttonNumber) {
    CalcController.stopRepeat();

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
          storePatch.result = parseFloat(buttonNumber.toPrecision(PRECISION_MAX));
          if (buttonNumber === 0) {
            storePatch.fakeZeroes++;
            CalcController.updateResult();
          } else {
            storePatch.fakeZeroes = 0;
            storePatch.result = storeState.result + buttonNumber / Math.pow(10, storeState.dotPosition);
          }
        }
      }
    }
    storePatch.opWasLast = false;
    storeState.$patch(storePatch);
    ;
  }

  static signPressed() {
    const storeState = calcStore();
    CalcController.stopRepeat();
    const storePatch = (storeState.result *= -1);
    storeState.$patch(storePatch);
  }

  static doOperation() {
    const storeState = calcStore();
    let newResult = storeState.subtotal;

    switch (storeState.lastOp) {
      case '+':
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
    return storePatch;
  }

  static calcOperationPressed(op) {
    const storeState = calcStore();
    const storePatch = storeState.opWasLast ?
      {} : CalcController.doOperation();
    storePatch.lastOp = op;
    storePatch.opWasLast = true;
    storePatch.dotPosition = null;
    storePatch.subtotal = null;
    if (storeState.repeatValue === null) {
      storePatch.subtotal = storeState.result;
    }
    storeState.$patch(storePatch);
  }
  static calcTotalPressed(op) {
    const storeState = calcStore();
    const storePatch = {};
    if ( storeState.repeatValue === null ) {
      if ( storeState.subtotal === null ) {
        return;
      }
      storePatch.repeatValue = storeState.result;
      CalcController.calcOperationPressed(op);
      storePatch.subtotal = null;
      // newState.opWasLast = null;
      // newState.lastOp = op;

    } else {
      storePatch.subtotal = storeState.result;
      storePatch.result = storeState.repeatValue;
      CalcController.calcOperationPressed(op);
      storePatch.subtotal = null;
    }
    storeState.$patch(storePatch);
  }

  static stopRepeat() {
    const storeState = calcStore();
    const storePatch = {};
    if (storeState.subtotal === null) {
      storePatch.lastOp = null;
    }
    storePatch.repeatValue = null;
    storeState.$patch(storePatch);
  }

  static memoryStorePressed() {
    const storeState = calcStore();
    const storePatch = { memory: storeState.result };
    storeState.$patch(storePatch);
  }

  static memoryRecallPressed() {
    const storeState = calcStore();
    if (storeState.memory !== null) {
      const storePatch = { result: storeState.memory };
      storeState.$patch(storePatch);
    }
  }

  static memoryAddPressed() {
    const storeState = calcStore();
    const storePatch = {
      memory: storeState.memory + storeState.result,
    };
    storeState.$patch(storePatch);
  }

  static memoryClearPressed() {
    const storeState = calcStore();
    const storePatch = { memory: null };
    storeState.$patch(storePatch);
  }

  static dotPressed() {
    const storeState = calcStore();
    CalcController.stopRepeat();
    if (storeState.opWasLast) {
      return;
    }
    if (storeState.dotPosition === null) {
      const storePatch = {
        dotPosition: 0,
      };
      storeState.$patch(storePatch);
    } else {
      const storePatch = {
        dotPosition: null,
      };
      storeState.$patch(storePatch);
    }
  }

  static calcClearPressed() {
    const storeState = calcStore();
    if (storeState.result === 0) {
      const storePatch = {
        subtotal: null,
        lastOp: null,
      };
      storeState.$patch(storePatch);
    } else {
      const storePatch = {
        result: 0,
        dotPosition: null,
      };
      storeState.$patch(storePatch);
    }
    if (storeState.subtotal === null) {
      const storePatch = {
        lastOp: null,
        fakeZeroes: 0,
        dotPosition: null,
      };
      storeState.$patch(storePatch);
    }
    CalcController.stopRepeat();
    const storePatch = {
      fakeZeroes: 0,
      dotPosition: null,
    };
    storeState.$patch(storePatch);
  };
}