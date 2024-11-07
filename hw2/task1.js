class Library {
  #books = [];

  constructor (listOfBooks) {
    try {
      if (listOfBooks.length === 0) {
        throw new Error('Нет книг для передачи в библиотеку!')
      } else {
        listOfBooks.forEach(book => {
          if (this.#books.includes(book)) {
            throw new Error(`В списке книг есть дубликаты: "${book}"!`)
          } else {
            this.#books.push(book)
            return this.#books
          }
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  get allBooks () {
    return this.#books
  }

  addBook (title) {
    try {
      if (this.#books.includes(title)) {
        throw new Error(`Книга "${title}" уже существует в списке!`)
      } else {
        this.#books.push(title)
        return this.#books
      }
    } catch (error) {
      console.error(error)
    }
  }

  removeBook (title) {
    try {
      if (this.#books.includes(title)) {
        this.#books = this.#books.filter(bookTitle => bookTitle !== title)
        console.log(`Обновленный список книг: ${this.#books}`)
        return this.#books
      } else {
        throw new Error(`Книги "${title}" нет в списке!`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  hasBook(title) {
    if (this.#books.includes(title)) {
      return true
    } else {
      return false
    }
  }
}

const library = new Library(["Лабиринт отражений", "Фальшивые зеркала","Прозрачные витражи"])

console.log(library.allBooks)
