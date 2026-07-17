import Button from "./components/common/Button";
import Container from "./components/layout/Container";

function App() {
  return (
    <Container>
      <div className="flex min-h-screen flex-col items-center justify-center gap-5">
        <h1 className="text-5xl font-bold text-blue-600">
          CareerPilot AI
        </h1>

        <p className="text-gray-600">
          Your AI Career Coach
        </p>

        <Button>
          Get Started
        </Button>
      </div>
    </Container>
  );
}

export default App;