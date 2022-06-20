import AppRoutes from './routes'

import LoginContext from './contexts/login'

export default function App() {
  return (
    <LoginContext>
      <AppRoutes />
    </LoginContext>
  )
}
