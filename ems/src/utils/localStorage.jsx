const employees = [
  {
    id: "e1",
    name: "Anshuman",
    email: "e1@mail.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve incorrect password validation issue",
        date: "2026-04-20",
        assignedTo: "Anshuman",
        category: "Software",
        active: false, new: true, completed: false, failed: false
      },
      {
        title: "Update UI",
        description: "Improve dashboard layout",
        date: "2026-04-18",
        assignedTo: "Anshuman",
        category: "Design",
        active: false, new: false, completed: true, failed: false
      },
      {
        title: "API integration",
        description: "Connect frontend with backend APIs",
        date: "2026-04-17",
        assignedTo: "Anshuman",
        category: "Software",
        active: true, new: false, completed: false, failed: false
      }
    ]
  },
  {
    id: "e2",
    name: "Akash",
    email: "e2@mail.com",
    password: "123",
    tasks: [
      {
        title: "Write tests",
        description: "Unit testing for auth module",
        date: "2026-04-19",
        assignedTo: "Akash",
        category: "Software",
        active: false, new: true, completed: false, failed: false
      },
      {
        title: "Fix CSS",
        description: "Resolve mobile responsiveness issues",
        date: "2026-04-16",
        assignedTo: "Akash",
        category: "Design",
        active: false, new: false, completed: true, failed: false
      },
      {
        title: "Deploy app",
        description: "Deploy latest build to staging",
        date: "2026-04-15",
        assignedTo: "Akash",
        category: "Devops",
        active: false, new: false, completed: false, failed: true
      },
      {
        title: "Code review",
        description: "Review pull requests",
        date: "2026-04-14",
        assignedTo: "Akash",
        category: "Software",
        active: true, new: false, completed: false, failed: false
      }
    ]
  },
  {
    id: "e3",
    name: "Dhruv",
    email: "e3@mail.com",
    password: "123",
    tasks: [
      {
        title: "Database schema",
        description: "Design user schema",
        date: "2026-04-21",
        assignedTo: "Dhruv",
        category: "Database",
        active: false, new: true, completed: false, failed: false
      },
      {
        title: "Optimize queries",
        description: "Improve DB performance",
        date: "2026-04-19",
        assignedTo: "Dhruv",
        category: "Database",
        active: true, new: false, completed: false, failed: false
      },
      {
        title: "Backup setup",
        description: "Setup automated backups",
        date: "2026-04-17",
        assignedTo: "Dhruv",
        category: "Devops",
        active: false, new: false, completed: false, failed: false
      }
    ]
  },
  {
    id: "e4",
    name: "Aman",
    email: "e4@mail.com",
    password: "123",
    tasks: [
      {
        title: "Landing page",
        description: "Create homepage UI",
        date: "2026-04-20",
        assignedTo: "Aman",
        category: "Design",
        active: false, new: true, completed: false, failed: false
      },
      {
        title: "Bug fixes",
        description: "Fix reported UI bugs",
        date: "2026-04-18",
        assignedTo: "Aman",
        category: "Software",
        active: true, new: false, completed: false, failed: false
      },
      {
        title: "Accessibility",
        description: "Improve accessibility features",
        date: "2026-04-16",
        assignedTo: "Aman",
        category: "Design",
        active: false, new: false, completed: false, failed: false
      },
      {
        title: "Animation",
        description: "Add transitions to UI",
        date: "2026-04-15",
        assignedTo: "Aman",
        category: "Design",
        active: false, new: false, completed: false, failed: true
      }
    ]
  },
  {
    id: "e5",
    name: "Samyak",
    email: "e5@mail.com",
    password: "123",
    tasks: [
      {
        title: "Setup CI/CD",
        description: "Automate deployment pipeline",
        date: "2026-04-22",
        assignedTo: "Samyak",
        category: "Devops",
        active: false, new: false, completed: true, failed: false
      },
      {
        title: "Monitor logs",
        description: "Check server logs",
        date: "2026-04-20",
        assignedTo: "Samyak",
        category: "Devops",
        active: true, new: false, completed: false, failed: false
      },
      {
        title: "Security audit",
        description: "Check vulnerabilities",
        date: "2026-04-18",
        assignedTo: "Samyak",
        category: "Security",
        active: false, new: false, completed: false, failed: true
      }
    ]
  }
];

const admins = [
  { id: "a1",name: "Aashray", email: "a1@mail.com", password: "admin123" },
  { id: "a2",name: "Sandy", email: "a2@mail.com", password: "admin123" }
];

export function setLocalStorage(){
    if(!localStorage.getItem('employees')){
  localStorage.setItem('employees',JSON.stringify( employees))
  localStorage.setItem('admins',JSON.stringify(admins))
  }
}
export function getLocalStorage(){
  const employees=JSON.parse(localStorage.getItem('employees'));
  const admins=JSON.parse(localStorage.getItem('admins'));
  return {employees,admins};
}
/* id: "e1",
    name: "Anshuman",
    email: "e1@mail.com",
    password: "123",
    taskCounts: {
      active: 2,
      new: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve incorrect password validation issue",
        date: "2026-04-20",
        assignedTo: "Amit",
        category: "software",
        active: true,
        new: true,
        updated: false,
        failed: false
      },
      */
