Ví dụ theo chức năng
```markdown
src/
├── components/
│   ├── Button/
│   │   ├── index.jsx
│   │   └── style.css
│   ├── Form/
│   │   ├── index.jsx
│   │   └── style.css
│   └── ...
├── features/
│   ├── ProductList/
│   │   ├── components/
│   │   │   ├── ProductListItem/
│   │   │   │   ├── index.jsx
│   │   │   │   └── style.css
│   │   │   └── index.jsx
│   │   ├── services/
│   │   │   └── productService.js
│   │   ├── actions.js
│   │   ├── reducer.js
│   │   ├── saga.js
│   │   └── index.jsx
│   ├── ProductDetail/
│   │   ├── components/
│   │   │   ├── ProductDetailHeader/
│   │   │   │   ├── index.jsx
│   │   │   │   └── style.css
│   │   │   ├── ProductDetailDescription/
│   │   │   │   ├── index.jsx
│   │   │   │   └── style.css
│   │   │   └── index.jsx
│   │   ├── services/
│   │   │   └── productService.js
│   │   ├── actions.js
│   │   ├── reducer.js
│   │   ├── saga.js
│   │   └── index.jsx
│   └── ...
├── shared/
│   ├── utils/
│   │   └── ...
│   ├── constants/
│   │   └── ...
│   ├── api/
│   │   └── ...
│   └── ...
├── styles/
│   ├── global.css
│   └── ...
└── index.jsx
```

Trong ví dụ này, ta có ba thư mục chính: components, features, và shared. Thư mục components chứa các component được sử dụng trong dự án, thư mục shared chứa các thành phần được sử dụng chung trong toàn bộ dự án (ví dụ như các hằng số, utility functions, và các kết nối đến API), và thư mục features chứa các tính năng của dự án được chia thành các thư mục tương ứng.

Trong thư mục features, ta có thư mục ProductList và ProductDetail, đại diện cho hai tính năng của trang web. Mỗi thư mục này chứa các thành phần của tính năng tương ứng, bao gồm component, service, action, reducer, saga, và file index.jsx là file đầu tiên được import khi ta sử dụng tính năng này.

ví dụ theo component
```markdown
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.css
│   ├── Form/
│   │   ├── Form.jsx
│   │   └── Form.css
│   └── ...
├── utils/
│   └── ...
└── index.jsx
```
Trong ví dụ này, ta có thư mục components chứa các component được sử dụng trong dự án. Mỗi component được chia thành một thư mục tương ứng với tên của nó, ví dụ như Button và Form. Trong mỗi thư mục component này, ta có hai file jsx và css, tương ứng với logic của component và giao diện của nó. Nếu một component có các thành phần khác như hình ảnh, thì chúng có thể được đặt trong cùng thư mục với file jsx và css tương ứng.

Ngoài ra, ta có thư mục utils để chứa các utility function được sử dụng trong toàn bộ dự án, và file index.jsx là file đầu tiên được import khi ta sử dụng dự án này.

Ví dụ theo module
```markdown
src/
├── auth/
│   ├── components/
│   │   ├── LoginForm/
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   └── ...
│   ├── pages/
│   │   ├── LoginPage/
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   └── ...
│   ├── store/
│   │   ├── authSlice.js
│   │   ├── authActions.js
│   │   └── ...
│   └── ...
├── cart/
│   ├── components/
│   │   ├── CartItem/
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   └── ...
│   ├── pages/
│   │   ├── CartPage/
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   └── ...
│   ├── store/
│   │   ├── cartSlice.js
│   │   ├── cartActions.js
│   │   └── ...
│   └── ...
├── common/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage/
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   └── ...
│   ├── store/
│   │   ├── commonSlice.js
│   │   ├── commonActions.js
│   │   └── ...
│   └── ...
├── utils/
│   └── ...
└── App.jsx
```

Trong ví dụ này, ta có thư mục auth, cart, và common đại diện cho các module khác nhau của ứng dụng. Mỗi module được chia thành các thư mục tương ứng với các thành phần quan trọng của nó, bao gồm components, pages, và store.

Thư mục components chứa các thành phần tái sử dụng như LoginForm, CartItem, và Navbar. Thư mục pages chứa các trang được sử dụng trong module, ví dụ như LoginPage, CartPage, và HomePage. Thư mục store chứa các file liên quan đến quản lý state của module, ví dụ như cartSlice.js và cartActions.js.

Ngoài ra, ta có thư mục utils để chứa các utility function được sử dụng trong toàn bộ dự án, và file App.jsx là file đầu tiên được import khi ta sử dụng dự án này.
