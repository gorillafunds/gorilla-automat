import * as actions from "./_actions"

export const states = {
  connect: {
    on: {
      NEXT: {
        target: "selectShop",
        actions: actions.finishConnect,
      },
    },
  },
  selectShop: {
    on: {
      NEXT: {
        target: "setup",
        actions: actions.finishSelectShop,
      },
    },
  },
  setup: {
    on: {
      NEXT: {
        target: "upload",
        actions: actions.finishSetup,
      },
    },
  },
  upload: {
    on: {
      NEXT: "uploadProcess",
    },
  },
  uploadProcess: {
    on: {
      NEXT: {
        target: "mintConfirm",
        actions: actions.finishUpload,
      },
      ERROR: "uploadError",
    },
  },
  uploadError: {
    on: {
      PREV: "upload",
    },
  },
  mintConfirm: {
    on: {
      NEXT: "mintStart",
      PREV: {
        target: "setup",
        actions: actions.goBackToSetup,
      },
    },
  },
  mintStart: {
    on: {
      NEXT: "mintProcess",
    },
  },
  mintProcess: {
    on: {
      NEXT: {
        target: "finished",
        actions: actions.finishProcess,
      },
      ERROR: "mintError",
    },
  },
  mintError: {
    on: {
      PREV: "mintProcess",
    },
  },
  finished: {},
}
