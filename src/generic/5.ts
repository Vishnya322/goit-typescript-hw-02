/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}
const stringKeyStringValue: KeyValuePair<string, string> = {
  key: "name",
  value: "John",
};

const numberKeyBooleanValue: KeyValuePair<number, boolean> = {
  key: 123,
  value: true,
};
export {};
