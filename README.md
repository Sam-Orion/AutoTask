# AutoTask
Automate tasks, prioritize deadlines and boost productivity effortlessly with AutoTask

## Inspiration

In today's fast-paced world, managing tasks efficiently can be overwhelming, especially when balancing multiple priorities. We wanted to build something that automates this process, minimizes stress, and helps users stay productive. Inspired by personal assistants and AI-driven systems, we envisioned a tool that could handle the tedious task of scheduling and reminders while adapting to real-time changes in a user's schedule.


## What it does

AutoTask is a Smart Task Manager Agent (STMA) that automatically prioritizes tasks, sets reminders, and dynamically reschedules based on user availability. It integrates with your calendar, helps balance workloads, and provides proactive suggestions to meet deadlines without stress. AutoTask adapts to user preferences and offers seamless task management, whether for personal use or within a team.


## How we built it

We built AutoTask using Python for the backend, leveraging Fetch.ai's multi-agent framework for task automation and scheduling. The front end is designed using React to provide a simple and intuitive user interface. We used scheduling algorithms and basic machine learning models to optimize task prioritization, reminders, and delegation.


## Challenges we ran into

One of the key challenges was designing an adaptive scheduling system that could dynamically adjust to changes in real-time without overwhelming the user. Integrating multiple APIs for calendar sync and task inputs was another hurdle, as was ensuring the agent's decision-making logic was efficient and scalable.


## Accomplishments that we're proud of

We're proud of creating a tool that can make task management more accessible and more intuitive. The dynamic scheduling feature and successful integration of multi-agent communication for task delegation in team environments are highlights of the project. Our user interface is sleek and user-friendly and enhances the overall experience.


## What we learned

We learned much about multi-agent systems and the challenges of building real-time, adaptive systems that integrate with tools like Google Calendar. We also gained valuable experience balancing backend logic with front-end user experience to create a seamless product.


## What's next for AutoTask

Next, we plan to enhance AutoTask's AI-driven suggestions, improve integration with more productivity tools, and expand its delegation capabilities for larger teams. We also aim to implement advanced analytics so users can track their productivity and receive personalized recommendations for improvement.


# Smart Task Manager Agent (STMA) with Fetch.AI Microagents

This project integrates Fetch.AI microagents into a task management system for autonomous task handling and decentralized communication.

## Setup Instructions

### Step 1: Install Dependencies
Make sure you have installed the required dependencies:

```bash
pip install -r requirements.txt
