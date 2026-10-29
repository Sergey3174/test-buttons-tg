import "./App.css";

// Меняй ссылки здесь для тестирования.
const OLD_URL = "tg://resolve?domain=test_classifyv1_bot";
const NEW_URL = "https://arden-strychnic-pleasingly.ngrok-free.dev/profile";

function App() {
  return (
    <main className="link-test">
      <h1>Проверка ссылок</h1>
      <div className="link-card">
        <a className="link-button" href={OLD_URL}>
          Было — открыть Telegram
        </a>
        <code>{OLD_URL}</code>
      </div>
      <div className="link-card">
        <a className="link-button" href={NEW_URL}>
          Сейчас — открыть профиль
        </a>
        <code>{NEW_URL}</code>
      </div>
    </main>
  );
}

export default App;
