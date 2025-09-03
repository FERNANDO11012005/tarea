import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./components/Cart/Cart";
import ContactModal from "./components/ContactModal/ContactModal";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import productsData from "./data/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Inicio");
  const [showCart, setShowCart] = useState(false); // controla modal carrito
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detecta cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filtrado por categoría
  const filteredProducts =
    activeCategory === "Inicio"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  // Agregar producto al carrito
  const addToCart = (product, quantity = 1) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  // Checkout
  const checkout = () => {
    if (cart.length === 0) {
      alert("🛒 Tu carrito está vacío");
      return;
    }
    alert("¡Gracias por tu compra!");
    setCart([]);
    setShowCart(false);
  };

  return (
    <div className="app">
      <Navbar onSelectCategory={setActiveCategory} active={activeCategory} />
      <main className="main">
        <h2>Bienvenido a MiTienda</h2>
        <section className="products">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </section>
      </main>

      {/* Carrito */}
      {isMobile ? (
        <>
          <FloatingButton
            onClick={() => setShowCart(!showCart)}
            title={`Carrito (${cart.length})`}
          >
            🛒
          </FloatingButton>
          {showCart && (
            <Cart
              cart={cart}
              checkout={checkout}
              removeFromCart={removeFromCart}
              onClose={() => setShowCart(false)}
            />
          )}
        </>
      ) : (
        <Cart
          cart={cart}
          checkout={checkout}
          removeFromCart={removeFromCart}
          onClose={() => setShowCart(false)}
        />
      )}

      {/* Botón flotante de contacto */}
      <FloatingButton onClick={() => setIsContactOpen(true)} title="Contacto" />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <Footer />
    </div>
  );
}

export default App;
