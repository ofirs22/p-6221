
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { Home } from './pages/front/Home';
import About from './pages/front/About';
import Products from './pages/front/Products';
import Packages from './pages/front/Packages';
import Shop from './pages/front/Shop';
import { BusinessRegistrationForm } from './pages/front/BusinessRegistrationForm';
import PreferencesRestrictions from './components/front/questionaire/PrefernceRestrictions';
import AllergyQuestion from './components/front/questionaire/AllergyQuestion';
import ShippingQuestion from './components/front/questionaire/ShippingQuestion';
import Main from './pages/backoffice/Main';
import ProductDetail from './pages/front/ProductDetail';
import Cart from './pages/front/Cart';
import { CheckoutForm } from './components/front/checkout/CheckoutForm';
import { PaymentForm } from './components/front/checkout/PaymentForm';
import OredrConfirmation from './components/front/checkout/OrderConfirmation';
import Tracking from './pages/front/Tracking';
import { UserArea } from './pages/front/UserArea';

const AppRoutes: React.FC = () => {
  const userId = "temp-user-id";
  //
  return (
    <Layout userId={userId}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserArea />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/checkout/payment" element={<PaymentForm />} />
        <Route path="/checkout/confirmation" element={<OredrConfirmation />} />
        <Route path="/checkout/tracking" element={<Tracking />} />
        <Route path="/partners" element={<BusinessRegistrationForm />} />
        <Route path="/preferences" element={<PreferencesRestrictions />} />
        <Route path="/preferences/allergies" element={<AllergyQuestion />} />
        <Route path="/preferences/shipping" element={<ShippingQuestion />} />
        <Route path="/backoffice/main" element={<Main />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='bg-[#f4f5f5]'>
          <AppRoutes />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
