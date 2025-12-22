const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        status: "Failed",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        detailedDescription:
          "Redesign the homepage layout, improve responsiveness, update hero section UI, and ensure cross-browser compatibility.",
        severity: "High",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        status: "Completed",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements",
        detailedDescription:
          "Conduct a detailed discussion with the client regarding feature scope, timelines, deliverables, and future enhancements.",
        severity: "Medium",
        taskDate: "2024-10-10",
        category: "Meeting",
      },
      {
        status: "In Progress",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve bugs reported in issue tracker",
        detailedDescription:
          "Identify, debug, and resolve UI and backend bugs reported by QA, ensuring no regression issues are introduced.",
        severity: "Low",
        taskDate: "2024-10-14",
        category: "Development",
      },
      {
        status: "Completed",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test the latest build for bugs",
        detailedDescription:
          "Perform functional and regression testing on the latest build and report issues with reproduction steps.",
        severity: "Medium",
        taskDate: "2024-10-08",
        category: "QA",
      },
      {
        status: "New",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare slides for upcoming client presentation",
        detailedDescription:
          "Create structured slides covering project overview, technical architecture, milestones, and roadmap.",
        severity: "High",
        taskDate: "2024-10-13",
        category: "Presentation",
      },
      {
        status: "In Progress",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review the codebase for optimization",
        detailedDescription:
          "Review PRs, suggest performance improvements, enforce coding standards, and reduce code smells.",
        severity: "Low",
        taskDate: "2024-10-12",
        category: "Development",
      },
    ],
  },

  {
    id: 2,
    firstName: "Sneha",
    email: "e2@e2.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        status: "In Progress",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize queries for better performance",
        detailedDescription:
          "Analyze slow-running queries, add indexing, refactor joins, and improve database response time.",
        severity: "High",
        taskDate: "2024-10-11",
        category: "Database",
      },
      {
        status: "Failed",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Design new feature",
        taskDescription: "Create mockups for the new feature",
        detailedDescription:
          "Create low-fidelity and high-fidelity UI mockups, validate UX flow, and share designs with stakeholders.",
        severity: "Medium",
        taskDate: "2024-10-09",
        category: "Design",
      },
    ],
  },

  {
    id: 3,
    firstName: "Ravi",
    email: "e3@e3.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        status: "New",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare slides for upcoming client presentation",
        detailedDescription:
          "Create structured slides covering project overview, technical architecture, milestones, and roadmap.",
        severity: "Medium",
        taskDate: "2024-10-13",
        category: "Presentation",
      },
      {
        status: "In Progress",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review the codebase for optimization",
        detailedDescription:
          "Review PRs, suggest performance improvements, enforce coding standards, and reduce code smells.",
        severity: "Low",
        taskDate: "2024-10-12",
        category: "Development",
      },
      {
        status: "Completed",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test the latest build for bugs",
        detailedDescription:
          "Perform functional and regression testing on the latest build and report issues with reproduction steps.",
        severity: "Medium",
        taskDate: "2024-10-08",
        category: "QA",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "a@a.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};
