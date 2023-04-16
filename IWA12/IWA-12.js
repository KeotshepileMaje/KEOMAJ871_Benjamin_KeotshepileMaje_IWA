const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = document.querySelector("#book1");

const reserve1 = book1.querySelector(".reserve");
const checkout1 = book1.querySelector(".checkout");
const checkin1 = book1.querySelector(".checkin");
const status1 = book1.querySelector(".status");

reserve1.enabled = STATUS_MAP.overdue.canReserve;
checkout1.enabled = STATUS_MAP.overdue.canCheckout;
checkin1.enabled = STATUS_MAP.overdue.canCheckIn;
status1.style.color = STATUS_MAP.overdue.color;

reserve1.style.color = reserve1.enabled ? "black" : "gray";
checkout1.style.color = checkout1.enabled ? "black" : "gray";
checkin1.style.color = checkin1.enabled ? "black" : "gray";

const book2 = document.querySelector("#book2");

const reserve2 = book2.querySelector(".reserve");
const checkout2 = book2.querySelector(".checkout");
const checkin2 = book2.querySelector(".checkin");
const status2 = book2.querySelector(".status");

reserve2.enabled = STATUS_MAP.reserved.canReserve;
checkout2.enabled = STATUS_MAP.reserved.canCheckout;
checkin2.enabled = STATUS_MAP.reserved.canCheckIn;
status2.style.color = STATUS_MAP.reserved.color;

reserve2.style.color = reserve2.enabled ? "black" : "gray";
checkout2.style.color = checkout2.enabled ? "black" : "gray";
checkin2.style.color = checkin2.enabled ? "black" : "gray";

const book3 = document.querySelector("#book3");

const reserve3 = book3.querySelector(".reserve");
const checkout3 = book3.querySelector(".checkout");
const checkin3 = book3.querySelector(".checkin");
const status3 = book3.querySelector(".status");

reserve3.enabled = STATUS_MAP.shelf.canReserve;
checkout3.enabled = STATUS_MAP.shelf.canCheckout;
checkin3.enabled = STATUS_MAP.shelf.canCheckIn;
status3.style.color = STATUS_MAP.shelf.color;

reserve3.style.color = reserve3.enabled ? "black" : "gray";
checkout3.style.color = checkout3.enabled ? "black" : "gray";
checkin3.style.color = checkin3.enabled ? "black" : "gray";




