const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const $list = $('#todo-list')
const $itemCountSpan = $('#item-count')
const $uncheckedCountSpan = $('#unchecked-count')

function newTodo() {
  const todoText = prompt("Enter a new TODO:") || "New TODO"
  const $todoContainer = $('<li>').addClass(classNames.TODO_ITEM)

  const $checkbox = $('<input>')
    .attr('type', 'checkbox')
    .addClass(classNames.TODO_CHECKBOX)
    .on('change', function() {
      $todoText.toggleClass('strikethrough', this.checked)
      updateUncheckedCount()
    })

  const $todoText = $('<span>')
    .addClass(classNames.TODO_TEXT)
    .text(todoText)

  const $deleteButton = $('<button>')
    .addClass(classNames.TODO_DELETE)
    .text('Delete')
    .on('click', function() {
      $todoContainer.remove()
      updateCounts()
    })

  $todoContainer.append($checkbox, $todoText, $deleteButton)
  $list.append($todoContainer)
  updateCounts()
}



function updateCounts() {
  const items = $list.children().length
  const uncheckedItems = $list.find(`.${classNames.TODO_CHECKBOX}:not(:checked)`).length

  $itemCountSpan.text(items)
  $uncheckedCountSpan.text(uncheckedItems)
}

function updateUncheckedCount() {
  const uncheckedItems = $list.find(`.${classNames.TODO_CHECKBOX}:not(:checked)`).length
  $uncheckedCountSpan.text(uncheckedItems)
}