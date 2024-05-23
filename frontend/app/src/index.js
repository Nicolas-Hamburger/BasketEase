import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import Home from './pages/home/home';
import CreateInventory from './roles/admin/inventory/CreateInventory';
import ListInventory from './roles/admin/inventory/ListInventory';
import CreateUser from './roles/admin/users/CreateUser';
import ListUser from './roles/admin/users/ListUser';
import CreateSale from './roles/admin/sales/CreateSale';
import ListSale from './roles/admin/sales/ListSale';
import CreateProduct from './roles/admin/products/CreateProduct';
import ListProduct from './roles/admin/products/ListProduct';
import ListInventoryStandard from './roles/standard/inventory/ListInventory';
import CreateProductStandard from './roles/standard/products/CreateProduct';
import ListProductStandard from './roles/standard/products/ListProduct';
import CreateSaleStandard from './roles/standard/sales/CreateSale';
import ListSaleStandard from './roles/standard/sales/ListSale';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/inventory/create" element={<CreateInventory />} />
        <Route path="/admin/inventory/list" element={<ListInventory />} />
        <Route path="/admin/users/create" element={<CreateUser />} />
        <Route path="/admin/users/list" element={<ListUser />} />
        <Route path="/admin/sales/create" element={<CreateSale />} />
        <Route path="/admin/sales/list" element={<ListSale />} />
        <Route path="/admin/products/create" element={<CreateProduct />} />
        <Route path="/admin/products/list" element={<ListProduct />} />
        <Route path="/standard/inventory/list" element={<ListInventoryStandard />} />
        <Route path="/standard/products/create" element={<CreateProductStandard />} />
        <Route path="/standard/products/list" element={<ListProductStandard />} />
        <Route path="/standard/sales/create" element={<CreateSaleStandard />} />
        <Route path="/standard/sales/list" element={<ListSaleStandard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
