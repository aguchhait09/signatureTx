/* eslint-disable */
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");
var firebaseConfig = {
    apiKey: "AIzaSyD8fJMGDoQY78oLcH8Bt8M4YgGPua9U1Uc",
    authDomain: "signaturerx-ext.firebaseapp.com",
    projectId: "signaturerx-ext",
    storageBucket: "signaturerx-ext.appspot.com",
    messagingSenderId: "726240336960",
    appId: "1:726240336960:web:57808c935d08edaf1813a5",
    measurementId: "G-C0G7VNRPQF"
};
//@ts-ignore
firebase === null || firebase === void 0 ? void 0 : firebase.initializeApp(firebaseConfig);
//@ts-ignore
var messaging = firebase === null || firebase === void 0 ? void 0 : firebase.messaging();
//add types
var NotificationDataPayloadTypeEnum;
(function (NotificationDataPayloadTypeEnum) {
    NotificationDataPayloadTypeEnum["order"] = "order";
})(NotificationDataPayloadTypeEnum || (NotificationDataPayloadTypeEnum = {}));
//add events
var NotificationDataPayloadEventEnum;
(function (NotificationDataPayloadEventEnum) {
    NotificationDataPayloadEventEnum["newOrder"] = "newOrder";
})(NotificationDataPayloadEventEnum || (NotificationDataPayloadEventEnum = {}));
var getNotificationUrl = function (data) {
    if ("type" in data && "event" in data) {
        var metadata = JSON.parse((data === null || data === void 0 ? void 0 : data.metadata) || "");
        if ((data === null || data === void 0 ? void 0 : data.type) === (NotificationDataPayloadTypeEnum === null || NotificationDataPayloadTypeEnum === void 0 ? void 0 : NotificationDataPayloadTypeEnum.order) &&
            (metadata === null || metadata === void 0 ? void 0 : metadata.pharmacyBranchId) &&
            (metadata === null || metadata === void 0 ? void 0 : metadata.orderMasterId)) {
            return "/dashboard/branch/".concat(metadata.pharmacyBranchId, "/order/details/").concat(metadata.orderMasterId);
        }
    }
    return null;
};
messaging === null || messaging === void 0 ? void 0 : messaging.onBackgroundMessage(function (payload) {
    var _a, _b;
    var notificationData = (payload === null || payload === void 0 ? void 0 : payload.notification) || (payload === null || payload === void 0 ? void 0 : payload.data);
    console.log("received background message payload ", payload, notificationData);
    if (!notificationData) {
        return;
    }
    var notificationTitle = (notificationData === null || notificationData === void 0 ? void 0 : notificationData.title) || "New notification";
    var notificationOptions = {
        body: (notificationData === null || notificationData === void 0 ? void 0 : notificationData.message) || (notificationData === null || notificationData === void 0 ? void 0 : notificationData.body),
        icon: (notificationData === null || notificationData === void 0 ? void 0 : notificationData.icon) || "/SmallTile.scale-125.png",
        vibrate: [200, 100, 200],
        image: notificationData === null || notificationData === void 0 ? void 0 : notificationData.image,
        data: notificationData
    };
    //@ts-ignore
    (_b = (_a = self === null || self === void 0 ? void 0 : self.registration) === null || _a === void 0 ? void 0 : _a.showNotification) === null || _b === void 0 ? void 0 : _b.call(_a, notificationTitle, notificationOptions);
});
self === null || self === void 0 ? void 0 : self.addEventListener("notificationclick", function (event) {
    var _a, _b, _c;
    //@ts-ignore
    (_a = event === null || event === void 0 ? void 0 : event.notification) === null || _a === void 0 ? void 0 : _a.close();
    //@ts-ignore
    var notificationUrl = getNotificationUrl((_b = event === null || event === void 0 ? void 0 : event.notification) === null || _b === void 0 ? void 0 : _b.data);
    //@ts-ignore
    event === null || event === void 0 ? void 0 : event.waitUntil(
    //@ts-ignore
    (_c = clients === null || clients === void 0 ? void 0 : clients.matchAll({
        type: "window"
    })) === null || _c === void 0 ? void 0 : _c.then(function (clientList) {
        for (var i = 0; i < (clientList === null || clientList === void 0 ? void 0 : clientList.length); i++) {
            var client = clientList[i];
            if ((client === null || client === void 0 ? void 0 : client.url) == notificationUrl && "focus" in client) {
                return client === null || client === void 0 ? void 0 : client.focus();
            }
        }
        //@ts-ignore
        if (clients === null || clients === void 0 ? void 0 : clients.openWindow) {
            //@ts-ignore
            return clients === null || clients === void 0 ? void 0 : clients.openWindow(notificationUrl);
        }
    }));
});
