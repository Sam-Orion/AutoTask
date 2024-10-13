from uagents import Agent

class TaskManagerAgent(Agent):
    def __init__(self, name):
        super().__init__(name=name)

    def handle_task(self, task_data):
        print(f"Handling task: {task_data['title']}")
