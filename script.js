const books = [
    {
      name: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Romance",
      price: 399,
      summary: "A young shepherd’s journey to fulfill his dream.",
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      price: 499,
      summary: "The magical journey of a boy wizard.",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg"
    },
    {
      name: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      price: 299,
      summary: "Tiny changes that lead to big results.",
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
    },
    {
      name: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      price: 549,
      summary: "A sci-fi epic on the desert planet Arrakis.",
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/71ff-WwVvbL._SL1500_.jpg"
    },
    {
      name: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Mystery",
      price: 379,
      summary: "A psychological thriller about a silent woman.",
      rating: 4.3,
      image: "https://m.media-amazon.com/images/I/81JJPDNlxSL._SL1500_.jpg"
    },
    {
      name: "The Power of Now",
      author: "Eckhart Tolle",
      genre: "Self-Help",
      price: 320,
      summary: "Living in the present moment.",
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/71I6MaZsCcL._SL1500_.jpg"
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      price: 250,
      summary: "A classic love story with wit and irony.",
      rating: 4.2,
      image: "https://m.media-amazon.com/images/I/91fDvMK+aEL._SL1500_.jpg"
    },
    {
      name: "1984",
      author: "George Orwell",
      genre: "Sci-Fi",
      price: 340,
      summary: "A dystopian future controlled by Big Brother.",
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/91qK2DSAXSL._SL1500_.jpg"
    },
    {
      name: "Gone Girl",
      author: "Gillian Flynn",
      genre: "Mystery",
      price: 390,
      summary: "A suspenseful tale of a missing wife.",
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/41PgeElAGcL.jpg"
    }
  ];
  
  let cart = [];
  
  function displayBooks() {
    const bookList = document.getElementById('bookList');
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value;
    bookList.innerHTML = '';
    books
      .filter(book => 
        (genreFilter === 'All' || book.genre === genreFilter) &&
        book.name.toLowerCase().includes(searchTerm)
      )
      .forEach(book => {
        const bookEl = document.createElement('div');
        bookEl.className = 'book';
        bookEl.innerHTML = `
          <img src="${book.image}" alt="${book.name}" />
          <h3>${book.name}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p><strong>Price:</strong> ₹${book.price}</p>
          <p>${book.summary}</p>
          <p class="stars">${'★'.repeat(Math.round(book.rating))} ${book.rating}/5</p>
          <button onclick='addToCart("${book.name}")'>Add to Cart</button>
        `;
        bookList.appendChild(bookEl);
      });
  }
  
  function addToCart(bookName) {
    const book = books.find(b => b.name === bookName);
    cart.push(book);
    updateCart();
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');
    cartItems.innerHTML = '';
    let totalPrice = 0;
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = ` 
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(cartItem);
      totalPrice += item.price;
    });
    total.textContent = totalPrice;
  }
  
  document.getElementById('searchBar').addEventListener('input', displayBooks);
  document.getElementById('genreFilter').addEventListener('change', displayBooks);
  
  displayBooks();
  