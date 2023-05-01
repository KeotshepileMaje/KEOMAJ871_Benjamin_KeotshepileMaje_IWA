import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";
import { TABLES,COLUMNS,state, createOrderData, updateDragging } from "./data.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}

//The help dialog
//Use the .show() or .close() method to allow the dialog element on Help to appear or get hiden.

const helpShow =html.help.overlay
const deleteHelp = html.help.cancel
const  helpButton = html.other.help

//Look for a way to write all conditions on one function
const handleHelpToggle = (event) => {
    helpShow.show()
}
const handleHelpToggleDelete = (event) => {
    helpShow.close()
}

helpButton.addEventListener('click', handleHelpToggle)
deleteHelp.addEventListener('click', handleHelpToggleDelete)

//Add Order

const  addOverlay = html.add.overlay

const handleAddToggle = () => {
    addOverlay.show()
}
const handleAddToggleCancel = () => {
    addOverlay.close()
}
html.other.add.addEventListener('click', handleAddToggle)
html.add.cancel.addEventListener('click', handleAddToggleCancel)

//Submit and add the order.

const handleAddSubmit = (event) => {
  event.preventDefault();

const order = { 
  title: html.add.title.value,
  table: html.add.table.value,
}

let orderData = createOrderData(order)
console.log(orderData)
const orderDetails = createOrderHtml(orderData)
console.log(orderDetails)
const displayOrder = html.other.grid.querySelector('[data-column="ordered"')
console.log(displayOrder)
html.add.form.reset()

displayOrder.innerHTML = orderDetails.innerHTML
addOverlay.close()
}
html.add.form.addEventListener('submit', handleAddSubmit)

//Edit order pop up
const dataEditOverlay = html.edit.overlay
const handleEditToggle = (event) => {
  dataEditOverlay.show()
}
html.other.grid.addEventListener('click', handleEditToggle)

const handleEditCancel = (event) => {
  dataEditOverlay.close()
}
html.edit.cancel.addEventListener('click', handleEditCancel)

//Edit order
const handleEditSubmit = (event) => {
  event.preventDefault();

  const orderEdit = { 
    title: html.edit.title.value,
    table: html.edit.table.value,
  }
  
  let orderDataEdit = createOrderData(orderEdit)
  console.log(orderDataEdit)
  const orderDetailsEdit = createOrderHtml(orderDataEdit)
  console.log(orderDetailsEdit)
  const displayOrderEdit = html.other.grid.querySelector('[data-column="ordered"')
  console.log(displayOrderEdit)
  
  displayOrderEdit.innerHTML = orderDetailsEdit.innerHTML
  dataEditOverlay.close()
  
}
html.edit.form.addEventListener('submit', handleEditSubmit)


//Delete the order
const handleDelete = (event) => {

  dataEditOverlay.close()
}

html.edit.delete.addEventListener('click', handleDelete)




for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}