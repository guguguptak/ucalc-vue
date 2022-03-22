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

export class CalcController {
  // static MemoryView() {
  //   const calcStore2 = calcStore();
  //   const patch = {
  //     memory: 'dupa',
  //   };
  //   calcStore2.$patch(patch);
  // };

  static signPressed() {
    const newCalcStore = calcStore();
    // CalcController.stopRepeat();
    const patch = {
      result: calcStore().result *= -1,
    };
    newCalcStore.$patch(patch);
  }

// TODO: static memoryStorePressed() {
//     const newCalcStore = calcStore();
//     let patch = { memory: newCalcStore.result };
//     newCalcStore.$patch(patch);
//
//   }
  static calcClearPressed() {
    if (calcStore().result !== 0) {
      const patch = {
        result: 0,
      };
      calcStore().$patch(patch);
    };
  }
}