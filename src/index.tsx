import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './app/App'

import 'shared/config/routeConfig/i18n/i18n'
import { Provider } from 'react-redux'
import { setupStore } from 'shared/store/store'

const container = document.getElementById('root');
const root = createRoot(container);
const store = setupStore();

root.render(
<BrowserRouter>
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
  </BrowserRouter>,
)

