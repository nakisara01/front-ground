import { useUserStore } from "./store/useUserStore"

function App() {
  const { name, isLoggedIn, login, logout } = useUserStore()

  return (
    <div style={{ padding: 40 }}>
      <h1>Daily Frontend Practice</h1>

      {isLoggedIn ? (
        <>
          <p>{name}님 환영합니다</p>
          <button onClick={logout}>로그아웃</button>
        </>
      ) : (
        <button onClick={() => login("조이드")}>로그인</button>
      )}
    </div>
  )
}

export default App
