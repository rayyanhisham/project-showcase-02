export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  tools: string[];
  specifications?: string[];
  images: string[];
  links?: {
    github?: string;
    video?: string;
    documentation?: string;
  };
}

export const projects: Project[] = [
  {
    id: "robotic-arm",
    title: "6-DOF Robotic Arm",
    description: "Designed and manufactured a 6-degree-of-freedom robotic arm for precision assembly tasks.",
    fullDescription: "A fully functional 6-DOF robotic arm designed for precision assembly applications. The project involved complete mechanical design, stress analysis, motor selection, and control system implementation. The arm achieves ±0.1mm repeatability and can handle payloads up to 2kg.",
    tags: ["Robotics", "CAD", "Manufacturing"],
    tools: ["SolidWorks", "MATLAB", "Arduino", "3D Printing"],
    specifications: [
      "Payload capacity: 2kg",
      "Reach: 650mm",
      "Repeatability: ±0.1mm",
      "6 stepper motors with encoders",
    ],
    images: ["/placeholder.svg"],
  },
  {
    id: "heat-exchanger",
    title: "Compact Heat Exchanger",
    description: "Optimized shell-and-tube heat exchanger design for improved thermal efficiency.",
    fullDescription: "Redesigned a shell-and-tube heat exchanger to achieve 15% improvement in thermal efficiency while reducing material costs by 20%. Used CFD analysis to optimize baffle spacing and tube arrangement.",
    tags: ["Thermal", "CFD", "Design"],
    tools: ["ANSYS Fluent", "SolidWorks", "MATLAB"],
    specifications: [
      "Heat transfer rate: 50kW",
      "Effectiveness: 0.85",
      "Pressure drop: <10kPa",
      "Material: Stainless Steel 316",
    ],
    images: ["/placeholder.svg"],
  },
  {
    id: "ev-chassis",
    title: "Electric Vehicle Chassis",
    description: "Lightweight chassis design for Formula SAE Electric competition vehicle.",
    fullDescription: "Led the structural design of a lightweight tubular steel chassis for our university's Formula SAE Electric vehicle. Conducted FEA analysis for torsional rigidity and impact scenarios, achieving 30% weight reduction from previous design.",
    tags: ["Automotive", "FEA", "Competition"],
    tools: ["CATIA", "ANSYS Structural", "HyperMesh"],
    specifications: [
      "Weight: 28kg",
      "Torsional rigidity: 2800 Nm/deg",
      "Material: 4130 Chromoly Steel",
      "Safety factor: 2.5",
    ],
    images: ["/placeholder.svg"],
  },
  {
    id: "cnc-router",
    title: "Desktop CNC Router",
    description: "Custom-built 3-axis CNC router for prototyping and small-batch production.",
    fullDescription: "Designed and built a desktop CNC router from scratch, including frame design, linear motion system selection, spindle integration, and G-code controller setup. The machine can cut aluminum, wood, and plastics.",
    tags: ["CNC", "Manufacturing", "DIY"],
    tools: ["Fusion 360", "LinuxCNC", "Mach3"],
    specifications: [
      "Work envelope: 400x300x100mm",
      "Spindle: 500W brushless",
      "Accuracy: ±0.05mm",
      "Feed rate: up to 2000mm/min",
    ],
    images: ["/placeholder.svg"],
  },
  {
    id: "pneumatic-gripper",
    title: "Adaptive Pneumatic Gripper",
    description: "Soft robotics gripper for handling delicate objects with varying geometries.",
    fullDescription: "Developed an adaptive pneumatic gripper using soft robotics principles. The gripper uses silicone-based fingers that conform to object shapes, enabling safe handling of fragile items like fruits and electronics.",
    tags: ["Soft Robotics", "Pneumatics", "3D Printing"],
    tools: ["SolidWorks", "Silicone Molding", "Arduino"],
    specifications: [
      "Grip force: 0.5-10N adjustable",
      "Object size range: 20-80mm",
      "Response time: <200ms",
      "Actuation pressure: 0.2-0.6 bar",
    ],
    images: ["/placeholder.svg"],
  },
  {
    id: "wind-turbine",
    title: "Small Wind Turbine",
    description: "Designed a small-scale horizontal axis wind turbine for residential power generation.",
    fullDescription: "Complete aerodynamic design and structural analysis of a small horizontal axis wind turbine. Optimized blade geometry using BEM theory and validated with CFD simulations. The turbine is designed for urban environments with turbulent wind conditions.",
    tags: ["Renewable Energy", "Aerodynamics", "CFD"],
    tools: ["XFOIL", "QBlade", "ANSYS CFX", "SolidWorks"],
    specifications: [
      "Rated power: 1kW at 12m/s",
      "Rotor diameter: 2.5m",
      "Cut-in speed: 3m/s",
      "Design life: 20 years",
    ],
    images: ["/placeholder.svg"],
  },
  {
    id: "prosthetic-hand",
    title: "3D Printed Prosthetic Hand",
    description: "Low-cost, functional prosthetic hand using body-powered actuation.",
    fullDescription: "Designed a low-cost prosthetic hand that can be manufactured using consumer-grade 3D printers. The hand uses cable-driven actuation powered by wrist movement, providing basic gripping functionality at a fraction of traditional prosthetic costs.",
    tags: ["Biomedical", "3D Printing", "Humanitarian"],
    tools: ["Fusion 360", "PrusaSlicer", "Flexible Filaments"],
    specifications: [
      "Manufacturing cost: <$50",
      "Weight: 180g",
      "Grip strength: 5N",
      "Print time: 18 hours",
    ],
    images: ["/placeholder.svg"],
  },
  {
    id: "suspension-system",
    title: "Baja SAE Suspension",
    description: "Double-wishbone suspension system designed for off-road racing vehicle.",
    fullDescription: "Designed the front and rear suspension systems for our Baja SAE competition vehicle. Used Adams Car for kinematics optimization and ANSYS for stress analysis. The system provides 10 inches of travel with adjustable damping.",
    tags: ["Automotive", "Dynamics", "Competition"],
    tools: ["Adams Car", "ANSYS", "SolidWorks"],
    specifications: [
      "Travel: 10 inches",
      "Spring rate: 150 lb/in",
      "Adjustable compression/rebound",
      "Weight: 12kg per corner",
    ],
    images: ["/placeholder.svg"],
  },
];
