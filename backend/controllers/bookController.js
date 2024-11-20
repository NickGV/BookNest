const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  try {
    const { title, author, genre, status } = req.body;
    const userId = req.user.id;

    const book = new Book({ title, author, genre, status, userId });
    await book.save();

    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: "Error al guardar el libro" });
  }
};

exports.getUserBooks = async (req, res) => {
  try {
    const books = await Book.find({ userId: req.user.id });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener libros" });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const book = await Book.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { status },
      { new: true }
    );

    if (!book) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar el libro" });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findOneAndDelete({ _id: id, userId: req.user.id });

    if (!book) return res.status(404).json({ error: "Libro no encontrado" });
    res.json({ message: "Libro eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
};
