import Util from "./utils"

class jsInteractive {
  jsToApp(type, tips, param, share) {
    if (Util.isIos()) {
      if(window.webkit && window.webkit.messageHandlers) {
        switch (type) {
          case 'getSteps':
            if(window.webkit.messageHandlers.getSteps) {
              window.webkit.messageHandlers.getSteps.postMessage({donateUrl: param})
            }
            break
          case 'openDoor':
            if(window.webkit.messageHandlers.openDoor) {
              window.webkit.messageHandlers.openDoor.postMessage()
            }
            break
          case 'verifyHouse':
            if(window.webkit.messageHandlers.verifyHouse) {
              window.webkit.messageHandlers.verifyHouse.postMessage()
            }
            break
          case 'payForHouse':
            if(window.webkit.messageHandlers.payHousePropertyFee) {
              window.webkit.messageHandlers.payHousePropertyFee.postMessage()
            }
            break
          case 'payForCar':
            if(window.webkit.messageHandlers.payCarPropertyFee) {
              window.webkit.messageHandlers.payCarPropertyFee.postMessage()
            }
            break
          case 'share':
            if(window.webkit.messageHandlers.shareimages) {
              window.webkit.messageHandlers.shareimages.postMessage({imagesUrl: param, thumbUrl: share})
            }
            break;
        }
      } else {
        tips()
      }
    } else if (Util.isAndroid()) {
      if (window.android) {
        switch (type) {
          case 'getSteps':
            if(window.android.openDonateStepH5) {
              window.android.openDonateStepH5(param)
            }
          break
          case 'openDoor':
            if(window.android.openDoor) {
              window.android.openDoor()
            }
            break
          case 'verifyHouse':
            if(window.android.verifyHouse) {
              window.android.verifyHouse()
            }
            break
          case 'payForHouse':
            if(window.android.payHousePropertyFee) {
              window.android.payHousePropertyFee()
            }
            break
          case 'payForCar':
            if(window.android.payCarPropertyFee) {
              window.android.payCarPropertyFee()
            }
            break
          case 'share':
          if(window.android.shareimages) {
            window.android.shareimages(param, share)
          }
          break;
        }
      } else {
        tips()
      }
    } else {
      tips()
    }
  }
}

export default new jsInteractive()
