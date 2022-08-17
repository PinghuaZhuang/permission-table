import random from 'lodash/random';
import { faker } from '@faker-js/faker';

// faker.setLocale('zh_CN');

let uid = 0;

function createList(pid, level = 0) {
  const nextLevel = level + 1;
  const id = uid++;
  const childrenList =
    level >= 3
      ? []
      : Array.from({ length: random(1, 5) }).map(() =>
          createList(id, nextLevel),
        );
  return {
    id,
    name: faker.name.firstName() + faker.name.lastName(),
    pid,
    childList: childrenList,
  };
}

export default new Array(random(5, 15)).fill(0).map(() => createList(0));
