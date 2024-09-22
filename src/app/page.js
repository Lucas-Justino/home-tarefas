import ButtonNewTask from "../components/ButtonNewTask";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TaskProvider from "../context/TaskContext";

export default function Home() {
  return (
    <TaskProvider>
      <div className="flex flex-col">
        <Header />
        <TaskList />
        <ButtonNewTask />
      </div>
    </TaskProvider>
  );
}
