import os
from uagents.Agent import Agent, Context
from dotenv import load_dotenv


load_dotenv()


TASK_AGENT_ADDRESS = os.getenv('TASK_AGENT_ADDRESS')
TASK_AGENT_KEY = os.getenv('TASK_AGENT_KEY')


if not TASK_AGENT_ADDRESS or not TASK_AGENT_KEY:
    raise ValueError("TASK_AGENT_ADDRESS or TASK_AGENT_KEY is missing. Check your .env file.")


agent = Agent(
    TASK_AGENT_ADDRESS, 
    TASK_AGENT_KEY
)

tasks = []


@agent.on_event("new_task")
async def handle_new_task(ctx: Context, task: dict):
    tasks.append(task)
    print(f"Task added: {task['name']}")



@agent.on_event("task_reminder")
async def handle_task_reminder(ctx: Context, task_name: str):
    print(f"Reminder: Task {task_name} is due!")


async def send_task(ctx: Context, recipient: str, task: dict):
    await ctx.send_message(recipient, "new_task", task)


@agent.on_event("send_task_to_agent")
async def handle_task_sending(ctx: Context, recipient: str, task: dict):
    await send_task(ctx, recipient, task)
    print(f"Task sent to {recipient}")

if __name__ == "__main__":
    agent.run()
