const cooks = new Map()
cooks.set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты")

console.log(`Виктор - специализация: ${cooks.get("Виктор")}`)
console.log(`Ольга - специализация: ${cooks.get("Ольга")}`)
console.log(`Дмитрий - специализация: ${cooks.get("Дмитрий")}`)
console.log('---')

const dishes = new Map()
dishes.set("Пицца 'Маргарита'", "Виктор")
    .set("Пицца 'Пепперони'", "Виктор")
    .set("Суши 'Филадельфия'", "Ольга")
    .set("Суши 'Калифорния'", "Ольга")
    .set("Тирамису", "Дмитрий")
    .set("Чизкейк", "Дмитрий")

console.log(`Пиццу 'Маргарита' приготовил повар: ${dishes.get("Пицца 'Маргарита'")}`)
console.log(`Суши 'Калифорния' приготовил повар: ${dishes.get("Суши 'Калифорния'")}`)
console.log(`Чизкейк приготовил повар: ${dishes.get("Чизкейк")}`)
console.log('---')

const client1 = { name: 'Алексей'}
const client2 = { name: 'Мария'}
const client3 = { name: 'Ирина'}


const clientOrder1 = new Set()
clientOrder1.add("Пицца 'Пепперони'")
            .add("Тирамису")

const clientOrder2 = new Set()
clientOrder2.add("Суши 'Калифорния'")
            .add("Пицца 'Маргарита'")

const clientOrder3 = new Set()
clientOrder3.add("Чизкейк")

const orders = new Map()
orders.set(client1, clientOrder1)
    .set(client2, clientOrder2)
    .set(client3, clientOrder3)

for (const client of orders.keys()) {
    console.log(`Клиент ${client.name} заказал(а): ${[...orders.get(client)]}`)
}
