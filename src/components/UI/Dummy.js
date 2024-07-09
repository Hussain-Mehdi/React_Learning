const changeContent = (index) => {
    setAciveIndex(index);
  };
  const reactInfo = [
    // Why React?
    [
      "Component-Based Architecture: Encourages reusable, modular code.",
      "Virtual DOM: Efficient updates and rendering.",
      "Large Ecosystem: Rich set of libraries and tools.",
      "Strong Community Support: Extensive resources and frequent updates.",
    ],
    // Core Features
    [
      "JSX: Syntax extension for JavaScript that allows HTML-like code.",
      "Components: Building blocks of React applications.",
      "State and Props: Mechanisms for managing data and communication.",
      "Lifecycle Methods: Hooks for managing component behavior at different stages.",
    ],
    // Related Resources
    [
      "Official React Documentation: https://reactjs.org/docs/getting-started.html",
      "React Router: https://reactrouter.com/",
      "Redux: https://redux.js.org/",
      "React Community GitHub: https://github.com/facebook/react",
    ],
  ];

  const index = 0;
  const [activeContentIndex, setAciveIndex] = useState(0);

  return (
    <div className="container">
      <header>
        <img src={logo} alt="" srcset="" />
        <div>
          <h1>React.js</h1>
          <p>i.e using react library for rendering UI</p>
        </div>
      </header>
      <div className="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : "button-style"}
            onClick={() => changeContent(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : "button-style"}
            onClick={() => changeContent(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : "button-style"}
            onClick={() => changeContent(2)}
          >
            Related Resources
          </button>
        </menu>
        <div className="tab-content">
          <ul>
            {reactInfo[activeContentIndex].map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );