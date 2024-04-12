/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(
  objA: Partial<T>,
  objB: Partial<U>
): Partial<T> & Partial<U> {
  return Object.assign({}, objA, objB);
}

export {};
