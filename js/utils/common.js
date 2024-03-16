const isEscapeKey = (evt) => evt.key === 'Escape';

const getObjectById = (data, id) => data.find((item) => item.id === Number(id));

const findTemplate = (id) => {
  const template = document.getElementById(id);

  if(!template) {
    throw new Error(`Template not found: ${id}`);
  }

  if(!(template instanceof HTMLTemplateElement)) {
    throw new Error(`Element is not a template: ${id}`);
  }

  return template.content.firstElementChild;
};

const renderItems = (items, createItem, container) => {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => fragment.append(createItem(item)));
  container.append(fragment);
};

const isItemsUnique = (array) => new Set(array).size === array.length;

const getArray = (string) => string.trim().split(' ');

export { isEscapeKey, getObjectById, findTemplate, renderItems, isItemsUnique, getArray };
