import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";

function App() {
    return (
        <Container className="my-4">
            <Stack direction="horizontal" gap="2" className="mb-4">
                <h1 className="me-auto">Budget App</h1>
                <Button variant="primary">Add Budget</Button>
                <Button variant="outline-primary">Add Expenses</Button>
            </Stack>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill,minmax(350px, 1fr))",
                    gap: "1rem",
                    alignItems: "flex-start",
                }}
            >
                <BudgetCard
                    name="Entertainment"
                    gray
                    amount={400}
                    max={1000}
                ></BudgetCard>
            </div>
        </Container>
    );
}

export default App;
